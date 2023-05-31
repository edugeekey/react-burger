import React, { ReactElement } from 'react';
import styles from './ingredient-details.module.css';
import { Text } from 'ui';
import { Ingredient } from 'types';
import { DetailsCell } from './details-cell';

type IngredientDetailsProps = {
  ingredient: Ingredient;
}

export const IngredientDetails = ({ingredient}: IngredientDetailsProps): ReactElement => {
  const {image_large, name, calories, proteins, fat, carbohydrates} = ingredient;

  return (
    <div className='flex-column-center pb-15'>
      <img className='mb-4' width={480} height={240} src={image_large} alt={name} />
      <Text className='mb-8' tag='p' size='m'>{name}</Text>
      <div className={styles.cells}>
        <DetailsCell label='Калории,ккал' value={calories} />
        <DetailsCell label='Белки, г' value={proteins} />
        <DetailsCell label='Жиры, г' value={fat} />
        <DetailsCell label='Углеводы, г' value={carbohydrates} />
      </div>
    </div>
  );
};
