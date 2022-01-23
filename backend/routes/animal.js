import Router from 'express'
import {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  deleteAnimal,
  updateAnimal,
  uploadImages
} from '../controller/animal.js'
import { isAuth } from '../middleware/isAuth.js'


const router = Router()

router.get('/', getAllAnimals)
router.post('/', isAuth, createAnimal)

router.get('/:id', getAnimalById)
router.delete('/:id', deleteAnimal)
router.put("/:id", isAuth, updateAnimal)
router.post('/:id/upload', uploadImages)

export default router

