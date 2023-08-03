import React, { ReactElement } from 'react';
import { Price, RoundedImage, Text } from 'ui';
import styles from './order-ingredient.module.css';

type OrderIngredientProps = {
    image: string;
    name: string;
    price: number;
    count: number;
}

export const OrderIngredient = ({image, name, price, count}: OrderIngredientProps): ReactElement => {
    return (
        <div className='flex-spaced'>
            <div className='flex-center'>
                <RoundedImage image={image} className='mr-4'/>
                <Text className={styles.name}>{name}</Text>
            </div>
            <div className='flex-center'>
                <Text digits>{count}</Text>
                <Text className='ml-2 mr-2'>x</Text>
                <Price price={price} />
            </div>
        </div>
    );
};
