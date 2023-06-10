import React, { ReactElement, useCallback, useMemo } from 'react';
import { ConstructorFooter } from './constructor-footer';
import { ConstructorList } from './constructor-list';
import { useAppSelector } from 'store';
import { OrderDetails } from './order-details';
import { useModal } from 'ui';
import { ingredientsSelector } from 'store/ingredients';

export const BurgerConstructor = (): ReactElement => {
  const { open } = useModal();
  const ingredients = useAppSelector(ingredientsSelector);

  const [bun, otherIngredients] = useMemo(() => {
    const bun = ingredients.find(item => item.type === 'bun');
    const otherIngredients = ingredients.filter(item => item.type !== 'bun');
    return [bun, otherIngredients];
  }, [ingredients]);

  const handleSubmit = useCallback(async () => {
    open({ content: <OrderDetails ids={ingredients.map(x => x._id)} /> })
  }, [open, ingredients]);

  return (
    <section className='scroll-parent pt-25 pb-10'>
      <ConstructorList
        bun={bun}
        otherIngredients={otherIngredients} />
      <ConstructorFooter
        bun={bun}
        otherIngredients={otherIngredients}
        handleSubmit={handleSubmit} />
    </section>
  );
};
