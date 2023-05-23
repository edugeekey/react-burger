import React, { ReactElement } from 'react';
import { Ingredient } from 'types';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { Price, Text } from 'ui';
import styles from './ingredient-card.module.css';

type IngredientCardProps = Ingredient;

export const IngredientCard = ({name, image, price, carbohydrates}: IngredientCardProps): ReactElement => {
  return (
    <li className={styles.card}>
      <Counter count={carbohydrates} size="default" />
      <img
        className='pl-4 pr-4'
        src={image}
        alt={name}
        width={272}
        height={120}/>
      <Price className='pt-1 pb-1' price={price} />
      <Text className='pb-5'>{name}</Text>
    </li>
  );
};
