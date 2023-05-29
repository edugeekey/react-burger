import { createContext } from 'react';
import { Modal } from 'types';

export type ModelContextType = {
  open: (modal: Modal) => void;
  close: VoidFunction;
}

export const ModalContext = createContext<ModelContextType>({
  open: () => {},
  close: () => {},
});
