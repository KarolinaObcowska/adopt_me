import Router from 'express'
import { signup, login, logout } from '../controller/user.js'

const router = Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
export default router
