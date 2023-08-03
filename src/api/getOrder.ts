import { ApiRequest, ApiResponse, http } from './http';
import { OrderModel } from '../types';
import { AxiosResponse } from 'axios';
import { Urls } from './urls';

export type GetOrderResponse = ApiResponse<{ orders: OrderModel[] }>;

export type GetOrderRequest = ApiRequest<number, GetOrderResponse>;

export const getOrder: GetOrderRequest = async (num) => {
    const response = await http.get<GetOrderResponse, AxiosResponse<GetOrderResponse>>(
        `${Urls.GetOrder}/${num}`
    );
    return response.data;
};
