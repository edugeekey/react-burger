import { useController } from 'react-hook-form';
import React, { ComponentType, ReactElement } from 'react';
import { InputControllerProps, InputControllerType, InputProps } from './types';

export function withInputController<T>(InputComponent: ComponentType<InputProps>): InputControllerType<T> {
    return ({ placeholder, type, ...props }: InputControllerProps<T>): ReactElement => {
        const { field, formState: { errors } } = useController<T>(props);

        return (
            <InputComponent
              {...field}
              type={type}
              placeholder={placeholder}
              error={Boolean(errors[props.name])} />
        );
    };
}
