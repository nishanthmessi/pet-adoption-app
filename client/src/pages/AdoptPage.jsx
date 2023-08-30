import SearchBar from '../components/SearchBar'
import PetCards from '../components/PetCards'

const AdoptPage = () => {
  return (
    <>
      <div className='flex justify-center items-center mt-10'>
        <SearchBar />
      </div>
      <div className='flex justify-center mt-14'>
        <div className='grid grid-cols-3 justify-items-center gap-10'>
          <PetCards />
        </div>
      </div>
    </>
  )
}

export default AdoptPage
