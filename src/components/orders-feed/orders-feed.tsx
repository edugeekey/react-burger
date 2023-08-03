import React, { ReactElement } from 'react';
import { OrderModel } from 'types';
import { OrderCard } from './order-card';
import cls from 'classnames';
import styles from './orders-feed.module.css';

type OrdersFeedProps = {
    orders: OrderModel[];
    showStatus?: boolean;
    onOrderClick: (order: OrderModel) => void;
}

export const OrdersFeed = ({orders, onOrderClick, showStatus}: OrdersFeedProps): ReactElement => {
    return (
        <div className={cls(styles.container, 'custom-scroll', 'pr-2')}>
            {
                orders.map(order => (
                    <OrderCard
                        key={order._id}
                        order={order}
                        showStatus={showStatus}
                        onClick={onOrderClick} />
                ))
            }
        </div>
    );
};
