export type User_Type = {
  userId: string;
  userName: string;
  score: number;
  finalScore: number;
};
export type HOST_TYPE = {
  hostId: string;
  hostName: string;
  score: number;
  finalScore: number;
};
export type Room_Type = {
  roomId: string;
  category: string;
  host: HOST_TYPE;
  users?: User_Type[];
};
export type Quiz_Category_Type = {
  category: string[];
};

export type Join_Room_Data_type = {
  roomId: string;
  category: string;
  users?: User_Type;
};
export type Create_Room_Data_type = {
  roomId: string;
  category: string;
  host: HOST_TYPE;
};
export type Waiting_Room_Type = {
  roomId: string;
};

export type Score_Update_Type = {
  userId: string;
  roomId: string;
  score: number;
};
