import {Animal} from '../model/animal.js'

export async function createAnimal (req, res, next) {
    const { type, breed, name, age } = req.body
    try {
        const animal = new Animal({
            type,
            breed,
            name,
            age
        })
        await animal.save()
        res.status(201).json({ msg: 'Animal created' })
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(err)
    }
}

export async function getAllAnimals (req, res, next) {
    try {
        const animals = await Animal
            .find()
            .sort({ createdAt: -1 })
        res.status(200).json({ msg: 'fetched animals', animals: animals})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }    
}

export async function getAnimalById (req, res, next) {
    const animalId = req.params.id
    try {
        const animal = await Animal.findById(animalId)
        if (!animal) {
            const error = new Error('Could not find animal')
            error.statusCode = 404;
            throw error
        }
        res.status(200).json({ msg: 'Animal fetched', animal})
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}
export async function deleteAnimal (req, res, next) {
    const animalId = req.params.id
    try {
        const animal = await Animal.findByIdAndRemove(animalId);
        if (!animal) {
            const error = new Error('Could not find animal')
            error.statusCode = 404
            throw error
        }
        res.status(200).json({ msg: 'Animal deleted' })
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500
        }
        next(error)
    }
}

export async function updateAnimal () {
}
