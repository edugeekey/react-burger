import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import { ModalContext } from './modal-context';
import { ChildrenProps, Modal } from 'types';
import { ModalView } from './modal-view';

type ModalProviderProps = ChildrenProps;

export const ModalProvider = ({ children }: ModalProviderProps): ReactElement => {
  const [modal, setModal] = useState<Modal | null>(null);

  const open = useCallback((modal: Modal) => {
    setModal(modal);
  }, []);

  const close = useCallback(() => {
    setModal(null);
  }, []);

  const value = useMemo(() => {
    return {open, close};
  }, [open, close]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modal && <ModalView {...modal} onBackgroundClick={close} onClose={close} />}
    </ModalContext.Provider>
  );
};
