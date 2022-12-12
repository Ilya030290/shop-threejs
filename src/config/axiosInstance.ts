import axios, { AxiosError, AxiosResponse } from 'axios';

import { CommonErrorResponseType } from '../types/types';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_STRIPE_SERVER_BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<unknown>) => response.data,
  (error: AxiosError<CommonErrorResponseType>) => {
    if (error.response) {
        throw new Error(Object.values(error.response.data.errors).find(err => err.length !== 0));
    }
  }
);

export { axiosInstance };
