'use client';

import type { InternalAxiosRequestConfig } from 'axios';
import axios, { AxiosError, AxiosResponse } from 'axios';

const getCurrentToken = async (url: string) => {
  console.log('>>>> URL: ', url);
  return '';
};

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
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

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  },
);

export default api;
