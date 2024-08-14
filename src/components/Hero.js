import React from 'react'
import handIcon from "../assets/Frontend_Assets/hand_icon.png"
import hero from "../assets/Frontend_Assets/hero_image.png"

function Hero() {
    return (
        <div className='w-full h-full bg-gradient-to-b from-cyan-50 to-blue-200 px-6 tracking-tighter py-16'>
            <div className='md:flex-row flex flex-col justify-between'>

                <div className='md:px-16 md:py-32  md:w-[45%] '>

                    <h1 className='uppercase text-lg font-semibold '>New arrivals only</h1>

                    <div className='flex flex-col items-center justify-start md:leading-[3.5em] font-bold md:py-5 py-2'>
                        <p className='md:text-[5rem] text-[3rem] w-full flex items-center gap-2 leading-3 md:leading-none'>new <span className=''><img className='md:w-16 md:h-16 w-12 h-12 object-contain' src={handIcon} alt="" /></span></p>
                        
                        <p className='md:text-[5rem] text-[3rem] py-2 leading-none tracking-tight'>collections for everyone</p>
                    </div>
                    <div className='md:py-6 pt-4'>
                        <button className='bg-blue-400 py-3 px-5 rounded-full font-semibold'>Latest Collection</button>
                    </div>
                </div>
                <div className='md:w-[55%] '>
                    <img className=' md:h-[85vh] h-[75vh] object-contain md:mx-auto' src={hero} alt="" />
                </div>

            </div>
            
        </div>
    )
}

export default Hero
