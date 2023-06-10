import { RootState } from '../store';
import { Ingredient } from 'types';

export function isIngredientsLoadingSelector(state: RootState): boolean {
  return state.ingredients.isLoading;
}

export function ingredientsHasErrorSelector(state: RootState): boolean {
  return state.ingredients.hasError;
}

export function ingredientsSelector(state: RootState): Ingredient[] {
  return state.ingredients.data;
}
