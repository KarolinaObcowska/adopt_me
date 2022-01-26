import nodemailer from 'nodemailer';
import 'dotenv/config'

export const sendEmail = async (email, subject, text) => {
    try {
    

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'elian.ratke35@ethereal.email',
                pass: 'Pt6EaU71YbmZF95aBP'
            }
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text
        })
    } catch (error) {
        console.log(error)
    }
}