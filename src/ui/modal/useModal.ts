import { useContext } from 'react';
import { ModalContext, ModalContextType } from './modal-context';

export function useModal(): ModalContextType {
  return useContext(ModalContext)
}
