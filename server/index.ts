const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

const { router: QuizRouter } = require("./routes/quiz.route");
const { routers: QuizCategoryRouter } = require("./routes/quiz.category.route");

import { Rooms } from "./models/room.model";
import { MongoClient } from "./db/mongoose.db";
import {
  Join_Room_Data_type,
  Room_Type,
  Waiting_Room_Type,
  Create_Room_Data_type,
  Score_Update_Type,
  User_Type,
} from "./dataTypes/data.types";

MongoClient();

app.use(cors());
app.use(express.json());

app.use(QuizCategoryRouter);
app.use(QuizRouter);

app.get("/", (req: any, res: any) => {
  res.json({ success: true, message: "Socket is created" });
});
server.listen(process.env.PORT || 3001, () => {
  console.log("Server started at PORT", process.env.PORT || 3001);
});

io.on("connection", (socket: any) => {
  console.log("User Connected " + socket.id);
  socket.emit("user id", { userId: socket.id });
  socket.on("create room data", async (data: Create_Room_Data_type) => {
    const { roomId, category, host } = data;
    const roomInfo = new Rooms({
      roomId,
      category,
      host: { hostId: socket.id, hostName: host.hostName },
    });

    await roomInfo.save();
  });
  socket.on("join room", async (data: Join_Room_Data_type) => {
    const {
      roomId,
      category,
      users: { userName },
    } = data;

    const room = await Rooms.findOne({ roomId });
    if (room) {
      const categoryName = room.category === category;
      if (categoryName) {
        if (room.users.length < 3) {
          await room.users.push({
            userId: socket.id,
            userName: userName,
            score: 0,
          });
          await room.save();
          socket.emit("room found", { success: true, roomId: room.roomId });
        } else {
          socket.emit("room found", {
            success: false,
            message: "No more room",
          });
        }
      } else {
        socket.emit("room found", {
          success: false,
          message: "Room Id doesn't match with the category",
        });
      }
    } else {
      socket.emit("room found", { success: false, message: "Invalid Room Id" });
    }
  });

  socket.on("waiting room", async (data: Waiting_Room_Type) => {
    const roomId = data.roomId;
    const room: Room_Type = await Rooms.findOne({ roomId });

    const { host, users } = room;
    io.emit(`members for ${room.category} category`, {
      roomId,
      host,
      users,
    });
  });

  socket.on("start the game", async () => {
    io.emit("let's play", {});
  });

  socket.on("score updates", async (data: Score_Update_Type) => {
    const { userId, score, roomId } = data;
    const room = await Rooms.findOne({ roomId });
    if (room.host.hostId === userId) {
      room.host.score = score;
      await room.save();
    } else {
      room.users.forEach((user: User_Type) => {
        if (user.userId === userId) {
          user.score = score;
        }
      });
      await room.save();
    }
  });
  socket.on("end the quiz", async (data: Score_Update_Type) => {
    const { roomId, userId, score } = data;
    const room = await Rooms.findOne({ roomId });
    if (room.host.hostId === userId) {
      room.host.finalScore = score;
      await room.save();
    } else {
      room.users.forEach((user: User_Type) => {
        if (user.userId === userId) {
          user.finalScore = score;
        }
      });
      await room.save();
    }
    io.emit("final score of each user", { room });
  });
});
