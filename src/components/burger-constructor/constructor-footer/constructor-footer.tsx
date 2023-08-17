import React, { ReactElement, useMemo } from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Price } from 'ui';
import { Ingredient } from 'types';
import cls from 'classnames';
import styles from './constructor-footer.module.css';
import { DATA_TEST } from 'utils/dataTest';

type ConstructorFooterProps = {
  bun: Ingredient | null;
  otherIngredients: Ingredient[];
  handleSubmit: VoidFunction;
}

export const ConstructorFooter = ({
  bun,
  otherIngredients,
  handleSubmit,
}: ConstructorFooterProps): ReactElement => {
  const total = useMemo(() => {
    const otherIngredientsPrice = otherIngredients.reduce((sum, curr) => sum + curr.price, 0);
    const bunsPrice = 2 * (bun?.price ?? 0);
    return bunsPrice + otherIngredientsPrice;
  }, [otherIngredients, bun]);

  return (
    <div data-test={DATA_TEST.Constructor.Footer}
         className={cls(styles.footer, 'pt-6 pr-4')}>
      <Price className='mr-10' price={total} textSize='m' iconSize='m' />
      <Button
        htmlType='button'
        onClick={handleSubmit}
        disabled={!bun || !otherIngredients?.length}>
        Оформить заказ
      </Button>
    </div>
  );
};
