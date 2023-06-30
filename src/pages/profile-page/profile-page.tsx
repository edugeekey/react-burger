import React, { ReactElement } from 'react';
import { ProfileMenu } from './profile-menu';
import { ProfileForm} from './profile-form';

export const ProfilePage = (): ReactElement => {
  return (
    <div className='flex mt-30'>
      <ProfileMenu />
      <ProfileForm />
    </div>
  );
};
