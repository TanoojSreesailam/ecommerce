import React from 'react'
import newCollect from "../assets/Frontend_Assets/new_collections"
import Item from './Item'

function NewCollect() {
    return (
        <div className='w-full py-10 md:px-8 px-2'>

        <div className='flex flex-col w-full items-center'>

            <div className='flex flex-col justify-center items-center gap-2 pb-3'>
            <h1 className='uppercase font-bold md:text-2xl text-xl text-center'>New Collection</h1>
            <hr className='w-[12vw] h-1 bg-black' />
            </div>

        <div className='w-full grid md:grid-cols-8 grid-rows-none grid-cols-4 gap-2 md:p-5'>
        {newCollect.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        </div>
</div>
    )
}

export default NewCollect
