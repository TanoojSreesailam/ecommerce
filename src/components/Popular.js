import React from 'react'
import data from "../assets/Frontend_Assets/data"
import Item from './Item'

function Popular() {
    return (
        <div className='w-full py-10 md:px-8 px-2'>

            <div className='flex flex-col w-full items-center'>

                <div className='flex flex-col justify-center items-center gap-2 pb-3'>
                <h1 className='uppercase font-bold md:text-2xl text-xl text-center'>Popular for Women</h1>
                <hr className='w-[12vw] h-1 bg-black' />
                </div>

            <div className='w-full grid md:grid-cols-8 grid-rows-none grid-cols-4 gap-2 md:p-5'>
            {data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
            </div>
        </div>
    )
}

export default Popular
