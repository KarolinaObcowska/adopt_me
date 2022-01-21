import Router from 'express'
import {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  deleteAnimal,
  updateAnimal,
} from '../controller/animal.js'
import { isAuth } from '../middleware/isAuth.js'


const router = Router()

router.get('/', getAllAnimals)
router.post('/', isAuth, createAnimal)

router.get('/:id', getAnimalById)
router.delete('/:id', deleteAnimal)
router.put("/", isAuth, updateAnimal)

router
// .route('/:id/images')
// .post(isAuth, addImages)
export default router
