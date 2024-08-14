import React from 'react'
import Logo from "../assets/icon.png"
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div className='w-full py-10'>
            <div className='flex flex-col gap-10 justify-center items-center'>

                <div className='flex items-center'>
                <img className="w-14 h-14 object-contain" src={Logo} alt="" />
                <h1 className=" text-lg">SHOPPER</h1>
                </div>

                <ul className='md:flex-row flex flex-col items-center md:gap-14 gap-6'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>

                <div className='flex gap-10'>
                    <GrInstagram size={30}/>
                    <BsWhatsapp size={30}/>
                    <FaPinterest size={30}/>
                    <MdEmail size={30}/>
                </div>
                
                <div className='border-t-2 border-t-blue-600 w-full text-center'>
                    <p className='pt-4'> © Copyright @ 2024 - All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
