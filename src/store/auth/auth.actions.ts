import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  login,
  LoginProps,
  LoginResponse, logout, LogoutResponse,
  register,
  RegisterProps, RegisterResponse
} from 'api';
import { typeFn } from 'store/order/const';
import { getRefreshToken, setTokens } from 'utils/localStorageHelper';
import { getUser, GetUserResponse } from 'api/getUser';
import { editUser, EditUserProps, EditUserResponse } from 'api/editUser';

export const fetchLogin = createAsyncThunk<LoginResponse, LoginProps>(typeFn('/login'),
  async (props) => {
  const response = await login(props);
  setTokens(response);
  return response;
});

export const fetchLogout = createAsyncThunk<LogoutResponse, void>(typeFn('/logout'),
  async () => {
    const response = await logout(getRefreshToken());
    setTokens();
    return response;
  });

export const fetchRegister = createAsyncThunk<RegisterResponse, RegisterProps>(typeFn('/register'),
  async (props) => {
  const response = await register(props);
  setTokens(response);
  return response;
});

export const fetchUser = createAsyncThunk<GetUserResponse, void>(typeFn('/fetchUser'), getUser);

export const fetchEditUser = createAsyncThunk<EditUserResponse, EditUserProps>(typeFn('/fetchEditUser'), editUser);
