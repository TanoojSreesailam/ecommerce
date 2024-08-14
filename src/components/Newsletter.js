import React from "react";

function Newsletter() {
  return (
    <div className="md:w-[90vw] w-full mx-auto bg-gradient-to-t from-cyan-50 to-blue-200  px-10">
      <div className="flex items-center justify-center text-center">
        <div className="p-12 md:col-span-1 row-span-1">
          <h1 className="text-4xl font-bold pt-5">Get Exclusive Offers On Email</h1>
          <p className="text-xl  pb-4">Subscribe to our newsletter and stay updated</p>
          <div className="flex w-full py-3">
            <input className="px-2 rounded-full w-full" type="email" placeholder="Email Id" />
            <button className="bg-blue-400 py-3 px-5 rounded-full my-2 font-semibold">
                Subscribe
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
