import { ApiRequest, ApiResponse, http } from './http';
import { User } from 'types';
import { AxiosResponse } from 'axios';
import { Urls } from './urls';

export type LoginResponse = ApiResponse<{
  user: User;
  accessToken: string;
  refreshToken: string;
}>;

export type LoginProps = {
  email: string;
  password: string;
};

export type LoginRequest = ApiRequest<LoginProps, LoginResponse>;

export const login: LoginRequest = async (data) => {
  const response = await http.post<LoginResponse, AxiosResponse<LoginResponse>>(
    Urls.Login, data
  );
  return response.data;
};
