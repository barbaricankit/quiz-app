const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const { router: QuizRouter } = require("./routes/quiz.route");
import { Room_Type, User_Type } from "./models/room.model";
import { Rooms } from "./models/room.model";
import { MongoClient } from "./db/mongoose.db";
const { router: roomRouter } = require("./routes/rooms.route");
MongoClient();
app.use(cors());
app.use(bodyparser.json());
app.get("/", (req: any, res: any) => {
  res.json({ success: true, message: "Socket is created" });
});
app.set("socketio", io);
app.use(QuizRouter);
app.use(roomRouter);
server.listen(process.env.PORT || 3001, () => {
  console.log("Server started at PORT", process.env.PORT || 3001);
});

type Room_Data_type = {
  hash: {
    roomId: string;
    category: string;
    hostId: string;
    hostName: string;
    users?: User_Type;
  };
};

io.on("connection", (socket: any) => {
  console.log("User Connected " + socket.id);
  socket.emit("user id", { userId: socket.id });
  socket.on("create room data", async (data: Room_Data_type) => {
    const { roomId, category, hostName } = data.hash;
    const roomInfo = new Rooms({
      roomId,
      category,
      hostId: socket.id,
      hostName,
    });

    await roomInfo.save();
  });
  socket.on("join room", async (data: Room_Data_type) => {
    console.log({ data });
    const {
      roomId,
      category,
      users: { userName },
    } = data.hash;

    const roomInfo = await Rooms.findOne({ roomId });
    if (roomInfo) {
      const categoryName = roomInfo.category === category;
      if (categoryName) {
        if (roomInfo.users.length < 3) {
          await roomInfo.users.push({
            userId: socket.id,
            userName: userName,
          });
          await roomInfo.save();
          socket.emit("room found", { success: true, roomId: roomInfo.roomId });
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
});
