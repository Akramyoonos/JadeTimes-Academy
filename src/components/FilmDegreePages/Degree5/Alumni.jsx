import React from 'react';

const Alumni = () => {
  return (
    <div className="bg-white fle">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-34 max-w-8xl">

        {/* Main Content */}
          <div className="flex items-center mb-8">
            <div className="w-1 h-10 bg-yellow-400 mr-4"></div>
            <h1 className="text-4xl font-sans font-medium text-black tracking-wider">
              FILM SCHOOL ALUMNI
            </h1>
          </div>
          <div className="text-gray-600 text-xl leading-relaxed">
            <p className="mb-2">
              The filmmaking projects completed in NYFA’s MFA Filmmaking program help students hone and refine their skills while providing hands-on experience.Students have gone on to work on films, television shows, podcasts, web series, and more.
            </p>
          </div>
        </div>
      </div>
  );
};

export default Alumni;