import React from 'react'
import BlogHeadingImage from '../../../assets/Images/Spotlight 03.webp' // Assuming the image has been updated to match

const Heading = () => {
  return (
    <div className="relative w-full h-[350px] sm:h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
             <img
               alt="JIU students at a speaker event" // Updated alt text
               className="absolute inset-0 z-0 object-cover w-full h-full"              
               src={BlogHeadingImage}

             />
             <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
              <nav className="absolute z-20 flex flex-wrap items-center px-3 py-2 space-x-2 font-sans text-xs text-white uppercase rounded-full top-4 left-4 sm:top-8 sm:left-8 sm:text-sm bg-opacity-30 sm:px-4">
                   <a href="/" className="font-semibold hover:underline">JIU</a>
                   <span className="text-gray-300">/</span>
                   <a href="/blog/" className="font-semibold hover:underline">JIU Blogs</a>
                   <span className="text-gray-300">/</span>
                   <a href="/jiu-speaker-event-article" className="hover:underline">Recent</a>
                 </nav>
             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
                <h1 className="max-w-5xl font-sans text-3xl font-semibold tracking-wide sm:text-4xl md:text-5xl lg:text-6xl text-shadow-lg">
                   Jadetimes Journal of Universal Studies (JJUS): Advancing Knowledge Across Borders
                </h1>
                <p className="mt-6 text-xs font-medium tracking-widest uppercase sm:text-sm md:text-base">
                    October 22, 2025
                </p>
             </div>
           </div>
  )
}

export default Heading