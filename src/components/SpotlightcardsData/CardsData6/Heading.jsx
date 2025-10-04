import React from 'react'
import BlogHeadingImage from '../../../assets/Images/Spotlight 06.webp' // Assuming the image has been updated to match

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
                   <a href="/blog/" className="font-semibold hover:underline">JIU Blogs</a>
                   <span className="text-gray-300">/</span>
                   <a href="/jiu-speaker-event-article" className="hover:underline">Recent</a>
                 </nav>
             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-shadow-lg max-w-5xl">
                    How Jadetimes University Launches Students Into Industry
                </h1>
                <p className="mt-6 text-xs sm:text-sm md:text-base uppercase font-medium tracking-widest">
                    FEBRUARY 27, 2025
                </p>
             </div>
           </div>
  )
}

export default Heading