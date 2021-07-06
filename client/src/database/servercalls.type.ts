export type Quiz_Type = {
	category: string;
	points?: number;
	bonuspoints?: number;
	negativepoints?: number;
	question: string;
	options: Option_Type[];
};
export type Network_Data_Type = {
	success?: boolean;
	categories: { category: string[] };
	quiz: Quiz_Type[];
};
export type Option_Type = {
	optionvalue: string;
	isCorrect: boolean;
};
export type Get_Quiz_Data_Type = {
	category: string[];
	quiz: Quiz_Type[];
};
export type Server_Error_Type = {
	errorCode: number;
	message: string;
};
export type Auth_Response_Type = {
	success: boolean;
	token?: string;
	username?: string;
	message?: string;
};
export type Auth_Post_Data_Type = {
	username: string;
	password: string;
};
