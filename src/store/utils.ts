import {
  useDispatch,
  useSelector,
  TypedUseSelectorHook
} from 'react-redux';
import { RootState, AppDispatch } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function actionTypeFn(prefix: string) {
  return (s?: string): string => {
    if (!s) {
      return prefix;
    }
    return `${prefix}${s}`
  };
}
