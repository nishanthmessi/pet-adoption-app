import asyncHandler from 'express-async-handler'
import Pet from '../models/petModel.js'

// @desc - Register new pet
// route POST /api/users
// @access Public
const registerPet = asyncHandler(async (req, res) => {
  const {
    name,
    petInfo,
    petImage,
    age,
    gender,
    vaccinated,
    neutered,
    petOwner,
  } = req.body

  const petExists = await Pet.find({ name, petInfo, petImage })

  if (petExists) {
    res.status(400)
    throw new Error('Pet already exists')
  }

  const pet = await Pet.create({
    name,
    petInfo,
    petImage,
    age,
    gender,
    vaccinated,
    neutered,
    petOwner,
  })

  if (pet) {
    res.status(200).json(pet)
  } else {
    res.status(400)
    throw new Error('Invalid pet data')
  }
})

export { registerPet }
