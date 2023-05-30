import React, { ReactElement } from 'react';
import { Text } from 'ui';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-details.module.css';

type OrderDetailsProps = {
  id: string;
}

export const OrderDetails = ({ id }: OrderDetailsProps): ReactElement => {
  return (
    <div className='flex-column-center pt-10 pb-30'>
      <Text tag='p' digits size='l' className='mt-4 mb-8'>{id}</Text>
      <Text tag='label' size='m' className='mb-15'>идентификатор заказа</Text>
      <div className={`${styles.badge} flex-center`}>
        <CheckMarkIcon type="primary" />
      </div>
      <Text tag='p' className='mb-2 mt-15'>Ваш заказ начали готовить</Text>
      <Text tag='p' inactive>Дождитесь готовности на орбитальной станции</Text>
    </div>
  );
};
