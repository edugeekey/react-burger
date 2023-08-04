import React, { ReactElement } from 'react';
import { IngredientDetails } from 'components';

import styles from './ingredient-page.module.css';

export const IngredientPage = (): ReactElement => {
  return (
    <div className={styles.container}>
      <IngredientDetails />
    </div>
  );
};
