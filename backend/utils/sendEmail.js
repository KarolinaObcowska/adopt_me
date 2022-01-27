import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

import 'dotenv/config';
const __dirname = './public'

const changeTemplates = (type, user, text) => {
  let filePath,
  source,
  template,
  replacements;
  if (type === 'reset password') {
     filePath = path.join(__dirname, './emails/reset-password.html')
     source = fs.readFileSync(filePath, 'utf-8').toString();
     template = handlebars.compile(source);
     replacements = {
      link: text,
    };
  } else if (type === 'after reset') {
     filePath = path.join(__dirname, './emails/reset-password-success.html')
     source = fs.readFileSync(filePath, 'utf-8').toString();
     template = handlebars.compile(source);
     replacements = {
      username: user.firstname,
    };
  } else if (type === 'welcome') {
    filePath = path.join(__dirname, './emails/welcome.html')
    source = fs.readFileSync(filePath, 'utf-8').toString();
    template = handlebars.compile(source);
    replacements = {
     username: user.firstname,
   };
  }
  const htmlToSend = template(replacements)
  return htmlToSend;
}

export const sendEmail = async (type, user, subject, text) => {
  const htmlFile = changeTemplates(type, user, text)
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
      html: htmlFile
    }
    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error)
  }
}
