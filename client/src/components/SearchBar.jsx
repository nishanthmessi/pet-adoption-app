import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import { districts } from '../utils/appData'
import { useState } from 'react'
import { useFilterProfilesQuery } from '../features/slices/pets/petApiSlice'

const SearchBar = () => {
  const [district, setDistrict] = useState('')

  const { data: filteredProfiles } = useFilterProfilesQuery(district)
  const handleSearch = async () => {}

  return (
    <div className='hidden sm:flex items-center gap-4 border-[.1rem] p-3 rounded-lg shadow-md'>
      <label>Pet Type</label>
      <select className='w-24 rounded-md p-[.4rem] bg-gray-200'>
        <option value='dogs'>Dogs</option>
        <option value='cats'>Cats</option>
      </select>
      <label>District</label>
      <select
        className='w-48 rounded-md p-[.4rem] bg-gray-200'
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
      >
        <option default>-- select district --</option>
        {districts.map((district) => (
          <option key={district.id} value={district.name}>
            {district.name}
          </option>
        ))}
      </select>
      {/* <label>City</label>
      <select className='w-40 rounded-md p-[.4rem] bg-gray-200'>
        <option value='dogs'>Chennai</option>
        <option value='cats'>Trichy</option>
      </select> */}
      <button
        className='bg-fuchsia-500 rounded-full p-2 text-white'
        onClick={handleSearch}
      >
        <SearchLineIcon className='h-5 w-5' />
      </button>
    </div>
  )
}

export default SearchBar
