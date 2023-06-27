import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ComponentProps, ComponentType, ReactElement } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

type Props<T> = ComponentProps<typeof Input> & UseControllerProps<T>;

export function inputControllerTemplate<T>(): ComponentType<Props<T>> {
  return (props: Props<T>): ReactElement => {
    const { field, formState: { errors } } = useController<T>(props);

    return (
      <Input
        {...props}
        {...field}
        error={Boolean(errors[props.name])} />
    );
  };
}
