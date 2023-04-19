const authRouter = require('express')()
const AuthController = require('../../Controllers/UserController/authController')


authRouter.post('/signup', AuthController.signupController)
authRouter.get('/checkuser', AuthController.checkUserExistController)
authRouter.post('/signin', AuthController.signinController)

module.exports = authRouter
