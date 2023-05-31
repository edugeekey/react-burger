import React, { ReactElement } from 'react';
import spinner from './loader.svg';
import styles from './loader.module.css';

export const Loader = (): ReactElement => {
  return (
    <div className={styles.loader}>
      <img src={spinner} height={100} width={100} alt='spinner'/>
    </div>
  );
};
