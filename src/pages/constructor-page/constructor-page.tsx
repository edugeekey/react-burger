import React, { ReactElement } from 'react';
import { BurgerIngredients, BurgerConstructor } from 'components';
import { Error, Loader } from 'ui';
import { useAppSelector } from 'store';
import {
  ingredientsHasErrorSelector,
  isIngredientsLoadingSelector
} from 'store/ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const ConstructorPage = (): ReactElement | null => {
  const isLoading = useAppSelector(isIngredientsLoadingSelector);
  const hasError = useAppSelector(ingredientsHasErrorSelector);

  if (isLoading) {
    return <Loader />;
  }

  if (hasError) {
    return (
      <Error
        text='Попробуйте перезагрузить страницу. Если это не поможет обратитесь в службу поддержки.'
        title='Перезагрузить'
        callback={(): void => window.location.reload()} />
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <BurgerIngredients />
      <BurgerConstructor />
    </DndProvider>
  );
};
