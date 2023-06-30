import { ApiRequest, ApiResponse, http } from './http';
import { User } from 'types';
import { AxiosResponse } from 'axios';
import { Urls } from './urls';

export type EditUserResponse = ApiResponse<{ user: User }>;

export type EditUserProps = {
  name: string;
  email: string;
  password: string;
};

export type EditUserRequest = ApiRequest<EditUserProps, EditUserResponse>;

export const editUser: EditUserRequest = async (data: EditUserProps) => {
  const response = await http.patch<EditUserResponse, AxiosResponse<EditUserResponse>>(
    Urls.PatchUser, data
  );
  return response.data;
};
