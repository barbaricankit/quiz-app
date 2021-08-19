import { Socket_Action_Type, Socket_State_Type } from './socket-context.type';

export const initialSocketValue: Socket_State_Type = {
	websocket: null,
	userId: '',
	roomId: ''
};

export const manageSocket = (state: Socket_State_Type, action: Socket_Action_Type) => {
	switch (action.type) {
		case 'SET_USER_ID':
			return { ...state, userId: action.payload.userId };
		case 'SET_ROOM_ID':
			return { ...state, roomId: action.payload.roomId };
		case 'SET_SOCKET_CONNECTION':
			return { ...state, websocket: action.payload.socket };
		default:
			return state;
	}
};
