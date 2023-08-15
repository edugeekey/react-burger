import React, { ReactElement } from 'react';
import { Text } from '../../../text';
import { Modal } from 'types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal-popup.module.css';
import { DATA_TEST } from 'utils/dataTest';

type ModalPopupProps = Modal & {
  onClose: VoidFunction;
};

export const ModalPopup = ({ title, content, onClose }: ModalPopupProps): ReactElement => {
  return (
    <section className={styles.popup} data-test={DATA_TEST.Modal.Popup}>
      <div className={`${styles.header} pt-10 pr-10 pl-10`}>
        <Text tag='h1' size='l'>
          {title}
        </Text>
        <CloseIcon type='primary' onClick={onClose} />
      </div>
      {content}
    </section>
  );
};
