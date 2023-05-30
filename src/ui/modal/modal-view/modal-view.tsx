import React, { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from 'types';
import styles from './modal-view.module.css';
import { ModalPopup } from './modal-popup';

type ModalViewProps = Modal & {
  onBackgroundClick: VoidFunction;
  onClose: VoidFunction;
};

export const ModalView = (
  {
    title,
    content,
    onBackgroundClick,
    onClose
  }: ModalViewProps
): ReactElement => {
  useEffect(() => {
    const checkEsc = (e: WindowEventMap['keydown']): void => {
      if (e.key === 'Escape'){
        onClose();
      }
    };

    window.addEventListener('keydown', checkEsc);

    return () => window.removeEventListener('keydown', checkEsc)
  },[onClose]);

  return createPortal((
    <div
      className={`${styles.fixedContainer} flex-center`}>
      <ModalPopup title={title} content={content} onClose={onClose} />
      <div className={styles.backdrop} onClick={onBackgroundClick}></div>
    </div>
  ), window.document.body);
};
