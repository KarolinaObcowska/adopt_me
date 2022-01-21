import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.js'
import animalRouter from './routes/animal.js'
import { handleError } from './middleware/error.js'

export const app = express()

app
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  .use(express.json())
  app.use(function(req, res, next) {
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
  .use(cookieParser())
  .use('/auth', userRouter)
  .use('/animal', animalRouter)
  .use((error, req, res, next) => {
      handleError(error, res)
    })

app.get('/', (req, res) => {
  res.send('API running')
})

export const start = () => {
  app.listen(8080, () => {
    console.log('Server is running on 8080..')
  })
}
