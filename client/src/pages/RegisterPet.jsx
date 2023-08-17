import { useState } from 'react'

const RegisterPet = () => {
  const [vaccinatedOption, setVaccinatedOption] = useState('yes')
  const [neuteredOption, setNeutertedOption] = useState('yes')

  const handleVaccinatedChange = (e) => {
    setVaccinatedOption(e.target.value)
  }

  const handleNeuteredChange = (e) => {
    setNeutertedOption(e.target.value)
  }

  return (
    <div className='flex justify-center items-center h-[90vh] gap-20'>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-semibold'>Register Pet</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className=' flex flex-col gap-4'>
        <div>
          <input
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md w-full'
            placeholder='Pet Name'
          />
        </div>
        <div className='flex gap-2'>
          <input
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md'
            placeholder='Age'
          />
          <input
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md'
            placeholder='Gender'
          />
        </div>
        <div>
          <textarea
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md w-full'
            placeholder='Pet description'
          />
        </div>

        <div className='flex gap-4'>
          <select className='w-48 rounded-md p-[.4rem] bg-gray-100'>
            <option default>-- select state --</option>
            <option value='dogs'>Tamil Nadu</option>
            <option value='cats'>Karnataka</option>
          </select>
          <select className='w-48 rounded-md p-[.4rem] bg-gray-100'>
            <option default>-- select city --</option>
            <option value='dogs'>Chennai</option>
            <option value='cats'>Trichy</option>
          </select>
        </div>
        {/* Vaccinated options */}
        <div className='flex justify-between py-1'>
          <label className='mr-4'>Vaccinated</label>
          <div className='flex gap-2'>
            <input
              className=''
              type='radio'
              value='yes'
              checked={vaccinatedOption === 'yes'}
              onChange={handleVaccinatedChange}
            />
            <label className='hover:cursor-pointer mr-8'>Yes</label>
            <input
              className=''
              type='radio'
              value='no'
              checked={vaccinatedOption === 'no'}
              onChange={handleVaccinatedChange}
            />
            <label className='hover:cursor-pointer mr-8'>No</label>
            <input
              className=''
              type='radio'
              value='unknown'
              checked={vaccinatedOption === 'unknown'}
              onChange={handleVaccinatedChange}
            />
            <label className='hover:cursor-pointer'>Unknown</label>
          </div>
        </div>
        {/* Neutered options */}
        <div className='flex justify-between py-1'>
          <label className='mr-4'>Neutered</label>
          <div className='flex gap-2'>
            <input
              className=''
              type='radio'
              value='yes'
              checked={neuteredOption === 'yes'}
              onChange={handleNeuteredChange}
            />
            <label className='hover:cursor-pointer mr-8'>Yes</label>
            <input
              className=''
              type='radio'
              value='no'
              checked={neuteredOption === 'no'}
              onChange={handleNeuteredChange}
            />
            <label className='hover:cursor-pointer mr-8'>No</label>
            <input
              className=''
              type='radio'
              value='unknown'
              checked={neuteredOption === 'unknown'}
              onChange={handleNeuteredChange}
            />
            <label className='hover:cursor-pointer'>Unknown</label>
          </div>
        </div>
        <div>
          <textarea
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md w-full'
            placeholder='Pet Image Url'
          />
        </div>
        {/* Pet Owner */}
        <div>
          <input
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md w-full'
            placeholder='Pet Owner'
          />
        </div>
        <button className='w-full bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500 py-2 rounded-md text-white'>
          Submit
        </button>
      </div>
    </div>
  )
}

export default RegisterPet
