import React, { ReactElement, useCallback } from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredient } from 'types';
import { ConstructorItemCard } from '../constructor-item-card';

type IngredientItemProps = {
  ingredient: Ingredient;
  storeId: string;
  onRemove: (id: string) => void;
}

export const IngredientItem = (
  {
    ingredient,
    storeId,
    onRemove,
  }: IngredientItemProps
): ReactElement => {
  const {image_mobile, price, name} = ingredient ?? {};

  const handleClose = useCallback(() => {
    if (ingredient) {
      onRemove(storeId);
    }
  }, [storeId, onRemove, ingredient]);

  return (
    <ConstructorItemCard isLocked={false}>
      <ConstructorElement
        handleClose={handleClose}
        extraClass='ml-6'
        thumbnail={image_mobile}
        text={name}
        price={price} />
    </ConstructorItemCard>
  );
};
