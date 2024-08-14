import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext"
import dropdowm from "../assets/Frontend_Assets/dropdown_icon.png"
import Item from '../components/Item'

function ShopCategory(props) {

    const {all_product} = useContext(ShopContext)
    return (
        <div className='w-full md:py-6 md:px-8 px-1'>
            <img className='md:w-[90vw]  md:mx-auto h-full object-contain' src={props.banner} alt="" />
            <div className='flex items-center justify-between md:px-8 pt-5'>
                <p className=' font-semibold'> Showing 1-12 <span className='text-zinc-600'>out of 36 products </span></p>

                <div className='flex py-1 gap-2 outline-blue-200 outline  px-4 text-md md:rounded-full rounded-2xl items-center'>
                    <p className='text-sm'>Sort by</p>
                    <img className='object-contain cursor-pointer' src={dropdowm} alt="" />
                </div>
            </div>
            <div className='w-full grid md:grid-cols-8 grid-rows-none grid-cols-4 gap-2 md:p-5'>
                {all_product.map((item,i)=>{
                    if (props.category === item.category){
                        return <Item className="col-span-1" key={i}  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else{
                        return null;
                    }
                })}
            </div>

        </div>
    )
}

export default ShopCategory
