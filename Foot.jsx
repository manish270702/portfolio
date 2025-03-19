import React from 'react'

function Foot() {
    return (
        <div className='md:h-60 md:flex flex-col justify-between md:px-12 px-4'>
            <div className='mb-16 md:mb-0'>
                <h6 className='md:text-xl text-zinc-400'>Oops, almost forgot…</h6>
                <h5 className='md:text-xl flex flex-col group w-88'>SUBSCRIBE TO MY YOUTUBE CHANNEL<span className='group-hover:w-full w-0 duration-400 h-[1px] bg-white'></span></h5>
            </div>
            <div className='flex justify-between'>
                <div className='md:flex md:gap-10 gap-4 md:text-xl text-xs'>
                    <span className='block sm:inline'>&copy; 2025</span>
                    <span className='uppercase block sm:inline'>4:12 am et</span>
                </div>

                <div className='md:flex gap-8 md:font-regular'>
                    <h6 href="" className="md:text-xl text-xs group flex-col flex uppercase">linkedin
                        <span className='group-hover:w-full w-0 duration-700 h-[1px] bg-white'></span>
                    </h6>
                    <h6 href="" className="md:text-xl text-xs group flex-col flex uppercase">x/twitter
                        <span className='group-hover:w-full w-0 duration-700 h-[1px] bg-white'></span>
                    </h6>
                    <h6 href="" className="md:text-xl text-xs group flex-col flex uppercase">instagram
                        <span className='group-hover:w-full w-0 duration-700 h-[1px] bg-white'></span>
                    </h6>
                    <h6 href="" className="md:text-xl text-xs group flex-col flex uppercase">youtube
                        <span className='group-hover:w-full w-0 duration-700 h-[1px] bg-white'></span>
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Foot
