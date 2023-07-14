import { createSlice } from '@reduxjs/toolkit';
import { Ingredient, RequestState } from 'types';
import { fetchIngredients } from 'store/ingredients/ingredients.actions';
import { typeFn } from 'store/ingredients/const';

type IngredientsState = RequestState<Ingredient[]>;

const initialState: IngredientsState = {
  isLoading: false,
      hasError: false,
      data: []
};

const ingredientsSlice = createSlice({
  name: typeFn(),
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchIngredients.rejected, (state) => {
        state.isLoading = false;
        state.data = [];
        state.hasError = true;
      });
  }
});

export const ingredientsReducer = ingredientsSlice.reducer;
