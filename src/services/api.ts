import axios from 'axios';

const baseUrl = "https://gateway.marvel.com:443/"

const api = axios.create({
  baseURL: baseUrl,
});

// export async function sendRequest(type: any, url: any, params: any) {
//   try {
//       var response
//       if(type === 'GET')
//           response = await api.get(baseUrl + url, params)
//       else if(type === 'POST')
//           response = await api.post(baseUrl + url, params)
//       else if(type === 'PATCH')
//           response = await api.patch(baseUrl + url, params)
//       else if(type === 'PUT')
//           response = await api.put(baseUrl + url, params)

//       return response
//   }
//   catch(error) {
//       console.log(error)
//       return { status: error.response.status, data: error.response.data }
//   }
// }

// api.interceptors.request.use(async config => {
//   config.headers = {
//   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJhMjQ1ZGE1OS1hODE0LTQ3YTktYTQ0Ny04YjRjMzhkNDI2OTciLCJpYXQiOjE2MDgyMjUzOTUsImV4cCI6MTYwODMxMTc5NX0.tpoCww2BgK0-4z5QTCUzZx4IQpeNaIxKlWwCaSatKhI`,
//     "ic-Token": "IC299146c29ebd6fe6fe97d593eb",
//     "Content-Type": "multipart/form-data",
//   }
//   return config;
// });

export default api
