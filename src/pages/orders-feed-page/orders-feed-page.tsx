import React, { ReactElement, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { isOrdersConnection, ordersSelector, wsConnect, wsDisconnect } from 'store/orders';
import { OrdersFeed } from 'components';
import { Loader, Text } from 'ui';
import { OrdersStats } from './orders-stats';
import { OrderModel } from 'types';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from 'const';

const WS_FEED_URL = 'wss://norma.nomoreparties.space/orders/all';

export const OrdersFeedPage = (): ReactElement => {
    const navigate = useNavigate();

    const location = useLocation();

    const isLoading = useAppSelector(isOrdersConnection);

    const orders = useAppSelector(ordersSelector);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(wsConnect(WS_FEED_URL));
        return () => {
            dispatch(wsDisconnect());
        };
    }, [dispatch]);

    const handleOrderClick = useCallback((order: OrderModel) => {
        navigate(`${AppRoutes.Feed}/${order.number}`, {state: {backgroundOnPush: location}});
    }, [navigate, location]);

    return (
        isLoading ?
            <Loader /> :
            <>
                <div className='scroll-parent mr-15'>
                    <Text tag='h1' size='l' className='mb-5'>Лента заказов</Text>
                    <OrdersFeed
                        orders={orders}
                        showStatus={false}
                        onOrderClick={handleOrderClick}/>
                </div>
                <OrdersStats />
            </>
    );
};
