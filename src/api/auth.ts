import { axiosInstance } from './axiosInstance';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const loginApi = async (payload: LoginPayload) => {
  const response = await axiosInstance.post<LoginResponse>("/auth/login", payload);
  return response.data;
};
