import React from 'react';

const Discription = () => {
  return (
    <div className="DiscriptionFont bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-2/3">
            <div className="relative">
              <div className="absolute top-0 left-0 h-full w-1 bg-[#9b7f00]"></div>
              <div className="pl-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight headingFont">
                  FILM, MEDIA, AND ENTERTAINMENT
                  <br />
                  <span className="text-gray-700">DEGREE PROGRAMS</span>
                </h1>
              </div>
            </div>

            <div className="mt-10 text-gray-700 text-lg space-y-6 leading-relaxed font-sans">
              <p>
                Aspiring visual artists and storytellers seeking an immersive education in film, media or performing arts can choose from our graduate and undergraduate programs. Our accelerated Master of Fine Arts (MFA), Master of Arts (MA), Bachelor of Fine Arts (BFA), Bachelor of Arts (BA), and Associate of Fine Arts (AFA) degree programs are project-based and tailored to the major discipline.
              </p>
              <p>
                This full-immersion method aims to keep students focused and committed, allowing them to continuously challenge themselves and build upon their natural talents. Throughout the programs, students learn through practical training and receive mentorship from our faculty of working industry experts, giving them the framework to develop a strong body of work while learning fundamental knowledge in their craft.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 pb-4 border-b-2 border-gray-100 tracking-wide">
                RELATED LINKS
              </h2>
              <div className="mt-6 space-y-4">
                <a href="#" className="block text-gray-600 font-semibold transition-colors duration-300 hover:text-[#9b7f00] hover:underline">
                  OPEN HOUSE
                </a>
                <a href="#" className="block text-gray-600 font-semibold transition-colors duration-300 hover:text-[#9b7f00] hover:underline">
                  ACADEMIC CALENDAR
                </a>
                <a href="#" className="block text-gray-600 font-semibold transition-colors duration-300 hover:text-[#9b7f00] hover:underline">
                  TUITION
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Discription;
