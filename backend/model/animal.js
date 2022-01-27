import mongoose from 'mongoose'

const animalSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, 'Enter animal type.'],
    trim: true,
    maxlength: [
      20,
      'A animal type must be equal or shorten than 20 characters.',
    ],
    minlength: [3, 'A animal type must be equal or longer than 3 characters.'],
  },
  name: {
    type: String,
    trim: true,
    required: [true, 'Enter animal name.'],
    maxlength: [
      20,
      'A animal name must be equal or shorten than 20 characters.',
    ],
    minlength: [2, 'A animal name must be equal or longer than 2 characters.'],
  },
  description: {
    type: String,
    required: [true, 'Enter animal description..'],
    maxlength: [
      3000,
      'A animal description must be equal or shorten than 3000 characters.',
    ],
  },
  breed: {
    type: String,
    trim: true,
    required: [true, 'Enter animal breed.'],
    minlength: [
      5,
      'A animal breed must be equal or shorten than 5 characters.',
    ],
    maxlength: [
      15,
      'A animal breed must be equal or longer than 15 characters.',
    ],
  },
  age: {
    type: Number,
    required: [true, 'Enter animal age.'],
    trim: true,
    min: [0.1, 'A animal age must be above 0.'],
    max: [25, 'A animal age must be below 25 years.'],
  },
  images: {
    type: Array,
  },
  avatar: {
    type: String,
  },
})

animalSchema.pre('save', function (next) {
  ;(this.avatar = 'http://localhost:8080/public/images/default.png'), next()
})
export const Animal = mongoose.model('Animal', animalSchema)
