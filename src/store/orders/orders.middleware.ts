import { TwsActionTypes, wsMiddleware } from '../middlewares';
import { wsConnect, wsDisconnect, onOpen, onMessage } from './orders.actions';
import { WsOrdersMessage } from 'types';

const wsActions: TwsActionTypes<WsOrdersMessage> = {
    wsConnect,
    wsDisconnect,
    onOpen,
    onMessage,
};

export const ordersMiddleware = wsMiddleware(wsActions);
