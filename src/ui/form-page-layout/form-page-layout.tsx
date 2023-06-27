import React, { ReactElement } from 'react';
import { Text } from 'ui/text';
import { ChildrenProps } from 'types';
import styles from './form-page-layout.module.css';

type FormPageProps = ChildrenProps & {
  hasError?: boolean;
  title: string;
  footer: ReactElement;
}
const FormPage = (
  {
    title,
    hasError,
    children,
    footer
  }: FormPageProps
): ReactElement => {
  return (
    <section className={`${styles.container} pb-30`}>
      <Text
        tag='h1'
        size='m'
        className={styles.header}>
        {title}
      </Text>

      <div className='pt-6 mb-20 pos-rel'>
        {children}
        {
          hasError &&
          <Text
            className={styles.error}
            color='error'>
            Введите корректные данные
          </Text>
        }
      </div>

      <section className={styles.footer}>
        {footer}
      </section>
    </section>
  );
};

const FormPageSlot = ({ children }: ChildrenProps): ReactElement => {
  return (
    <div className={`${styles.slot} mb-6`}>{children}</div>
  );
};

export const FormPageLayout = FormPage as typeof FormPage & {
  Row: typeof FormPageSlot;
};
FormPageLayout.Row = FormPageSlot;
