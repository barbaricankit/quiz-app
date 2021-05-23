import { Rooms } from "../models/room.model";
const express = require("express");

const router = express.Router();

router.route("/:category/roomarea").post(async (req: any, res: any) => {
  const { category } = req.params;
  const { roomId } = req.body;
  const room = await Rooms.findOne({ roomId });
  if (room.category === category) {
    const socket = req.app.get("socketio");
    console.log(socket);
    socket.emit("get Members", {
      users: room.users,
      hostId: room.hostId,
      hostName: room.hostName,
    });
  } else {
  }
});

module.exports = { router };
