import React from 'react'
import BlogHeadingImage from '../../assets/Images/JIUSpeakerEventArticleHeadingImage.jpeg' // Assuming the image has been updated to match

const Heading = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
             <img
               alt="Andre Royo speaking at a New York Film Academy event" // Updated alt text
               className="w-full h-full object-cover absolute inset-0 z-0"              
               src={BlogHeadingImage}

             />
             <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              <nav className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex items-center space-x-3 uppercase text-white text-sm sm:text-base font-sans  bg-opacity-30 px-4 sm:px-14 py-2 rounded-full">
                   <a href="/" className="font-semibold hover:underline">JIU</a>
                   <span className="text-gray-300">/</span>
                   <a href="/blog/" className="font-semibold hover:underline">JIU Academy Blog</a>
                   <span className="text-gray-300">/</span>
                   <a href="/visit-us" className="hover:underline">Recent</a>
                 </nav>
             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-shadow-lg max-w-5xl">
                    ANDRE ROYO INSPIRES JIU STUDENTS AT NEW YORK FILM ACADEMY GUEST SPEAKER EVENT
                </h1>
                <p className="mt-8 text-sm text-gray-400 sm:text-base md:text-xl font-medium tracking-widest">
                    FEBRUARY 27, 2025
                </p>
             </div>
           </div>
  )
}

export default Heading