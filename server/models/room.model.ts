import { Room_Type } from "../dataTypes/data.types";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema: Room_Type = new Schema({
  roomId: String,
  category: String,
  host: { hostId: String, hostName: String, score: Number, finalScore: Number },
  users: [
    { userId: String, userName: String, score: Number, finalScore: Number },
  ],
});

const Rooms = mongoose.model("Room", roomSchema);

export { Rooms };
