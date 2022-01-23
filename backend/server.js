import express from 'express'
import cors from 'cors'
import path from "path"
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.js'
import animalRouter from './routes/animal.js'
import 'dotenv/config'


export const app = express()

const __dirname = path.resolve();

app
  .use("/public", express.static('public'))
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  .use(express.json())
  .use(cookieParser())
  .use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header("Access-Control-Allow-Origin", "*");
    next()
  })
  .use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }))
  .use('/auth', userRouter)
  .use('/animal', animalRouter)
  .use((err, req, res, next) => {
    console.log(err)
    res.json({
      status: err.statusCode,
      message: err.msg,
  })
})

app.get('/', (req, res) => {
  res.send('API running')
})

export const start = () => {
  app.listen(8080, () => {
    console.log('Server is running on 8080..')
  })
}
