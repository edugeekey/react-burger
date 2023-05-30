import { createContext } from 'react';
import { Modal } from 'types';

export type ModalContextType = {
  open: (modal: Modal) => void;
  close: VoidFunction;
}

export const ModalContext = createContext<ModalContextType>({
  open: () => {},
  close: () => {},
});
