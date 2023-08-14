import asyncHandler from 'express-async-handler'
import Pet from '../models/petModel.js'

// @desc - Register new pet
// route POST /api/pets/register-pet
// @access Private
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

  // const petExists = await Pet.find({ name, petInfo, petImage })

  // if (petExists) {
  //   res.status(400)
  //   throw new Error('Pet already exists')
  // }

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

// @desc - Get all pet profiles
// route GET /api/pets
// @access Public
const getAllPets = asyncHandler(async (req, res) => {
  const pets = await Pet.find()
  const petsFilteredData = pets.map((pet) => {
    let _id = pet._id
    let petName = pet.name
    let petImage = pet.PetImage
    let age = pet.age
    let gender = pet.gender

    return { _id, petName, petImage, age, gender }
  })

  res.status(200).json(petsFilteredData)

  if (!pets) {
    res.status(400)
    throw new Error('Something went wrong. Try again later')
  }
})

// @desc - Get single pet profile
// route GET /api/pet/:id
// @access Public
const getPetProfile = asyncHandler(async (req, res) => {
  const pet = await Pet.findById(req.params.id)
  if (pet) {
    res.status(200).json(pet)
  } else {
    res.status(400)
    throw new Error('Unable to get pet profile')
  }
})

// @desc - Update pet profile
// route POST /api/pets/update-pet/:id
// @access Private
const updatePetProfile = asyncHandler(async (req, res) => {
  const pet = await Pet.findByIdAndUpdate(req.params.id)
  if (pet) {
    pet.name = req.body.name || pet.name
    pet.petInfo = req.body.petInfo || pet.petInfo
    pet.petImage = req.body.petImage || pet.petImage
    pet.age = req.body.age || pet.age
    pet.gender = req.body.gender || pet.gender
    pet.vaccinated = req.body.vaccinated || pet.vaccinated
    pet.petOwner = req.body.petOwner || pet.petOwner

    const updatedPet = await pet.save()
    res.status(200).json(updatedPet)
  } else {
    res.status(400)
    throw new Error('Pet not found')
  }
})

// @desc - Delete pet profile
// route DELETE /api/pet/delete-profile/:id
// @access Private
const deletePetProfile = asyncHandler(async (req, res) => {
  const pet = await Pet.findByIdAndDelete(req.params.id)
  if (pet) {
    res.status(200).json({ message: 'Profile deleted successfully' })
  } else {
    res.status(400)
    throw new Error('Unable to delete profile. Try again')
  }
})

export {
  registerPet,
  getAllPets,
  getPetProfile,
  updatePetProfile,
  deletePetProfile,
}
