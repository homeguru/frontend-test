import KoaRouter from 'koa-router';
import debugInit from 'debug'
import axios from 'axios';
import moment from 'moment'
import crypto from 'crypto'

const debug = debugInit('kgg:routes:api');

export default () => {
    debug('Api route is being initialized');

    const PUBLIC_KEY = process.env.MARVEL_PUBLICKEY || '';
    const PRIVATE_KEY = process.env.MARVEL_PRIVATEKEY || '';
    const API_BASE_URL = process.env.MARVEL_BASEURL || '';

    debug('Checking for environment required parameters');

    if (PUBLIC_KEY === '') {
        throw 'Variable MARVEL_PUBLICKEY not set into the environment'
    }

    if (PRIVATE_KEY === '') {
        throw 'Variable MARVEL_PRIVATEKEY not set into the environment'
    }

    if (API_BASE_URL === '') {
        throw 'Variable MARVEL_BASEURL not set into the environment'
    }

    debug('Environment is fine now we continue to setup the api router');

    const instance = axios.create({
        baseURL: API_BASE_URL,
    })

    debug('Creating our interceptors to append automatically authentication data');
    instance.interceptors.request.use((req) => {
        const currentTimestamp = moment().unix();
        const hashingAlgorithm = crypto.createHash('md5');
        hashingAlgorithm.update(currentTimestamp + PRIVATE_KEY + PUBLIC_KEY);
        const hash = hashingAlgorithm.digest().toString('hex');

        req.params = {
            ts: currentTimestamp,
            apikey: PUBLIC_KEY,
            hash,
            ...req.params,
        };

        return req;
    });

    const router = new KoaRouter({
        prefix: '/api'
    });

    router.get('/characters', async (ctx) => {
        if (await ctx.cashed()) return;
        try {
            const response = await instance.get('/characters', {
                params: {
                    limit: 10,
                    ...ctx.request.query
                }
            });
            ctx.body = response.data;
        } catch (e) {
            ctx.body = e;
        }
    })

    router.get('/comics/:charId', async (ctx) => {
        try {
            if (await ctx.cashed()) return;

            delete ctx.params.charId;

            const response = await instance.get(`/characters/${ctx.params.charId}/comics`, {
                params: {
                    limit: 10,
                    ...ctx.request.query
                }
            });
            ctx.body = response.data;
        } catch (e) {
            ctx.body = e;
        }
    })

    debug('Api route initialized');
    return router;
}
