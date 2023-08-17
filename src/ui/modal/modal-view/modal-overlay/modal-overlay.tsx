import React, { ReactElement } from 'react';
import styles from './modal-overlay.module.css';
import { DATA_TEST } from 'utils/dataTest';

type ModalOverlayProps = {
  onBackgroundClick: VoidFunction;
}

export const ModalOverlay = ({ onBackgroundClick }: ModalOverlayProps): ReactElement => {
  return (
    <div
        data-test={DATA_TEST.Modal.Overlay}
        className={styles.backdrop} onClick={onBackgroundClick}></div>
  );
};
