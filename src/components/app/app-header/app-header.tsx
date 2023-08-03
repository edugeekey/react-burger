import React, { ReactElement } from 'react';
import { Logo, LogoutIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Menu } from './menu';
import { NavigationItem } from './navigation-item';
import styles from './app.header.module.css';
import { AppRoutes } from 'const';
import { Link } from 'react-router-dom';

export const AppHeader = (): ReactElement => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Menu />
        <Link to={AppRoutes.Constructor}>
            <Logo />
        </Link>
        <NavigationItem
          link={AppRoutes.Profile}
          Icon={LogoutIcon}
          text='Личный кабинет'
          disabled />
      </nav>
    </header>
  );
};
