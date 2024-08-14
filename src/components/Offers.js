import React from 'react'
import exclusive from "../assets/Frontend_Assets/exclusive_image.png"

function Offers() {
    return (
        <div className='md:w-[90vw] w-full mx-auto bg-gradient-to-t from-cyan-50 to-blue-200  px-10'>
            <div className='grid md:grid-cols-2 grid-rows-none'>
                <div className='p-12 md:col-span-1 row-span-1'>
                    <h1 className='text-4xl font-bold pt-5'>Exclusive</h1>
                    <h1 className='text-4xl font-bold pb-5'>Offers for you</h1>
                    <p className='text-2xl  pb-4'>Only on Best seller products</p>
                    <button className='bg-blue-400 py-3 px-5 rounded-full my-2 font-semibold'>Check Now</button>
                </div>
                <div className='md:col-span-1 row-span-1'>
                    <img src={exclusive} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Offers
