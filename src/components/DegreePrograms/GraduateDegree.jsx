import React from 'react';
import graduateDegree01 from '../../assets/Images/GraduateDegree01.jpeg';
import graduateDegree02 from '../../assets/Images/GraduateDegree02.jpeg';

const GraduateDegree = () => {
  return (
    <div className="font-sans">
      <div className="container mx-auto px-10 py-10 lg:py-10">
        {/* Header */}
        <div className="flex items-center mb-10">
          <span className="w-1.5 h-12 bg-blue-400 mr-6"></span>
          <h1 className="headingFont text-4xl lg:text-5xl font-bold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Graduate Degrees
          </h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1: MFA */}
          <div
            className="relative h-96 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            style={{ backgroundImage: `url(${graduateDegree01})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative z-10 p-8 flex flex-col h-full bg-opacity-10 backdrop-filter  border border-white border-opacity-20 rounded-lg">
              <div className="flex-grow"></div>
              <h2 className="text-white text-2xl font-semibold">MASTER OF FINE ARTS (MFA)</h2>
              <a
                href="#"
                className="absolute bottom-8 right-8 w-12 h-12 border-2 border-[#42a5f5] rounded-full flex items-center justify-center text-[#42a5f5] group-hover:bg-[#42a5f5] group-hover:text-white transition-all duration-300 transform group-hover:rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: MA */}
          <div
            className="relative h-96 w-full bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            style={{ backgroundImage: `url(${graduateDegree02})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative z-10 p-8 flex flex-col justify-end h-full  bg-opacity-10 backdrop-filter  border border-white border-opacity-20 rounded-lg">
              <h2 className="text-white text-2xl font-semibold">MASTER OF ARTS (MA)</h2>
              <a
                href="#"
                className="absolute bottom-8 right-8 w-12 h-12 border-2 border-[#42a5f5] rounded-full flex items-center justify-center text-[#42a5f5] group-hover:bg-[#42a5f5] group-hover:text-white transition-all duration-300 transform group-hover:rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GraduateDegree;
