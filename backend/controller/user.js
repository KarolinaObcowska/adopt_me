import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { User } from '../model/user.js'

export async function signup (req, res, next) {
    const { firstname, lastname, email, password } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword
        })
        const createdUser = await user.save()
        res.status(200).json({ msg: "User created", userId: createdUser._id })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
    }
}

export async function login (req, res, next) {
    const { email, password } = req.body
    let newUser;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            const error = new Error('User with this e-mail could not be found')
            error.statusCode = 401
            throw error
        }
        newUser = user
        const checkPassword = await bcrypt.compare(password, newUser.password)
        if (!checkPassword) {
            const error = new Error('Invalid data!')
            error.statusCode = 401
            throw error
        }
        const jwtToken = jwt.sign(
            {
                email: newUser.email,
                userId: newUser._id.toString()
            },
            'secretkey',
            {
                expiresIn: '3h'
            }
        )
        res.status(200).json({ msg: 'Logged', token: jwtToken, userId: newUser._id.toString()})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
}