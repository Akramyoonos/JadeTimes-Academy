import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AlumniExplore01 from '../../assets/Images/AlumniExplore01.webp';
import AlumniExplore02 from '../../assets/Images/AlumniExplore02.webp';
import AlumniExplore03 from '../../assets/Images/AlumniExplore03.webp';

const Alumni = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-6 lg:px-34 py-8">
        <div className="flex items-center mb-8">
          <div className="w-1.5 h-16 bg-purple-600 mr-4"></div>
          <h1 className="text-4xl font-light tracking-widest text-gray-800">
            FILM SCHOOL ALUMNI
          </h1>
        </div>
        <p className="text-gray-600 mb-12 max-w-6xl">
          NYFA's Film School strives to offer an intensive and focused education
          with hands-on experience and practical training. The achievements of
          any NYFA alumni are the result of their hard work, perseverance,
          talent and circumstances, and NYFA is proud of our graduates who have
          pursued ambitious creative goals. Many of our alumni now fill roles as
          Film Directors, Film Editors, Screenwriters, Cinematographers,
          Producers, and Actors on award-winning films, creative content, and
          television shows.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card1 */}
          <a href="/alumni" className="relative group overflow-hidden h-96 block shadow-lg">
            <img
              src={AlumniExplore01}
              alt="Damon Wayans"
              className="w-full h-full object-cover transition-transform duration-2000 ease-in-out group-hover:scale-115"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent flex items-end">
              <div className="text-white p-8 w-full transform translate-y-4  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h3 className="text-2xl font-bold">Damon Wayans</h3>
                <p className="text-sm tracking-wider">Writer | Actor | Producer</p>
              </div>
            </div>
          </a>

          {/*  Card2 */}
          <a href="/alumni" className="relative group overflow-hidden h-96 block  shadow-lg">
            <img
              src={AlumniExplore02}
              alt="Bill Hader"
              className="w-full h-full object-cover transition-transform duration-2000 ease-in-out group-hover:scale-115"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent flex items-end">
              <div className="text-white p-8 w-full transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h3 className="text-2xl font-bold">Bill Hader</h3>
                <p className="text-sm tracking-wider">Actor | Comedian | Writer</p>
              </div>
            </div>
          </a>

          {/* Card3 */}
          <a href="/alumni" className="relative group overflow-hidden h-96 block  shadow-lg">
            <img
              src={AlumniExplore03}
              alt="Issa Rae"
              className="w-full h-full object-cover transition-transform duration-2000 ease-in-out group-hover:scale-115"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent flex items-end">
              <div className="text-white p-8 w-full transform translate-y-4  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h3 className="text-2xl font-bold">Issa Rae</h3>
                <p className="text-sm tracking-wider">Actor | Producer</p>
              </div>
            </div>
          </a>

          {/* More Card */}
          <a href="/alumni" className="relative group overflow-hidden h-96 block  shadow-lg ">
            <div className="absolute inset-0  backdrop-blur-sm flex items-center justify-center transition-all duration-300 ">
              <div className="text-center text-blue">
                  <div className="w-16 h-16 rounded-full border-2 border-blue flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:border-blue">
                      <FontAwesomeIcon icon={faArrowRight} className="text-blue text-3xl transition-colors duration-300 group-hover:text-blue" />
                  </div>
                  <p className="text-xl font-semibold transition-colors duration-300 group-hover:text-blue-400">Explore More</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Alumni;