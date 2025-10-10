import React from 'react';

const Details = () => {
    return (
        <div className="bg-white">
            <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col gap-12 lg:flex-row">

                    {/* Left Section */}
                    <div className="relative w-full lg:w-2/3">
                        <div className="flex items-center gap-4">
                            <span className="w-1 h-16 bg-yellow-400"></span>
                            <h1 className="text-4xl font-light tracking-widest text-gray-800">
                                APPLICATION DEADLINES
                            </h1>
                        </div>
                        <p className="mt-6 text-lg text-gray-600">
                            Browse our upcoming application deadlines for long-term programs and short-term workshops.
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

export default Details;