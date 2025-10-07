import React from 'react'
import AboutHeading from "../../assets/Images/membership-banner-1920x425-1.webp";

const Heading = () => {
  return (
    <div className="relative w-screen h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden">
      {/* Background Image */}
      <img
        alt="JIU Membership Background"
        className="w-full h-full object-cover absolute inset-0 z-0"
        src={AboutHeading}
      />

         <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    
      <nav className="absolute top-8 left-8 z-20 flex items-center space-x-3 text-white text-sm sm:text-base font-sans">
        <span className="font-semibold">JIU</span>
        <span className="text-gray-300">/</span>
        <span className="uppercase">JIU Membership</span>
      </nav>

      {/* Page Title */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold tracking-wide">
        JIU MEMBERSHIP
      </h1>
    </div>
  )
}

export default Heading
