import React, { ReactElement, useCallback, useEffect } from 'react';
import {
  ButtonWithLoader,
  editableInputControllerTemplate,
  FormPageLayout, Text
} from 'ui';
import { useForm } from 'react-hook-form';
import { emailPattern } from 'utils/validators';
import { fetchEditUser, hasEditUserErrorSelector, isEditUserLoadingSelector, userSelector } from 'store/auth';
import { useAppDispatch, useAppSelector } from 'store';
import { EditUserProps } from 'api';
import styles from './phone-form.module.css';

type ProfileFormType = EditUserProps;

const EditableInputController = editableInputControllerTemplate<ProfileFormType>();

export const ProfileForm = (): ReactElement => {
  const user = useAppSelector(userSelector);
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
    reset
  } = useForm<ProfileFormType>({
    mode: 'onChange',
    defaultValues: { name: user?.name, email: user?.email, password: '' },
  });

  const hasError = useAppSelector(hasEditUserErrorSelector);
  const isLoading = useAppSelector(isEditUserLoadingSelector);
  const dispatch = useAppDispatch();

  const handleCancel = useCallback((): void => {
    reset({name: user?.name, email: user?.email, password: ''});
  }, [reset, user]);

  useEffect(() => {
    handleCancel();
  }, [handleCancel]);

  const onSubmit = (form: ProfileFormType): void => {
    dispatch(fetchEditUser(form));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormPageLayout.Row>
        <EditableInputController
          name='name'
          placeholder='Имя'
          control={control}
          rules={{ required: true }}
        />
      </FormPageLayout.Row>

      <FormPageLayout.Row>
        <EditableInputController
          name='email'
          type='email'
          placeholder='Логин'
          control={control}
          rules={{ pattern: emailPattern, required: true }}
        />
      </FormPageLayout.Row>

      <FormPageLayout.Row>
        <EditableInputController
          name='password'
          type='password'
          placeholder='Пароль'
          control={control}
        />
      </FormPageLayout.Row>
      {
        isDirty &&
        <div className={styles.actions}>
          <Text
            tag='a'
            className='mr-7 clickable'
            color='accent' onClick={handleCancel}>Отмена</Text>
          <ButtonWithLoader
            htmlType='submit'
            loading={isLoading}
            disabled={!isValid}>
            Сохранить
          </ButtonWithLoader>
        </div>
      }
      {
        hasError &&
        <Text
          tag='p'
          className={`${styles.error} pt-4`}
          color='error'>
          Введены некорректные данные
        </Text>
      }
    </form>
  );
};
