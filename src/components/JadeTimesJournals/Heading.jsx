import React from 'react'
import { Link } from 'react-router-dom';
import DegreeProgramsHeadingImage from '../../assets/Images/jadetimesjournalsImg.webp'

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
                 <nav className="absolute z-20 flex flex-wrap items-center px-3 py-2 space-x-2 font-sans text-xs text-white uppercase rounded-full top-4 left-4 sm:top-8 sm:left-8 sm:text-sm bg-opacity-30 sm:px-4">
                   <a href="/" className="font-semibold hover:underline">JIU</a>
                   <span className="text-gray-300">/</span>
                   <a href="/" className="font-semibold hover:underline">ACADEMY SPOTLIGHT</a>
                   <span className="text-gray-300">/</span>
                   <a className="">JADETIMES JOURNALS</a>
                 </nav>
                 <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold tracking-wide text-shadow-lg">
                   JADE TIMES JOURNALS
                 </h1>
               </div>
  )
}

export default Heading
