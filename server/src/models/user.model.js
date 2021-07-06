"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});
const Users = mongoose.model('User', userSchema);
exports.Users = Users;
//# sourceMappingURL=user.model.js.map