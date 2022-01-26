import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { ErrorHandler } from '../middleware/error.js'
import { User } from '../model/user.js'
import { sendEmail } from '../utils/sendEmail.js'
import 'dotenv/config'
import { Token } from '../model/token.js'

export function signToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}

export async function sendToken(user, statusCode, req, res) {
  const token = signToken(user._id)
  user.password = undefined
  res
    .cookie('jwt', token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      sameSite: '',
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    })
    .status(statusCode)
    .json({
      status: 'success',
      token: token,
      user,
    })
}

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
    })
    const token = signToken(user._id)
    user.token = token;
    await user.save()
    await new Token({
      userId: user._id,
      token: token,
      createdAt: Date.now()

    }).save()
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
    httponly: true,
  })
  res.status(200).json({ status: 'success' })
}

export async function requestPasswordReset (req, res, next) {
  try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) {
        throw new ErrorHandler(
          401,
          'User with this email could not be found, please SignUp'
        )
      }
      const token = await Token.findOne({ userId: user._id });
      if (token) {
        await token.deleteOne()
      }
      const resetToken = crypto.randomBytes(32).toString('hex')
      const hash = await bcrypt.hash(resetToken, 12);
      await new Token({
        userId: user._id,
        token: hash,
        createdAt: Date.now()
      }).save()
      const link = `http://localhost:8080/auth/password-reset/${user._id}/${resetToken}`;
      sendEmail(user.email, 'Password Reset', link);
      res.status(200).json({
        msg: 'Email has been sent!'
      })
  } catch (error) {
    next(error)
  }
}

export async function resetPassword (req, res, next) {
  const userId = req.params.id;
  const token = req.params.token;
  const password = req.body.password;
  try {
    let passwordResetToken = await Token.findOne ({ userId })
    if (!passwordResetToken) {
      throw new ErrorHandler(400, 'Invalid or expired password reset token')
    }
    const isValid = await bcrypt.compare(token, passwordResetToken.token);
    if (!isValid) {
      throw new ErrorHandler(400, 'Invalid or expired password reset token')
    }
    const hash = await bcrypt.hash(password, 12)
    await User.updateOne(
      { _id: userId },
      { $set: { password: hash } },
      { new: true }
    );

    const user = await User.findById({ _id: userId });
    sendEmail(user.email, 'Password reseted successfully', user.name)
    await passwordResetToken.deleteOne();
    res.status(200).json({msg: 'Password reseted successfully!'})
  } catch (error) {
    next(error)
  }
}