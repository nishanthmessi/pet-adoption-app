import SearchLineIcon from 'remixicon-react/SearchLineIcon'

const SearchBar = () => {
  return (
    <div className='flex items-center gap-2 border-[.1rem] p-3 rounded-lg shadow-md'>
      <label>Pet Type</label>
      <select className='w-24 rounded-md p-[.4rem] bg-gray-200'>
        <option value='dogs'>Dogs</option>
        <option value='cats'>Cats</option>
      </select>
      <label>Where</label>
      <input
        type='text'
        className='rounded-md p-[.4rem] bg-gray-200'
        placeholder='location'
      />
      <button className='bg-fuchsia-500 rounded-full p-2 text-white'>
        <SearchLineIcon className='h-5 w-5' />
      </button>
    </div>
  )
}

export default SearchBar
