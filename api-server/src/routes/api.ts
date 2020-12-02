import KoaRouter from 'koa-router';
import debugInit from 'debug'

const debug = debugInit('kgg:routes:api');

export default () => {
    debug('Api route is being initialized');
    const router = new KoaRouter({
        prefix: '/api'
    });

    router.get('/character', async (ctx) => {
        ctx.body = {

        };
    })

    debug('Api route initialized');
    return router;
}
