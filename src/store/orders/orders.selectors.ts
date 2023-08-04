import { RootState } from '../store';
import { OrderModel, WsStatus } from 'types';
import { createSelector } from '@reduxjs/toolkit';

export function ordersSelector(state: RootState): OrderModel[] {
    return state.orders.orders;
}

export function isOrdersConnection(state: RootState): boolean {
    return state.orders.status === WsStatus.pending;
}

export function totalOrdersSelector(state: RootState): number {
    return state.orders.total;
}

export function totalOrdersTodaySelector(state: RootState): number {
    return state.orders.totalToday;
}

const selectOrderNumber = (state: RootState, n?: number): number | undefined => n;
export const orderByNumberSelector = createSelector(
    [ordersSelector, selectOrderNumber],
    (orders: OrderModel[], n?: number) => {
        return orders.find(order => order.number === n);
    }
);
