import React, { ReactElement, useMemo } from 'react';
import { Ingredient, OrderModel } from 'types';
import { Loader, Price, Status, Text } from 'ui';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderIngredient } from './order-ingredient';
import styles from './order-details-view.module.css';
import cls from 'classnames';

type OrderDetailsViewProps = {
    order?: OrderModel;
    ingredientModels: Ingredient[];
};

export const OrderDetailsView = ({order, ingredientModels}: OrderDetailsViewProps): ReactElement => {
    const price = useMemo(() => {
        return ingredientModels.reduce((acc, curr) => acc + curr.price, 0);
    }, [ingredientModels]);

    const ingredientsCounts = useMemo(() => {
        if (!order?.ingredients) {
            return {};
        }
        return order?.ingredients
            ?.reduce((acc: Record<string, number>, curr:string) => ({...acc, [curr]: (acc[curr] ?? 0) + 1}), {});
    }, [order?.ingredients]);

    return (
        <div className={cls('scroll-parent pb-10 pl-10 pr-10', styles.container)}>
            {
                !order ?
                    <Loader className={styles.loader} /> :

                    <>
                        <div className='flex-column-center mb-10'>
                            <Text digits>{`#${order.number}`}</Text>
                        </div>

                        <Text size='m' tag='h2' className='mb-3'>{order.name}</Text>

                        <Status status={order.status}/>

                        <Text tag='h2' className='mt-15 mb-6' size='m'>
                            Состав:
                        </Text>

                        <div className={cls(styles.ingredientsContainer, 'custom-scroll pr-6')}>
                            {
                                ingredientModels.map(ingredient => (
                                    <OrderIngredient
                                        key={ingredient._id}
                                        image={ingredient.image_mobile}
                                        name={ingredient.name}
                                        price={ingredient.price}
                                        count={ingredientsCounts[ingredient._id]} />
                                ))
                            }
                        </div>

                        <div className='flex-spaced pt-10'>
                            <Text inactive>
                                <FormattedDate date={new Date(order.createdAt)} />
                            </Text>
                            <Price price={price} />
                        </div>
                    </>
            }
        </div>
    );
};
