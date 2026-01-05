// import React, { useState } from 'react'
import { BiMobile } from 'react-icons/bi'
import { BsEarbuds, BsWatch } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { CiLocationOn } from 'react-icons/ci'
import { GrCompliance } from 'react-icons/gr'
import { Link } from 'react-router'

const Sidebar = ({faiq ,affan}) => {
    
  return (
    <>
    
    {faiq && (


  <div>


     <div
      onClick={() => affan(false)}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>

     <div className="fixed top-0 left-0 h-screen w-full md:w-80 bg-white z-50 shadow-lg overflow-y-scroll">
      
       <div className="bg-[#48afff] px-8 pb-5">
        <div className="flex items-center justify-between pt-10">
          <img
            className="w-28"
            src="https://static.priceoye.pk/images/logo.svg"
            alt="logo"
          />
          <button
            onClick={() => affan(false)}
            className="text-white text-2xl"
          >
            <CgClose />
          </button>
        </div>

        <div className="space-y-3 mt-4">


         <Link to='/Login'> <button className="px-8 py-2 bg-white text-[#48afff] rounded">
            Log in
          </button></Link>



          <p className="flex gap-2 items-center text-white">
            <CiLocationOn size={25} /> Track my order
          </p>


          <p className="flex gap-2 items-center text-white">
            <GrCompliance size={25} /> Launch a complaint
          </p>


        </div>
      </div>

       <div className="p-4 space-y-3">


        <h1 className="font-bold mt-4">Categories</h1>


        <p className="flex gap-2 items-center">
          <BiMobile size={25} /> Mobiles
        </p>


        <p className="flex gap-2 items-center">
          <BsWatch size={25} /> Watches
        </p>


        <p className="flex gap-2 items-center">
          <BsEarbuds size={25} /> Wireless Buds
        </p>
      </div>



    </div>


  </div>
)}
</>
  )
}

export default Sidebar
