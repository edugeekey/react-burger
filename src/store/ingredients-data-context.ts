import { createContext } from 'react';
import { Ingredient } from 'types';

export type IngredientsDataContextType = {
  ingredients: Ingredient[];
}

export const IngredientsDataContext = createContext<IngredientsDataContextType>({ ingredients: [] });
