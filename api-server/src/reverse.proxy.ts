// import http from 'http';
// import https from 'https'
import KoaRouter from 'koa-router';
import {ReverseProxy} from "./reverse.proxy.interface";
import debugInit from 'debug'

const debug = debugInit('kgg:reverse-proxy');

export default (Proxies: ReverseProxy[]) => {
    const router = new KoaRouter();

    Proxies.forEach(proxy => {
        router.all(proxy.Route, async (ctx) => {
            debug(`[ Reverse Proxy ] Redirecting call to server: ${proxy.TargetServer}`);
            ctx.body = {
                ok: true
            };
        })
    })

    return router;
}
