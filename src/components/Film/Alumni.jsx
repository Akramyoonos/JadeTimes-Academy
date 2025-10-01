import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AlumniExplore01 from '../../assets/Images/AlumniExplore01.webp';
import AlumniExplore02 from '../../assets/Images/AlumniExplore02.jpeg';
import AlumniExplore03 from '../../assets/Images/AlumniExplore03.jpeg';

const Alumni = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-34 py-8">
        <div className="flex items-center mb-8">
          <div className="w-1.5 h-16 bg-purple-600 mr-4"></div>
          <h1 className="text-4xl font-light tracking-widest text-gray-800">
            FILM SCHOOL ALUMNI
          </h1>
        </div>
        <p className="text-gray-600 mb-12 max-w-4xl">
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
          {/* Damon Wayans Card */}
          <a href="#" className="relative group overflow-hidden h-96 block">
            <img
              src={AlumniExplore01}
              alt="Damon Wayans"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0  bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300 flex items-end">
              <div className="text-white p-4 w-full">
                <div className="relative border-2 border-blue-400 p-4">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2">
                    <FontAwesomeIcon icon={faStar} className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-xl font-bold">Damon Wayans</p>
                  <p className="text-sm">Writer | Actor | Producer</p>
                </div>
              </div>
            </div>
          </a>

          {/* Bill Hader Card */}
          <a href="#" className="relative group overflow-hidden h-96 block">
            <img
              src={AlumniExplore02}
              alt="Bill Hader"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300 flex items-end">
              <div className="text-white p-4 w-full">
                <div className="relative border-2 border-blue-400 p-4">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2  px-2">
                    <FontAwesomeIcon icon={faStar} className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-xl font-bold">Bill Hader</p>
                  <p className="text-sm">Actor | Comedian | Writer</p>
                </div>
              </div>
            </div>
          </a>

          {/* Issa Rae Card */}
          <a href="#" className="relative group overflow-hidden h-96 block">
            <img
              src={AlumniExplore03}
              alt="Issa Rae"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0  bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300 flex items-end">
              <div className="text-white p-4 w-full">
                <div className="relative border-2 border-blue-400 p-4">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2  px-2">
                    <FontAwesomeIcon icon={faStar} className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-xl font-bold">Issa Rae</p>
                  <p className="text-sm">Actor | Producer</p>
                </div>
              </div>
            </div>
          </a>

          {/* More Card */}
          <a href="" className="block w-70 h-96">
                                  <div className="relative w-full h-full border-2 border-blue-500 flex items-center justify-center group">
                                      <div className="text-center">
                                          <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                                              <FontAwesomeIcon icon={faArrowRight} className="text-blue-500 text-2xl" />
                                          </div>
                                          <p className="text-lg font-semibold text-gray-800">More</p>
                                      </div>
                                  </div>
                              </a>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
