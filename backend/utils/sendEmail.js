import nodemailer from 'nodemailer'
import 'dotenv/config'

export const sendEmail = async (email, subject, text) => {
  try {
    const transporter = await nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 25,
      auth: {
        user: '2a4130074e4d71',
        pass: '0d0b8be03a5e8b',
      },
    })

    await transporter.sendMail({
      from: process.env.HOST,
      to: email,
      subject: subject,
      text: text,
    })
  } catch (error) {
    console.log(error)
  }
}
