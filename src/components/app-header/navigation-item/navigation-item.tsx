import React, { ReactElement } from 'react';
import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils';
import { Text } from 'ui';
import cls from 'classnames';
import styles from './navigation-item.module.css';

export type NavigationItemProps = {
  Icon: (x: TIconProps) => ReactElement;
  text: string;
  disabled: boolean;
};

export const NavigationItem = ({ Icon, text, disabled }: NavigationItemProps): ReactElement => {
  return (
    <a className={cls(styles.item, 'flex-center pl-5 pr-5 pt-4 pb-4', disabled && styles.item_disabled)}>
      <Icon type={!disabled ? 'primary' : 'secondary'} />
      <Text className='ml-2' inactive={disabled}>{text}</Text>
    </a>
  );
};
