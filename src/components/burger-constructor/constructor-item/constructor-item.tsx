import React, { ReactElement } from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredient } from 'types';
import styles from './constructor-item.module.css';
import cls from 'classnames';

type Align = 'top' | 'bottom';

function getElementLabel(name: string, align?: Align): string {
  switch (align) {
    case 'top': {
      return `${name} (верх)`
    }
    case 'bottom': {
      return `${name} (низ)`;
    }
    default: {
      return name;
    }
  }
}

type ConstructorItemProps = {
  align?: Align;
  ingredient: Ingredient;
  className?: string;
}

export const ConstructorItem = (
  {
    align,
    ingredient,
    className
  }: ConstructorItemProps
): ReactElement => {
  const {type, image_mobile, price, name} = ingredient;

  const isLocked = type === 'bun';

  return (
    <li className={cls('flex mr-4 ml-4', className)}>
      <div className={styles.toggle}>
        {!isLocked && <DragIcon type="primary" />}
      </div>
      <ConstructorElement
        extraClass='ml-6'
        type={align}
        isLocked={isLocked}
        thumbnail={image_mobile}
        text={getElementLabel(name, align)}
        price={price} />
    </li>
  );
};
