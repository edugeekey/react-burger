import { RootState } from '../store';
import { Ingredient, IngredientStored } from 'types';

export function bunSelector(state: RootState): Ingredient | null {
  return state.burgerConstructor.bun;
}

export function burgerIngredientsSelector(state: RootState): IngredientStored[] {
  return state.burgerConstructor.ingredients;
}
