import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

customAxios.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      config.headers.Authorization = accessToken;
      config.headers.Refresh = refreshToken;
    } else {
      config.headers.Authorization = null;
      config.headers.Refresh = null;
    }

    return config;
  },
  error => Promise.reject(error),
);

customAxios.interceptors.response.use(
  res => {
    return res;
  },
  error => Promise.reject(error),
);

export default customAxios;
