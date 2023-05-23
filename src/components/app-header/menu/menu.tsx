import React, { ReactElement } from 'react';
import { NavigationItem, NavigationItemProps } from '../navigation-item';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const menuItems: NavigationItemProps[] = [
  {
    Icon: BurgerIcon,
    text: 'Конструктор',
    disabled: false,
  },
  {
    Icon: ListIcon,
    text: 'Лента заказов',
    disabled: true,
  },
];

export const Menu = (): ReactElement => {
  return (
    <menu className='flex'>
      {menuItems.map((item) => (
        <NavigationItem key={item.text} {...item} />
      ))}
    </menu>
  );
};
