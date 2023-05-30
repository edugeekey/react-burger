import axios, { AxiosResponse } from 'axios';
import { Urls } from './urls';
import { Ingredient } from '../types';

type GetIngredientsResponse = {
  success: boolean;
  data: Ingredient[];
}

export async function getIngredients(): Promise<GetIngredientsResponse> {
  const response = await axios.get<GetIngredientsResponse, AxiosResponse<GetIngredientsResponse>>(Urls.getIngredients);
  return response.data;
}
