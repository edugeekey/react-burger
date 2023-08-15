import { initialState, profileOrdersReducer } from './profile-orders.reducer';
import { onMessage, onOpen, wsConnect, wsDisconnect } from './profile-orders.actions';
import { OrderModel, OrderStatus, WsOrdersMessage, WsStatus } from 'types';

describe('profile-orders.reducer', () => {

    it('should return the initial state', () => {
        expect(profileOrdersReducer(undefined, {type: ''})).toEqual(initialState);
    });

    it('should return the state with ws pending status', () => {
        expect(profileOrdersReducer(initialState, wsConnect))
            .toEqual({...initialState, status: WsStatus.pending});
    });

    it('should return the state with ws online status', () => {
        expect(profileOrdersReducer(initialState, onOpen))
            .toEqual({...initialState, status: WsStatus.online});
    });

    it('should return the state with ws offline status', () => {
        expect(profileOrdersReducer(initialState, wsDisconnect))
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
        expect(profileOrdersReducer(initialState, onMessage({success: true, orders: [order], total: 1, totalToday: 1})))
            .toEqual({...initialState, orders: [order]});
    });

    it('should return the initialState after invalid message was dispatched', () => {
        expect(profileOrdersReducer(initialState, onMessage({} as WsOrdersMessage)))
            .toEqual(initialState);
    });
});
