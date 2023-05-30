import React, { ReactElement } from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Price } from 'ui';
import cls from 'classnames';
import styles from './constructor-footer.module.css';

type ConstructorFooterProps = {
  total: number;
  onSubmit: VoidFunction;
}

export const ConstructorFooter = ({total, onSubmit}: ConstructorFooterProps): ReactElement => {
  return (
    <div className={cls(styles.footer, 'pt-6 pr-4')}>
      <Price className='mr-10' price={total} textSize='m' iconSize='m'/>
      <Button htmlType='button' onClick={onSubmit}>
        Оформить заказ
      </Button>
    </div>
  );
};
