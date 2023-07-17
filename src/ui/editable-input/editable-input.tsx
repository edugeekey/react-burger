import React, { ChangeEvent, ComponentProps, ForwardedRef, forwardRef, ReactElement, useEffect, useState } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';

type EditableInputProps = Omit<ComponentProps<typeof Input>, 'onChange'> & {
  onChange: (x: string) => void
}
export const EditableInput = forwardRef(
  ({value, onChange, ...props}: EditableInputProps, ref: ForwardedRef<HTMLInputElement>
  ): ReactElement => {
  const [editable, setEditable] = useState<boolean>(false);
  const [val, setVal] = useState<string>(value);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setVal(e.target.value);
    onChange(e.target.value);
  };

  const handleIconClick = (): void => {
    if (editable) {
      setVal('');
      onChange('');
    }
    setEditable(true);
  };

  return (
    <Input
      {...props}
      ref={ref}
      value={val}
      onChange={handleChange}
      disabled={!editable}
      onIconClick={handleIconClick}
      icon={editable ? 'CloseIcon' : 'EditIcon'} />
  );
});
