
import React from 'react';
import Campus01 from '../../assets/Images/Campus01.webp';
import Campus02 from '../../assets/Images/Campus02.webp';
import Campus03 from '../../assets/Images/Campus03.webp';

const CampusSection = () => {
  return (
    <div className="p-8 md:p-12 lg:p-2">
      {/* Heading for Campus Selection */}
      <div className="flex items-center px-6 sm:px-6 md:px-6 lg:px-32 mb-8">
        <div className="w-1.5 h-12 bg-fuchsia-600 mr-4 md:mr-6"></div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-normal leading-tight">
          CHOOSE A CAMPUS BELOW TO EXPLORE OUR STUDENT LIFE:
        </h2>
      </div>

      {/* Campus Cards (Los Angeles & New York City) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 mb-6">
        {/* Los Angeles Card */}
        <div className="relative overflow-hidden group">
          <img
            src={Campus01}
            alt="Hollywood Sign"
            className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
            <div className="flex justify-between items-end">
              <span className="text-white text-lg md:text-xl font-bold">
                LOS ANGELES
              </span>
              {/* Circular Arrow Button for Los Angeles */}
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-current text-blue-400 group-hover:text-white transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 transform rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* New York City Card */}
        <div className="relative overflow-hidden group">
          <img
            src={Campus02}
            alt="Statue of Liberty"
            className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
            <div className="flex justify-between items-end">
              <span className="text-white text-lg md:text-xl font-bold">
                NEW YORK CITY
              </span>
              {/* Circular Arrow Button for New York City */}
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-current text-blue-400 group-hover:text-white transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8 transform rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Life News Section */}
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto mb-4 shadow-lg group">
        <img
          src={Campus03}
          alt="Students playing basketball"
          className="w-full h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-between">
          <div className="flex justify-end pt-4 pr-4">
            {/* Circular Arrow Button for Student Life News */}
            <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-current text-blue-400 group-hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8 transform rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-base md:text-lg font-bold mb-1">
              STUDENT LIFE NEWS
            </span>
            <p className="text-white text-base md:text-lg font-light">
              Find the latest new and events happening around our<br /> campuses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusSection;
