import React from 'react'
// import Heading from '../components/StudentResources/Heading'

const Heading = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden">
             {/* <img
               alt="Person wearing JIU shirt holding a camera with a blurred woman in the background"
               className="w-full h-full object-cover absolute inset-0 z-0"
               height="400"
               src={BlogHeadingImage}
               width="1920"
             /> */}
             <div className="absolute inset-0 bg-white opacity-50 z-10"></div>
                 <nav className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex items-center space-x-3 uppercase text-black text-sm sm:text-base font-sans  bg-opacity-30 px-4 sm:px-14 py-2 rounded-full">
                   <a href="/" className="font-semibold hover:underline">JIU</a>
                   <span className="text-black">/</span>
                   <a  className="font-semibold text-gray-400 nohover:underline">Student Resources</a>
                 </nav>
             <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl  uppercase tracking-wide text-shadow-lg">
               Student Resources
             </h1>
           </div>
  )
}

export default Heading
