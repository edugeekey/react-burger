import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Text } from 'ui';
import { AppRoutes } from 'const';

export const LoginPageFooter = (): ReactElement => {
  return (
    <>
      <Text className='mb-4'>
        Вы&nbsp;— новый пользователь?{' '}
        <Link to={AppRoutes.Register}>
          <Text color='accent'>Зарегистрироваться</Text>
        </Link>
      </Text>
      <Text>
        Забыли пароль?{' '}
        <Link to={AppRoutes.ForgotPassword}>
          <Text color='accent'>Восстановить пароль</Text>
        </Link>
      </Text>
    </>
  );
};
