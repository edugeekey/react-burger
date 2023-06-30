import React, { ReactElement } from 'react';
import {
  ButtonWithLoader,
  FormPageLayout,
  inputControllerTemplate,
  passwordInputControllerTemplate,
  Text,
} from 'ui';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppRoutes } from 'const';
import { resetPassword, ResetPasswordProps, useRequest } from 'api';
import { getRedirectedFromRoute, removeRedirectedFromRoute } from 'utils/sessionStorageHelper';

type ResetPasswordForm = ResetPasswordProps;

const InputController = inputControllerTemplate<ResetPasswordForm>();
const PasswordInputController = passwordInputControllerTemplate<ResetPasswordForm>();

export const ResetPasswordPage = (): ReactElement => {
  const navigate = useNavigate();

  const { isLoading, hasError, request } = useRequest(resetPassword, () => {
    removeRedirectedFromRoute();
    navigate(AppRoutes.Login, { replace: true });
  });

  const { control, handleSubmit } = useForm<ResetPasswordForm>({
    mode: 'onBlur',
    defaultValues: { password: '', token: '' },
  });

  if (getRedirectedFromRoute() !== AppRoutes.ForgotPassword) {
    return <Navigate to={AppRoutes.ForgotPassword} replace />;
  }

  return (
    <FormPageLayout
      hasError={hasError}
      title='Восстановление пароля'
      footer={
        <Text>
          Вспомнили пароль?{' '}
          <Link to={AppRoutes.Login}>
            <Text color='accent'>Войти</Text>
          </Link>
        </Text>
      }
    >
      <form onSubmit={handleSubmit(request)}>
        <FormPageLayout.Row>
          <PasswordInputController
            name='password'
            control={control}
            placeholder='Введите новый пароль'
            rules={{ required: true }}
          />
        </FormPageLayout.Row>

        <FormPageLayout.Row>
          <InputController
            name='token'
            control={control}
            placeholder='Введите код из письма'
            rules={{ required: true }}
          />
        </FormPageLayout.Row>

        <FormPageLayout.Row>
          <ButtonWithLoader htmlType='submit' loading={isLoading}>
            Сохранить
          </ButtonWithLoader>
        </FormPageLayout.Row>
      </form>
    </FormPageLayout>
  );
};
