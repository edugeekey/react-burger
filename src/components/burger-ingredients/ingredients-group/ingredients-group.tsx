import React, { forwardRef, ReactElement } from 'react';
import { ChildrenProps } from 'types';
import { Text } from 'ui';

type IngredientsGroupProps = ChildrenProps & {
  title: string;
}

export const IngredientsGroup = forwardRef<HTMLDivElement>(
  ({ title, children }: IngredientsGroupProps, ref): ReactElement => {
  return (
    <div ref={ref} className='pt-10'>
      <Text tag='h2' size='m'>{title}</Text>
      <div className='pt-6 pl-4 pr-4'>
        {children}
      </div>
    </div>
  );
});
