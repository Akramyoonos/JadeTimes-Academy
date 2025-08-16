import React from 'react';
import undergraduateDegree01 from '../../assets/Images/undergraduateDegree01.jpeg';
import undergraduateDegree02 from '../../assets/Images/undergraduateDegree02.jpeg';
import undergraduateDegree03 from '../../assets/Images/undergraduateDegree03.jpeg';

const UndergraduateDegrees = () => {
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
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-12">
          <span className="w-1.5 h-12 bg-blue-400 mr-6"></span>
          <h1 className="headingFont text-4xl lg:text-5xl font-bold tracking-wider uppercase bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Undergraduate Degrees
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pt-5">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
            <p className="text-gray-600 text-lg leading-relaxed font-open-sans">NYFA currently offers Bachelor of Fine Arts Degree (BFA), Bachelor's Degree (BA), and Associate of Fine Arts (AFA) undergraduate degree programs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-400">
            <p className="text-gray-600 text-lg leading-relaxed font-open-sans">These programs are available at NYFA New York City and Los Angeles. To enroll, students must have a high school diploma.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 group"
            style={{ backgroundImage: `url(${undergraduateDegree01})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-opacity-10 backdrop-filter  border border-white border-opacity-20 rounded-lg">
              <h2 className="text-xl font-bold">BACHELOR OF FINE ARTS DEGREE (BFA)</h2>
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
            className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 group"
            style={{ backgroundImage: `url(${undergraduateDegree02})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-opacity-10 backdrop-filter  border border-white border-opacity-20 rounded-lg">
              <h2 className="text-xl font-bold">BACHELOR OF ARTS DEGREE (BA)</h2>
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
            className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 group"
            style={{ backgroundImage: `url(${undergraduateDegree03})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white  bg-opacity-10 backdrop-filter  border border-white border-opacity-20 rounded-lg">
              <h2 className="text-xl font-bold">ASSOCIATE OF FINE ARTS (AFA)</h2>
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
          </div>
        </div>
      </div>
    
  );
};

export default UndergraduateDegrees;
