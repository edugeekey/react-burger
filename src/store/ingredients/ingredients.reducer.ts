import { createSlice } from '@reduxjs/toolkit';
import { Ingredient, RequestState } from 'types';
import { addIngredient, fetchIngredients, removeIngredient } from 'store/ingredients/ingredients.actions';
import { typeFn } from 'store/ingredients/const';

type IngredientsState = RequestState<Ingredient[]>;

const ingredientsSlice = createSlice<IngredientsState>({
  name: typeFn(),
  initialState: {
    isLoading: false,
    hasError: false,
    data: []
  },
  reducers: (builder) => {
    builder
      .addCase(addIngredient, (state, action) => {
        console.log(action.payload);
      })
      .addCase(removeIngredient, (state, action) => {
        console.log(action.payload);
      })
  },
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
      })
  }
});

export const ingredientsReducer = ingredientsSlice.reducer;
