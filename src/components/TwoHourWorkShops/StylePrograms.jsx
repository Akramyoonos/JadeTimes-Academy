import React from 'react';

const StylePrograms = () => {
  return (
    <div className="DiscriptionFont bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-2/3">
            <div className="relative">
              <div className="absolute top-0 left-0 h-full w-1 bg-[#9b7f00]"></div>
              <div className="pl-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold uppercase text-black tracking-tight ">
                  Conservatory-Style <br/>  Programs at JIU
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
          <aside className="w-full lg:w-80 flex-shrink-0  mt-6 lg:mt-12">
          <div className="border border-gray-200">
            <div className="bg-gray-200 p-4 ">
              <h2 id="related-links-heading" className="text-2xl font-semibold uppercase text-black">
                RELATED LINKS
              </h2>
            </div>
            <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500  transition-colors">
                Open House
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500  transition-colors">
                Degree Programs
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500  transition-colors">
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

export default StylePrograms;
