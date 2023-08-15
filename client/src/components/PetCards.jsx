import React from 'react'

const PetCards = ({ petsData }) => {
  return (
    <>
      {!petsData ? (
        <div>Loading</div>
      ) : (
        <>
          {petsData.map((pet) => (
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
