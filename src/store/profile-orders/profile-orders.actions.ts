import { createAction } from '@reduxjs/toolkit';
import { typeFn } from './const';
import { WsOrdersMessage } from 'types';

export const wsConnect = createAction<string>(typeFn('/connect'));

export const onOpen = createAction(typeFn('/open'));

export const wsDisconnect = createAction(typeFn('/disconnect'));

export const onMessage = createAction<WsOrdersMessage>(typeFn('/message'));
