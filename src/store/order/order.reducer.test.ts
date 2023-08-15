import { initialState, orderReducer } from './order.reducer';
import { fetchOrder } from './order.actions';
import { SubmitOrderResponse } from 'api';

describe('order.reducer', () => {

    it('should return the initial state', () => {
        expect(orderReducer(undefined, {type: ''})).toEqual(initialState);
    });

    it('should return the state with isLoading = true', () => {
        expect(orderReducer(initialState, fetchOrder.pending))
            .toEqual({...initialState, isLoading: true});
    });

    it('should return the rejected state', () => {
        expect(orderReducer(initialState, fetchOrder.rejected))
            .toEqual({...initialState, isLoading: false, data: null, hasError: true});
    });

    it('should return the state with filled data', () => {
        const response: SubmitOrderResponse = {
            success: true,
            name: 'test',
            order: {number: 1}
        };
        expect(orderReducer(initialState, fetchOrder.fulfilled(response, 'test', ['test'])))
            .toEqual({...initialState, isLoading: false, data: {number: 1}, hasError: false});
    });
});
