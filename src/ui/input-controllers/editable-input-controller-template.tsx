import { EditableInput } from '../editable-input';
import { FieldValues, PathValue, useController } from 'react-hook-form';
import React, { ComponentType, ReactElement } from 'react';
import { ControllerProps } from './types';

type Props<T extends FieldValues> = ControllerProps<T, typeof EditableInput>;
export function editableInputControllerTemplate<T extends FieldValues>(): ComponentType<Props<T>> {
  return (props: Props<T>): ReactElement => {
    const { field, formState: { errors } } = useController<T>(props);

    return (
        <EditableInput
            {...props}
            {...field}
            onChange={(x: string): void => field.onChange(x as PathValue<FieldValues, string>)}
            error={!!errors[props.name]} />
    );
  };
}
