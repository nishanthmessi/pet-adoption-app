import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import Menu4LineIcon from 'remixicon-react/Menu4LineIcon'
import BrandLogo from '../assets/dog.png'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-10 backdrop-blur-md backdrop-saturate-125 bg-white/40 flex justify-between items-center px-4 md:px-10 py-4'>
      <div className='hidden md:block'>
        <ul className='flex gap-10'>
          <li className='cursor-pointer'>Adopt</li>
          <li className='cursor-pointer'>Foster</li>
          <li className='cursor-pointer'>Contact</li>
        </ul>
      </div>
      <div className='flex items-center gap-1'>
        <img src={BrandLogo} alt='' className='h-8' />
        <p className='text-2xl font-semibold'>Pawsome</p>
      </div>
      <div className='hidden md:block rounded-md'>
        <div className='flex items-center gap-4'>
          <button className='py-[.30rem] px-4 bg-gray-700 rounded-lg text-white hover:shadow-xl transition duration-500'>
            Login
          </button>
          <button className='py-[.30rem] px-4 bg-gray-200 rounded-lg hover:shadow-xl transition duration-500'>
            Sign Up
          </button>
        </div>
      </div>
      <div className='flex md:hidden items-center gap-6'>
        <SearchLineIcon />
        <div className='bg-gray-800 p-2 rounded-full'>
          <Menu4LineIcon className='text-white' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
