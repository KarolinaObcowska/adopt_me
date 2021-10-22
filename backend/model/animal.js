import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  describe: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  images: [
    {
      type: String,
    },
  ],
})

export const Animal = mongoose.model('Animal', animalSchema)
