
import React from 'react';

const StudentLife = () => {
  return (
    <div className="flex flex-col p-8 md:p-12 lg:p-16">
      <div className="flex items-center">
        <div className="w-1.5 h-16 bg-fuchsia-600 mr-4 md:mr-6 lg:mr-8"></div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-normal leading-tight">
          STUDENT LIFE AT NYFA
        </h2>
      </div>

      <p className="mt-8 md:mt-12 lg:mt-16 text-base md:text-lg lg:text-xl font-light leading-relaxed">
        No matter which program or location you choose, enrolling at the New York Film Academy means that you instantly join a vibrant, energetic, and richly<br /> diverse community.
      </p>

      <p className="mt-4 md:mt-6 lg:mt-8 text-base md:text-lg lg:text-xl font-light leading-relaxed">
        NYFA students come from every walk of life and from dozens of countries across the globe. We celebrate our multicultural atmosphere and the thrilling<br /> exchange of ideas, perspectives, and activities it inspires.
      </p>
    </div>
  );
};

export default StudentLife;