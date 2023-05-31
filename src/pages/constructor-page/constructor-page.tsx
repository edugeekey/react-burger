import React, { ReactElement, useEffect, useMemo } from 'react';
import { BurgerIngredients, BurgerConstructor } from 'components'
import { getIngredients, useRequest } from 'api'
import { Error, Loader } from 'ui';
import { IngredientsDataContext } from 'store';

export const ConstructorPage = (): ReactElement | null => {
  const {
    isLoading,
    hasError,
    response,
    request
  } = useRequest(getIngredients);

  useEffect(() => request(), [request]);

  const ingredientsContextValue = useMemo(() => ({ ingredients: response?.data ?? [] }), [response?.data]);

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

  if (response?.data?.length) {
    return (
      <IngredientsDataContext.Provider value={ingredientsContextValue}>
        <BurgerIngredients />
        <BurgerConstructor />
      </IngredientsDataContext.Provider>
    )
  }

  return null;
}
