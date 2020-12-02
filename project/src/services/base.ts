import axios from 'axios';

const dev = process.env.NODE_ENV !== 'production';

const axiosObject = axios.create({
    baseURL: dev ? 'http://localhost:3001/api/' : 'api/'
})

axiosObject.interceptors.request.use(req => {
    req.headers['Access-Control-Allow-Origin'] = '*';
    req.headers['Access-Control-Allow-Headers'] = 'Authorization';
    req.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, PATCH, DELETE';

    return req;
})

export default axiosObject;
