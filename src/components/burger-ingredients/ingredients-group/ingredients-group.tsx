import React, { ForwardedRef, forwardRef, ReactElement } from 'react';
import { ChildrenProps } from 'types';
import { Text } from 'ui';

type IngredientsGroupProps = ChildrenProps & {
  title: string;
}

export const IngredientsGroup = forwardRef(
  ({ title, children }: IngredientsGroupProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
  return (
    <div ref={ref} className='pt-10'>
      <Text tag='h2' size='m'>{title}</Text>
      <div className='pt-6 pl-4 pr-4'>
        {children}
      </div>
    </div>
  );
});
