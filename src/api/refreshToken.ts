import { ApiRequest, ApiResponse, http } from './http';
import { AxiosResponse } from 'axios';
import { Urls } from './urls';

export type RefreshTokenResponse = ApiResponse<{
  accessToken: string;
  refreshToken: string;
}>;

export type RefreshTokenRequest = ApiRequest<string, RefreshTokenResponse>;

export const refreshToken: RefreshTokenRequest = async (token) => {
  const response = await http.post<RefreshTokenResponse, AxiosResponse<RefreshTokenResponse>>(
    Urls.RefreshToken, {token}
  );
  return response.data;
};
