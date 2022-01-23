import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
    maxlength: [20, 'A animal type must be equal or shorten than 20 characters.'],
    minlength: [3, 'A animal type must be equal or longer than 3 characters.']
  },
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: [20, 'A animal name must be equal or shorten than 20 characters.'],
    minlength: [2, 'A animal name must be equal or longer than 2 characters.']
  },
  description: {
    type: String,
    required: true,
    maxlength: [300, 'A animal description must be equal or shorten than 300 characters.'],
  },
  breed: {
    type: String,
    trim: true,
    required: true,
    minlength: [5, 'A animal breed must be equal or shorten than 5 characters.'],
    maxlength: [15, 'A animal breed must be equal or longer than 15 characters.']
  },
  age: {
    type: Number,
    required: true,
    trim: true,
    min: [0.1, 'A animal age must be above 0.'],
    max: [25, 'A animal age must be below 25 years.']
  },
  images: {
    type: Array
  },
  avatar: {
    type: String
  }
})

animalSchema.pre('save', function(next){
  this.avatar = 'http://localhost:8080/public/images/default.png',
  next()
})
export const Animal = mongoose.model('Animal', animalSchema)
