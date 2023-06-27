import { ApiRequest, ApiResponse, http } from './http';
import { AxiosResponse } from 'axios';
import { Urls } from './urls';

export type LogoutResponse = ApiResponse<{
  message: string;
}>;

export type LogoutRequest = ApiRequest<string, LogoutResponse>;

export const logout: LogoutRequest = async (token) => {
  const response = await http.post<LogoutResponse, AxiosResponse<LogoutResponse>>(
    Urls.LogOut, {token}
  );
  return response.data;
};
