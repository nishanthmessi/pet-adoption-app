import React from 'react'
import { Link } from 'react-router-dom'

const FosterPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[90vh]'>
      <h1 className='text-6xl font-medium'>Coming soon...</h1>
      <h1 className='text-xl mt-6'>Checkout Adoption Page</h1>
      <Link
        to='/adoption-page'
        className='bg-fuchsia-500 px-8 py-2 mt-4 rounded-md text-white hover:shadow-lg hover:shadow-fuchsia-400 transition duration-500'
      >
        Click here
      </Link>
    </div>
  )
}

export default FosterPage
