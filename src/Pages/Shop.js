import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offers from '../components/Offers'
import NewCollect from '../components/NewCollect'
import Newsletter from '../components/Newsletter'


function Shop() {
    return (
        <div className='w-full h-full'>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollect/>
            <Newsletter/>
        </div>
    )
}

export default Shop
