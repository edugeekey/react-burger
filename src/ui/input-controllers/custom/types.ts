import { ComponentProps, ComponentType } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

export type InputProps = Omit<ComponentProps<typeof Input>, 'onChange'> & {
  onChange: (value: string) => void
};
export type InputControllerProps<T> = UseControllerProps<T> & InputProps;
export type InputControllerType<T> = ComponentType<InputControllerProps<T>>;
