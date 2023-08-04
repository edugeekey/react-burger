import React, { ReactElement } from 'react';
import { OrderDetails } from 'components';
import styles from './order-page.module.css';

export const OrderPage = (): ReactElement => {
    return (
        <div className={styles.container}>
            <OrderDetails />
        </div>
    );
};
