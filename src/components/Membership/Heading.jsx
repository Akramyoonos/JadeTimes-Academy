import React from 'react'
import { Link } from 'react-router-dom';
import AboutHeading from "../../assets/Images/membership-banner-1920x425-1.webp";

const Heading = () => {
  return (
    <div className="relative w-screen h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden">
      {/* Background Image */}
      <img
        alt="JIU Membership Background"
        className="absolute inset-0 z-0 object-cover w-full h-full"
        src={AboutHeading}
      />

         <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
         <nav className="absolute z-20 flex items-center px-1 pr-1 py-2 space-x-3 font-sans text-sm text-white uppercase rounded-full top-8 left-8 sm:text-base bg-opacity-30">
                             <Link to="/"><span className="font-semibold hover:underline">JIU</span></Link>
                             <span className="text-gray-300">/</span>
                             <span>Become a JadeTimes Member</span>
                           </nav>

      {/* Page Title */}
      <h1 className="absolute z-20 font-sans text-2xl font-semibold tracking-wide text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl md:text-4xl lg:text-5xl">
        JIU MEMBERSHIP
      </h1>
    </div>
  )
}

export default Heading
