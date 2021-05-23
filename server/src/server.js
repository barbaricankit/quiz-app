"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.set("port", process.env.PORT || 3000);
let http = require("http").Server(app);
let io = require("socket.io")(http);
app.get("/", (req, res) => {
    res.json({ success: true, message: "Quiz Server" });
});
io.on("connection", (socket) => {
    console.log("User Connected " + socket.id);
});
//# sourceMappingURL=server.js.map