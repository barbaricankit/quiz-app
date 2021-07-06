import { manageAuth, useContext, useReducer } from '.';
import { createContext } from 'react';
import { Auth_Context_Type, Auth_Provider_Prop_Type, Auth_State_Type } from './auth-context.type';
export const initialStateValue: Auth_State_Type = {
	token: '',
	username: '',
	password: '',
	reenterPassword: ''
};
export const AuthContext = createContext({});

export const AuthProvider = ({ children }: Auth_Provider_Prop_Type) => {
	const [ state, dispatch ] = useReducer(manageAuth, initialStateValue);

	return <AuthContext.Provider value={{ authState: state, authDispatch: dispatch }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): Auth_Context_Type => useContext(AuthContext) as Auth_Context_Type;
