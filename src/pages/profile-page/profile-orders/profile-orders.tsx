import React, { ReactElement, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import {
    isProfileOrdersConnecting,
    profileOrdersSelector,
    wsConnect,
    wsDisconnect
} from 'store/profile-orders';
import { getAccessToken } from 'utils/localStorageHelper';
import { OrdersFeed } from 'components';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderModel } from 'types';
import { Loader } from 'ui';

const WS_URL = 'wss://norma.nomoreparties.space/orders';
export const ProfileOrders = (): ReactElement => {
    const navigate = useNavigate();

    const location = useLocation();

    const isLoading = useAppSelector(isProfileOrdersConnecting);

    const orders = useAppSelector(profileOrdersSelector);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const accessToken = getAccessToken().replace('Bearer ', '');
        dispatch(wsConnect(`${WS_URL}?token=${accessToken}`));
        return () => {
            dispatch(wsDisconnect());
        };
    },[dispatch]);

    const handleOrderClick = useCallback((order: OrderModel) => {
        navigate(order.number.toString(), {state: {backgroundOnPush: location}});
    }, [navigate, location]);

    return (
        isLoading ? <div className='mt-30 ml-30'><Loader /></div> :
        <OrdersFeed
            orders={orders}
            showStatus={true}
            onOrderClick={handleOrderClick}/>
    );
};
