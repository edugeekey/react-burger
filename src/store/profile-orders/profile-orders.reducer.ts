import { createReducer } from '@reduxjs/toolkit';
import { OrderModel, WsStatus } from 'types';
import { onMessage, onOpen, wsConnect, wsDisconnect } from './profile-orders.actions';

export interface OrdersState {
    status: WsStatus;
    orders: OrderModel[];
}

const initialState: OrdersState = {
    status: WsStatus.offline,
    orders: []
};

export const profileOrdersReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(wsConnect, (state) => {
            state.status = WsStatus.pending;
        })
        .addCase(onOpen, (state) => {
            state.status = WsStatus.online;
        })
        .addCase(wsDisconnect, (state) => {
            state.status = WsStatus.offline;
        })
        .addCase(onMessage, (state, action) => {
            const {orders, success} = action.payload;
            if (success && orders) {
                state.orders = action.payload.orders;
            }
        });
    });
