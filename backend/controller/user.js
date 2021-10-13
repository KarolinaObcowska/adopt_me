import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { User } from '../model/user'

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