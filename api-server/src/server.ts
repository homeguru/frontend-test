// Node Stuff
import http2 from 'http2';
import http from 'http';
import {EventEmitter} from 'events';
import debugInit from 'debug';
import pem from 'pem';
import fs from 'fs';
import crypto from 'crypto';

// KOA Server
import Koa from 'koa';
import Router from 'koa-router';
import bodyparser from 'koa-bodyparser';
import compress from 'koa-compress';
import convert from 'koa-convert';
import cors from 'koa-cors';
import logger from 'koa-logger';

// Cache
import LRU from 'lru-cache'
import koaCash from 'koa-cash'

// interfaces
import {ErrorLevels} from "./errorLevels";
import {Error} from "./error";
import {Certificate} from "./certificate";
import {Config} from "./config.interface";
import ReverseProxy from './reverse.proxy';
import api from "./routes/api";

export default (ServerConfig: Config) => {
    const environment = process.env.NODE_ENV || 'development';
    const developmentServer = environment === 'development' || environment === 'local';

    const debug = debugInit('kgg:server');
    const debugCache = debugInit('kgg:server:cache');
    const debugRouter = debugInit('kgg:server:router');

    const ServerEvents = new EventEmitter();
    let httpServer: http.Server;
    let http2Server: http2.Http2SecureServer;

    const emitError = (err: Error) => ServerEvents.emit('server-error', err);

    ServerEvents.on('shutdown', () => {
        debug('Server is shutting down');
    });

    ServerEvents.on('server-ready', (port: number, secure: boolean) => {
        const server = secure ? 'HTTP/2' : 'HTTP';
        debug(`${server} server initialized properly into port ${port}`);
    });

    ServerEvents.on('instance-ready', () => {
        httpServer.listen(ServerConfig.Ports.HTTP, () => ServerEvents.emit('server-ready', ServerConfig.Ports.HTTP, false));
        http2Server.listen(ServerConfig.Ports.HTTPS, () => ServerEvents.emit('server-ready', ServerConfig.Ports.HTTPS, true));
    })

    ServerEvents.on('cert-ready', (cert: Certificate) => {
        try {
            const application = new Koa();
            const defaultRouter = new Router();
            const cacheStorage = new LRU({
                maxAge: 300000, // 300s
                max: 32
            });

            // logger
            application.use(async (ctx, next) => {
                await next();
                const rt = ctx.response.get('X-Response-Time');
                debugRouter(`${ctx.method} ${ctx.url} - ${rt}`);
            });

            // x-response-time
            application.use(async (ctx, next) => {
                const start = Date.now();
                await next();
                const ms = Date.now() - start;
                ctx.set('X-Response-Time', `${ms}ms`);
            });

            application.use(async (ctx, next) => {
                ctx.res.statusCode = 200;
                await next();
            });

            application.use(compress({threshold: 2048}));
            application.use(convert(cors()));
            application.use(bodyparser());
            application.use(convert(logger()));

            application.use(koaCash({
                async get(key: string, maxAge: number): Promise<unknown | undefined> {
                    debugCache('Fetching item:', key, 'limit age is:', maxAge);
                    const cacheItem = await cacheStorage.get(key);

                    debugCache(cacheItem ? 'Item found' : 'Item not found');

                    return cacheItem;
                },
                async set(key: string, value: unknown, maxAge: number): Promise<void> {
                    debugCache('Caching item:', key, 'limit age is:', maxAge);
                    cacheStorage.set(key, value, maxAge);
                    return;
                },
                hash(ctx): string {
                    const hash = crypto.createHash('sha1');
                    hash.update(`${ctx.request.url}|${ctx.request.querystring}`);
                    return `ROUTER-CACHE-${hash.digest('hex')};`;
                }
            }));

            application.use(ReverseProxy(ServerConfig.Proxies).routes());

            application.use(api().routes());

            defaultRouter.all('(.*)', (ctx) => {
                ctx.body = '404 Not Found'
            });

            application.use(defaultRouter.routes());

            httpServer = http.createServer({}, application.callback());
            http2Server = http2.createSecureServer({
                cert: cert.crt,
                key: cert.key
            }, application.callback());

            ServerEvents.emit('instance-ready');
        } catch (e) {
            emitError({
                Message: e,
                Level: ErrorLevels.CRITICAL
            });
        }
    })

    ServerEvents.on('server-error', (e: Error) => {
        ServerEvents.emit('send-alert', e);

        switch (e.Level) {
            case ErrorLevels.CRITICAL:
                console.error(e.Message);
                ServerEvents.emit('shutdown');
                break;
            default:
        }
    });

    if (developmentServer) {
        pem.createCertificate({ days: 365, selfSigned: true }, ((error, result) => {
            if (error) {
                emitError({
                    Message: error,
                    Level: ErrorLevels.CRITICAL
                });
            }

            ServerEvents.emit('cert-ready', {
                crt: result.certificate,
                key: result.clientKey
            });
        }))
    } else {
        if (!fs.existsSync(ServerConfig.Cert.Key)) {
            emitError({
                Message: 'Cert Key does not exist',
                Level: ErrorLevels.CRITICAL
            });
        }

        if (!fs.existsSync(ServerConfig.Cert.Crt)) {
            emitError({
                Message: 'Cert Key does not exist',
                Level: ErrorLevels.CRITICAL
            });
        }

        ServerEvents.emit('cert-ready', {
            crt: fs.readFileSync(ServerConfig.Cert.Crt),
            key: fs.readFileSync(ServerConfig.Cert.Crt)
        });
    }
}
