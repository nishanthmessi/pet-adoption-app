import React from 'react'

const PetCards = () => {
  return (
    <div className='h-[22rem] w-[20rem]'>
      <img
        src='https://images.unsplash.com/photo-1584283201516-4624475c2944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
        alt=''
        className='object-cover h-[16rem] rounded-lg'
      />
      <div className='flex flex-col mt-4'>
        <h1 className='font-semibold'>Pepper</h1>
        <p>Male, Puppyhood</p>
        <p>Posted on: 8 Aug 2023</p>
      </div>
    </div>
  )
}

export default PetCards
