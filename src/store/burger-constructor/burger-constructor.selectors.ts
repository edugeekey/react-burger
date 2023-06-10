import { RootState } from '../store';
import { Ingredient } from 'types';

export function bunSelector(state: RootState): Ingredient | null {
  return state.burgerConstructor.bun;
}

export function ingredientsSelector(state: RootState): Ingredient[] {
  return state.burgerConstructor.ingredients;
}
