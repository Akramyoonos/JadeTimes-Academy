import React from 'react'
import { Link } from 'react-router-dom';
import BlogHeadingImage from '../../assets/Images/BlogHeadingImg.Webp'

const Heading = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden">
                 <img
                   alt="Person wearing JIU shirt holding a camera with a blurred woman in the background"
                   className="absolute inset-0 z-0 object-cover w-full h-full"
                   height="400"
                   src={BlogHeadingImage}
                   width="1920"
                 />
                 <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
                 <nav className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex flex-wrap items-center space-x-2 uppercase text-white text-xs sm:text-sm font-sans bg-opacity-30 px-3 sm:px-4 py-2 rounded-full">
                         <Link to="/"><span className="font-semibold hover:underline">JIU</span></Link>
                         <span className="text-gray-300">/</span>
                         <Link to="/discover"><span className="font-semibold hover:underline">FINANCES</span></Link>
                         <span className="text-gray-300">/</span>
                         <span> Scholarships and Grants</span>
                       </nav>
                  <h1 className="absolute top-[150px] uppercase left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold  tracking-wide whitespace-nowrap sm:top-1/2">
                   Scholarships and Grants
                 </h1>
               </div>
  )
}

export default Heading
