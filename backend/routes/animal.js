import { Router } from 'exppress'
import { } from '../controller/animal.js'

const router = Router();

router
    .route('/')
    .get(getAllAnimals)
    .post(createAnimal)

router
    .route('/:id')
    .get(getAnimalById)
    .delete(deleteAnimal)
    .put(updateAnimal)

export default router()