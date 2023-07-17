import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook, EqualityFn, NoInfer
} from 'react-redux';
import { RootState, AppDispatch } from './store';
import { DependencyList, useCallback } from 'react';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useSelectorWithProps<TParams, TResult>(
  selector: (state: RootState, props: TParams) => TResult,
  props: TParams,
  deps: DependencyList,
  equalityFn?: EqualityFn<NoInfer<TResult>>
): TResult {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectorFn = useCallback((state: RootState) => selector(state, props), deps);
  return useAppSelector(
    selectorFn,
    equalityFn
  );
}

export function actionTypeFn(prefix: string) {
  return (s?: string): string => {
    if (!s) {
      return prefix;
    }
    return `${prefix}${s}`;
  };
}
