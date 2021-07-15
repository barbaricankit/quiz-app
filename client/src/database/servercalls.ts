import {
	Get_Quiz_Data_Type,
	Network_Data_Type,
	Server_Error_Type,
	Auth_Post_Data_Type,
	Auth_Response_Type
} from './servercalls.type';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
//const url = process.env.REACT_APP_URL as string;
const url = 'http://localhost:4001/';
export const getQuizData = async (): Promise<Get_Quiz_Data_Type | Server_Error_Type | []> => {
	try {
		const { data: { success, quiz, categories: { category } } } = await axios.get<Network_Data_Type>(`${url}quiz`);
		if (success) {
			return { quiz, category };
		} else {
			return [];
		}
	} catch (error) {
		return { errorCode: 500, message: 'Something went wrong' };
	}
};

export const verifyToken = async () => {
	try {
		const { data: { success, username, token } } = await axios.get<Auth_Response_Type>(`${url}user/login`);
		if (success) {
			return { username, token };
		}
	} catch (error) {
		return error;
	}
};

export const setupAuthHeader = (token: string | null) => {
	if (token) {
		return (axios.defaults.headers.common['Authorization'] = token);
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
};

export const signUp = async (data: Auth_Post_Data_Type) => {
	try {
		const { data: response } = await axios.post<Auth_Response_Type>(`${url}user/signup`, data);

		if (response.success) {
			return { token: response.token, username: response.username };
		} else {
			return { message: response.message };
		}
	} catch (error) {
		return error;
	}
};
export const signIn = async (data: Auth_Post_Data_Type) => {
	try {
		const { data: response } = await axios.post<Auth_Response_Type>(`${url}user/signin`, data);
		if (response.success) {
			return { token: response.token, username: response.username };
		} else {
			return { message: response.message };
		}
	} catch (error) {
		return error;
	}
};
