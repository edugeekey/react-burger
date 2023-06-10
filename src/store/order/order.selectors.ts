import { RootState } from '../store';
import { Order } from 'types';

export function isOrderLoadingSelector(state: RootState): boolean {
  return state.order.isLoading;
}

export function orderHasErrorSelector(state: RootState): boolean {
  return state.order.hasError;
}

export function orderSelector(state: RootState): Order | null {
  return state.order.data;
}
