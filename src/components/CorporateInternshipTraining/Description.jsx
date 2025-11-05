import React from 'react';

const Description = () => {
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

            {/* Added Clients and Services Section */}
            <div className="mt-12">
              <h2 className="text-3xl sm:text-4xl font-semibold uppercase text-black tracking-tight">
                Clients and Services
              </h2>
              <div className="mt-6 text-gray-700 text-lg space-y-6 leading-relaxed font-sans">
                <p>
                  The New York Film Academy client list is a large collection of companies that range from NBC News, US Army, US Airforce, L'Oreal Matrix, The Guggenheim Museum, The Brooklyn Museum, Sony Animation, Toshiba, Scholastic, Abu Dhabi Authority for Culture and Heritage, Kaist University of South Korea, Globo TV Brazil, Visual Industry Promotion Organization of Japan, and more. Each of these organizations have found their special needs met in programs designed, customized, and implemented by facilitators and instructors at the New York Film Academy. We have held many of our workshops at renowned locations such as Harvard University, Yale University, Cambridge University UK, Kings College London, and Disney-MGM Studios.
                </p>
                <p>
                  In addition, we offer private instruction for individuals who need to focus on a specific aspect of filmmaking, performance, public speaking or any media related topic.
                </p>
                <p>
                  Our Acting Department's industry-leading voice and speech instructors are available to coach corporate sales teams and executives with presentation preparation and execution.
                </p>
                <p>
                  For a consultation and more information on any type of audio/video training from pre-production, production, to post-production, please contact David Klein at <a href="mailto:david@JIU.edu" className="text-pink-500 hover:underline">david@JIU.edu</a> or 212-674-4300.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0 mt-6 lg:mt-12">
            <div className="border border-gray-200">
              <div className="bg-gray-200 p-4">
                <h2 id="related-links-heading" className="text-2xl font-semibold uppercase text-black">
                  RELATED LINKS
                </h2>
              </div>
              <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
                <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500 transition-colors">
                  Open House
                </a>
                <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500 transition-colors">
                  Degree Programs
                </a>
                <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500 transition-colors">
                  Program Dates & Tuition
                </a>
                <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500 transition-colors">
                  Short-Term Workshops
                </a>
                <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500 transition-colors">
                  Explore Our Programs
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