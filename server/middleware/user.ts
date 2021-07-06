import { Users } from '../models/user.model';
const bcrypt = require('bcrypt');

const addNewUser = async (req: any, res: any, next: any) => {
	const { username, password } = req.body;
	try {
		const user = new Users({ username, password });
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
		await user.save();
		req.userId = user._id;
		req.username = username;
		next();
	} catch (error) {
		const message = error.message;
		if (message.includes('duplicate key')) {
			res.json({ success: false, message: 'Username already in use' });
		} else {
			res.json({ sucess: false, message: 'Network error' });
		}
	}
};

const verifyUser = async (req: any, res: any, next: any) => {
	const { username, password } = req.body;
	const user = await Users.findOne({ username });
	if (user) {
		const validPassword = await bcrypt.compare(password, user.password);
		if (validPassword) {
			req.userId = user._id;
			req.username = username;
			next();
		} else {
			res.json({ success: false, message: 'Invalid Password' });
		}
	} else {
		res.json({ success: false, message: 'Invalid Username' });
	}
};
module.exports = { addNewUser, verifyUser };
