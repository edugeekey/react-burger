import React, { ReactElement } from 'react';
import { Text } from 'ui';
import { DragType } from '../../../types';
import { useDrop } from 'react-dnd';
import { Ingredient } from 'types';
import { useAppDispatch } from 'store';
import { addBun, addConstructorIngredient } from 'store/burger-constructor';
import cls from 'classnames';
import styles from './drag-placeholder.module.css';
import { DATA_TEST } from 'utils/dataTest';

type DragPlaceholderProps = {
  bun: Ingredient | null;
  alwaysShow: boolean;
}

export const DragPlaceholder = ({ alwaysShow, bun }: DragPlaceholderProps): ReactElement | null => {
  const dispatch = useAppDispatch();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: DragType.MoveIngredient,
    drop: (item: Ingredient): void => {
      if (item.type === 'bun') {
        dispatch(addBun(item));
      } else {
        dispatch(addConstructorIngredient(item));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }), [bun]);

  return alwaysShow || canDrop ? (
    <div ref={drop}
         data-test={DATA_TEST.DragPlaceholder}
         className={cls(styles.dragPlaceholder, canDrop && isOver && styles.bgHighlighter)}>
      {alwaysShow && <Text inactive>Перетащите сюда ингредиент</Text>}
    </div>
  ) : null;
};
