import React, { ReactElement } from 'react';
import styles from './error.module.css';
import { Text } from '../text';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

type ErrorProps = {
  text: string;
  title: string;
  callback: VoidFunction;
}

export const Error = ({ text, title, callback }: ErrorProps): ReactElement => {
  return (
    <div className={styles.error}>
      <Text tag='h1' size='l' className='mb-6'>Что-то пошло не так.</Text>
      <Text tag='p' inactive>
        {text}
      </Text>
      <Button
        extraClass='mt-10'
        htmlType='button'
        type='primary'
        onClick={callback}
      >
        {title}
      </Button>
    </div>
  );
};
