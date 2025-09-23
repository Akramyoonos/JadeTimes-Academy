import React from 'react'

const Heading = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
             <div 
               className="w-full h-full absolute inset-0 z-0"
               style={{ background: 'linear-gradient(0deg, #ff00bb 0%, #0c1ea1 100%)' }}
             ></div>
             <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              <nav className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex items-center space-x-3 uppercase text-white text-sm sm:text-base font-sans  bg-opacity-30 px-4 sm:px-14 py-2 rounded-full">
                   <a href="/" className="font-semibold hover:underline">JIU</a>
                   <span className="text-gray-300">/</span>
                   <a href="/blog/" className="font-semibold hover:underline">JIU Academy Blog</a>
                   <span className="text-gray-300">/</span>
                   <a href="/" className="nohover:underline">Academic Programs</a>
                 </nav>
             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-shadow-lg max-w-5xl">
                   Academic Programs
                </h1>
             </div>
           </div>
  )
}

export default Heading