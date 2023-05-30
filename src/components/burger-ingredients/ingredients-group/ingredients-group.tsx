import React, { ReactElement } from 'react';
import { ChildrenProps, IngredientType } from 'types';
import { Text } from 'ui';

type IngredientsGroupProps = ChildrenProps & {
  id: IngredientType;
  title: string;
}

export const IngredientsGroup = ({ id, title, children }: IngredientsGroupProps): ReactElement => {
  return (
    <div id={id} className='pt-10'>
      <Text tag='h2' size='m'>{title}</Text>
      <div className='pt-6 pl-4 pr-4'>
        {children}
      </div>
    </div>
  );
};
