import React from 'react';

const JIUInternationalCommunity = () => {
  return (
    <div className="font-sans">
      <div className="container px-6 sm:px-6 md:px-6 lg:px-35 py-12 mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="pr-8 md:w-3/4">
            <div className="flex items-center mb-6">
              <div className="w-1 h-12 mr-4 bg-purple-600"></div>
              <h1 className="text-3xl font-light text-gray-800">
                THE JIU INTERNATIONAL COMMUNITY
              </h1>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600">
              NYFA strives to make education in the visual arts accessible to the most diverse, international, and
              broadest spectrum of students. With students from over 160 countries and a student body that is almost 50%
              international, NYFA students make up a unique, close-knit global community of aspiring visual storytellers.
              The International Student Office is here to assist students from outside the United States in studying at
              NYFA's campuses in Los Angeles, New York City, and South Beach, Florida. To learn more about applying for
              visas and getting an I-20, please visit these resources or request more information today.
            </p>
          </div>
          {/* Right Sidebar */}
          <aside className="flex-shrink-0 w-full mt-6 lg:w-80 lg:mt-0">
          <div className="border border-gray-200">
            <div className="p-4 bg-gray-200 ">
              <h2 id="related-links-heading" className="text-2xl font-semibold text-black uppercase">
                RELATED LINKS
              </h2>
            </div>
            <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Open House
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Degree Programs
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Program Dates & Tuition
              </a>
            </nav>
          </div>
        </aside>
        </div>
      </div>
    </div>
  );
};

export default JIUInternationalCommunity;