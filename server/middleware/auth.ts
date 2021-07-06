import { Users } from '../models/user.model';

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
const createToken = async (req: any, res: any, next: any) => {
	const { userId, username } = req;
	const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: '365d' });
	res.json({ success: true, token, username });
};

const verifyToken = async (req: any, res: any, next: any) => {
	const token = req.headers.authorization;
	if (token) {
		const { userId } = jwt.verify(token, SECRET_KEY);
		const user = await Users.findById(userId);
		if (user) {
			res.json({ success: true, token, username: user.username });
		} else {
			res.status(401).json({ success: false, message: 'UNATHORIZED' });
		}
	} else {
		res.status(401).json({ success: false, message: 'UNATHORIZED' });
	}
};

module.exports = { createToken, verifyToken };
