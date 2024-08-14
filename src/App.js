import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Products from './Pages/Products'
import Login from './Pages/Login'
import Cart from './Pages/Cart'

import men_banner from "./assets/Frontend_Assets/banner_mens.png"
import women_banner from "./assets/Frontend_Assets/banner_women.png"
import kids_banner from "./assets/Frontend_Assets/banner_kids.png"
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full h-full'>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Shop/>}/> 
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />}/> 
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />}/> 
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />}/> 
        <Route path='/product' element={<Products/>}>
          <Route path=':productId' element={<Products/>}/> 
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
