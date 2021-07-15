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
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });
const { router: QuizRouter } = require('./routes/quiz.route');
const { routers: QuizCategoryRouter } = require('./routes/quiz.category.route');
const { userRouter } = require('./routes/user.route');
const room_model_1 = require("./models/room.model");
const mongoose_db_1 = require("./db/mongoose.db");
mongoose_db_1.MongoClient();
app.use(cors());
app.use(express.json());
app.use(QuizCategoryRouter);
app.use(QuizRouter);
app.use('/user', userRouter);
app.get('/', (req, res) => {
    res.json({ success: true, message: 'Socket is created' });
});
server.listen(process.env.PORT || 4001, () => {
    console.log('Server started at PORT', process.env.PORT || 4001);
});
io.on('connection', (socket) => {
    socket.emit('user id', { userId: socket.id });
    socket.on('create room data', (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { roomId, category, host } = data;
        const roomInfo = new room_model_1.Rooms({
            roomId,
            category,
            host: { hostId: socket.id, hostName: host.hostName }
        });
        yield roomInfo.save();
    }));
    socket.on('join room', (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { roomId, category, users: { userName } } = data;
        const room = yield room_model_1.Rooms.findOne({ roomId });
        if (room) {
            const categoryName = room.category === category;
            if (categoryName) {
                if (room.users.length < 3) {
                    yield room.users.push({
                        userId: socket.id,
                        userName: userName,
                        score: 0
                    });
                    yield room.save();
                    socket.emit('room found', { success: true, roomId: room.roomId });
                }
                else {
                    socket.emit('room found', {
                        success: false,
                        message: 'No more room'
                    });
                }
            }
            else {
                socket.emit('room found', {
                    success: false,
                    message: "Room Id doesn't match with the category"
                });
            }
        }
        else {
            socket.emit('room found', { success: false, message: 'Invalid Room Id' });
        }
    }));
    socket.on('waiting room', (data) => __awaiter(void 0, void 0, void 0, function* () {
        const roomId = data.roomId;
        const room = yield room_model_1.Rooms.findOne({ roomId });
        const { host, users } = room;
        io.emit(`members for ${room.category} category`, {
            roomId,
            host,
            users
        });
    }));
    socket.on('start the game', () => __awaiter(void 0, void 0, void 0, function* () {
        io.emit("let's play", {});
    }));
    socket.on('score updates', (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { userId, score, roomId } = data;
        const room = yield room_model_1.Rooms.findOne({ roomId });
        if (room.host.hostId === userId) {
            room.host.score = score;
            yield room.save();
        }
        else {
            room.users.forEach((user) => {
                if (user.userId === userId) {
                    user.score = score;
                }
            });
            yield room.save();
        }
    }));
    socket.on('end the quiz', (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { roomId, userId, score } = data;
        const room = yield room_model_1.Rooms.findOne({ roomId });
        if (room.host.hostId === userId) {
            room.host.finalScore = score;
            yield room.save();
        }
        else {
            room.users.forEach((user) => {
                if (user.userId === userId) {
                    user.finalScore = score;
                }
            });
            yield room.save();
        }
        io.emit('final score of each user', { room });
    }));
});
//# sourceMappingURL=index.js.map