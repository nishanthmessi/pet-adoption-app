import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPetProfileQuery } from '../features/slices/pets/petApiSlice'
import CheckboxCircleLineIcon from 'remixicon-react/CheckboxCircleLineIcon'
import CloseCircleLineIcon from 'remixicon-react/CloseCircleLineIcon'
import MapPin2LineIcon from 'remixicon-react/MapPin2LineIcon'
import UserHeartLineIcon from 'remixicon-react/UserHeartLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import CalendarCheckLineIcon from 'remixicon-react/CalendarCheckLineIcon'

const PetProfile = () => {
  const { petProfileId } = useSelector((state) => state.pet)

  const { data: singlePet, isLoading } = useGetPetProfileQuery(petProfileId)
  const { userInfo } = useSelector((state) => state.auth)

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <div className='flex justify-center gap-16 mt-20'>
            <div className='grid grid-cols-2 gap-14'>
              <div className='shadow-lg'>
                <img
                  src={singlePet.petImage}
                  alt=''
                  className='h-[26rem] w-[26rem] object-cover rounded-md'
                />
              </div>
              <div className='flex flex-col gap-6 text-6xl'>
                <div className='flex flex-col gap-2 font-medium'>
                  <p>Hello there!</p>
                  <p>My name is</p>
                  <p className='font-semibold'>{singlePet.name}</p>
                </div>
                <div className='flex gap-10 text-xl '>
                  <h1>
                    {singlePet.age}, {singlePet.gender}
                  </h1>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex items-center gap-4 font-medium'>
                    <p className='text-lg'>
                      {singlePet.neutered ? (
                        <CheckboxCircleLineIcon className='text-green-600' />
                      ) : (
                        <CloseCircleLineIcon className='text-red-600' />
                      )}
                    </p>
                    <h1 className='text-2xl'>Spayed</h1>
                  </div>
                  <div className='flex items-center gap-4 font-medium'>
                    <p className='text-lg'>
                      {singlePet.vaccinated ? (
                        <CheckboxCircleLineIcon className='text-green-600' />
                      ) : (
                        <CloseCircleLineIcon className='text-red-600' />
                      )}
                    </p>
                    <h1 className='text-2xl'>Vaccinated</h1>
                  </div>
                </div>
                <div>
                  <h1 className='flex items-center gap-4 text-2xl font-medium'>
                    <MapPin2LineIcon className='text-fuchsia-500' />
                    {singlePet.district}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center gap-4'>
            <div className='text-center mt-16'>
              <div>
                <h1 className='text-2xl font-medium underline mb-2'>
                  What they say about me
                </h1>
                <p className='text-xl'>"{singlePet.petInfo}"</p>
              </div>
            </div>

            <div className='flex gap-16 text-xl border-[.10rem] py-4 px-8 mt-8 rounded-md shadow-md'>
              <div>
                <h1 className='flex items-center gap-2 font-medium mb-2'>
                  <UserHeartLineIcon />
                  Pet Owner
                </h1>
                <p>{singlePet.petOwner}</p>
              </div>
              <div className='border-r-[.12rem]'></div>
              <div>
                <h1 className='flex items-center gap-2 font-medium mb-2'>
                  <ContactsBook2LineIcon />
                  Contact Number
                </h1>
                <p>{singlePet.contactNumber}</p>
              </div>
              <div className='border-r-[.12rem]'></div>
              {/* <div>
                <h1 className='flex items-center gap-2 font-medium mb-2'>
                  <ContactsBook2LineIcon />
                  Email
                </h1>
                <p>{userInfo.email}</p>
              </div> */}
              <div>
                <h1 className='flex items-center gap-2 font-medium mb-2'>
                  <CalendarCheckLineIcon />
                  Posted on
                </h1>
                <p>{new Date(singlePet.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default PetProfile
