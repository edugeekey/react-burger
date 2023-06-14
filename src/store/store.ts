import { configureStore } from '@reduxjs/toolkit';
import { ingredientsReducer } from './ingredients';
import { burgerConstructorReducer } from './burger-constructor/';
import { orderReducer } from './order';
import type {} from 'redux-thunk/extend-redux';

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    order: orderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
