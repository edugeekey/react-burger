import { ApiRequest, ApiResponse, http } from './http';
import { User } from 'types';
import { AxiosResponse } from 'axios';
import { Urls } from './urls';

export type GetUserResponse = ApiResponse<{ user: User }>;

export type GetUserRequest = ApiRequest<void, GetUserResponse>;

export const getUser: GetUserRequest = async () => {
  const response = await http.get<GetUserResponse, AxiosResponse<GetUserResponse>>(
    Urls.GetUser
  );
  return response.data;
};
