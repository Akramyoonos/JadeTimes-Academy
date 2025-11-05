import React from 'react';
import AboutHeading from "../../assets/Images/AboutHeading.Webp";


const Heading = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden">
      <img
        alt="Person wearing JIU shirt holding a camera with a blurred woman in the background"
        className="absolute inset-0 z-0 object-cover w-full h-full"
        height="400"
        src={AboutHeading}
        width="1920"
      />
     
      <h1 className="absolute z-20 font-sans text-2xl font-semibold tracking-wide text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl md:text-4xl lg:text-5xl top-1/2 left-1/2 text-shadow-lg">
       JOBS AT JIU
      </h1>
    </div>
  );
};

export default Heading;