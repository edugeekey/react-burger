import React, { ReactElement, useCallback } from 'react';
import { Ingredient } from 'types';
import { IngredientCard } from '../ingredient-card';
import { useModal } from 'ui';
import { IngredientDetails } from '../indredient-details';
import styles from './indredient-list.module.css';

type IngredientListProps = {
  ingredients: Ingredient[];
}

export const IngredientList = ({ ingredients }: IngredientListProps): ReactElement => {
  const { open } = useModal();

  const handleCardClick = useCallback((item: Ingredient) => {
    open({
        title: 'Детали ингредиента',
        content: <IngredientDetails ingredient={item} />
    });
  }, [open]);

  return (
    <ul className={styles.container}>
      {
        ingredients.map(item => (
            <IngredientCard
              key={item._id}
              {...item}
              onClick={handleCardClick} />
        ))
      }
    </ul>
  );
};
