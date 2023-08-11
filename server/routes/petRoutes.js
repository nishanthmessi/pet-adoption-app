import express from 'express'
const router = express.Router()
import { registerPet } from '../controllers/petController.js'

router.post('/register-pet', registerPet)

export default router
