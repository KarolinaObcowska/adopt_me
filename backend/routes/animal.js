import Router from 'express'
import {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  deleteAnimal,
  updateAnimal,
  uploadImages,
  upload,
} from '../controller/animal.js'
import { isAuth } from '../middleware/isAuth.js'

const router = Router()

router.get('/', getAllAnimals)
router.post('/', isAuth, createAnimal)

router.get('/:id', getAnimalById)
router.delete('/:id', deleteAnimal)
router.patch('/:id', isAuth, updateAnimal)
router.post('/:id/upload', upload.array('images', 10), uploadImages)

export default router
