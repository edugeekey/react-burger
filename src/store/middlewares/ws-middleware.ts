import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { RootState } from '../store';

export type TwsActionTypes<TMessage = unknown, TSendMessage = unknown> = {
    wsConnect: ActionCreatorWithPayload<string>;
    wsDisconnect: ActionCreatorWithoutPayload;
    wsSendMessage?: ActionCreatorWithPayload<TSendMessage>;
    wsConnecting?: ActionCreatorWithoutPayload;
    onOpen?: ActionCreatorWithoutPayload;
    onClose?: ActionCreatorWithoutPayload;
    onError?: ActionCreatorWithPayload<string>;
    onMessage: ActionCreatorWithPayload<TMessage>;
}

export function wsMiddleware<TMessage, TSendMessage>(wsActions: TwsActionTypes<TMessage, TSendMessage>): Middleware<void, RootState> {
    return (store) => {
        let socket: WebSocket | null = null;
        let isConnected = false;
        let reconnectTimer = 0;
        let url = '';

        return next => action => {
            const { dispatch } = store;
            const { wsConnect, wsDisconnect, wsSendMessage, onOpen,
                onClose, onError, onMessage, wsConnecting } = wsActions;

            if (wsConnect.match(action)) {
                console.log('connect');
                url = action.payload;
                socket = new WebSocket(url);
                isConnected = true;
                if (wsConnecting) {
                    dispatch(wsConnecting());
                }
            }

            if (socket) {
                socket.onopen = (): void => {
                    if (onOpen) {
                        dispatch(onOpen());
                    }
                };

                socket.onmessage = (event): void => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    dispatch(onMessage(parsedData));
                };

                socket.onclose = (event): void => {
                    if (event.code !== 1000 && onError) {
                        dispatch(onError(event.code.toString()));
                    }
                    if (onClose) {
                        dispatch(onClose());
                    }
                    if (isConnected) {
                        if (wsConnecting) {
                            dispatch(wsConnecting());
                        }
                        reconnectTimer = window.setTimeout(() => {
                            dispatch(wsConnect(url));
                        }, 3000);
                    }

                };

                if (wsSendMessage && wsSendMessage.match(action)) {
                    socket.send(JSON.stringify(action.payload));
                }

                if (wsDisconnect.match(action)) {
                    console.log('disconnect');
                    clearTimeout(reconnectTimer);
                    isConnected = false;
                    reconnectTimer = 0;
                    socket.close();
                    if (onClose) {
                        dispatch(onClose());
                    }
                }
            }

            return next(action);
        };
    };
}
