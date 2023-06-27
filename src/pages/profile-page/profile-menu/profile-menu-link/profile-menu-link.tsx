import React, { ReactElement } from 'react';
import { Text } from 'ui';
import { Link, useMatch } from 'react-router-dom';

type ProfileMenuLinkProps = {
  text: string;
  link: string;
}
export const ProfileMenuLink = ({text, link}: ProfileMenuLinkProps): ReactElement => {
  const isActive = useMatch(link);

  return (
    <Link className='custom-link' to={link}>
      <Text inactive={!isActive} size='m'>{text}</Text>
    </Link>
  );
};
