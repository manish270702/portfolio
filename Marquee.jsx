import { motion } from 'motion/react';
import { div } from 'motion/react-client';
import React from 'react'

function Marquee() {
    const data = [
        { url: "https://cynthiaugwu.com/logos/AVIS.svg" },
        { url: 'https://cynthiaugwu.com/logos/Clover.svg' },
        { url: 'https://cynthiaugwu.com/logos/Expedia.svg' },
        { url: 'https://cynthiaugwu.com/logos/Baron.svg' },
        { url: 'https://cynthiaugwu.com/logos/ETS.svg' },
        { url: 'https://cynthiaugwu.com/logos/Lucid.svg' },
        { url: 'https://cynthiaugwu.com/logos/Identity.svg' },
        { url: 'https://cynthiaugwu.com/logos/Microsoft.svg' },
        { url: 'https://cynthiaugwu.com/logos/Under_armour.svg' },
        { url: 'https://cynthiaugwu.com/logos/NFL.svg' },
        { url: 'https://cynthiaugwu.com/logos/NEOM.svg' },
        { url: 'https://cynthiaugwu.com/logos/Comcast.svg' },
        { url: 'https://cynthiaugwu.com/logos/Toefl.svg' },
        { url: 'https://cynthiaugwu.com/logos/Zappos.svg' }
    ];
    return (
        <div className="flex items-center">
            <motion.div className='flex gap-8 md:gap-20' animate={{  x: "-100%"}} transition={{ 
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",  
                        duration: 40,        
                        ease: "linear"                       }
                }} >
            {data.map((item, index) => <div className="md:w-60 w-28 flex justify-center text-white md:h-32 h-20">
                <img src={item.url} className='h-full' alt="" />
            </div>)}
        </motion.div>
        <motion.div className='flex md:gap-20 gap-8' animate={{  x: "-100%" }} transition={{ 
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",  
                        duration: 40,        
                        ease: "linear"                       }
                }} >
            {data.map((item, index) => <div className="md:w-60 w-28 flex justify-center text-white md:h-32 h-20">
                <img src={item.url} className='h-full' alt="" />
            </div>)}
        </motion.div>
        </div>
    )
}

export default Marquee
