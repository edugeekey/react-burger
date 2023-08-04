import React, { ReactElement, useMemo } from 'react';
import { OrderModel } from 'types';
import { Price, Status, Text } from 'ui';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelectorWithProps } from 'store';
import { ingredientsByIdsSelector } from 'store/ingredients';
import { OrderCardIngredients } from './order-card-ingredients';
import styles from './order-card.module.css';
import cls from 'classnames';

type OrderCardProps = {
    order: OrderModel;
    showStatus?: boolean;
    onClick: (order: OrderModel) => void;
};

export const OrderCard = (
    {
        order,
        showStatus,
        onClick
    }: OrderCardProps
): ReactElement => {
    const {number, name, createdAt, ingredients } = order;

    const ingredientModels = useSelectorWithProps(ingredientsByIdsSelector, ingredients, [ingredients]);

    const price = useMemo(() => {
        return ingredientModels.reduce((acc, curr) => acc + curr.price, 0);
    }, [ingredientModels]);

    return (
        <div
            className={cls(styles.card, 'mb-4', 'p-6')}
            onClick={(): void => onClick(order)}>
            <div className='flex-spaced'>
                <Text digits>{`#${number}`}</Text>
                <Text inactive>
                    <FormattedDate date={new Date(createdAt)} />
                </Text>
            </div>
            <div className='mt-6 mb-6'>
                <Text size='m'>{name}</Text>
                {showStatus && <Status className='mt-2' status={order.status} />}
            </div>
            <div className='flex-spaced'>
                <OrderCardIngredients ingredients={ingredientModels} />
                <Price price={price} />
            </div>
        </div>
    );
};
