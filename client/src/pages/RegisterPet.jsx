import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { districts } from '../utils/appData'
import { useNavigate } from 'react-router-dom'
import { useRegisterPetMutation } from '../features/slices/pets/petApiSlice'

const RegisterPet = () => {
  const [petName, setPetName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [petDesc, setPetDesc] = useState('')
  const [petDistrict, setPetDistrict] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [vaccinatedOption, setVaccinatedOption] = useState('yes')
  const [neuteredOption, setNeutertedOption] = useState('yes')
  const [petImage, setPetImage] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)

  const handleVaccinatedChange = (e) => {
    setVaccinatedOption(e.target.value)
  }

  const handleNeuteredChange = (e) => {
    setNeutertedOption(e.target.value)
  }

  const [registerPet, { isLoading }] = useRegisterPetMutation()

  const handleRegisterPet = async () => {
    try {
      const res = await registerPet({}).unwrap()
    } catch (err) {
      console.log(err.data.message || err.error)
    }
  }

  console.log(petDistrict)

  return (
    <div className='flex justify-center items-center h-[90vh] gap-20'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-semibold'>Register Pet</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className=' flex flex-col gap-4'>
        <div>
          <input
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md w-full'
            placeholder='Pet Name'
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div className='flex gap-2'>
          <input
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md'
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md'
            placeholder='Gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div>
          <textarea
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md w-full'
            placeholder='Pet description'
            value={petDesc}
            onChange={(e) => setPetDesc(e.target.value)}
          />
        </div>
        <div>
          <textarea
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md w-full'
            placeholder='Pet Image Url'
            value={petImage}
            onChange={(e) => setPetImage(e.target.value)}
          />
        </div>

        <div className='flex gap-4'>
          <select className='w-48 rounded-md p-[.4rem] bg-gray-100'>
            <option default>-- select district --</option>
            {districts.map((district, i) => (
              <option
                key={district}
                value={petDistrict}
                onSelect={(e) => setPetDistrict(district)}
              >
                {district}
              </option>
            ))}
          </select>
          <div>
            <input
              type='number'
              className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md w-full appearance-none'
              placeholder='Contact Number'
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
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

        {/* Pet Owner */}
        <div>
          <label className='text-sm'>Pet Owner</label>
          <input
            type='text'
            className='py-1 px-2 border-[.10rem] border-gray-400 rounded-md w-full bg-gray-100 cursor-not-allowed'
            placeholder='Pet Owner'
            value={userInfo.name}
            readOnly={true}
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
