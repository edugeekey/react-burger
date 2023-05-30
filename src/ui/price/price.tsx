import React, { ReactElement } from 'react';
import { Size } from 'types';
import { Text } from '../text';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils';
import cls from 'classnames';
import styles from './price.module.css';

type PriceProps = {
  price: number;
  className?: string;
  textSize?: Size;
  iconType?: TIconProps['type'];
  iconSize?: Size;
}

function getIconClass(size?: Size): string {
  switch (size) {
    case 'm': {
      return styles.medium;
    }
    default: {
      return '';
    }
  }
}

export const Price = (
  {
    price,
    className,
    textSize,
    iconSize,
    iconType
}: PriceProps): ReactElement => {
  return (
    <div className={cls('flex-center', className)}>
      <Text size={textSize ?? 'default'} className='mr-2' digits>{price}</Text>
      <span className={cls(getIconClass(iconSize), 'flex-center')}>
        <CurrencyIcon type={iconType ?? 'primary'} />
      </span>
    </div>
  );
};
