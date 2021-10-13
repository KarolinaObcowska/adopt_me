import express from 'express'
import { urlencoded } from 'body-parser'
export const app = express()

app.use(urlencoded({ extended: true }))

export const start = () => {
  app.listen(8080, () => {
    console.log('Server is running on 8080..')
  })
}
