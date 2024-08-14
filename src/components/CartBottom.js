import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const CartBottom = () => {

    const {getTotalCartAmount} = useContext(ShopContext)

  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col justify-between md:px-16 py-16 px-8">
        <div className="md:w-[60%] flex flex-col gap-6">
          <h1 className="text-3xl font-semibold py-5">Cart Totals</h1>
          <div>
            <div className="flex justify-between">
              <p className="font-semibold py-2">Sub-Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="font-semibold py-2">Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <h1 className="font-semibold py-2 text-xl">Total</h1>
              <h1 className="font-semibold text-xl">${getTotalCartAmount()}</h1>
            </div>
          </div>
          <button className="bg-blue-400 py-2 rounded-full font-semibold">
            Proceed to checkout
          </button>
        </div>
        <div className="md:w-[30%] ">
          <p className="font-semibold py-3">
            If you have PROMO CODE, Enter here
          </p>
          <div className="py-3 flex justify-between gap-3">
            <input
              className="w-full px-3 py-2 border-[1px] border-blue-600 rounded-full"
              type="text"
              placeholder="Promo code"
            />
            <button className="bg-blue-400 px-3 py-2 rounded-full font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBottom;
