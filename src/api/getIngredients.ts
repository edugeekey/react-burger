import { AxiosResponse } from 'axios';
import { Ingredient } from '../types';
import { ApiRequest, ApiResponse, http } from './http';
import { Urls } from './urls';

export type GetIngredientsResponse = ApiResponse<{ data: Ingredient[] }>;

export type GetIngredientsRequest = ApiRequest<void, GetIngredientsResponse>;

export const getIngredients: GetIngredientsRequest = async () => {
  const response = await http.get<GetIngredientsResponse, AxiosResponse<GetIngredientsResponse>>(
    Urls.getIngredients
  );
  return response.data;
}
