import React, { useEffect } from 'react';

function Home() {

    // Function to break the text into span elements
    //   const wrapTextInSpans = (text) => {
    //     return text.split(' ').map((word, index) => (
    //       <span key={index} >{word}</span>
    //     ));
    //   };

    useEffect(() => {
        // This effect will run when the component is mounted, if you need animations or other effects
        const reveal = document.querySelectorAll('.reveal');
        reveal.forEach(item => {
            const span = document.createElement('span');
            span.textContent = item.textContent;



            //   console.log(item.textContent);
            item.textContent = '';
            item.appendChild(span);
        });
    }, []);

    return (
        <div className='w-full md:px-12 p-4 md:h-screen h-[70vh] relative'>
            <div className="relative h-1/2 md:w-2/3 mt-16 -translate-y-1/2 top-2/5 text-zinc-400 font-semibold">
                <h1 className='md:text-[11vw] text-5xl reveal overflow-hidden sm:leading-48 uppercase'>
                    product
                </h1>
                <h1 className='md:text-[11vw] text-5xl reveal overflow-hidden sm:ml-24 ml-16 uppercase'>
                    designer
                </h1>
                <h6 className='reveal uppercase md:text-md text-xs text-end mr-5 text-white mt-3 left-1/2'>
                    based in india
                </h6>
            </div>
            <div className=" bottom-10 w-full font-semibold md:text-md text-xs md:mt-48 uppercase text-end">Available for Full Time & Freelance
                <br />
            work from Sep ‘24</div>

            <div className='flex justify-between uppercase mt-24 md:mt-16'>
                <h3 className="md:w-56 text-[2vw] md:text-lg">previously worked at
                    <br />
                Code and Theory</h3>
                <h3 className="md:w-56 text-[2vw] md:text-lg">Protopie ambassador</h3>
                <h3 className="md:w-56 text-[2vw] md:text-lg flex items-center gap-1 justify-center">
                    <span className="w-6 h-6 bg-zinc-400 rounded-full"></span>
                    <span className="w-6 h-6 bg-zinc-400 rounded-full"></span>
                </h3>
            </div>
        </div>
    );
}

export default Home;
