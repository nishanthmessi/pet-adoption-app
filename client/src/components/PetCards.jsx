import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useGetAllPetsQuery } from '../features/slices/pets/petApiSlice'
import { setPetProfileId } from '../features/slices/pets/petSlice'

const PetCards = () => {
  const dispatch = useDispatch()
  const { data: allPets } = useGetAllPetsQuery()

  return (
    <>
      {!allPets ? (
        <div>Loading</div>
      ) : (
        <>
          {allPets.map((pet) => (
            <Link
              to='/pet-profile'
              key={pet._id}
              onClick={() => dispatch(setPetProfileId(pet._id))}
            >
              <div
                className='h-[24rem] w-[24rem] sm:h-[22rem] sm:w-[20rem] cursor-pointer'
                key={pet._id}
              >
                <img
                  src={pet.petImage}
                  alt=''
                  className='object-cover h-[20rem] w-[26rem] sm:h-[16rem] sm:w-[26rem] rounded-lg'
                />
                <div className='flex flex-col mt-4'>
                  <h1 className='font-semibold'>{pet.petName}</h1>
                  <p>{pet.age}</p>
                  <p>{pet.gender}</p>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  )
}

export default PetCards
