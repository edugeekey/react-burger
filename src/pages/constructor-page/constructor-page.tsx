import React, { ReactElement, useEffect, useState } from 'react'
import { BurgerIngredients, BurgerConstructor } from 'components'
import { getIngredients } from 'api'
import { Error, Loader } from 'ui';
import { Ingredient } from 'types';

type RequestState = {
  data: Ingredient[];
  isLoading: boolean;
  hasError: boolean;
}

export const ConstructorPage = (): ReactElement | null => {
  const [state, setState] = useState<RequestState>({ data: [], isLoading: false, hasError: false })

  useEffect(() => {
    setState({ ...state, isLoading: true });

    const setError = (): void => setState({ data: [], hasError: true, isLoading: false });

    getIngredients()
      .then(({data, success}) => {
        if (success) {
          setState({ data, hasError: false, isLoading: false })
        } else {
          setError();
        }
      })
      .catch(setError)
  }, [])

  if (state.isLoading) {
    return <Loader />
  }

  if (state.hasError) {
    return <Error />
  }

  if (state.data?.length) {
    return (
      <>
        <BurgerIngredients ingredients={state.data} />
        <BurgerConstructor items={state.data} />
      </>
    )
  }

  return null;
}
