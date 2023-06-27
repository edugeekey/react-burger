import { ApiRequest, ApiResponse, http } from './http';
import { AxiosResponse } from 'axios';
import { Urls } from './urls';

export type SendResetPasswordCodeResponse = ApiResponse<{
  message: string;
}>;

export type SendResetPasswordCodeRequest = ApiRequest<string, SendResetPasswordCodeResponse>;

export const sendResetPasswordCode: SendResetPasswordCodeRequest = async (email) => {
  const response = await http.post<SendResetPasswordCodeResponse, AxiosResponse<SendResetPasswordCodeResponse>>(
    Urls.SendResetPasswordCode, {email}
  );
  return response.data;
};
