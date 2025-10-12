import React from 'react';

const Discription = () => {
  return (
    <div className="py-12 DiscriptionFont bg-gray-50 sm:py-16 lg:py-20">
      <div className=" mx-auto max-w-7xl px-6 sm:px-6 md:px-6 lg:px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-2/3">
            <div className="relative">
              <div className="absolute top-0 left-0 h-full w-1 bg-[#9b7f00]"></div>
              <div className="pl-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl headingFont">
                  FILM, MEDIA, AND ENTERTAINMENT
                  <br />
                  <span className="text-gray-700">DEGREE PROGRAMS</span>
                </h1>
              </div>
            </div>

            <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-gray-700">
              <p>
                Aspiring visual artists and storytellers seeking an immersive education in film, media or performing arts can choose from our graduate and undergraduate programs. Our accelerated Master of Fine Arts (MFA), Master of Arts (MA), Bachelor of Fine Arts (BFA), Bachelor of Arts (BA), and Associate of Fine Arts (AFA) degree programs are project-based and tailored to the major discipline.
              </p>
              <p>
                This full-immersion method aims to keep students focused and committed, allowing them to continuously challenge themselves and build upon their natural talents. Throughout the programs, students learn through practical training and receive mentorship from our faculty of working industry experts, giving them the framework to develop a strong body of work while learning fundamental knowledge in their craft.
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

export default Discription;
