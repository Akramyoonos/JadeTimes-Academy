import React from 'react';
import { Link } from 'react-router-dom';
import AboutHeading from '../../assets/Images/WorkshopsImg.webp';

const Heading = () => {
  return (
    <div className="relative w-full  h-[400px] sm:h-[250px] md:h-[350px] lg:h-[500px] xl:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${AboutHeading})` }}>
      <div className="absolute inset-0 bg-black opacity-0 z-10"></div>
            <nav className="absolute z-20 flex items-center px-1 pr-1 py-2 space-x-3 font-sans text-sm text-white uppercase rounded-full top-8 left-8 sm:text-base bg-opacity-30">
              <Link to="/"><span className="font-semibold hover:underline">JIU</span></Link>
              <span className="text-gray-300">/</span>
              <span>Workshops</span>
            </nav>

      <div className="relative flex items-center h-full max-w-7xl pb-22 pt-74 sm:pt-0 md:pt-0 lg:pt-0 md:pb-8 px-4 sm:px-6 md:px-2 lg:px-4">
        <div className="w-full md:w-2/5 lg:w-2/5 p-8 bg-white sm:bg-white md:bg-white lg:bg-white xl:bg-white  bg-opacity-90">
          <p className="text-xs sm:text-xs md:text-base lg:text-base xl:text-lg font-semibold h-[86px] sm:h-[150px] md:h-[200px] lg:h-[150px] xl:h-[150px] text-black md:text-black sm:text-white lg:text-black xl:text-black ">
            Workshops focus on <span className="font-bold">soft</span> or <span className="font-bold">transferable</span> academic skills. They are usually 60 minutes in length and are facilitated by our professional Academic Coaches and Peer Learning Consultants. Any student-facing campus organization, department, or center may request a workshop.
          </p>
        </div>
        <div className="hidden md:block w-1/2 lg:w-3/5">
          {/* The image of the person is part of the background in this implementation */}
        </div>
      </div>
    </div>
  );
};

export default Heading;