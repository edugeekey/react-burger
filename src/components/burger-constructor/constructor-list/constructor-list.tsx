import React, { ReactElement } from 'react';
import styles from './constructor-list.module.css';
import { Ingredient } from 'types';
import { ConstructorItem } from '../constructor-item';

type ConstructorListProps = {
  items: Ingredient[];
}

export const ConstructorList = ({items}: ConstructorListProps): ReactElement => {
  return (
    <ul className='scroll-parent'>
      <ConstructorItem className='mb-4' ingredient={items[0]} align='top' />
      <div className={styles.scrollContainer}>
        {
          items.slice(1).map((item) => (
            <ConstructorItem key={item._id} ingredient={item} />
          ))
        }
      </div>
      <ConstructorItem className='mt-4' ingredient={items[0]} align='bottom'/>
    </ul>
  );
};
