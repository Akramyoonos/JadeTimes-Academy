import React from 'react'
import DegreeProgramsHeadingImage from '../../assets/Images/JADETIMESCONFERENCESImg.webp'

const Heading = () => {
  return (
     <div className="relative w-full  h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden">
                 <img
                   alt="Person wearing JIU shirt holding a camera with a blurred woman in the background"
                   className="w-full h-full object-cover absolute inset-0 z-0"
                   height="400"
                   src={DegreeProgramsHeadingImage}
                   width="1920"
                 />
                 <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                 <nav className="absolute top-8 left-8 z-20 flex items-center space-x-3 text-white text-sm sm:text-base font-sans  bg-opacity-30 px-4 py-2 rounded-full">
                   <span className="font-semibold">JIU</span>
                   <span className="text-gray-300">/</span>
                   <span>JADE TIMES CONFERENCES</span>
                 </nav>
                 <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold tracking-wide text-shadow-lg">
                   JADE TIMES CONFERENCES
                 </h1>
               </div>
  )
}

export default Heading
