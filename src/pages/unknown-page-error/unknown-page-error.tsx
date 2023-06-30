import React, { ReactElement } from 'react';
import { Error } from 'ui';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'const';

export const UnknownPageError = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <Error
      text='Такой страницы не существует'
      title='Вернуться на главную'
      callback={(): void => navigate(AppRoutes.Constructor, {replace: true})} />
  );
};
