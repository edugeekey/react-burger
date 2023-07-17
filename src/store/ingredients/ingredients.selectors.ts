import { RootState } from '../store';
import { Ingredient, IngredientStored } from 'types';
import { createSelector } from '@reduxjs/toolkit';
import { burgerIngredientsSelector, bunSelector } from 'store/burger-constructor';

export function isIngredientsLoadingSelector(state: RootState): boolean {
  return state.ingredients.isLoading;
}

export function ingredientsHasErrorSelector(state: RootState): boolean {
  return state.ingredients.hasError;
}

export function ingredientsSelector(state: RootState): Ingredient[] {
  return state.ingredients.data;
}

const selectId = (state: RootState, id?: string): string | undefined => id;

export const ingredientCountByIdSelector = createSelector(
  [burgerIngredientsSelector, bunSelector, selectId],
  (items: IngredientStored[], bun: Ingredient| null, id?: string) => {
    if (id === bun?._id){
      return 1;
    }
    return items.reduce((acc, curr) => {
      return curr._id === id ? acc + 1 : acc;
    }, 0);
  }
);

export const ingredientByIdSelector = createSelector(
  [ingredientsSelector, selectId],
  (items: Ingredient[], id?: string) => {
    return items.find(item => item._id === id);
  }
);
