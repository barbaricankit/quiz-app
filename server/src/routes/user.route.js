const Express = require('express');
const { addNewUser, verifyUser } = require('../middleware/user');
const { createToken, verifyToken } = require('../middleware/auth');
const userRouter = Express.Router();
userRouter.route('/signup').post(addNewUser, createToken);
userRouter.route('/signin').post(verifyUser, createToken);
userRouter.route('/login').get(verifyToken);
module.exports = { userRouter };
//# sourceMappingURL=user.route.js.map