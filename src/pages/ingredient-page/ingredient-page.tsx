import React, { ReactElement, useEffect } from 'react';
import { IngredientDetails } from 'components';
import { useAppDispatch } from 'store';
import { fetchIngredients } from 'store/ingredients';
import styles from './ingredient-page.module.css';

export const IngredientPage = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <IngredientDetails />
    </div>
  );
};
