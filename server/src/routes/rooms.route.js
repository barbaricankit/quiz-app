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
const room_model_1 = require("../models/room.model");
const express = require("express");
const router = express.Router();
router.route("/:category/roomarea").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.params;
    const { roomId } = req.body;
    const room = yield room_model_1.Rooms.findOne({ roomId });
    if (room.category === category) {
        const socket = req.app.get("socketio");
        console.log(socket);
        socket.emit("get Members", {
            users: room.users,
            hostId: room.hostId,
            hostName: room.hostName,
        });
    }
    else {
    }
}));
module.exports = { router };
//# sourceMappingURL=rooms.route.js.map