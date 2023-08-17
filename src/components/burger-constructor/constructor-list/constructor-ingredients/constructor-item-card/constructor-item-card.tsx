import React, { ForwardedRef, forwardRef } from 'react';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChildrenProps } from 'types';
import styles from './constructor-item-card.module.css';
import cls from 'classnames';

type ConstructorItemCardProps = ChildrenProps & {
  isLocked?: boolean;
  className?: string;
  dataTest?: string;
}
export const ConstructorItemCard = forwardRef(
    ({ className, isLocked, dataTest, children }: ConstructorItemCardProps, ref: ForwardedRef<HTMLLIElement>) => {
  return (
    <li
        ref={ref}
        data-test={dataTest}
        className={cls('flex mr-4 ml-4', className)}>
      <div className={styles.toggle}>
        {!isLocked && <DragIcon type="primary" />}
      </div>
      {children}
    </li>
  );
});
