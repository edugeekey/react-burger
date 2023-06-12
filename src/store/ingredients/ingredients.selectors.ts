import { RootState } from '../store';
import { Ingredient, IngredientStored } from 'types';
import { createSelector } from '@reduxjs/toolkit';
import { burgerIngredientsSelector } from 'store/burger-constructor';

export function isIngredientsLoadingSelector(state: RootState): boolean {
  return state.ingredients.isLoading;
}

export function ingredientsHasErrorSelector(state: RootState): boolean {
  return state.ingredients.hasError;
}

export function ingredientsSelector(state: RootState): Ingredient[] {
  return state.ingredients.data;
}

const selectId = (state: RootState, id: string): string => id;
export const ingredientCountByIdSelector = createSelector(
  [burgerIngredientsSelector, selectId],
  (items: IngredientStored[], id: string) => {
    return items.reduce((acc, curr) => {
      return curr._id === id ? acc + 1 : acc;
    }, 0)
  }
);
