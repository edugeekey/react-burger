import React, { ReactElement, useCallback, useEffect } from 'react';
import { Error, Loader, Text } from 'ui';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchOrder, isOrderLoadingSelector, orderHasErrorSelector, orderSelector } from 'store/order';
import styles from './order-details.module.css';

const ERROR_TEXT = 'Попробуйте повторить. Если это не поможет обратитесь в службу поддержки.'

type OrderDetailsProps = {
  ids: string[];
}

export const OrderDetails = ({ ids }: OrderDetailsProps): ReactElement => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isOrderLoadingSelector);
  const hasError = useAppSelector(orderHasErrorSelector);
  const order = useAppSelector(orderSelector);

  const sendRequest = useCallback(() => {
    dispatch(fetchOrder(ids));
  }, [dispatch, ids]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <div className={`${styles.container} flex-column-center pt-10 pb-30`}>
      {
        isLoading ? <Loader /> :
          hasError ? <Error text={ERROR_TEXT} title='Повторить' callback={sendRequest} /> :
            <>
              <Text tag='p' digits size='l' className='mt-4 mb-8'>{order?.number}</Text>
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
