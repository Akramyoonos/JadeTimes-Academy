import React from 'react';

const Description = () => {
  return (
    <div className="bg-white font-sans text-white">
      {/* Top bar */}
      <div className="h-10 bg-black" />

      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Blackbox Icon */}
          <div className="absolute top-8 right-0 sm:right-4 transform transition-transform duration-500 hover:scale-110">
            <div className="relative w-16 h-16" aria-hidden="true">
              {/* You can place an icon or logo here if you have one */}
            </div>
          </div>

          {/* Main Content */}
          <div className="pl-10 sm:pl-16">
            <div className="flex items-start">
              {/* Purple vertical line */}
              <div className="w-1 h-10 bg-purple-600 mt-2 flex-shrink-0 -ml-10 sm:-ml-16 rounded-full" />

              <div className="ml-6">
                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl text-black tracking-widest font-light uppercase transition-colors duration-300 hover:text-purple-400">
                  Career and Alumni Services at NYFA
                </h1>

                {/* Text Content */}
                <div className="mt-8 text-gray-950 text-lg leading-relaxed space-y-6">
                  <p className="transition-transform duration-300 hover:translate-x-2">
                    NYFA’s Career and Alumni Services empowers students and graduates with support and resources to confidently navigate their professional path.
                  </p>
                  <p className="transition-transform duration-300 hover:translate-x-2">
                    NYFA recognizes that success in the entertainment industry requires a multi-faceted approach, which includes networking, skill building, brand development, and staying up-to-date with the latest industry trends and best practices. NYFA’s Career & Alumni Services department works closely with students and alumni to provide assistance in building toward their creative and professional endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Description;
