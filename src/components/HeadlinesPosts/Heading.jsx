import React from 'react'

const Heading = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
             <div 
               className="absolute inset-0 z-0 w-full h-full"
               style={{ background: 'linear-gradient(0deg, #142266 0%, #2472a3 100%)' }}
             ></div>
             <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
              <nav className="absolute z-20 flex items-center px-4 py-2 space-x-3 font-sans text-sm text-white uppercase rounded-full top-4 left-4 sm:top-8 sm:left-8 sm:text-base bg-opacity-30 sm:px-14">
                   <a href="/" className="font-semibold hover:underline">JIU</a>
                   <span className="text-gray-300">/</span>
                   <a href="/blog/" className="font-semibold hover:underline">JIU Academy Blog</a>
                   <span className="text-gray-300">/</span>
                   <a href="/" className="nohover:underline">Headlines</a>
                 </nav>
             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
                <h1 className="max-w-5xl font-sans text-2xl font-semibold tracking-wide uppercase sm:text-3xl md:text-4xl lg:text-5xl text-shadow-lg">
                   Headlines
                </h1>
             </div>
           </div>
  )
}

export default Heading