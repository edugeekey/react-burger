import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { orderByNumberSelector } from 'store/orders';
import { useSelectorWithProps } from 'store';
import { OrderDetailsView } from './order-details-view';
import { uniqueIngredientsByIdsSelector } from 'store/ingredients';
import { useRequest, getOrder } from 'api';
import { ReloadPageError } from 'ui';

export const OrderDetails = (): ReactElement => {
    const {id} = useParams();

    const storedOrder = useSelectorWithProps(orderByNumberSelector, Number(id), [id]);

    const { response, request, hasError } = useRequest(getOrder);

    const order = storedOrder ?? response?.orders?.[0];

    const ingredientModels = useSelectorWithProps(uniqueIngredientsByIdsSelector, order?.ingredients, [order?.ingredients]);

    useEffect(() => {
        if (!storedOrder) {
            request(Number(id));
        }
    }, [request, storedOrder, id]);

    return (
        hasError ?
            <ReloadPageError /> :
            <OrderDetailsView order={order} ingredientModels={ingredientModels} />
    );
};
