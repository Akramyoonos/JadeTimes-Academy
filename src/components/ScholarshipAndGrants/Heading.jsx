import React from 'react'
import BlogHeadingImage from '../../assets/Images/BlogHeadingImg.Webp'

const Heading = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden">
                 <img
                   alt="Person wearing JIU shirt holding a camera with a blurred woman in the background"
                   className="absolute inset-0 z-0 object-cover w-full h-full"
                   height="400"
                   src={BlogHeadingImage}
                   width="1920"
                 />
                 <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
                 <nav className="absolute z-20 flex items-center px-12 py-2 space-x-3 font-sans text-sm text-white uppercase rounded-full top-8 left-4 sm:text-base bg-opacity-30">
                   <span className="font-semibold">JIU</span>
                   <span className="text-gray-300">/</span>
                   <span>JIU Student Finances</span>
                   <span className="text-gray-300">/</span>
                   <span>Scholarships and Grants</span>
                 </nav>
                  <h1 className="absolute top-[100px] uppercase left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold  tracking-wide whitespace-nowrap sm:top-1/2">
                   Scholarships and Grants
                 </h1>
               </div>
  )
}

export default Heading
