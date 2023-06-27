import React, { ComponentProps, ReactElement } from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Loader } from '../loader';
import cls from 'classnames';
import styles from './button-with-loader.module.css';

type ButtonWithLoaderProps = ComponentProps<typeof Button> & {
  loading: boolean
}

export const ButtonWithLoader = ({
  loading,
  children,
  extraClass,
  disabled,
  ...props
}: ButtonWithLoaderProps): ReactElement => {
  return (
    <Button {...props}
            disabled={disabled || loading}
            extraClass={cls('flex-center', extraClass, loading && styles.loading)}>
      <Loader
        className={styles.spinner}
        color='#fff'
        height={24}
        width={24} />
      <div className={styles.content}>{children}</div>
    </Button>
  );
};
