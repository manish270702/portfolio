import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='md:mt-40 mt-10 md:px-12 px-4'>
        <Card className='border-b border-[1px] border-amber-50' />
        <button className="hover:text-black hover:bg-white duration-500  py-2 md:mt-10 mt-5 md:mb-48 mb-16 px-6 rounded-full border">View all work <sup>8</sup></button>
    </div>
  )
}

export default Cards
