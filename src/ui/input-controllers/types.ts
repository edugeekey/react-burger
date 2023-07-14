import { FieldValues, UseControllerProps } from 'react-hook-form';
import React, { ComponentProps, JSXElementConstructor } from 'react';
import IntrinsicElements = React.JSX.IntrinsicElements;

export type ControllerProps<
    TValues extends FieldValues,
    TComponent extends (keyof IntrinsicElements | JSXElementConstructor<any>)
> = Omit<ComponentProps<TComponent> & UseControllerProps<TValues>, 'value' | 'onChange'>;
