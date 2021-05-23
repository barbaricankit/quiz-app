"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const { router: QuizRouter } = require("./routes/quiz.route");
const room_model_1 = require("./models/room.model");
const mongoose_db_1 = require("./db/mongoose.db");
const { router: roomRouter } = require("./routes/rooms.route");
mongoose_db_1.MongoClient();
app.use(cors());
app.use(bodyparser.json());
app.get("/", (req, res) => {
    res.json({ success: true, message: "Socket is created" });
});
app.set("socketio", io);
app.use(QuizRouter);
app.use(roomRouter);
server.listen(3001, () => {
    console.log("Server started at PORT 3001");
});
io.on("connection", (socket) => {
    console.log("User Connected " + socket.id);
    socket.emit("user id", { userId: socket.id });
    socket.on("create room data", (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { roomId, category, hostName } = data.hash;
        const roomInfo = new room_model_1.Rooms({
            roomId,
            category,
            hostId: socket.id,
            hostName,
        });
        yield roomInfo.save();
    }));
    socket.on("join room", (data) => __awaiter(void 0, void 0, void 0, function* () {
        console.log({ data });
        const { roomId, category, users: { userName }, } = data.hash;
        const roomInfo = yield room_model_1.Rooms.findOne({ roomId });
        if (roomInfo) {
            const categoryName = roomInfo.category === category;
            if (categoryName) {
                if (roomInfo.users.length < 3) {
                    yield roomInfo.users.push({
                        userId: socket.id,
                        userName: userName,
                    });
                    yield roomInfo.save();
                    socket.emit("room found", { success: true, roomId: roomInfo.roomId });
                }
                else {
                    socket.emit("room found", {
                        success: false,
                        message: "No more room",
                    });
                }
            }
            else {
                socket.emit("room found", {
                    success: false,
                    message: "Room Id doesn't match with the category",
                });
            }
        }
        else {
            socket.emit("room found", { success: false, message: "Invalid Room Id" });
        }
    }));
    // socket.on("find members acc to category", async (data: any) => {
    //   const room = await Rooms.findOne({ roomId: data.roomId });
    //   console.log({ room, data });
    //   if (room.category === data.category) {
    //     socket.emit("get Members", {
    //       users: room.users,
    //       hostId: room.hostId,
    //       hostName: room.hostName,
    //     });
    //   }
    // });
});
//# sourceMappingURL=index.js.map