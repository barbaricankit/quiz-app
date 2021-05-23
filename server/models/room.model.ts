const mongoose = require("mongoose");
const { Schema } = mongoose;
export type User_Type = {
  userId: string;
  userName: string;
};
export type Room_Type = {
  roomId: string;
  category: string;
  hostId: string;
  hostName: string;
  users?: User_Type[];
};

const roomSchema: Room_Type = new Schema({
  roomId: String,
  category: String,
  hostId: String,
  hostName: String,

  users: [{ userId: String, userName: String }],
});

const Rooms = mongoose.model("Room", roomSchema);

export { Rooms };
