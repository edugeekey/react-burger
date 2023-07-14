import React, { ComponentProps, ForwardedRef, forwardRef, ReactElement, useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

type PasswordInputProps = ComponentProps<typeof Input>;
export const PasswordInput = forwardRef(
    (props: PasswordInputProps, ref: ForwardedRef<HTMLInputElement>
    ): ReactElement => {
  const [type, setType] = useState<'password' | 'text' >('password');

  const toggleType = (): void => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  return (
    <Input
      {...props}
      ref={ref}
      onIconClick={toggleType}
      type={type}
      icon={type === 'password' ? 'ShowIcon' : 'HideIcon'} />
  );
});
