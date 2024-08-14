import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
    return (
        <div className='w-full  md:py-10 py-2 md:px-2 px-0 md:col-span-2 row-span-2 col-span-2'>
            {/* <Link to={`/product/${props.id}`}></Link> */}
            <div className='bg-zinc-100 shadow-md md:shadow-lg shadow-zinc-700 md:px-4 px-1 md:py-3 py-1'>
                <Link to={`/product/${props.id}`}><img className='w-full h-full object-cover mx-auto' src={props.image} alt="" /></Link>
                <h1 className='md:text-lg text-sm font-normal py-3'>{props.name}</h1>
                <div className='flex items-center gap-5'>
                    <p className='text-lg font-semibold'>${props.new_price}</p>
                    <p className='text-md pl-2'><strike className="text-zinc-800">${props.old_price}</strike></p>
                </div>
            </div>
        </div>
    )
}

export default Item
