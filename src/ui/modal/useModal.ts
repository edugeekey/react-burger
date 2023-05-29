import { useContext } from 'react';
import { ModalContext, ModelContextType } from './model-context';

export function useModal(): ModelContextType {
  return useContext(ModalContext)
}
