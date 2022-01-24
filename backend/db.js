import mongoose from 'mongoose'
import 'dotenv/config'

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log('MongoDB connected...')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}
