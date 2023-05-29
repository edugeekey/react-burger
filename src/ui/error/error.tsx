import React, { ReactElement } from 'react';
import styles from './error.module.css';
import { Text } from '../text';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

export const Error = (): ReactElement => {
  return (
    <div className={styles.error}>
      <Text tag='h1' size='l' className='mb-6'>Что-то пошло не так.</Text>
      <Text tag='p' inactive>
        Попробуйте перезагрузить страницу. Если это не поможет обратитесь в службу поддержки.
      </Text>
      <Button
        extraClass='mt-10'
        htmlType='button'
        type='primary'
        onClick={(): void => window.location.reload()}
      >
        Перезагрузить
      </Button>
    </div>
  );
};
