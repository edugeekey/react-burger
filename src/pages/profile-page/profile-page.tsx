import React, { ReactElement } from 'react';
import { ProfileMenu } from './profile-menu';
import { Outlet } from 'react-router-dom';

export const ProfilePage = (): ReactElement => {
  return (
    <div className='flex mt-30'>
      <ProfileMenu />
      <Outlet />
    </div>
  );
};
