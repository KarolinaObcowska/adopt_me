import express from 'express'
import cors from 'cors'
import multer from 'multer';
import fs from "fs";
import path, { dirname } from "path"
import { fileURLToPath } from "url";
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.js'
import animalRouter from './routes/animal.js'
import { handleError } from './middleware/error.js'

export const app = express()

const __dirname = path.resolve();

const upload = multer({ dest: './public/images' })

  app.post("/animal/:id/upload", upload.array("files", 5), (req, res, next) => {
    try {
      res.status(200).json({msg: "File uploaded successfully", })
    } catch (error) {
      next(err);
    }
  })

app
  .use("/images", express.static(path.join(__dirname, "public/images")))
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  .use(express.json())
  .use(cookieParser())
  .use((error, req, res, next) => {
    handleError(error, res)
  })
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



app.get('/', (req, res) => {
  res.send('API running')
})

export const start = () => {
  app.listen(8080, () => {
    console.log('Server is running on 8080..')
  })
}
