import express from 'express'
import * as registerController from './controllers/register-controller.js'
import * as userController from './controllers/user-controller.js'

const router = express.Router()

router.post('/register', registerController.register);
router.post('/login', userController.login)

export default router