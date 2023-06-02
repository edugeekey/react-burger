import axios, { AxiosResponse } from 'axios'
import { ApiResponse } from './types'

export const http = axios.create({
  baseURL: 'https://norma.nomoreparties.space/api',
  params: {},
})

http.interceptors.response.use(function (response: AxiosResponse<ApiResponse<unknown>>) {
  if (!response.data.success) {
    throw new Error('Request was not complete successfully!')
  }
  return response
})
