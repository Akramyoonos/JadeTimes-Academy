import React from 'react';

const Spotlight = () => {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <div className="w-1 bg-cyan-400 h-16 mr-4"></div>
          <h1 className="text-4xl font-light text-gray-800 tracking-wider">
            SPOTLIGHT NYFA
          </h1>
        </div>

        <p className="text-gray-600 mb-12 max-w-4xl">
          At the New York Film Academy's film school, faculty members and curriculum are focused on providing students with the real world know-how to help them achieve their goals. These achievements are the result of their hard work, perseverance, talent and circumstances. Below are some of the positions and networks in which our alumni have worked:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-16">
          <img src="https://i.imgur.com/rS25a5B.png" alt="Nickelodeon" className="grayscale" />
          <img src="https://i.imgur.com/v2xN8sH.png" alt="ABC" className="grayscale" />
          <img src="https://i.imgur.com/uI9vC5P.png" alt="AMC" className="grayscale" />
          <img src="https://i.imgur.com/cQ0X6x0.png" alt="OCBS" className="grayscale" />
          <img src="https://i.imgur.com/2Y4zX1M.png" alt="Disney" className="grayscale" />
          <img src="https://i.imgur.com/rN9zQ2D.png" alt="HBO" className="grayscale" />
          <img src="https://i.imgur.com/J8b0y3t.png" alt="Magnolia Pictures" className="grayscale" />
          <img src="https://i.imgur.com/h5T2e6F.png" alt="NBC" className="grayscale" />
          <img src="https://i.imgur.com/u1w5o4N.png" alt="New Line Cinema" className="grayscale" />
          <img src="https://i.imgur.com/4S9E9pP.png" alt="Syfy" className="grayscale" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative overflow-hidden">
            <img src="https://i.imgur.com/5uR3F3k.png" alt="Documentary still" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 text-white">
              <p className="text-xs tracking-widest">
                FILMMAKING, FILM, FILM FESTIVAL HIGHLIGHTS, STUDENT & ALUMNI SPOTLIGHTS, FILM FESTIVALS
              </p>
              <h2 className="text-2xl font-semibold mt-2">
                FESTIVAL FAVORITE 'SHIRAMPARI' DOCUMENTARY HEADED TO 2023 SUNDANCE FILM FESTIVAL
              </h2>
              <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img src="https://i.imgur.com/8Q9r8gK.png" alt="Filmmaker with camera" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8 text-white">
              <p className="text-xs tracking-widest">FILMMAKING</p>
              <h2 className="text-2xl font-semibold mt-2">Student Showcase</h2>
              <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-sm italic">
          Please note: Equipment, curriculum, and projects are subject to change and may vary depending on location. Students should consult the most recently published campus catalog for the most up-to-date curriculum.
        </p>
      </div>
    </div>
  );
};

export default Spotlight;