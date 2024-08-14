/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { ShopContext } from '../Context/ShopContext';
import CartBottom from './CartBottom';


const CartItems = () => {
    const {all_product, cartItems, removeFromCart, addToCart} = useContext(ShopContext)
  return (
    <div className='flex flex-col  h-full'>
    <div className='flex md:flex-col md:items-center flex-row gap-3 shadow-xl md:py-16  bg-gradient-to-b from-white to-blue-200 overflow-scroll'>
        <div className='w-full h-full py-3 md:py-0 hidden md:block'>
                <div className='grid md:grid-cols-7 md:place-items-center grid-rows-none md:gap-0 text-sm '>
                    <p className=' row-span-1 md:col-span-1 md:my-0 mt-[0.60rem] md:font-semibold'>Product</p>
                    <p className=' row-span-1 md:col-span-1 invisible md:visible md:font-semibold'>Title</p>
                    <p className=' row-span-1 md:col-span-1 my-[0.30rem] md:my-0 md:font-semibold'>Price</p>
                    <p className=' row-span-1 md:col-span-1 my-[0.30rem] md:my-0 md:font-semibold'>Quantity</p>
                    <p className=' row-span-1 md:col-span-1 my-[0.30rem] md:my-0 md:font-semibold'>Total</p>
                    <p className=' row-span-1 md:col-span-1 my-[0.30rem] md:my-0 md:font-semibold'>Remove</p>
                    <p className=' row-span-1 md:col-span-1 my-[0.30rem] md:my-0 md:font-semibold '>Add to Cart</p>
                </div>
                <hr />
        </div>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div className='w-full md:px-4 md:py-0'>
                <div className='grid md:grid-cols-7 place-items-center  grid-rows-none gap-3 md:gap-0 text-sm py-3 w-16 md:w-full'>
                    <img className='w-16 md:my-0 object-contain pb-1' src={e.image} alt="" />
                    <p className='hidden md:block'>{e.name}</p>
                    <p>{e.new_price}</p>
                    <p className='md:my-0 '>{cartItems[e.id]}</p>
                    <p className='md:my-0 '>{e.new_price*cartItems[e.id]}</p>
                    <div className='md:my-0'>

                    <MdDelete className='cursor-pointer' size={20}  onClick={()=>{
                        removeFromCart(e.id)
                    }}/>
                    </div>
                    <div className='md:my-0'>

                    <FaPlus className='  cursor-pointer' size={20} onClick={()=>{
                        addToCart(e.id)}} />
                    </div>
                </div>
                <hr />
            </div>
            }
            return null
        })}
    </div>
        <CartBottom/>
    </div>
  );
}

export default CartItems;
