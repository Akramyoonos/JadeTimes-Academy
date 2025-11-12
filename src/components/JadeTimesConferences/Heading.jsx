import React from 'react'
import BlogHeadingImage from '../../assets/Images/JadetimeConferencesHeadingImg.webp' // Assuming the image has been updated to match

const Heading = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
             <img
               alt="JIU students at a speaker event" // Updated alt text
               className="absolute inset-0 z-0 object-cover w-full h-full"              
               src={BlogHeadingImage}

             />
             <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
              <nav className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex flex-wrap items-center space-x-2 uppercase text-white text-xs sm:text-sm font-sans bg-opacity-30 px-3 sm:px-4 py-2 rounded-full">
                   <a href="/" className="font-semibold hover:underline">JIU</a>
                   <span className="text-gray-300">/</span>
                   <a href="/" className="font-semibold hover:underline">ACADEMY SPOTLIGHT</a>
                   <span className="text-gray-300">/</span>
                   <a className="">JADETIMES Conferences</a>
                 </nav>
             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white uppercase">
                 <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-semibold tracking-wide text-shadow-lg">
                   JADETIMES Conferences
                 </h1>
             </div>
           </div>
  )
}

export default Heading