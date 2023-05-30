import React, { ReactElement } from 'react';
import { Text } from '../text';
import styles from './loader.module.css';

export const Loader = (): ReactElement => {
  return (
    <div className={styles.loader}>
      <Text tag='p' size='l'>Загрузка...</Text>
    </div>
  );
};
