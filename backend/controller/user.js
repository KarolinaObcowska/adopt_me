import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { ErrorHandler } from '../middleware/error.js'
import { User } from '../model/user.js'
import 'dotenv/config'

export function signToken(id) {
  return  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
  
}

export async function sendToken (user, statusCode, req, res) {
  const token = signToken(user._id);
  user.password = undefined;
  res
    .cookie('jwt', token,{
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      sameSite: "",
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    })
    .status(statusCode)
    .json({
    status: 'success',
    token: token,
    user
  });
};


export async function signup(req, res, next) {
  try {
    const { firstname, lastname, email, password } = req.body

    if (!(email && password && lastname && firstname)) {
      throw new ErrorHandler(422, 'Missing required fields')
    }

    let checkIfExist = await User.findOne({ email })

    if (checkIfExist) {
      throw new ErrorHandler(
        403,
        'User with this email already exists, please log in'
      )
    }
    
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    await user.save()
    sendToken(user, 201, req, res)
  } catch (error) {
    next(error)
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body

    if (!(email && password)) {
      throw new ErrorHandler(400, 'Missing required email/password fields')
    }

    let user = await User.findOne({ email })

    if (!user) {
      throw new ErrorHandler(
        401,
        'User with this email could not be found, please SignUp'
      )
    }

    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
      throw new ErrorHandler(422, 'Invalid data')
    }

    sendToken(user, 200, req, res)
  } catch (error) {
    next(error)
  }
}
 
export async function logout(req, res) {
  res.cookie('jwt', null, {
    expires: new Date(Date.now() + 10),
    httponly: true
  })
  res.status(200).json({ status: 'success' });
}