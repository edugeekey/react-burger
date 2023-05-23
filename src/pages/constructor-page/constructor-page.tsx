import React, { ReactElement } from 'react';
import { BurgerIngredients, BurgerConstructor } from 'components';
import { DATA } from 'utils/data';

export const ConstructorPage = (): ReactElement => {
  return (
    <>
      <BurgerIngredients ingredients={DATA} />
      <BurgerConstructor items={DATA} />
    </>
  );
};
