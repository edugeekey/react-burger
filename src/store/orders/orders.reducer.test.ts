import { initialState, onMessage, onOpen, wsConnect, wsDisconnect, ordersReducer } from '../orders';
import { OrderModel, OrderStatus, WsOrdersMessage, WsStatus } from 'types';

describe('orders.reducer', () => {

    it('should return the initial state', () => {
        expect(ordersReducer(undefined, {type: ''})).toEqual(initialState);
    });

    it('should return the state with ws pending status', () => {
        expect(ordersReducer(initialState, wsConnect))
            .toEqual({...initialState, status: WsStatus.pending});
    });

    it('should return the state with ws online status', () => {
        expect(ordersReducer(initialState, onOpen))
            .toEqual({...initialState, status: WsStatus.online});
    });

    it('should return the state with ws offline status', () => {
        expect(ordersReducer(initialState, wsDisconnect))
            .toEqual({...initialState, status: WsStatus.offline});
    });

    it('should return the state with orders', () => {
        const order: OrderModel = {
            _id: 'test',
            number: 1,
            name: 'test',
            status: OrderStatus.Done,
            ingredients: ['test'],
            createdAt: 'test',
            updatedAt: 'test'
        };
        const total = 1;
        const totalToday = 1;
        expect(ordersReducer(initialState, onMessage({success: true, orders: [order], total, totalToday})))
            .toEqual({...initialState, orders: [order], total, totalToday});
    });

    it('should return the initialState after invalid message was dispatched', () => {
        expect(ordersReducer(initialState, onMessage({} as WsOrdersMessage)))
            .toEqual(initialState);
    });
});
