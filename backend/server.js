import express from 'express'
import { json, urlencoded } from 'body-parser'
import userRouter from './routes/user.js'
import animalRouter from './routes/animal.js'
import { handleError } from './middleware/error.js'

export const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/auth', userRouter)
app.use('/animal', animalRouter)

app.use((err, req, res, next) => {
  handleError(err, res)
})

app.get('/', (req, res) => {
  res.send('API running')
})

export const start = () => {
  app.listen(8080, () => {
    console.log('Server is running on 8080..')
  })
}
