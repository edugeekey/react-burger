import React, { ReactElement, useMemo } from 'react';
import { Color } from 'types';
import { Text } from 'ui';

type OrderNumbersProps = {
    numbers: number[];
    label: string;
    color?: Color;
    itemsLimit?: number;
    colsLimit?: number;
}
export const OrderNumbers = (
    {
        numbers,
        label,
        color,
        colsLimit = 2,
        itemsLimit = 10
    }: OrderNumbersProps): ReactElement => {

    const columns = useMemo(() => {
        const columnsCount = Math.min(Math.ceil(numbers.length / itemsLimit), colsLimit);
        const cols: number[][] = [];

        for (let colIndex = 0; colIndex < columnsCount; colIndex++) {
            const col: number[] = [];
            for (let i = 0; i < itemsLimit; i++) {
                const originalIndex = colIndex * itemsLimit + i;
                if (originalIndex >= numbers.length) {
                    break;
                }
                col.push(numbers[originalIndex]);
            }
            cols.push(col);
        }

        return cols;
    }, [numbers, itemsLimit, colsLimit]);

    return (
        <div style={{flex: 1}}>
            <Text tag='h2' size='m'>{label}</Text>
            <div className='flex mt-6'>
                {
                    columns.map((col, colI) => (
                          <ul key={colI} className='mr-4'>
                              {
                                  col.map(colItem => (
                                      <li key={colItem} className='mb-2'>
                                          <Text digits color={color}>{colItem}</Text>
                                      </li>
                                  ))
                              }
                          </ul>
                        ))
                }
            </div>
        </div>
    );
};
