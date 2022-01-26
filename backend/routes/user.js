import Router from 'express'
import { signup, login, logout, resetPassword, requestPasswordReset } from '../controller/user.js'

const router = Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)

router.post('/password-reset', requestPasswordReset)
router.post('/password-reset/:id/:token', resetPassword)

export default router
