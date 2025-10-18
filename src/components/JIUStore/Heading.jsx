import React from 'react'
import BlogHeadingImage from '../../assets/Images/JIUStoreHeadingImg01.webp' // Assuming the image has been updated to match

const Heading = () => {
  return (
    <div className="relative w-full h-[240px] sm:h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
             <img
               alt="JIU students at a speaker event" // Updated alt text
               className="w-full h-full object-cover absolute inset-0 z-0"              
               src={BlogHeadingImage}

             />
             <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              <nav className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex flex-wrap items-center space-x-2 uppercase text-white text-xs sm:text-sm font-sans bg-opacity-30 px-3 sm:px-4 py-2 rounded-full">
                   <a href="/" className="font-semibold hover:underline">JIU</a>
                   <span className="text-gray-300">/</span>
                   <a href="/blog/" className="font-semibold hover:underline">Discover JIU</a>
                   <span className="text-gray-300">/</span>
                   <a href="/jiu-speaker-event-article" className="hover:underline">NEWS AND CULTURE</a>
                 </nav>
              </div>
  )
}

export default Heading