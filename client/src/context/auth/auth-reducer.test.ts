import { Auth_Action_Type, Auth_State_Type } from './auth-context.type';
import { manageAuth } from './auth-reducer';

test('user logout from the application then reset all the initial conditions', () => {
	const initialStateValue: Auth_State_Type = {
		token: 'ABCD',
		username: 'ankit',
		password: '12345',
		reenterPassword: '12345'
	};
	const finalStateValue: Auth_State_Type = {
		token: '',
		username: '',
		password: '',
		reenterPassword: ''
	};
	const action_type: Auth_Action_Type = {
		type: 'RESET_ALL'
	};

	const stateValue = manageAuth(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});

test('set the username who is playing the quiz', () => {
	const initialStateValue: Auth_State_Type = {
		token: '',
		username: '',
		password: '',
		reenterPassword: ''
	};
	const action_type: Auth_Action_Type = {
		type: 'SET_USERNAME',
		payload: { username: 'Ankit' }
	};
	const finalStateValue: Auth_State_Type = {
		token: '',
		username: 'Ankit',
		password: '',
		reenterPassword: ''
	};

	const stateValue = manageAuth(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});

test('set the token for the loginned user', () => {
	const initialStateValue: Auth_State_Type = {
		token: '',
		username: '',
		password: '',
		reenterPassword: ''
	};
	const action_type: Auth_Action_Type = {
		type: 'SET_TOKEN',
		payload: { token: 'ABCD' }
	};
	const finalStateValue: Auth_State_Type = {
		token: 'ABCD',
		username: '',
		password: '',
		reenterPassword: ''
	};

	const stateValue = manageAuth(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});

test('set the password for the user who is trying to login', () => {
	const initialStateValue: Auth_State_Type = {
		token: '',
		username: '',
		password: '',
		reenterPassword: ''
	};
	const action_type: Auth_Action_Type = {
		type: 'SET_PASSWORD',
		payload: { password: '12345' }
	};
	const finalStateValue: Auth_State_Type = {
		token: '',
		username: '',
		password: '12345',
		reenterPassword: ''
	};

	const stateValue = manageAuth(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});

test('set the confirm password for the user who is trying to login', () => {
	const initialStateValue: Auth_State_Type = {
		token: '',
		username: '',
		password: '',
		reenterPassword: ''
	};
	const action_type: Auth_Action_Type = {
		type: 'SET_RE_ENTER_PASSWORD',
		payload: { reenterPassword: '12345' }
	};
	const finalStateValue: Auth_State_Type = {
		token: '',
		username: '',
		password: '',
		reenterPassword: '12345'
	};

	const stateValue = manageAuth(initialStateValue, action_type);

	expect(stateValue).toEqual(finalStateValue);
});
