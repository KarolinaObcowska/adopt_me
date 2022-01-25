import Router from 'express'
import {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  deleteAnimal,
  updateAnimal,
  uploadImages,
  upload,
  deleteImage
} from '../controller/animal.js'
import { isAuth } from '../middleware/isAuth.js'

const router = Router()

router.get('/', getAllAnimals)
router.post('/', isAuth, createAnimal)

router.get('/:id', getAnimalById)
router.delete('/:id', deleteAnimal)
router.patch('/:id', isAuth, updateAnimal)
router.post('/:id/images', upload.array('images', 10), uploadImages)
router.patch('/:id/images', isAuth, deleteImage);

export default router
