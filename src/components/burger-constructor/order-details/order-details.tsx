import React, { ReactElement, useEffect } from 'react';
import { Error, Loader, Text } from 'ui';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-details.module.css';
import { submitOrder, useRequest } from 'api';

const ERROR_TEXT = 'Попробуйте повторить. Если это не поможет обратитесь в службу поддержки.'

type OrderDetailsProps = {
  ids: string[];
}

export const OrderDetails = ({ ids }: OrderDetailsProps): ReactElement => {
  const {
    isLoading,
    hasError,
    response,
    request
  } = useRequest(submitOrder);

  useEffect(() => request(ids), [request, ids]);

  return (
    <div className={`${styles.container} flex-column-center pt-10 pb-30`}>
      {
        isLoading ? <Loader /> :
          hasError ? <Error text={ERROR_TEXT} title='Повторить' callback={(): void => request(ids)} /> :
            <>
              <Text tag='p' digits size='l' className='mt-4 mb-8'>{response?.order.number}</Text>
              <Text tag='label' size='m' className='mb-15'>идентификатор заказа</Text>
              <div className={`${styles.badge} flex-center`}>
                <CheckMarkIcon type="primary" />
              </div>
              <Text tag='p' className='mb-2 mt-15'>Ваш заказ начали готовить</Text>
              <Text tag='p' inactive>Дождитесь готовности на орбитальной станции</Text>
            </>
      }
    </div>
  );
};
