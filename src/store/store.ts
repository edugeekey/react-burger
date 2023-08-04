import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ingredientsReducer } from './ingredients';
import { burgerConstructorReducer } from './burger-constructor/';
import { orderReducer } from './order';
import { authReducer } from './auth';
import { ordersMiddleware, ordersReducer } from './orders';
import { profileOrdersMiddleware, profileOrdersReducer } from './profile-orders';
import type {} from 'redux-thunk/extend-redux';

const reducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
  orders: ordersReducer,
  profileOrders: profileOrdersReducer,
  auth: authReducer
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), ordersMiddleware, profileOrdersMiddleware];
  }
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
