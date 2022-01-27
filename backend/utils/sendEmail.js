import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

import 'dotenv/config';


export const sendEmail = async (user, subject, text) => {
  const filePath = path.join(__dirname, './emails/reset-password.html')
  const source = fs.readFileSync(filePath, 'utf-8').toString();
  const template = handlebars.compile(source);
  const replacements = {
    username: user.firstname,
  };
  const htmlToSend = template(replacements);
  try {
    const transporter = await nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 25,
      auth: {
        user: '2a4130074e4d71',
        pass: '0d0b8be03a5e8b',
      },
    });
    const mailOptions = {
      from: process.env.HOST,
      to: user.email,
      subject: subject,
      text: text,
      html: htmlToSend
    }
    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error)
  }
}
