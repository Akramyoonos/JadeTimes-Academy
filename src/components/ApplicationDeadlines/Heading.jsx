import React from 'react';
import AboutHeading from "../../assets/Images/AboutHeading.Webp";


const Heading = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden">
      <img
        alt="Person wearing JIU shirt holding a camera with a blurred woman in the background"
        className="absolute inset-0 z-0 object-cover w-full h-full"
        height="400"
        src={AboutHeading}
        width="1920"
      />
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
      <nav className="absolute z-20 flex items-center px-2 py-2 space-x-3 font-sans text-sm text-white rounded-full top-8 left-8 sm:text-base bg-opacity-30">
        <span className="font-semibold">JIU</span>
        <span className="text-gray-300">/</span>
        <span className="font-semibold">WHO WE ARE</span>
        <span className="text-gray-300">/</span>
        <span className="font-semibold">APPLICATION DEADLINES</span>
        
      </nav>
      <h1 className="absolute z-20 font-sans text-2xl font-semibold tracking-wide text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl md:text-3xl lg:text-5xl text-shadow-lg">
       APPLICATION DEADLINES
      </h1>
    </div>
  );
};

export default Heading;