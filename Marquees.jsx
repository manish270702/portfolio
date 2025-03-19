import React from 'react'
import Marquee from './Marquee'

function Marquees() {
  return (
    <div className='flex mb-10 md:gap-20 gap-8 overflow-hidden border-t border-b md:py-8 border-white'>
      <Marquee/>
      <Marquee/>
    </div>
  )
}

export default Marquees
