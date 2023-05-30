import React, { ReactElement } from 'react';
import { ChildrenProps } from 'types';

import styles from './app-main.module.css';

export const AppMain = ({ children }: ChildrenProps): ReactElement => {
  return (
    <div className={`${styles.container} ml-10 mr-10`}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};
