import React, { ReactElement } from 'react';
import { ButtonWithLoader, FormPageLayout, inputControllerTemplate, passwordInputControllerTemplate } from 'ui';
import { LoginPageFooter } from 'pages/login-page/login-page-footer';
import { useForm } from 'react-hook-form';
import { emailPattern } from 'utils/validators';
import { LoginProps } from 'api';
import { fetchLogin, hasLoginErrorSelector, isLoginLoadingSelector } from 'store/auth';
import { useAppDispatch, useAppSelector } from 'store';

type LoginForm = LoginProps;

const InputController = inputControllerTemplate<LoginForm>();
const PasswordInputController = passwordInputControllerTemplate<LoginForm>();

export const LoginPage = (): ReactElement => {
  const { control, handleSubmit } = useForm<LoginForm>({
    mode: 'onBlur',
    defaultValues: {email: '', password: ''}
  });

  const hasError = useAppSelector(hasLoginErrorSelector);
  const isLoading = useAppSelector(isLoginLoadingSelector);
  const dispatch = useAppDispatch();

  const onSubmit = (form: LoginForm): void => {
    dispatch(fetchLogin(form));
  };

  return (
    <FormPageLayout
      hasError={hasError}
      title='Вход'
      footer={<LoginPageFooter />}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormPageLayout.Row>
          <InputController
            name='email'
            type='email'
            placeholder='E-mail'
            control={control}
            rules={{required: true, pattern: emailPattern}}/>
        </FormPageLayout.Row>

        <FormPageLayout.Row>
          <PasswordInputController
            name='password'
            placeholder='Пароль'
            control={control}
            rules={{required: true}}/>
        </FormPageLayout.Row>

        <FormPageLayout.Row>
          <ButtonWithLoader htmlType='submit' loading={isLoading}>
            Войти
          </ButtonWithLoader>
        </FormPageLayout.Row>
      </form>
    </FormPageLayout>
  );
};
