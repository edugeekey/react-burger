import { AxiosResponse } from 'axios';
import { ApiResponse, ApiRequest, http } from './http';
import { Urls } from './urls';

export type SubmitOrderResponse = ApiResponse<{
  name: string;
  order: { number: number }
}>;

export type SubmitOrderRequest = ApiRequest<string[], SubmitOrderResponse>;

export const submitOrder: SubmitOrderRequest = async (ingredients: string[]) => {
  const response = await http.post<SubmitOrderResponse, AxiosResponse<SubmitOrderResponse>>(
    Urls.submitOrder, { ingredients }
  );
  return response.data;
}
