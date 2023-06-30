import React, { ReactElement } from 'react';
import {
  ButtonWithLoader,
  FormPageLayout,
  inputControllerTemplate,
  passwordInputControllerTemplate,
  Text,
} from 'ui';
import { useForm } from 'react-hook-form';
import { emailPattern } from 'utils/validators';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'const';
import { RegisterProps } from 'api';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchRegister, hasRegisterErrorSelector, isRegisterLoadingSelector } from 'store/auth';

type RegisterForm = RegisterProps;

const InputController = inputControllerTemplate<RegisterForm>();
const PasswordInputController = passwordInputControllerTemplate<RegisterForm>();

export const RegisterPage = (): ReactElement => {
  const { control, handleSubmit } = useForm<RegisterForm>({
    mode: 'onBlur',
    defaultValues: { name: '', email: '', password: '' },
  });
  const hasError = useAppSelector(hasRegisterErrorSelector);
  const isLoading = useAppSelector(isRegisterLoadingSelector);
  const dispatch = useAppDispatch();

  const onSubmit = (form: RegisterForm): void => {
    dispatch(fetchRegister(form));
  };

  return (
    <FormPageLayout
      hasError={hasError}
      title='Регистрация'
      footer={
        <Text>
          Уже зарегистрированы?{' '}
          <Link to={AppRoutes.Login}>
            <Text color='accent'>Войти</Text>
          </Link>
        </Text>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormPageLayout.Row>
          <InputController
            name='name'
            placeholder='Имя'
            control={control}
            rules={{ required: true }}
          />
        </FormPageLayout.Row>

        <FormPageLayout.Row>
          <InputController
            name='email'
            placeholder='E-mail'
            control={control}
            rules={{ required: true, pattern: emailPattern }}
          />
        </FormPageLayout.Row>

        <FormPageLayout.Row>
          <PasswordInputController
            name='password'
            placeholder='Пароль'
            control={control}
            rules={{ required: true }}
          />
        </FormPageLayout.Row>

        <FormPageLayout.Row>
          <ButtonWithLoader htmlType='submit' loading={isLoading}>
            Зарегистрироваться
          </ButtonWithLoader>
        </FormPageLayout.Row>
      </form>
    </FormPageLayout>
  );
};
