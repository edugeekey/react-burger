import React, { ReactElement } from 'react';
import { ConstructorItemCard } from '../constructor-item-card';
import { Ingredient } from 'types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Align } from '../../types';
import './bun-item.css';

function getBunLabel(name: string, align?: Align): string {
  switch (align) {
    case 'top': {
      return `${name} (верх)`;
    }
    case 'bottom': {
      return `${name} (низ)`;
    }
    default: {
      return name;
    }
  }
}

type BunItemProps = {
  bun: Ingredient | null;
  align: Align;
}
export const BunItem = ({bun, align}: BunItemProps): ReactElement => {
  return (
    <ConstructorItemCard isLocked={true} className={align === 'top' ? 'mb-4' : 'mt-4'}>
      {
        bun ?
          <ConstructorElement
            extraClass='ml-6'
            type={align}
            isLocked={true}
            thumbnail={bun.image_mobile}
            text={getBunLabel(bun.name, align)}
            price={bun.price} />
          :
          <ConstructorElement
            extraClass='bun-item-placeholder ml-6'
            type={align}
            thumbnail=''
            price={0}
            isLocked={true}
            text='Здесь должна быть ваша булочка' />
      }
    </ConstructorItemCard>
  );
};
