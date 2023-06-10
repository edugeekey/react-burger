import { AxiosResponse } from 'axios';
import { ApiResponse, ApiRequest, http } from './http';
import { Urls } from './urls';
import { Order } from 'types';

export type SubmitOrderResponse = ApiResponse<{
  name: string;
  order: Order;
}>;

export type SubmitOrderRequest = ApiRequest<string[], SubmitOrderResponse>;

export const submitOrder: SubmitOrderRequest = async (ingredients: string[]) => {
  const response = await http.post<SubmitOrderResponse, AxiosResponse<SubmitOrderResponse>>(
    Urls.submitOrder, { ingredients }
  );
  return response.data;
}
