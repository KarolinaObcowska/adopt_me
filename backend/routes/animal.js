import { Router } from 'express'
import {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  deleteAnimal,
  updateAnimal,
} from '../controller/animal.js'
import { isAuth } from '../middleware/isAuth.js'

const router = Router()

router.route('/').get(isAuth, getAllAnimals).post(createAnimal)

router
  .route('/:id')
  .get(isAuth, getAnimalById)
  .delete(isAuth, deleteAnimal)
  .put(isAuth, updateAnimal)

router
// .route('/:id/images')
// .post(isAuth, addImages)
export default router
