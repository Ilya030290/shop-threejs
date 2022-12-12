import {
  LoginPayload,
  RegisterPayload,
  AuthResponseDataType, LogOutResponse
} from '../types/types';
import { axiosInstance } from '../config/axiosInstance';

export const authApi = {
  register: (registerPayload: RegisterPayload) => {
    return axiosInstance.post<unknown, AuthResponseDataType>('/signup', registerPayload);
  },
  login: (loginPayload: LoginPayload) => {
    return axiosInstance.post<unknown, AuthResponseDataType>('/login', loginPayload);
  },
  logout: () => {
    return axiosInstance.delete<unknown, LogOutResponse>('/logout');
  },
};
