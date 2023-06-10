import { Ingredient } from 'types';
import { createSlice } from '@reduxjs/toolkit';
import { addIngredient, removeIngredient } from './burger-constructor.actions';
import { typeFn } from './const';

type BurgerConstructorState = {
  bun: Ingredient | null;
  ingredients: Ingredient[];
}

const burgerConstructorSlice = createSlice<BurgerConstructorState>({
  name: typeFn(),
  initialState: {
    bun: null,
    ingredients: []
  },
  reducers: (builder) => {
    builder
      .addCase(addIngredient, (state, action) => {
        console.log(action.payload);
      })
      .addCase(removeIngredient, (state, action) => {
        console.log(action.payload);
      })
  }
});

export const burgerConstructorReducer = burgerConstructorSlice.reducer;
