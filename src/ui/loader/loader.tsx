import React, { ReactElement } from 'react';
import { ReactComponent as Spinner } from './ring-resize.svg';
import styles from './loader.module.css';
import cls from 'classnames';

type LoaderProps = {
  color?: string;
  height?: number;
  width?: number;
  className?: string;
}
export const Loader = (
  {
    color = '#4c4cff',
    height = 100,
    width = 100,
    className
  }: LoaderProps
): ReactElement => {
  return (
      <Spinner
        className={cls(styles.loader, className)}
        height={height}
        width={width}
        stroke={color} />
  );
};
