import React from 'react';
import { Link } from 'react-router-dom';
import admissionsHeadingImage from '../../assets/Images/ProgramFinderHeading.webp'; // Assuming this is the correct image

const Heading = () => {
    return (
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden">
         <img
           alt="Person wearing JIU shirt holding a camera with a blurred woman in the background"
           className="w-full h-full object-cover absolute inset-0 z-0"
           height="400"
           src={admissionsHeadingImage}
           width="1920"
         />
         <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
         <nav className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex flex-wrap items-center space-x-2 uppercase text-white text-xs sm:text-sm font-sans bg-opacity-30 px-3 sm:px-4 py-2 rounded-full">
                             <Link to="/"><span className="font-semibold hover:underline">JIU</span></Link>
                             <span className="text-gray-300">/</span>
                             <span>Admissions</span>
                           </nav>
         <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold tracking-wide text-shadow-lg">
           Admissions
         </h1>
       </div>
    );
};

export default Heading;
