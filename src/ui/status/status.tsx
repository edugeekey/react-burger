import React, { ReactElement } from 'react';
import { OrderStatus } from 'types';
import { Text } from '../text';

const statusToText = {
    [OrderStatus.Done]: 'Выполнен',
    [OrderStatus.Created]: 'Создан',
    [OrderStatus.Pending]: 'Готовится'
};

type StatusProps = {
    className?: string;
    status: OrderStatus;
}
export const Status = ({status, className}: StatusProps): ReactElement => {
    return (
        <Text
            tag='p'
            className={className}
            color={status === OrderStatus.Done ? 'success' : undefined}>
            {statusToText[status] ?? statusToText[OrderStatus.Created]}
        </Text>
    );
};
