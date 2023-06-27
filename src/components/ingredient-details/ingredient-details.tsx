import React, { ReactElement } from 'react';
import { Error, Loader, Text } from 'ui';
import { DetailsCell } from './details-cell';
import { useAppSelector, useSelectorWithProps } from 'store';
import {
  ingredientByIdSelector,
  ingredientsHasErrorSelector,
  isIngredientsLoadingSelector,
} from 'store/ingredients';
import { useParams } from 'react-router-dom';
import styles from './ingredient-details.module.css';

export const ERROR_TEXT = 'Попробуйте перезагрухить страницу. Если это не поможет обратитесь в службу поддержки.';

export const IngredientDetails = (): ReactElement | null => {
  const { id } = useParams();
  const isLoading = useAppSelector(isIngredientsLoadingSelector);
  const hasError = useAppSelector(ingredientsHasErrorSelector);
  const ingredient = useSelectorWithProps(ingredientByIdSelector, id, [id]);
  const { image_large, name, calories, proteins, fat, carbohydrates } = ingredient ?? {};

  return (
    <div className={`${styles.container} flex-column-center pb-15 pl-5 pr-5`}>
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <Error text={ERROR_TEXT} title='Обновить' callback={(): void => window.location.reload()} />
      ) : (
        <>
          <img className='mb-4' width={480} height={240} src={image_large} alt={name} />
          <Text className='mb-8' tag='p' size='m'>
            {name}
          </Text>
          <div className={styles.cells}>
            <DetailsCell label='Калории,ккал' value={calories} />
            <DetailsCell label='Белки, г' value={proteins} />
            <DetailsCell label='Жиры, г' value={fat} />
            <DetailsCell label='Углеводы, г' value={carbohydrates} />
          </div>
        </>
      )}
    </div>
  );
};
