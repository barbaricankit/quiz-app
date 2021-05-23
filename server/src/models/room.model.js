"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rooms = void 0;
const mongoose = require("mongoose");
const { Schema } = mongoose;
const roomSchema = new Schema({
    roomId: String,
    category: String,
    hostId: String,
    hostName: String,
    users: [{ userId: String, userName: String }],
});
const Rooms = mongoose.model("Room", roomSchema);
exports.Rooms = Rooms;
//# sourceMappingURL=room.model.js.map