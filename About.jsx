import React from 'react'

function About() {
    return (
        <div className='md:flex md:h-screen mb-20 md:mb-0 md:w-4/5 md:mx-auto'>
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3 gap-5 flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 flex items-center  justify-start">
                    <div className='w-60 h-60 items-center justify-center rounded-full bg-red-400'></div>
                </div>
                <div className="md:w-2/3 px-4 md:px-0 mt-4 md:mt-0 text-sm">
                <h6 className='text-zinc-400 md:font-semibold text-lg'>(About me)</h6>
                <p className='md:text-xl mt-5'>I'm a product and motion designer who loves creating things that are not just eye candy but also fix life's little hiccups. When I'm not glued to my computer like a robot or scribbling on my iPad, you might catch me leveling up in video games, snapping photos like a wannabe pro, or watching football because football is life. My design philosophy? Keep it snazzy, make it work, and sprinkle in a bit of fun. I'm the designer you want on your team if you want people to exclaim, "I need that in my life!".</p>
                <button className='border-white border-[1px] px-6 rounded-full font-semibold hover:text-black hover:bg-white duration-500 py-2 mt-5'>Let's talk</button>
                </div>
            </div>
        </div>
    )
}

export default About
