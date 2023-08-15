import { createReducer } from '@reduxjs/toolkit';
import { OrderModel, WsStatus } from 'types';
import { onMessage, onOpen, wsConnect, wsDisconnect } from './orders.actions';

export interface OrdersState {
    status: WsStatus;
    orders: OrderModel[];
    total: number;
    totalToday: number;
}

export const initialState: OrdersState = {
    status: WsStatus.offline,
    orders: [],
    total: 0,
    totalToday: 0
};

export const ordersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(wsConnect, (state) => {
            state.status = WsStatus.pending;
        })
        .addCase(wsDisconnect, (state) => {
            state.status = WsStatus.offline;
        })
        .addCase(onOpen, (state) => {
            state.status = WsStatus.online;
        })
        .addCase(onMessage, (state, action) => {
            const {orders, totalToday, total, success} = action.payload;
            if (success && orders) {
                state.orders = orders;
                state.total = total;
                state.totalToday = totalToday;
            }
        });
    });
