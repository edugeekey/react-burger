import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ComponentType, ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { ControllerProps } from './types';

type Props<T extends FieldValues> = ControllerProps<T, typeof Input>;

export function inputControllerTemplate<T extends FieldValues>(): ComponentType<Props<T>> {
  return (props: Props<T>): ReactElement => {
    const { field, formState: { errors } } = useController<T>(props);

    return (
      <Input
        {...props}
        {...field}
        error={!!errors[props.name]} />
    );
  };
}
