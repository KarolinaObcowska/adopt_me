import { Animal } from '../model/animal.js'
import { ErrorHandler } from '../middleware/error.js'
import multer from 'multer';
import fs from "fs";
import 'dotenv/config'

const __dirname = './public/images'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname);
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.toLocaleLowerCase().split(' ').join('-');
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

export const upload = multer({storage, fileFilter });

export async function uploadImages(req, res, next) {
  console.log(req.files)
  const reqFiles = [];
  const url = req.protocol + '://' + req.get('host')
  try {
    for (let i =0; i< req.files.length; i++) {
      reqFiles.push(url + '/public/images/' + req.files[i].filename)
    }
  
    const animalId = req.params.id;
    const animal = await Animal.findById({ _id: animalId });
    console.log( animal)
    animal.images = reqFiles;
    await animal.save()
    res.send(reqFiles)
  } catch (error) {
    next(error)
  }
};


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
      description
    })
    await animal.save()
    res.status(201).json({ msg: 'Animal created', animal})
  } catch (error) {
    next(error)
  }
}


export async function getAllAnimals(req, res, next) {
  try {
    const animals = await Animal.find().sort({ createdAt: 1 })
    if (!animals) {
      throw new ErrorHandler(401, 'Animals could not be found')
    }
    res.status(200).json({ msg: 'fetched animals', animals: animals })
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
  const { type, breed, name, age } = req.body
  try {
    let animal = await Animal.findById(animalId)
    if (!animal) {
      throw new ErrorHandler(404, 'Animals could not be found')
    }
    animal.type = type
    animal.breed = breed
    animal.name = name
    animal.age = age
    const updatedAnimal = await animal.save()
    res.status(200).json({ msg: 'Animal updated', updateAnimal })
  } catch (error) {
    next(error)
  }
}
