import pkg from 'mongoose'
const { connect } = pkg

const db =
  'mongodb+srv://Karolina:XOIEwdwmXDiWhxmh@animals.dxun5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

export const connectDB = async () => {
  try {
    await connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log('MongoDB connected...')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}
