import React, { ReactElement } from 'react';
import { Ingredient } from 'types';
import styles from './indredient-list.module.css';
import { IngredientCard } from '../ingredient-card';

type IngredientListProps = {
  ingredients: Ingredient[];
}

export const IngredientList = ({ingredients}: IngredientListProps): ReactElement => {
  return (
    <ul className={styles.container}>
      {
        ingredients.map(item => <IngredientCard key={item._id} {...item} />)
      }
    </ul>
  );
};
