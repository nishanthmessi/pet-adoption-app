import { useGetAllPetsQuery } from '../features/slices/pets/petApiSlice'

const PetCards = () => {
  const { data: allPets } = useGetAllPetsQuery()

  return (
    <>
      {!allPets ? (
        <div>Loading</div>
      ) : (
        <>
          {allPets.map((pet) => (
            <div className='h-[22rem] w-[20rem]' key={pet._id}>
              <img
                src={pet.petImage}
                alt=''
                className='object-cover h-[16rem] rounded-lg'
              />
              <div className='flex flex-col mt-4'>
                <h1 className='font-semibold'>{pet.petName}</h1>
                <p>{pet.age}</p>
                <p>{pet.gender}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default PetCards
