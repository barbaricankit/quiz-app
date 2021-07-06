import { Users_Type } from '../dataTypes/data.types';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema: Users_Type = new Schema({
	username: { type: String, unique: true },
	password: String
});

const Users = mongoose.model('User', userSchema);

export { Users };
