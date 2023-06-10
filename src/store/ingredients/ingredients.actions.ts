import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getIngredients, GetIngredientsResponse } from 'api';
import { typeFn } from './const';

export const fetchIngredients = createAsyncThunk<GetIngredientsResponse>(typeFn('/fetch'), getIngredients);

export const addIngredient = createAction<string>(typeFn('/add_ingredient'));

export const removeIngredient = createAction<string>(typeFn('/remove_ingredient'));
