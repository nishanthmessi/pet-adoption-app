import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import Menu4LineIcon from 'remixicon-react/Menu4LineIcon'
import BrandLogo from '../assets/dog.png'
import { useLogoutMutation } from '../features/slices/users/userApiSlice'
import { logout } from '../features/slices/auth/authSlice'

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (err) {
      console.log(err.data.message || err.error)
    }
  }

  return (
    <div className='sticky top-0 z-10 backdrop-blur-md backdrop-saturate-125 bg-white/40 flex justify-between items-center px-4 md:px-24 py-4'>
      <div className='hidden lg:block'>
        <ul className='flex gap-10'>
          <Link to='/adoption-page' className='cursor-pointer'>
            Adopt
          </Link>
          <Link to='/foster-page' className='cursor-pointer'>
            Foster
          </Link>
          <Link to='/register-pet' className='cursor-pointer text-fuchsia-500'>
            Register Pet
          </Link>
        </ul>
      </div>
      <Link to='/'>
        <div className='flex items-center gap-1'>
          <img src={BrandLogo} alt='' className='h-8' />
          <p className='text-2xl font-semibold'>Pawsome</p>
        </div>
      </Link>
      <div className='hidden lg:block rounded-md'>
        {userInfo ? (
          <>
            <h1 className='text-lg font-semibold'>{userInfo.name}</h1>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <div className='flex items-center gap-4'>
              <Link
                to='/login'
                className='py-[.30rem] px-4 bg-gray-700 rounded-lg text-white hover:shadow-xl transition duration-500'
              >
                Login
              </Link>
              <Link
                to='/signup'
                className='py-[.30rem] px-4 bg-gray-200 rounded-lg hover:shadow-xl transition duration-500'
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </div>
      <div className='flex lg:hidden items-center gap-6'>
        <SearchLineIcon />
        <div className='bg-gray-800 p-2 rounded-full'>
          <Menu4LineIcon className='text-white' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
