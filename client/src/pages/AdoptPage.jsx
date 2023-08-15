import SearchBar from '../components/SearchBar'
import PetCards from '../components/PetCards'
import { useGetAllPetsQuery } from '../redux/slices/petApiSlice'

const AdoptPage = () => {
  const { data: allPets } = useGetAllPetsQuery()

  return (
    <>
      <div className='flex justify-center items-center mt-10'>
        <SearchBar />
      </div>
      <div className='flex justify-center mt-14'>
        <div className='grid grid-cols-3 justify-items-center gap-10'>
          <PetCards petsData={allPets} />
        </div>
      </div>
    </>
  )
}

export default AdoptPage
