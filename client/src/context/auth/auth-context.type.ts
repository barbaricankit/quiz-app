import { Dispatch } from 'react';

export type Auth_Context_Type = {
	authState: Auth_State_Type;
	authDispatch: Dispatch<Auth_Action_Type>;
};

export type Auth_State_Type = {
	token: string;
	username: string;
	password: string;
	reenterPassword: string;
};

export type Auth_Provider_Prop_Type = {
	children: React.ReactNode;
};

export type Auth_Action_Type =
	| { type: 'RESET_ALL' }
	| { type: 'SET_TOKEN'; payload: { token: string } }
	| { type: 'SET_USERNAME'; payload: { username: string } }
	| { type: 'SET_PASSWORD'; payload: { password: string } }
	| { type: 'SET_RE_ENTER_PASSWORD'; payload: { reenterPassword: string } };
