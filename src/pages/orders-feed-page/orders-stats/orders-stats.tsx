import React, { ReactElement, useMemo } from 'react';
import styles from './orders-stats.module.css';
import { Text } from 'ui';
import { useAppSelector } from 'store';
import { ordersSelector, totalOrdersSelector, totalOrdersTodaySelector } from 'store/orders';
import { OrderStatus } from 'types';
import { OrderNumbers } from './order-numbers';
import cls from 'classnames';

export const OrdersStats = (): ReactElement | null => {
    const total = useAppSelector(totalOrdersSelector);
    const totalToday = useAppSelector(totalOrdersTodaySelector);
    const orders = useAppSelector(ordersSelector);

    const readyOrders = useMemo(() => {
        return orders
            .filter(order => order.status === OrderStatus.Done)
            .map(order => order.number);
    }, [orders]);

    const inProgressOrders = useMemo(() => {
        return orders
            .filter(order => order.status !== OrderStatus.Done)
            .map(order => order.number);
    }, [orders]);

    return (orders?.length ?
        <div className={cls(styles.container, 'custom-scroll')}>
            <div className={styles.ordersContainer}>
                <OrderNumbers label='Готовы:' numbers={readyOrders} color='success' />
                <OrderNumbers label='В&nbsp;работе:' numbers={inProgressOrders} />
            </div>
            <div className='mb-15 mt-15'>
                <Text tag='h2' size='m'>Выполнено за все время:</Text>
                <Text digits size='l'>{total}</Text>
            </div>
            <div>
                <Text tag='h2' size='m'>Выполнено за сегодня:</Text>
                <Text digits size='l'>{totalToday}</Text>
            </div>
        </div>
            : null
    );
};
