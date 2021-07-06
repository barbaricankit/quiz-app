import { Auth_Action_Type, Auth_State_Type } from './auth-context.type';

export const manageAuth = (state: Auth_State_Type, action: Auth_Action_Type) => {
	switch (action.type) {
		case 'RESET_ALL':
			return { ...state, token: '', username: '', password: '', reenterPassword: '' };
		case 'SET_TOKEN':
			return { ...state, token: action.payload.token };
		case 'SET_USERNAME':
			return { ...state, username: action.payload.username };
		case 'SET_PASSWORD':
			return { ...state, password: action.payload.password };
		case 'SET_RE_ENTER_PASSWORD':
			return { ...state, reenterPassword: action.payload.reenterPassword };
		default:
			return state;
	}
};
