import React, { ReactElement } from 'react';
import styles from './constructor-list.module.css';
import { ConstructorItem } from '../constructor-item';
import { Ingredient } from 'types';

type ConstructorListProps = {
  bun: Ingredient;
  otherIngredients: Ingredient[];
}

export const ConstructorList = ({ bun, otherIngredients }: ConstructorListProps): ReactElement => {
  return (
    <ul className='scroll-parent'>
      <ConstructorItem className='mb-4' ingredient={bun} align='top' isLocked={true} />
      <div className={styles.scrollContainer}>
        {
          otherIngredients.map((item) => (
            <ConstructorItem key={item._id} ingredient={item} />
          ))
        }
      </div>
      <ConstructorItem className='mt-4' ingredient={bun} align='bottom' isLocked={true} />
    </ul>
  );
};
