import React, { ReactElement } from 'react';
import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils';
import { Text } from 'ui';
import { useMatch, Link } from 'react-router-dom';

export type NavigationItemProps = {
  Icon: (x: TIconProps) => ReactElement;
  text: string;
  link: string;
  disabled?: boolean;
};

export const NavigationItem = ({ Icon, text, link, disabled }: NavigationItemProps): ReactElement => {
  const isActive = useMatch(link);
  const isHighlighted = isActive && !disabled;

  return (
    <Link to={link} className='custom-link flex-center pl-5 pr-5 pt-4 pb-4'>
      <Icon type={isHighlighted ? 'primary' : 'secondary'} />
      <Text className='ml-2' inactive={!isHighlighted}>{text}</Text>
    </Link>
  );
};
