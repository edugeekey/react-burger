import { ApiRequest, ApiResponse, http } from './http';
import { AxiosResponse } from 'axios';
import { Urls } from './urls';

export type ResetPasswordResponse = ApiResponse<{
  message: string;
}>;

export type ResetPasswordProps = {
  password: string;
  token: string;
};

export type ResetPasswordRequest = ApiRequest<ResetPasswordProps, ResetPasswordResponse>;

export const resetPassword: ResetPasswordRequest = async (data) => {
  const response = await http.post<ResetPasswordResponse, AxiosResponse<ResetPasswordResponse>>(
    Urls.ResetPassword, data
  );
  return response.data;
};
