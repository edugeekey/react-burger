import React, { memo, ReactElement, useCallback } from 'react';
import { Ingredient } from 'types';
import { IngredientCard } from '../ingredient-card';
import styles from './indredient-list.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from 'const';

type IngredientListProps = {
  ingredients: Ingredient[];
}

export const IngredientList = memo(({ ingredients }: IngredientListProps): ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCardClick = useCallback((item: Ingredient) => {
    navigate(`${AppRoutes.Ingredient}/${item._id}`, {state: {background: location}});
  }, [navigate, location]);

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
});
