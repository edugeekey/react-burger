import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook
} from 'react-redux';
import { RootState, AppDispatch } from './store';
import { useCallback } from 'react';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useSelectorWithProps<TParams, TResult>(
  selector: (state: RootState, props: TParams) => TResult,
  props,
  deps,
  equalityFn?
): TResult {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectorFn = useCallback((state: RootState) => selector(state, props), deps);
  return useAppSelector(
    selectorFn,
    equalityFn
  )
}

export function actionTypeFn(prefix: string) {
  return (s?: string): string => {
    if (!s) {
      return prefix;
    }
    return `${prefix}${s}`
  };
}
