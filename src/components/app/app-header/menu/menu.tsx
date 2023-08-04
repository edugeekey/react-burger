import React, { ReactElement } from 'react';
import { NavigationItem, NavigationItemProps } from '../navigation-item';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { AppRoutes } from 'const';

const menuItems: NavigationItemProps[] = [
  {
    Icon: BurgerIcon,
    text: 'Конструктор',
    link: AppRoutes.Constructor
  },
  {
    Icon: ListIcon,
    text: 'Лента заказов',
    link: AppRoutes.Feed
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
