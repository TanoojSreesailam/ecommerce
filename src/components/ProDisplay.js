import React, { useContext } from 'react'
import star_icon from "../assets/Frontend_Assets/star_icon.png"
import star_dull from "../assets/Frontend_Assets/star_dull_icon.png"
import DescriptionBox from './DescriptionBox';
import { ShopContext } from '../Context/ShopContext';

function ProDisplay(props) {
    const {product} = props;

    const {addToCart} = useContext(ShopContext)

    return (
        <div className='md:w-[90vw] mx-auto my-3  h-full py-10 md:px-16 px-3 bg-gradient-to-b from-cyan-50 to-blue-200'>
            <div className='md:flex-row flex flex-col gap-5 h-full'>

                <div className='md:flex-row flex flex-col-reverse md:gap-3 gap-4'>

                    <div className='flex md:flex-col gap-3 overflow-scroll'>
                        <img className='md:w-20 md:h-20 w-20 object-contain'  src={product.image} alt="" />
                        <img className='md:w-20 md:h-20 w-20 object-contain'  src={product.image} alt="" />
                        <img className='md:w-20 md:h-20 w-20 object-contain'  src={product.image} alt="" />
                        <img className='md:w-20 md:h-20 w-20 object-contain'  src={product.image} alt="" />
                    </div>
                    <div className=''>
                        <img src={product.image} alt="" />
                    </div>
                </div>


                <div>
                    <h1 className='font-semibold md:text-3xl text-xl pb-3'>{product.name}</h1>
                    <div className='pb-3 text-sm'>
                        <p>Made from high-quality Material, ensuring durability and comfort.</p>
                        <p>Experience the perfect blend of style, comfort, and quality</p> 
                    </div>
                    <div className='flex pb-3'>
                        <img className='object-contain' src={star_icon} alt="" />
                        <img className='object-contain' src={star_icon} alt="" />
                        <img className='object-contain' src={star_icon} alt="" />
                        <img className='object-contain' src={star_icon} alt="" />
                        <img className='object-contain' src={star_dull} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className='flex gap-4 pb-5 items-center'>
                        <div> <strike>${product.old_price}</strike></div>
                        <div className='font-bold text-blue-500 text-lg'>${product.new_price}</div>
                    </div>
                    
                    <div className=''>
                        <h1 className=' border-b border-black inline'>Select Size</h1>
                        <div className='flex md:gap-10 pt-3 pb-7'>
                            <p className='cursor-pointer px-2 border border-zinc-400'>S</p>
                            <p className='cursor-pointer px-2 border border-zinc-400'>M</p>
                            <p className='cursor-pointer px-2 border border-zinc-400'>L</p>
                            <p className='cursor-pointer px-2 border border-zinc-400'>XL</p>
                            <p className='cursor-pointer px-2 border border-zinc-400'>XXL</p>
                        </div>
                        <div className='pb-4'>
                            <button onClick={()=>{addToCart(product.id)}} className='bg-blue-400 px-3 rounded-full py-2'>ADD TO CART</button>
                        </div>
                        <p className='font-semibold py-4'>Tags: <span className='font-normal px-2'>Modern, Latest, Comfort</span></p>
                    </div>
                </div>
            </div>
            <DescriptionBox/>
        </div>
    )
}

export default ProDisplay
