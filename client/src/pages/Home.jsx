const Home = () => {
  return (
    <div className='grid grid-cols-2 items-center h-auto'>
      <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='flex flex-col text-[7rem] font-semibold tracking-tight leading-tight'>
          <span>They deserve</span>
          <span className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text'>
            a beautiful
          </span>
          <span>life.</span>
        </h1>
        <div className='flex gap-6 mt-4'>
          <button className='bg-pink-500 px-8 py-2 rounded-md text-white hover:shadow-lg hover:shadow-pink-400 transition duration-500'>
            Adopt
          </button>
          <button className='border-[1px] px-8 py-2 rounded-md hover:shadow-lg hover:shadow-gray-400 transition duration-500'>
            Explore
          </button>
        </div>
      </div>
      {/* images */}
      <div className='flex flex-col justify-start items-center gap-14'>
        <div className='flex'>
          <div className='mt-[200px]'>
            <img
              src='https://images.unsplash.com/photo-1602620975469-808a7453244d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80'
              alt=''
              className='w-[20rem] h-[20rem] object-cover rounded-full'
            />
          </div>
          <div>
            <img
              src='https://images.unsplash.com/photo-1683634313230-fa987b02798d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
              alt=''
              className='w-[20rem] h-[24rem] object-cover rounded-full'
            />
          </div>
        </div>
        <div className='flex gap-6'>
          <div className=''>
            <img
              src='https://images.unsplash.com/photo-1610893404709-263e0cad217e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
              alt=''
              className='w-[26rem] h-[16rem] object-cover rounded-full'
            />
          </div>
          <div className='-mt-40'>
            <img
              src='https://images.unsplash.com/photo-1610387308877-d8c8d0e9b6f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'
              alt=''
              className='block w-[300px] h-[330px] rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
