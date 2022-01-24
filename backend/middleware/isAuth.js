import jwt from 'jsonwebtoken'
import { User } from '../model/user.js'
import { ErrorHandler } from './error.js'
import 'dotenv/config'

export async function isAuth(req, res, next) {
  let token
  if (req.cookies.jwt) {
    token = req.cookies.jwt
  }
  if (!token) {
    throw new ErrorHandler(401, 'You are not logged in!')
  }
  let decodedToken = await jwt.verify(token, process.env.JWT_SECRET)
  const currentLoggedUser = await User.findById(decodedToken.id)
  if (!currentLoggedUser) {
    throw new ErrorHandler(
      401,
      'The user belonging to this token does not loger exist'
    )
  }
  req.user = currentLoggedUser
  req.userId = currentLoggedUser._id

  next()
}
