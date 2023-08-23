import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPetProfileQuery } from '../features/slices/pets/petApiSlice'

const PetProfile = () => {
  const { petProfileId } = useSelector((state) => state.pet)

  const { data: singlePet, isLoading } = useGetPetProfileQuery(petProfileId)

  console.log(singlePet)

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className='flex justify-center'>
          <div className='grid grid-cols-2 gap-10'>
            <div>
              <img
                src={singlePet.petImage}
                alt=''
                className='h-[26rem] w-[26rem] object-cover rounded-md'
              />
            </div>
            <div>
              <div className='flex gap-6'>
                {/* <h1 className='text-lg'></h1> */}
                <p className='text-2xl font-semibold'>
                  Hello I am {singlePet.name}.
                </p>
              </div>
              <div className='flex gap-6'>
                <h1 className='text-lg'>Pet Info</h1>
                <p className='text-lg font-semibold'>{singlePet.petInfo}</p>
              </div>
              <div className='flex gap-6'>
                <h1 className='text-lg'>Age</h1>
                <p className='text-lg font-semibold'>{singlePet.age}</p>
              </div>
              <div className='flex gap-6'>
                <h1 className='text-lg'>Gender</h1>
                <p className='text-lg font-semibold'>{singlePet.gender}</p>
              </div>
              <div className='flex gap-6'>
                <h1 className='text-lg'>Neutered</h1>
                <p className='text-lg font-semibold'>
                  {singlePet.neutered ? 'Yes' : 'No'}
                </p>
              </div>
              <div className='flex gap-6'>
                <h1 className='text-lg'>Vaccinated</h1>
                <p className='text-lg font-semibold'>
                  {singlePet.vaccinated ? 'Yes' : 'No'}
                </p>
              </div>
              <div className='flex gap-6'>
                <h1 className='text-lg'>Location</h1>
                <p className='text-lg font-semibold'>{singlePet.district}</p>
              </div>
              <div className='flex gap-6'>
                <h1 className='text-lg'>Pet Owner</h1>
                <p className='text-lg font-semibold'>{singlePet.petOwner}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PetProfile
