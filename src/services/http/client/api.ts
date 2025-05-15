'use client';

import axios from 'axios';

const getCurrentToken = async (url: string) => {
  return '';
};

const api = axios.create({
  baseURL: '/api',
});

// request header
api.interceptors.request.use(async (config: any) => {
  const token = await getCurrentToken(config.url);

  if (token) {
    config.headers.Authorization = token;
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('>>>> INTERCEPTOR: ', {
      url: config.baseURL + config.url,
      params: JSON.stringify(config.data),
      token: config.headers.Authorization,
      method: config.method,
    });
  }
  return config;
});

// response parse
api.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (err: any) => {
    return err;
  },
);

export default api;
