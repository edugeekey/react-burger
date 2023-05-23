import React, { ReactElement } from 'react';
import { ConstructorFooter } from './constructor-footer';
import { Ingredient } from 'types';
import { ConstructorList } from './constructor-list';

type BurgerConstructorProps = {
  items: Ingredient[];
}

export const BurgerConstructor = ({items}: BurgerConstructorProps): ReactElement => {
  const total = items.reduce((sum, curr) => sum + curr.price, 0);
  return (
    <section className='scroll-parent pt-25 pb-10'>
      <ConstructorList items={items} />
      <ConstructorFooter
        total={total}
        onSubmit={(): void => console.log('onSubmit')} />
    </section>
  );
};
