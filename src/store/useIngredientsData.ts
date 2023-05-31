import { useContext } from 'react';
import { IngredientsDataContext, IngredientsDataContextType } from 'store';

export function useIngredientsData(): IngredientsDataContextType {
  return useContext(IngredientsDataContext);
}
