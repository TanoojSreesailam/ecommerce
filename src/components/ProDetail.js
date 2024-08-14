import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const ProDetail =(props)=> {
    const {product} = props;
    return (
        <div className='md:w-full  h-[3rem] px-1'>

            <div className='flex items-center gap-1 md:px-16 uppercase text-sm py-2 px-2 h-full overflow-hidden'>

                Home <IoIosArrowForward className='object-contain w-4' size={20} alt="/" /> Shop <IoIosArrowForward className='object-contain w-4' size={20} alt="" />{product.category} <IoIosArrowForward className='object-contain w-4' size={20} alt="" /> {product.name}

            </div>

        </div>
    )
}

export default ProDetail
