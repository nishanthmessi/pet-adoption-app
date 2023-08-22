import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPetProfileQuery } from '../features/slices/pets/petApiSlice'

const PetProfile = () => {
  const { petProfileId } = useSelector((state) => state.pet)

  const { data: singlePet } = useGetPetProfileQuery(petProfileId)

  console.log(singlePet)

  return <div>PetProfile</div>
}

export default PetProfile
