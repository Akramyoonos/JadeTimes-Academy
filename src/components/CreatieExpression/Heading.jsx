import React from 'react';
import { Link } from 'react-router-dom';
import AboutHeading from "../../assets/Images/CommunivationImg.webp";

const Heading = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden">
      <img
        alt="Person wearing JIU shirt holding a camera with a blurred woman in the background"
        className="absolute inset-0 z-0 object-cover w-full h-full"
        height="400"
        src={AboutHeading}
        width="1920"
      />
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
      <nav className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex flex-wrap items-center space-x-2 uppercase text-white text-xs sm:text-sm font-sans bg-opacity-30 px-3 sm:px-4 py-2 rounded-full">
              <Link to="/"><span className="font-semibold hover:underline">JIU</span></Link>
              <span className="text-gray-300">/</span>
              <Link to="/discover"><span className="font-semibold hover:underline">ACADEMICS</span></Link>
              <span className="text-gray-300">/</span>
              <span>Creatie Expression</span>
            </nav>
      <h1 className="absolute z-20 font-sans text-2xl font-semibold tracking-wide text-white uppercase -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-2xl md:text-3xl lg:text-4xl text-shadow-lg">
        Creatie Expression
      </h1>
    </div>
  );
};

export default Heading;