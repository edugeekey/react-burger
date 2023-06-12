import { Ingredient, IngredientStored } from 'types';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { typeFn } from './const';

type BurgerConstructorState = {
  bun: Ingredient | null;
  ingredients: IngredientStored[];
}

const burgerConstructorSlice = createSlice<BurgerConstructorState>({
  name: typeFn(),
  initialState: {
    bun: null,
    ingredients: []
  },
  reducers: {
    addBun(state: BurgerConstructorState, action: PayloadAction<Ingredient>) {
      state.bun = action.payload;
    },
    addConstructorIngredient: {
      reducer: (state: BurgerConstructorState, action: PayloadAction<IngredientStored>) => {
        state.ingredients.push(action.payload);
      },
      prepare: (item: Ingredient) => {
        const id = nanoid();
        return { payload: { id, ...item } }
      },
    },
    removeConstructorIngredient (state: BurgerConstructorState, action: PayloadAction<string>) {
      state.ingredients = state.ingredients.filter(item => item.id !== action.payload);
    }
  }
});

export const burgerConstructorReducer = burgerConstructorSlice.reducer;
export const { addBun, addConstructorIngredient, removeConstructorIngredient } = burgerConstructorSlice.actions;
