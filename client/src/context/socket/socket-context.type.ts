import { Dispatch } from 'react';

export type Socket_Action_Type =
	| { type: 'SET_USER_ID'; payload: { userId: string } }
	| { type: 'SET_ROOM_ID'; payload: { roomId: string } }
	| { type: 'SET_SOCKET_CONNECTION'; payload: { socket: any } };

export type Socket_Context_Type = {
	socketState: Socket_State_Type;
	socketDispatch: Dispatch<any>;
};

export type Socket_State_Type = {
	websocket: any;
	userId: string;
	roomId: string;
};
