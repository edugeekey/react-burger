import React, { forwardRef } from 'react';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChildrenProps } from 'types';
import styles from './constructor-item-card.module.css';
import cls from 'classnames';

type ConstructorItemCardProps = ChildrenProps & {
  isLocked?: boolean;
  className?: string;
}
export const ConstructorItemCard = forwardRef(({ className, isLocked, children }: ConstructorItemCardProps, ref) => {
  return (
    <li ref={ref} className={cls('flex mr-4 ml-4', className)}>
      <div className={styles.toggle}>
        {!isLocked && <DragIcon type="primary" />}
      </div>
      {children}
    </li>
  );
});
