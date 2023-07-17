import React, { memo, ReactElement, useCallback, useRef } from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredient } from 'types';
import { ConstructorItemCard } from '../constructor-item-card';
import { DragType } from 'components/types';
import { useDrag, useDrop } from 'react-dnd';
import styles from './ingredient-item.module.css';

export type DragItem = {
  index: number;
  id: string;
  type: string;
};

type IngredientItemProps = {
  ingredient: Ingredient;
  storeId: string;
  index: number;
  onRemove: (id: string) => void;
  onMove: (from: number, to: number) => void;
}

export const IngredientItem = memo((
  {
    ingredient,
    storeId,
    index,
    onRemove,
    onMove
  }: IngredientItemProps
): ReactElement => {
  const ref = useRef<HTMLLIElement | null>(null);
  const {image_mobile, price, name} = ingredient ?? {};

  const [{ isDragging }, drag] = useDrag({
    type: DragType.SortIngredient,
    item: () => {
      return { id: storeId, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop<DragItem, void>({
    accept: DragType.SortIngredient,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset?.y ?? 0) - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // When dragging upwards, only move when the cursor is above 50%
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      onMove(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  const handleClose = useCallback(() => {
    if (ingredient) {
      onRemove(storeId);
    }
  }, [storeId, onRemove, ingredient]);

  return (
    <ConstructorItemCard ref={ref} isLocked={false} className={isDragging && styles.hidden}>
      <ConstructorElement
        handleClose={handleClose}
        extraClass='ml-6'
        thumbnail={image_mobile}
        text={name}
        price={price} />
    </ConstructorItemCard>
  );
});
