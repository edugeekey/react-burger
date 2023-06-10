import { createAsyncThunk } from '@reduxjs/toolkit';
import { SubmitOrderResponse, submitOrder } from 'api';
import { typeFn } from './const';

export const fetchOrder = createAsyncThunk<SubmitOrderResponse, string[]>(typeFn('/fetch'), submitOrder);
