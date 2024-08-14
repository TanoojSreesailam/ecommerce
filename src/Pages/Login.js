import React from 'react'

function Login() {
    return (
        <div className='w-full md:py-32 py-16 bg-gradient-to-t from-cyan-50 to-blue-200'>
            <div className='md:w-[50vw] w-[90vw] bg-white mx-auto flex flex-col items-center gap-5 py-3' >
                <h1 className='text-2xl py-5 font-semibold'>Sign Up</h1>
                <div className='flex flex-col gap-3 md:w-[30vw] w-full px-2 md:px-0'>
                    <input className='py-3 px-3 outline-2 outline-blue-200 outline' type="text" placeholder='Username' />
                    <input className='py-3 px-3 outline-2 outline-blue-200 outline' type="email" placeholder='Email ID' />
                    <input className='py-3 px-3 outline-2 outline-blue-200 outline' type="password" placeholder='Password'/>
                </div>
                <button className='bg-blue-400 px-3  py-2 rounded-full'>Continue</button>
                <p>Already have an account ? <span className='text-blue-600 cursor-pointer'>Login</span></p>
                <div className='flex gap-2 px-3 md:px-0'>
                    <input type="checkbox" name='' id />
                    <p>By continuing, i agree to the terms of use and private policy</p>
                </div>
            </div>
        </div>
    )
}

export default Login
