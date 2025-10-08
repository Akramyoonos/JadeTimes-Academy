import React from 'react';
import AboutHeading from "../../assets/Images/AboutHeading.webp";


const Heading = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden">
      <img
        alt="Person wearing NYFA shirt holding a camera with a blurred woman in the background"
        className="w-full h-full object-cover absolute inset-0 z-0"
        height="400"
        src={AboutHeading}
        width="1920"
      />
     
      
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold tracking-wide text-shadow-lg">
        ACADEMIC CALENDER
      </h1>
    </div>
  );
};

export default Heading;