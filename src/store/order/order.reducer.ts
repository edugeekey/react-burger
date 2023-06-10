import { createSlice } from '@reduxjs/toolkit';
import { fetchOrder } from './order.actions';
import { RequestState, Order } from 'types';
import { typeFn } from './const';

type OrderState = RequestState<Order | null>;

const orderSlice = createSlice<OrderState>({
  name: typeFn(),
  initialState: {
    isLoading: false,
    hasError: false,
    data: null
  },
  reducers: (builder) => {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.order;
      })
      .addCase(fetchOrder.rejected, (state) => {
        state.isLoading = false;
        state.data = null;
        state.hasError = true;
      })
  }
});

export const orderReducer = orderSlice.reducer;
