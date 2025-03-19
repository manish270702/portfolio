import React from 'react'

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full bg-black z-[2]'>
      <div className='flex py-6 sm:px-12 px-4 md:text-xl text-sm bg-black text-white items-center justify-between'>
        <a href="" className='cursor-pointer' >ManishYadav</a>
        <a href="" className='cursor-pointer' >Menu+</a>
      </div>
    </nav>
  )
}

export default Navbar
