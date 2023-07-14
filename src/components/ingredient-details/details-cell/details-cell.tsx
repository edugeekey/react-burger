import React, { ReactElement } from 'react';
import { Text } from 'ui';

type DetailsCellProps = {
  label: string;
  value?: number;
}

export const DetailsCell = ({label, value}: DetailsCellProps): ReactElement => {
  return (
    <div className='flex-column-center'>
      <Text className='mb-2' inactive>{label}</Text>
      <Text digits inactive>{value}</Text>
    </div>
  );
};
