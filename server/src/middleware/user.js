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
const bcrypt = require('bcrypt');
const addNewUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = new user_model_1.Users({ username, password });
        const salt = yield bcrypt.genSalt(10);
        user.password = yield bcrypt.hash(user.password, salt);
        yield user.save();
        req.userId = user._id;
        req.username = username;
        next();
    }
    catch (error) {
        const message = error.message;
        if (message.includes('duplicate key')) {
            res.json({ success: false, message: 'Username already in use' });
        }
        else {
            res.json({ sucess: false, message: 'Network error' });
        }
    }
});
const verifyUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield user_model_1.Users.findOne({ username });
    if (user) {
        const validPassword = yield bcrypt.compare(password, user.password);
        if (validPassword) {
            req.userId = user._id;
            req.username = username;
            next();
        }
        else {
            res.json({ success: false, message: 'Invalid Password' });
        }
    }
    else {
        res.json({ success: false, message: 'Invalid Username' });
    }
});
module.exports = { addNewUser, verifyUser };
//# sourceMappingURL=user.js.map