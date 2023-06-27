import { ApiRequest, ApiResponse, http } from './http';
import { AxiosResponse } from 'axios';
import { Urls } from './urls';
import { User } from 'types';

export type RegisterResponse = ApiResponse<{
  user: User;
  accessToken: string;
  refreshToken: string;
}>;

export type RegisterProps = {
  email: string;
  password: string;
  name: string;
};

export type RegisterRequest = ApiRequest<RegisterProps, RegisterResponse>;

export const register: RegisterRequest = async (data) => {
  const response = await http.post<RegisterResponse, AxiosResponse<RegisterResponse>>(
    Urls.Register, data
  );
  return response.data;
};
