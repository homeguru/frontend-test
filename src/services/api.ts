import axios from 'axios';

const baseUrl = "https://gateway.marvel.com:443/"

const api = axios.create({
  baseURL: baseUrl,
});

export default api
