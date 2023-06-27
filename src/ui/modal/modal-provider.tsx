import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import { ModalContext } from './modal-context';
import { ChildrenProps, Modal } from 'types';
import { ModalView } from './modal-view';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AppRoutes } from 'const';
import { IngredientDetails } from 'components';

type ModalProviderProps = ChildrenProps & {
  hasBackground: boolean
}

export const ModalProvider = ({ children, hasBackground }: ModalProviderProps): ReactElement => {
  const [modal, setModal] = useState<Modal | null>(null);
  const navigate = useNavigate();

  const open = useCallback((modal: Modal) => {
    setModal(modal);
  }, []);

  const close = useCallback(() => {
    setModal(null);
  }, []);

  const value = useMemo(() => {
    return { open, close };
  }, [open, close]);

  const onRouteModalClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modal && <ModalView {...modal} onClose={close} />}
      {hasBackground && (
        <Routes>
          <Route
            path={`${AppRoutes.Ingredient}/:id`}
            element={<ModalView content={<IngredientDetails />} onClose={onRouteModalClose} />}
          />
        </Routes>
      )}
    </ModalContext.Provider>
  );
};
