import React, { ReactElement, useCallback } from 'react';
import styles from './constructor-list.module.css'
import { Ingredient, IngredientStored } from 'types';
import { DragPlaceholder } from './drag-placeholder'
import { useAppDispatch } from 'store';
import {
  moveConstructorIngredient,
  removeConstructorIngredient
} from 'store/burger-constructor';
import { BunItem, IngredientItem } from './constructor-ingredients';

type ConstructorListProps = {
  bun: Ingredient | null
  otherIngredients: IngredientStored[]
}

export const ConstructorList = ({ bun, otherIngredients }: ConstructorListProps): ReactElement => {
  const dispatch = useAppDispatch();

  const handleRemove = useCallback((id: string) => {
    dispatch(removeConstructorIngredient(id));
  }, [dispatch]);

  const handleMove = useCallback((from: number, to: number) => {
    dispatch(moveConstructorIngredient({from, to}));
  }, [dispatch]);

  return (
    <ul className='scroll-parent pos-rel'>
      <DragPlaceholder bun={bun} alwaysShow={!otherIngredients.length}/>
      <BunItem bun={bun} align='top' />
      <div className={`${styles.scrollContainer} custom-scroll`}>
        {
          otherIngredients.map((item, index) => (
            <IngredientItem
              key={item.id}
              storeId={item.id}
              index={index}
              ingredient={item}
              onMove={handleMove}
              onRemove={handleRemove} />
          ))
        }
      </div>
      <BunItem bun={bun} align='bottom' />
    </ul>
  );
};
