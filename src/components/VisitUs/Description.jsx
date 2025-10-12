import React from 'react';

const Description = () => {
    return (
        <div className="font-sans text-gray-800 bg-white">
            <div className="container relative px-6 sm:px-6 md:px-6 lg:px-35 mx-auto md:p-16">
                <div className="flex flex-col gap-16 lg:flex-row">

                    {/* Main Content Section */}
                    <div className="relative lg:w-2/3">

                        {/* Heading */}
                        <div className="flex items-center mb-8">
                            <span className="w-1 h-12 mr-5 bg-purple-600"></span>
                            <h1 className="text-4xl font-light tracking-wider">VISIT A JIU CAMPUS</h1>
                        </div>

                        {/* Text Content */}
                        {/* CORRECTED LINE: Removed conflicting "text-base" class */}
                        <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                            <p>
                                Prospective students and their families can tour the facilities, meet faculty, and connect with the
                                student community at JIU New York, Los Angeles, or Florence, Italy. These are not the only times
                                you can visit the New York Film Academy, please feel free to contact our Admissions Department at
                                212-674-4300 to schedule an appointment. Please note, JIU reserves the right to not grant on-campus
                                access to any guests who do not follow our policies.
                            </p>
                            <p>
                                For questions about visits and tours, contact our Admissions Department at:
                                <br />
                                212-674-4300 or
                                <br />
                                <a href="mailto:admissions@JIU.edu" className="text-purple-600 hover:underline"> admissions@JIU.edu</a>
                            </p>
                        </div>

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

export default Description;