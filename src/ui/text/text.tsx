import React, { JSX, ReactElement } from 'react';
import { ChildrenProps, Size } from 'types';
import cls from 'classnames';

type TextProps = ChildrenProps & React.HTMLAttributes<HTMLOrSVGElement> & {
  tag?: keyof JSX.IntrinsicElements;
  size?: Size;
  digits?: boolean;
  inactive?: boolean;
}

function getSizeClass(size?: Size, digits?: boolean): string {
  const mainPart = digits ? 'text_type_digits' : 'text_type_main';
  let sizePart = 'default';
  switch (size) {
    case 'l': {
      sizePart = 'large';
      break;
    }
    case 'm': {
      sizePart = 'medium';
      break;
    }
    case 's': {
      sizePart = 'small';
      break;
    }
  }

  return `${mainPart}-${sizePart}`
}

export const Text = (
  {
    children,
    tag: Tag = 'span',
    digits,
    size = 'default',
    inactive = false,
    className,
    ...rest
  }: TextProps
): ReactElement => {
  return (
    <Tag
      className={cls('text', getSizeClass(size, digits), inactive && 'text_color_inactive', className)}
      {...rest}>
      {children}
    </Tag>
  );
};
