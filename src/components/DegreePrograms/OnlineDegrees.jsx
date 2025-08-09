import React from 'react';
import onlineDegreeImage from '../../assets/Images/onlineDegreeImage.jpeg';

const OnlineDegrees = () => {
  return (
    <div className="bg-gradient-to-br pb-10 from-gray-50 to-gray-100 font-sans animated-gradient">
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
      <div className=" container mx-auto  sm:px-6 lg:px-8 px-4 py-12">
        {/* Header Section */}
         <div className="flex items-center justify-center mb-12">
          <span className="w-1.5 h-12 bg-purple-600 mr-6"></span>
          <h1 className="headingFont text-4xl lg:text-5xl font-bold tracking-wider uppercase text-gray-800">
            Online Degrees
          </h1>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-400 max-w-2xl mx-auto text-center transition-all duration-300 hover:shadow-xl hover:border-purple-600">
          <p className="text-gray-700 text-xl leading-relaxed font-open-sans">
            In addition to our in-person degree programs, NYFA offers a selection of innovative online degree programs.
          </p>
        </div>
      </div>

      {/* Main Banner Section */}
      <div
        className="relative w-full h-[400px] bg-cover bg-center text-white shadow-2xl"
        style={{ backgroundImage: `url(${onlineDegreeImage})` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Container for content on top of the banner */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          {/* Main Title on Banner */}
          <div className="absolute bottom-16 left-4 sm:left-6 lg:left-8  bg-opacity-10 backdrop-filter  p-6 rounded-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold max-w-md leading-tight font-montserrat">ONLINE MA IN ENTREPRENEURIAL PRODUCING AND INNOVATION (MA)</h2>
          </div>

          {/* Arrow Icon */}
          <a
            href="#"
            className="absolute bottom-8 right-4 sm:right-6 lg:right-8 w-14 h-14 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-45"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OnlineDegrees;
