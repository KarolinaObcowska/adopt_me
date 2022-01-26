import nodemailer from 'nodemailer';
import 'dotenv/config'

export const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: 587,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });
        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text
        })
    } catch (error) {
        next(error)
    }
}