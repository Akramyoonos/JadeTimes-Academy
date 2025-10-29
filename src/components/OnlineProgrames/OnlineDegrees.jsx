import React from 'react';
import OnlineDegrees01 from '../../assets/Images/undergraduateDegree01.webp';
import OnlineDegrees02 from '../../assets/Images/undergraduateDegree02.webp';
import OnlineDegrees03 from '../../assets/Images/undergraduateDegree03.webp';

const OnlineDegrees = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 font-sans animated-gradient">
      <style>
        {`
          @keyframes gradient-animation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animated-gradient {
            background-size: 200% 200%;
            animation: gradient-animation 15s ease infinite;
          }
        `}
      </style>
      <div className="container px-1 py-12">
        <div className="flex items-center px-6 sm:px-6 md:px-6 lg:px-33 mb-12">
          <span className="w-1.5 h-12 bg-blue-400 mr-6"></span>
          <h1 className=" text-4xl lg:text-5xl font-bold tracking-wider uppercase text-black" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Online Degrees
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div
            className="relative h-64 bg-cover bg-center  overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-2500 group"
            style={{ backgroundImage: `url(${OnlineDegrees01})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-10 transition-opacity duration-900"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-opacity-10 backdrop-filter  border border-white border-opacity-20 ">
              <h2 className="text-xl uppercase font-bold">Online Courses </h2>
              <a
                href="#"
                className="absolute bottom-6 right-6 border-2 border-white rounded-full h-10 w-10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="relative h-64 bg-cover bg-center  overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-2000 group"
            style={{ backgroundImage: `url(${OnlineDegrees02})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-10 transition-opacity duration-900"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-opacity-10 backdrop-filter  border border-white border-opacity-20 ">
              <h2 className="text-xl uppercase font-bold">Online Degrees (Coming Soon) </h2>
              <a
                href="#"
                className="absolute bottom-6 right-6 border-2 border-white rounded-full h-10 w-10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className="relative h-64 bg-cover bg-center  overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-2000 group"
            style={{ backgroundImage: `url(${OnlineDegrees03})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-10 transition-opacity duration-900"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white  bg-opacity-10 backdrop-filter  border border-white border-opacity-20 ">
              <h2 className="text-xl uppercase font-bold">Online Workshops</h2>
              <a
                href="/Work-Shops/"
                className="absolute bottom-6 right-6 border-2 border-white rounded-full h-10 w-10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:rotate-45"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default OnlineDegrees;
