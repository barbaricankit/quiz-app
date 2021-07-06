export type Member_Type = {
	users: User_Type[];
	host: Host_Type;
	roomId: string;
};
export type User_Type = {
	userName: string;
	userId: string;
};
export type Host_Type = {
	hostId: string;
	hostName: string;
};
