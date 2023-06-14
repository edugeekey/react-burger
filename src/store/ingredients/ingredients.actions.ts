import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredients, GetIngredientsResponse } from 'api';
import { typeFn } from './const';

export const fetchIngredients = createAsyncThunk<GetIngredientsResponse>(typeFn('/fetch'), getIngredients);
