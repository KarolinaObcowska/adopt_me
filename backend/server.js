import express from 'express'
import pkg from 'body-parser'
import cors from 'cors'
const { json, urlencoded } = pkg
import userRouter from './routes/user.js'
import animalRouter from './routes/animal.js'
import { handleError } from './middleware/error.js'

export const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors({
  origin: [/^http:\/\/localhost/],
  credentials: true
}))
app.use('/auth', userRouter)
app.use('/animal', animalRouter)

app.use((error, req, res, next) => {
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
