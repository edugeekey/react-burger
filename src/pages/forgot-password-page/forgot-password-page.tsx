import React, { ReactElement } from 'react';
import { ButtonWithLoader, FormPageLayout, inputControllerTemplate, Text } from 'ui';
import { Link, useNavigate } from 'react-router-dom';
import { emailPattern } from 'utils/validators';
import { useForm } from 'react-hook-form';
import { AppRoutes } from 'const';
import { sendResetPasswordCode, useRequest } from 'api';
import { setRedirectedFromRoute } from 'utils/sessionStorageHelper';

type ForgotPasswordForm = {
  email: string;
};

const InputController = inputControllerTemplate<ForgotPasswordForm>();

export const ForgotPasswordPage = (): ReactElement => {
  const navigate = useNavigate();

  const { isLoading, hasError, request } = useRequest(sendResetPasswordCode, () => {
    setRedirectedFromRoute(AppRoutes.ForgotPassword);
    navigate(AppRoutes.ResetPassword, { replace: true });
  });

  const { control, handleSubmit } = useForm<ForgotPasswordForm>({
    mode: 'onBlur',
    defaultValues: { email: '' },
  });

  const onSubmit = async (form: ForgotPasswordForm): Promise<void> => {
    request(form.email);
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormPageLayout.Row>
          <InputController
            name='email'
            control={control}
            placeholder='Укажите email'
            rules={{ required: true, pattern: emailPattern }}
          />
        </FormPageLayout.Row>

        <FormPageLayout.Row>
          <ButtonWithLoader htmlType='submit' loading={isLoading}>
            Восстановить
          </ButtonWithLoader>
        </FormPageLayout.Row>
      </form>
    </FormPageLayout>
  );
};
