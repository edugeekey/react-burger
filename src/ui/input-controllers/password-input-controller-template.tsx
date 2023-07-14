import { PasswordInput } from '../password-input';
import { FieldValues, useController } from 'react-hook-form';
import React, { ComponentType, ReactElement } from 'react';
import { ControllerProps } from './types';

type Props<T extends FieldValues> = ControllerProps<T, typeof PasswordInput>;
export function passwordInputControllerTemplate<T extends FieldValues>(): ComponentType<Props<T>> {
  return (props: Props<T>): ReactElement => {
    const { field, formState: { errors } } = useController<T>(props);

    return (
        <PasswordInput
            {...props}
            {...field}
            error={!!errors[props.name]} />
    );
  };
}
