import { Animal } from '../model/animal.js'
import { ErrorHandler } from '../middleware/error.js'
import multer from 'multer'
import fs from 'fs'
import 'dotenv/config'

const __dirname = './public/images'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname)
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.toLocaleLowerCase().split(' ').join('-')
    cb(null, fileName)
  },
})

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png']
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

export const upload = multer({ storage, fileFilter })

export async function uploadImages(req, res, next) {
  const reqFiles = []
  const url = req.protocol + '://' + req.get('host')
  try {
    for (let i = 0; i < req.files.length; i++) {
      reqFiles.push(url + '/public/images/' + req.files[i].filename)
    }
    const animalId = req.params.id
    const animal = await Animal.findById({ _id: animalId })
    reqFiles.map((file) => animal.images.push(file))
    await animal.save()
    res.send(reqFiles)
  } catch (error) {
    next(error)
  }
}

export async function deleteImage(req, res, next) {
  const animalId = req.params.id
  const image = req.body.name
  try {
    const animal = await Animal.findById(animalId)
    if (!animal) {
      throw new ErrorHandler(401, 'Animals could not be found')
    }
    const index = animal.images.indexOf(image)
    if (index !== -1) {
      animal.images.splice(index, 1)
    } else {
      throw new ErrorHandler(404, 'Images does not exist.')
    }
    const result = await animal.save()
    res.status(200).json({ msg: 'Successfully deleted', images: result.images })
  } catch (error) {
    next(error)
  }
}
export async function createAnimal(req, res, next) {
  try {
    const { type, breed, name, age, description } = req.body
    if (!(type && breed && name && age && description)) {
      throw new ErrorHandler(400, 'Missing required fields')
    }
    const animal = new Animal({
      type,
      breed,
      name,
      age,
      description,
    })
    await animal.save()
    res.status(201).json({ msg: 'Animal created', animal })
  } catch (error) {
    next(error)
  }
}

export async function getAllAnimals(req, res, next) {
  try {

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 5;
    const skip = (page -1) * pageSize;
    const total = await Animal.countDocuments();
    const pages = Math.ceil(total/ pageSize);

    const result = Animal.find().skip(skip).limit(pageSize);

    if (page > pages) {
      throw new ErrorHandler(404), 'Page not found'
    }

    const animals = await result;
    if (!animals) {
      throw new ErrorHandler(401, 'Animals could not be found')
    }
    res.status(200).json({ 
      msg: 'fetched animals', 
      animals: animals,
      page,
      pages,
      count: animals.length 
    })
  } catch (error) {
    next(error)
  }
}

export async function getAnimalById(req, res, next) {
  const animalId = req.params.id
  try {
    const animal = await Animal.findById(animalId)
    if (!animal) {
      throw new ErrorHandler(401, 'Animal could not be found')
    }
    res.status(200).json({ msg: 'Animal fetched', animal })
  } catch (error) {
    next(error)
  }
}

export async function deleteAnimal(req, res, next) {
  const animalId = req.params.id
  try {
    const animal = await Animal.findByIdAndRemove(animalId)
    if (!animal) {
      throw new ErrorHandler(401, 'Animals could not be found')
    }
    res.status(200).json({ msg: 'Animal deleted' })
  } catch (error) {
    next(error)
  }
}

export async function updateAnimal(req, res, next) {
  const animalId = req.params.id
  try {
    let animal = await Animal.findById(animalId)
    if (!animal) {
      throw new ErrorHandler(404, 'Animals could not be found')
    }

    for (const item in req.body) {
      if (req.body[item] !== '') {
        animal[item] = req.body[item]
      }
    }
    const updatedAnimal = await animal.save()
    res.status(200).json({ msg: 'Animal updated', updateAnimal })
  } catch (error) {
    next(error)
  }
}
