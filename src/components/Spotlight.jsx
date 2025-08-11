import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Spotlight7 from '../assets/Images/Spotlight 07.jpeg';
import Spotlight8 from '../assets/Images/Spotlight 09.jpeg';

const Spotlight = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Centered container for top content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="inline-block border-l-4 border-purple-700 pl-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500 ">
              ACADEMY 
              <br />
              <span className="text-gray-700">SPOTLIGHT</span>
            </h1>
          </div>
        </div>


        {/* Top row cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-5">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 block">
            <iframe 
              className="w-full  object-cover filter hover:grayscale-0 transition-all duration-300" 
              height="300"
              src="https://www.youtube.com/embed/ITPpLCUg0Vo" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            ></iframe>
            <div className="p-4">
              <h2 className="mt-4 text-xs tracking-widest font-semibold uppercase">
                Dark Side of Bollywood | Watch Before You Start Your Acting & Modeling Journey
              </h2>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                Welcome to "Exclusive Pulse" by JadeTimes Media LLC. In this episode, Nivedithaa charkrapani interviews special guest Prof. Simranjit Singh, a Film director & Assistant Professor to discuss two major topics impacting Dark Side of Bollywood
              </p>
            </div>
          </div>


           {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 block">
            <iframe 
              className="w-full  object-cover filter hover:grayscale-0 transition-all duration-300" 
              height="300"
              src="https://www.youtube.com/embed/FKz0Fnk_TRM" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            ></iframe>
            <div className="p-4">
              <h2 className="mt-4 text-xs tracking-widest font-semibold uppercase">
                Jadetimes International Research Conference 2025 | Dr. Jaime Geronimo Vela
              </h2>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                Dr. Jaime Geronimo Vela is a multi-talented professional with a PhD in Anthropology from the prestigious University of California, Los Angeles (UCLA). Alongside his academic credentials, Dr. Vela is a seasoned SAG-AFTRA actor, director, and filmmaker known for his dynamic work both in front of and behind the camera.
              </p>
            </div>
          </div>


           {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 block">
            <iframe 
              className="w-full  object-cover filter hover:grayscale-0 transition-all duration-300" 
              height="300"
              src="https://www.youtube.com/embed/n5mC2GT4SfU" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            ></iframe>
            <div className="p-4">
              <h2 className="mt-4 text-xs tracking-widest font-semibold uppercase">
               Check How PUBG’s Untold Origin Story Changed Gaming Forever | Jadetimes
              </h2>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Its realistic gunplay, massive maps, and intense last-man-standing format revolutionized online multiplayer gaming. The game’s success influenced countless titles, popularizing the battle royale genre worldwide. Today, PUBG remains a global gaming icon, spawning esports tournaments, mobile versions, and inspiring an entire generation of competitive shooters.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width container for bottom image grids */}
      <div className="w-full p-4 pb-10">

        {/* Seamless 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Youth Programs */}
          <a href="/DegreeProgramsPage" className="relative group cursor-pointer overflow-hidden h-96 block">
            <img
              alt="Smiling young people posing for a photo"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={Spotlight7}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">
                  DEGREE PROGRAMS
                </h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>

          {/* Study Abroad with NYFA */}
          <a href="/OnlineProgrames" className="relative group cursor-pointer overflow-hidden h-96 block">
            <img
              alt="Woman filming in front of a cathedral"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={Spotlight8}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">
                   ONLINE PROGRAMS
                </h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
