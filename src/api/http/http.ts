import axios, { AxiosError, AxiosResponse } from 'axios';
import { ApiErrorResponse, ApiResponse } from './types';
import { getAccessToken, getRefreshToken, setTokens } from 'utils/localStorageHelper';
import { refreshToken } from 'api/refreshToken';

export const http = axios.create({
  baseURL: 'https://norma.nomoreparties.space/api',
  params: {},
});

http.interceptors.request.use(
  async config => {
    const accessToken = getAccessToken();
    config.headers = {
      ...config.headers,
      'authorization': accessToken,
    };
    return config;
  },
  error => {
    Promise.reject(error);
  });


http.interceptors.response.use(
  function (response: AxiosResponse<ApiResponse<unknown>>) {
  if (!response.data.success) {
    throw new Error('Request was not complete successfully!');
  }
  return response;
},
  async function(error: AxiosError<ApiErrorResponse>) {
    if (error.response.status === 403 && error.response.data.message === 'jwt expired') {
      const originalRequest = error.config;
      const currRefreshToken = getRefreshToken();
      if (currRefreshToken) {
        const refreshData = await refreshToken(currRefreshToken);
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        setTokens(refreshData);
        axios.defaults.headers.common['authorization'] = refreshData.accessToken;
        return http(originalRequest);
      }
    }
    return Promise.reject(error);
  });
