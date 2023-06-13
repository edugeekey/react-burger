import React, { ReactElement } from 'react';
import styles from './modal-overlay.module.css';

type ModalOverlayProps = {
  onBackgroundClick: VoidFunction;
}

export const ModalOverlay = ({ onBackgroundClick }: ModalOverlayProps): ReactElement => {
  return (
    <div className={styles.backdrop} onClick={onBackgroundClick}></div>
  );
};
