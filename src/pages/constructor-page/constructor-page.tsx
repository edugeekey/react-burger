import React, { ReactElement, useEffect } from 'react';
import { BurgerIngredients, BurgerConstructor } from 'components'
import { Error, Loader } from 'ui';
import { useAppSelector, useAppDispatch } from 'store';
import {
  fetchIngredients,
  ingredientsHasErrorSelector,
  isIngredientsLoadingSelector
} from 'store/ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const ConstructorPage = (): ReactElement | null => {

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isIngredientsLoadingSelector);
  const hasError = useAppSelector(ingredientsHasErrorSelector);


  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />
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
}
