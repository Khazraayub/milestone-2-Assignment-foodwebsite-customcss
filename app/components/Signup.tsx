import React from 'react'

export default function Signup() {
  return (
    <section className="text-white bg-red-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-extrabold text-4xl text-white underline">PIZZA HOUSE SIGNUP PAGE</h1>
      <p className="leading-relaxed mt-4 ">If you want to signup & want to be a part of Pizza House. So enter your details here. Thank you!!.</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className=" text-lg font-medium title-font mb-5">Sign Up</h2>
      <div className=" mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm ">Full Name</label>
        <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className=" mb-4">
        <label htmlFor="email" className="leading-7 text-sm ">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 rounded text-lg">Done</button>
      <p className="text-xs  mt-3">Thanks for being a part of Pizza House!!</p>
    </div>
  </div>
</section>
  )
}
