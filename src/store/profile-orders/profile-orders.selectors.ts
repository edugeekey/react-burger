import { RootState } from '../store';
import { OrderModel, WsStatus } from 'types';

export function profileOrdersSelector(state: RootState): OrderModel[] {
    return state.profileOrders.orders;
}

export function isProfileOrdersConnecting(state: RootState): boolean {
    return state.profileOrders.status === WsStatus.pending;
}
