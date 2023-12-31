import express from 'express'
const router = express.Router()
import {
  registerPet,
  getAllPets,
  updatePetProfile,
  getPetProfile,
  deletePetProfile,
  searchPetProfile,
} from '../controllers/petController.js'

router.get('/all-pets', getAllPets)
router.get('/pet-profile/:id', getPetProfile)
router.post('/register-pet', registerPet)
router.put('/update-pet/:id', updatePetProfile)
router.post('/delete-profile/:id', deletePetProfile)
router.get('/district/search', searchPetProfile)

export default router
