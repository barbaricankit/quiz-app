import { getQuizData, setupAuthHeader, signIn, signUp, verifyToken } from './servercalls';
import axios from 'axios';
import { Auth_Response_Type, Get_Quiz_Data_Type, Network_Data_Type, Server_Error_Type } from './servercalls.type';
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
test('get the quiz data from the server', async () => {
	const data: Network_Data_Type = {
		success: true,
		categories: { category: [ 'IPL' ] },
		quiz: [
			{
				question: 'How many finals has Mahendra Singh Dhoni played in the IPL?',
				category: 'IPL',
				bonuspoints: 2,
				negativepoints: -1,
				options: [
					{
						optionvalue: '5',
						isCorrect: false
					},
					{
						optionvalue: '9',
						isCorrect: true
					},
					{
						optionvalue: '3',
						isCorrect: false
					},
					{
						optionvalue: '6',
						isCorrect: false
					}
				]
			}
		]
	};
	const expectedResponse: Get_Quiz_Data_Type = {
		category: [ 'IPL' ],
		quiz: [
			{
				question: 'How many finals has Mahendra Singh Dhoni played in the IPL?',
				category: 'IPL',
				bonuspoints: 2,
				negativepoints: -1,
				options: [
					{
						optionvalue: '5',
						isCorrect: false
					},
					{
						optionvalue: '9',
						isCorrect: true
					},
					{
						optionvalue: '3',
						isCorrect: false
					},
					{
						optionvalue: '6',
						isCorrect: false
					}
				]
			}
		]
	};

	mockedAxios.get.mockResolvedValue({ data });
	const actualResponse = await getQuizData();
	expect(actualResponse).toEqual(expectedResponse);
});

test('got error while retrieving the quiz data from the server', async () => {
	const error: Server_Error_Type = {
		errorCode: 500,
		message: 'Something went wrong'
	};

	mockedAxios.get.mockRejectedValue({ error });
	const response = await getQuizData();
	expect(response).toEqual(error);
});

test('verify the token from the server when user refreshes the page', async () => {
	const data: Auth_Response_Type = {
		success: true,
		token: 'ABCD',
		username: 'Ankit'
	};
	const expectedResponse = {
		token: 'ABCD',
		username: 'Ankit'
	};

	mockedAxios.get.mockResolvedValue({ data });
	const actualResponse = await verifyToken();
	expect(actualResponse).toEqual(expectedResponse);
});

test('setting up the default header for axios', async () => {
	const token = 'ABCD';
	const expectedResponse = 'ABCD';
	setupAuthHeader(token);
	const actualResponse = axios.defaults.headers.common['Authorization'];

	expect(actualResponse).toEqual(expectedResponse);
});

test('deleting the default header for axios', async () => {
	const token = null;
	const expectedResponse = undefined;
	setupAuthHeader(token);
	const actualResponse = axios.defaults.headers.common['Authorization'];

	expect(actualResponse).toEqual(expectedResponse);
});

test('verify user is able to sign in by entering correct username and password', async () => {
	const data: Auth_Response_Type = {
		success: true,
		token: 'ABCD',
		username: 'Ankit'
	};
	const expectedResponse = {
		token: 'ABCD',
		username: 'Ankit'
	};
	const user = {
		username: 'Ankit',
		password: '12345678'
	};
	mockedAxios.post.mockResolvedValue({ data });
	const actualResponse = await signIn(user);
	expect(actualResponse).toEqual(expectedResponse);
});

test('verify user gets error by entering incorrect username and password', async () => {
	const data: Auth_Response_Type = {
		success: false,
		message: 'Incorrect Password'
	};
	const expectedResponse = {
		message: 'Incorrect Password'
	};
	const user = {
		username: 'Ankit',
		password: '12345678'
	};
	mockedAxios.post.mockResolvedValue({ data });
	const actualResponse = await signIn(user);
	expect(actualResponse).toEqual(expectedResponse);
});

test('verify user is able to sign up by entering correct username and password', async () => {
	const data: Auth_Response_Type = {
		success: true,
		token: 'ABCD',
		username: 'Ankit'
	};
	const expectedResponse = {
		token: 'ABCD',
		username: 'Ankit'
	};
	const user = {
		username: 'Ankit',
		password: '12345678'
	};
	mockedAxios.post.mockResolvedValue({ data });
	const actualResponse = await signUp(user);
	expect(actualResponse).toEqual(expectedResponse);
});

test('verify user gets error while entering a username already in use', async () => {
	const data: Auth_Response_Type = {
		success: false,
		message: 'Username already in use'
	};
	const expectedResponse = {
		message: 'Username already in use'
	};
	const user = {
		username: 'Ankit',
		password: '12345678'
	};
	mockedAxios.post.mockResolvedValue({ data });
	const actualResponse = await signUp(user);
	expect(actualResponse).toEqual(expectedResponse);
});
