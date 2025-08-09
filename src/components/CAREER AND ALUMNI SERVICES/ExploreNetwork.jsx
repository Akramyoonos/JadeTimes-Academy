import React from 'react';

const ExploreNetwork = () => {
  return (
    <div className="bg-gray-50 font-sans animate-fade-in">
      <main className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main Content: Headline and Paragraph */}
          <div className="pl-10 sm:pl-16">
            <div className="flex items-start">
              {/* Yellow vertical line */}
              <div className="w-1.5 h-12 bg-yellow-400 mt-1 flex-shrink-0 -ml-10 sm:-ml-16 rounded-full" />

              <div className="ml-8">
                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl text-gray-800 tracking-wider font-light uppercase">
                  Explore NYFA's Alumni Network
                </h1>
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-16 text-gray-700 text-lg leading-relaxed ">
              <p>
                The Alumni Affairs office is dedicated to connecting and being an active resource to NYFA Alumni worldwide. New York Film Academy’s alumni website offers job postings, news, networking, industry events and resources to connect with the entertainment industry and the latest news from NYFA!
              </p>
              <p className="mt-6">
                Visit the{" "}
                <a
                  href="#"
                  className="text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-purple-600 after:transform after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  portal here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExploreNetwork;
