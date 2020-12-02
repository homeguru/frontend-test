import axios from 'axios';

const dev = process.env.NODE_ENV !== 'production';

const axiosObject = axios.create({
    baseURL: dev ? 'https://localhost:3001/api/' : 'api/'
})

export default axiosObject;
