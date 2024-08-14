/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import Logo from "../assets/icon.png";
import Cart from "../assets/Frontend_Assets/cart_icon.png";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState("shop")

  const {getTotalCartItems} = useContext(ShopContext)

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full py-3 border-b border-b-zinc-300 tracking-tighter">
      <div className="flex md:justify-around justify-between px-4 md:px-0 items-center w-full ">
        <div className="flex items-center gap-1 cursor-pointer">
          <img className="w-16 h-16 object-contain p-1" src={Logo} alt="" />
          <h1 className=" text-2xl text-center">SHOPPER</h1>
        </div>

        <div className="md:flex justify-between items-center gap-8 hidden w-[60%] ">
          <div className="flex justify-evenly gap-4 ">
            <a onClick={()=>{
                setMenu("shop")
            }} className={menu === "shop"?"px-2 border-b-[3px] border-b-blue-500 pb-2 font-bold text-center": "px-5 text-center" } ><Link to="/">Shop</Link> </a>
            <a onClick={()=>{
                setMenu("men")
            }} className={menu === "men"?"px-2 border-b-[3px] border-b-blue-500 pb-2 font-bold": "px-5" }><Link to="/men">Men</Link></a>
            <a onClick={()=>{
                setMenu("women")
            }} className={menu === "women"?"px-2 border-b-[3px] border-b-blue-500 pb-2 font-bold": "px-5" } ><Link to="/women">Women</Link></a>
            <a onClick={()=>{
                setMenu("kids")
            }} className={menu === "kids"?"px-2 border-b-[3px] border-b-blue-500 pb-2 font-semibold": "px-5" }><Link to="/kids">Kids</Link></a>
          </div>
          
 
          <div className="flex justify-between items-center gap-6">

            <Link to="/login">
            <button className="px-5 bg-blue-400 rounded-3xl py-2 font-semibold">Login</button>
            </Link>

            <Link to="/cart">
              <div className="relative">
              <img className="w-10 h-10 object-contain py-2 cursor-pointer" src={Cart} alt=""/>
              <div className="bg-red-500 h-4 py-1 top-0 right-0 w-6 rounded-full absolute text-sm text-center items-center flex justify-center">{getTotalCartItems()}</div>
              </div>
            </Link>
  
          </div>
          
        </div>


        <div onClick={handleNav} className="md:hidden">
          {!nav?<RiMenuUnfold2Fill size={20} />: <IoClose className="" size={25} />}
        </div>

      </div>  
      <div className={nav?"fixed top-0 left-0 bg-zinc-300 h-full w-[80vw] py-10 px-3": "absolute top-[-100%] left-[-100%]"}>
        <div className="flex flex-col justify-evenly gap-8">
          <a onClick={handleNav} className="px-5 border-b border-b-zinc-300 pb-2" href="/">
          <Link to="/">Shop</Link>
          </a>
          <a onClick={handleNav} className="px-5 border-b border-b-zinc-300 pb-2" href="/">
          <Link to="/men">Men</Link>
          </a>
          <a onClick={handleNav} className="px-5 border-b border-b-zinc-300 pb-2" href="/">
          <Link to="/women">Women</Link>
          </a>
          <a onClick={handleNav} className="px-5 border-b border-b-zinc-300 pb-2" href="/">
          <Link to="/kids">Kids</Link>
          </a>
          <div className="flex justify-between px-3">
          <Link to="/login">
            <button onClick={handleNav} className="px-5 bg-zinc-400 rounded-3xl py-2 font-semibold">Login</button>
            </Link>
            <Link to="/cart">
              <div onClick={handleNav} className="relative">
              <img className="w-10 h-10 object-contain py-2 cursor-pointer" src={Cart} alt=""/>
              <div className="bg-red-500 h-4 py-1 top-0 right-0 w-6 rounded-full absolute text-sm text-center items-center flex justify-center">{getTotalCartItems()}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
