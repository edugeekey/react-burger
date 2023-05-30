import React, { ReactElement, useCallback, useMemo } from 'react';
import { ConstructorFooter } from './constructor-footer';
import { Ingredient } from 'types';
import { ConstructorList } from './constructor-list';
import { useModal } from '../../ui';
import { OrderDetails } from './order-details';

type BurgerConstructorProps = {
  items: Ingredient[];
}

export const BurgerConstructor = ({items}: BurgerConstructorProps): ReactElement => {
  const { open } = useModal();

  const total = useMemo(() => {
    return items.reduce((sum, curr) => sum + curr.price, 0)
  }, [items]);

  const handleSubmit = useCallback(() => {
    open({content: <OrderDetails id='034536' /> })
  }, [open]);

  return (
    <section className='scroll-parent pt-25 pb-10'>
      <ConstructorList items={items} />
      <ConstructorFooter
        total={total}
        onSubmit={handleSubmit} />
    </section>
  );
};
