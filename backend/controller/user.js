import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { ErrorHandler } from '../middleware/error.js'
import { User } from '../model/user.js'

export async function signup (req, res, next) {
  try {
    const { firstname, lastname, email, password } = req.body
    if (!email || !password || !lastname || !firstname) {
      throw new ErrorHandler(400, 'Missing required fields')
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    })
    const createdUser = await user.save()
    res.status(200).json({ msg: 'User created', userId: createdUser._id })
  } catch (error) {
    next(error)
  }
}

export async function login(req, res, next) {
  let newUser
  try {
    const { email, password } = req.body
    if (!email || !password) {
      throw new ErrorHandler(400, 'Missing required email/password fields')
    }
    let user = await User.findOne({ email })
    if (!user) {
      throw new ErrorHandler(401, 'User with this email could not be found, please SignUp')
    }
    newUser = user
    const checkPassword = await bcrypt.compare(password, newUser.password)
    if (!checkPassword) {
      throw new ErrorHandler(401, 'Invalid data')
    }
    const jwtToken = jwt.sign(
      {
        email: newUser.email,
        userId: newUser._id.toString(),
      },
      'secretkey',
      {
        expiresIn: '3h',
      }
    )
    res
      .status(200)
      .json({ msg: 'Logged', token: jwtToken, userId: newUser._id.toString() })
  } catch (error) {
    next(error)
  }
}
