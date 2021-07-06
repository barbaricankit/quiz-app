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
const user_model_1 = require("../models/user.model");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
const createToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, username } = req;
    const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: '365d' });
    res.json({ success: true, token, username });
});
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (token) {
        const { userId } = jwt.verify(token, SECRET_KEY);
        const user = yield user_model_1.Users.findById(userId);
        if (user) {
            res.json({ success: true, token, username: user.username });
        }
        else {
            res.status(401).json({ success: false, message: 'UNATHORIZED' });
        }
    }
    else {
        res.status(401).json({ success: false, message: 'UNATHORIZED' });
    }
});
module.exports = { createToken, verifyToken };
//# sourceMappingURL=auth.js.map