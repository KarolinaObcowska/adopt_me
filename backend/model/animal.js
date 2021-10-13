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
})

export const Animal = mongoose.model('Animal', animalSchema)
