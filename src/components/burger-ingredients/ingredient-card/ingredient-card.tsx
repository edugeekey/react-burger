import React, { memo, ReactElement } from 'react';
import { Ingredient } from 'types';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Price, Text } from 'ui';
import styles from './ingredient-card.module.css';

type IngredientCardProps = Ingredient & {
  onClick: (item: Ingredient) => void;
};

export const IngredientCard = memo(({onClick, ...item}: IngredientCardProps): ReactElement => {
  return (
    <li className={styles.card} onClick={(): void => onClick(item)}>
      <Counter count={item.carbohydrates} size="default" />
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
