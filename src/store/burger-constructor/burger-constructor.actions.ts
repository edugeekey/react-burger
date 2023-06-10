import { createAction, nanoid } from '@reduxjs/toolkit';
import { typeFn } from './const';

export const addIngredient = createAction(typeFn('/add_ingredient'),
  (action) => {
    return {
      payload: {...action.payload, nanoid: nanoid()}
    }
  }
);

export const removeIngredient = createAction<string>(typeFn('/remove_ingredient'));
