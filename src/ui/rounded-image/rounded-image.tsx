import React, { ReactElement } from 'react';
import styles from './rounded-image.module.css';
import cls from 'classnames';
import { ChildrenProps } from 'types';

type IngredientRoundedImageProps = ChildrenProps & {
    image: string;
    className?: string;
    zIndex?: number;
    alt?: string;
};
export const RoundedImage = (
    {
        image,
        alt = 'ingredient',
        className,
        zIndex,
        children
    }: IngredientRoundedImageProps
): ReactElement => {
    return (
        <div
            style={{zIndex}}
            className={cls(styles.ingredient, className)}>
            <img src={image} width={112} height={56} alt={alt} />
            {children}
        </div>
    );
};
