import React, { memo, ReactElement } from 'react';
import { Ingredient } from 'types';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Price, Text } from 'ui';
import { useDrag } from 'react-dnd';
import { DragType } from '../../types';
import { useSelectorWithProps } from 'store';
import { ingredientCountByIdSelector } from 'store/ingredients';
import styles from './ingredient-card.module.css';

type IngredientCardProps = Ingredient & {
  onClick: (item: Ingredient) => void;
};

export const IngredientCard = memo(({onClick, ...item}: IngredientCardProps): ReactElement => {
  const [, drag] = useDrag(() => ({
    type: DragType.MoveIngredient,
    item: { ...item },
  }));

  const count = useSelectorWithProps(ingredientCountByIdSelector, item._id, [item._id]);

  return (
    <li ref={drag} draggable className={styles.card} onClick={(): void => onClick(item)}>
      <Counter count={count} size="default" />
      <img
        className='pl-4 pr-4'
        src={item.image}
        alt={item.name}
        width={272}
        height={120}/>
      <Price className='pt-1 pb-1' price={item.price} />
      <Text className='pb-5'>{item.name}</Text>
    </li>
  );
});
