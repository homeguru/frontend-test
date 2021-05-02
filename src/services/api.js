import axios from "axios";
import md5 from "crypto-js/md5";

  export const api = axios.create({
    baseURL: "http://gateway.marvel.com/"
  });

  
  api.interceptors.request.use(async config => {
      var ts = new Date().getTime();
      var hash = md5(ts+"4207a8670e2e5c0d3337484d91ebf27788404a0c"+"51536c586741560cf0331366de2117cb");
      config.url = config.url+"ts="+ts+"&apikey=51536c586741560cf0331366de2117cb&hash="+hash;
      return config;
  });
  
  export const GetApi = (URL) =>{
    const defaultOptions = {
      mode: "no-cors"
    };
    return api.get(URL, defaultOptions); 
  };

