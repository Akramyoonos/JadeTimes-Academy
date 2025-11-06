import React from 'react';
import { Link } from 'react-router-dom';
import AboutHeading from '../../assets/Images/FilmImg.webp';

const Heading = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden">
      <img
        alt="Person wearing JIU shirt holding a camera with a blurred woman in the background"
        className="absolute inset-0 z-0 object-cover w-full h-full"
        height="400"
        src={AboutHeading}
        width="1920"
      />
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
      <nav className="absolute z-20 flex items-center px-1 pr-1 py-2 space-x-3 font-sans text-sm text-white uppercase rounded-full top-8 left-8 sm:text-base bg-opacity-30">
        <Link to="/"><span className="font-semibold hover:underline">JIU</span></Link>
        <span className="text-gray-300">/</span>
        <Link to="/academics"><span className="font-semibold hover:underline">ACADEMICS</span></Link>
        <span className="text-gray-300">/</span>
        <span>Film </span>
      </nav>
      <h1 className="absolute z-20 font-sans text-2xl font-semibold tracking-wide text-white uppercase -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl md:text-4xl lg:text-5xl text-shadow-lg">
        Film
      </h1>
    </div>
  );
};

export default Heading;