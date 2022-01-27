import express from 'express'
import cors from 'cors'
import {handleValidationError} from './middleware/error.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.js'
import animalRouter from './routes/animal.js'
import 'dotenv/config'

export const app = express()

app
  .use('/public', express.static('public'))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cookieParser())
  .use(function (req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header('Access-Control-Allow-Origin', '*')
    next()
  })
  .use(
    cors({
      origin: '*',
      credentials: true,
    })
  )
  .use('/auth', userRouter)
  .use('/animal', animalRouter)
  .use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
      handleValidationError(err, res)
    } else {
      res.json({ status: err.statusCode, msg: err.msg })
    }
  })

app.get('/', (req, res) => {
  res.send('API running')
})

export const start = () => {
  app.listen(process.env.PORT, () => {
    console.log('Server is running on 8080..')
  })
}
