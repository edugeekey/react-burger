import React, { ReactElement } from 'react';
import { ProfileMenuLink } from './profile-menu-link';
import { AppRoutes } from 'const';
import { Text } from 'ui';
import { useAppDispatch } from 'store';
import { fetchLogout } from 'store/auth';
import styles from './profile-menu.module.css';

export const ProfileMenu = (): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <ul className={`${styles.menu} pr-25 mr-15`}>
      <li>
        <ProfileMenuLink text='Профиль' link={AppRoutes.Profile} />
      </li>
      <li>
        <ProfileMenuLink text='История заказов' link={AppRoutes.Orders} />
      </li>
      <li>
        <Text
          className={styles.clickable}
          inactive
          size='m'
          onClick={(): void => {dispatch(fetchLogout());}}>
          Выход
        </Text>
      </li>
    </ul>
  );
};
