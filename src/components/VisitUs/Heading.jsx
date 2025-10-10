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
                 <nav className="absolute z-20 flex items-center px-4 py-2 space-x-3 font-sans text-sm text-white uppercase rounded-full top-4 left-4 sm:top-8 sm:left-8 sm:text-base bg-opacity-30 sm:px-14">
                   <a href="/" className="font-semibold hover:underline">JIU</a>
                   <span className="text-gray-300">/</span>
                   <a href="/on-campus" className="font-semibold hover:underline">On Campus</a>
                   <span className="text-gray-300">/</span>
                   <a href="/visit-us" className="hover:underline">Visit Us</a>
                 </nav>
                <h1 className="absolute z-20 font-sans text-2xl font-semibold tracking-wide text-white uppercase -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl md:text-4xl lg:text-5xl text-shadow-lg whitespace-nowrap">
                   Visit Us
                </h1>
  </div>
  )
}

export default Heading
