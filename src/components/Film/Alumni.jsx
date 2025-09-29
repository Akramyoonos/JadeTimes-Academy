import React from 'react';

const Alumni = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
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
          <div className="relative group">
            <img
              src="https://www.themoviedb.org/t/p/w500/A1dFzHe3N0dJ8R8ihF9L3EwDvtS.jpg"
              alt="Damon Wayans"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="text-white p-4 w-full">
                <div className="relative border-2 border-blue-400 p-4">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-800 px-2">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold">Damon Wayans</p>
                  <p className="text-sm">Writer | Actor | Producer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bill Hader Card */}
          <div className="relative group">
            <img
              src="https://www.themoviedb.org/t/p/w500/f30T8a9wUnd2vBNsU4i8a1p2pL.jpg"
              alt="Bill Hader"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="text-white p-4 w-full">
                <div className="relative border-2 border-blue-400 p-4">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-800 px-2">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold">Bill Hader</p>
                  <p className="text-sm">Actor | Comedian | Writer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Issa Rae Card */}
          <div className="relative group">
            <img
              src="https://www.themoviedb.org/t/p/w500/y4flDzzu2EVLQg4Ihij8iIuxO3g.jpg"
              alt="Issa Rae"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="text-white p-4 w-full">
                <div className="relative border-2 border-blue-400 p-4">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-800 px-2">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold">Issa Rae</p>
                  <p className="text-sm">Actor | Producer</p>
                </div>
              </div>
            </div>
          </div>

          {/* More Card */}
          <div className="relative group border-2 border-blue-400 flex flex-col items-center justify-center min-h-[280px]">
            <div className="w-12 h-12 border-2 border-blue-400 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <p className="text-lg text-gray-700">More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;