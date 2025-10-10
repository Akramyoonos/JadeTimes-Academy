import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const campusDates = {
  'LOS ANGELES': ['Jan 2026', 'May 2026', 'Sep 2026'],
  'NEW YORK': ['Feb 2026', 'Jun 2026', 'Oct 2026'],
  'MIAMI': ['Mar 2026', 'Jul 2026', 'Nov 2026'],
};

const BuilAdvanced = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState('LOS ANGELES');
  const [displayDates, setDisplayDates] = useState(null);

  const handleShowDates = () => {
    setDisplayDates(campusDates[selectedCampus]);
  };

  return (
    <div className="font-sans bg-white">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-34">
        <div className="flex flex-col lg:flex-row lg:space-x-16">
          {/* Left Column */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-start">
              <div className="w-1.5 h-20 bg-purple-600 mr-4 mt-1"></div>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-800 md:text-4xl">
                BUILD ADVANCED FILMMAKING <br /> SKILLS AT JIU
              </h1>
            </div>

            <div className="mt-6 space-y-4 leading-relaxed text-gray-600">
              <p>
                The Master of Fine Arts (MFA) in Filmmaking program is a highly specialized degree with intensive study in narrative storytelling, screenwriting, directing, cinematography, editing, producing, and post-production sound design. Students learn-by-doing in this hands-on graduate degree, mastering traditional and digital film while tackling challenging creative film projects of increasing complexity.
              </p>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="mt-4">
                  Our curriculum is designed to immerse students in the art and craft of filmmaking from day one. You will work with industry-standard equipment and software, guided by a faculty of experienced, award-winning filmmakers. The program culminates in a thesis film that showcases your unique voice and technical mastery.
                </p>
                <p className="mt-4">
                  Graduates of our MFA in Filmmaking program have gone on to successful careers as directors, producers, cinematographers, and editors, with their work featured in major film festivals and distributed worldwide. We provide not just education, but a network and a community to support your artistic journey.
                </p>
              </div>
            </div>
            
            <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center mt-4 text-sm font-semibold text-gray-700 hover:text-gray-900">
              <span>{isExpanded ? 'READ LESS' : 'READ MORE'}</span>
              <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} className="w-4 h-4 ml-1" />
            </button>

            <div className="relative mt-8 overflow-hidden rounded-lg aspect-video group">
              <iframe
                className="absolute top-0 left-0 w-full h-full transition-transform ease-in-out duration-2000 group-hover:scale-110"
                
                src="https://www.youtube.com/embed/FKz0Fnk_TRM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 transition-opacity duration-700 bg-black opacity-30 group-hover:opacity-0"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full mt-12 lg:w-1/3 lg:mt-0">
            <div className="space-y-8">
              
              {/* Related Links */}
              <div className="border border-gray-200">
               {/* Right Sidebar */}
          <aside className="flex-shrink-0 w-full mt-6 lg:w-100 lg:mt-0">
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
              <a href="#" className="block px-4 py-3 mx-6 mb-4 font-bold text-center text-white transition-colors bg-blue-500 rounded-md w-90 hover:bg-blue-600">
                APPLY FOR ADULT PROGRAMS
                </a>
            </nav>
          </div>
        </aside>
              </div>

              {/* Campus Info */}
              <div className="p-6 text-center border border-gray-200">
                <p className="text-gray-700">The MFA filmmaking programs are offered at our <a href="#" className="font-semibold text-purple-600">Los Angeles</a> campus.</p>
              </div>
              
              {/* Start Dates */}
              <div className="border border-gray-200 bg-gray-50">
                 <div className="p-6">
                    <h2 className="text-sm font-bold tracking-wider text-gray-700 uppercase">START DATES</h2>
                 </div>
                 <div className="p-6 border-t border-gray-200">
                    <label htmlFor="campus-select" className="block text-sm font-bold text-gray-700">START DATES FOR</label>
                    <div className="relative mt-2">
                        <select id="campus-select" value={selectedCampus} onChange={(e) => setSelectedCampus(e.target.value)} className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>LOS ANGELES</option>
                            <option>NEW YORK</option>
                            <option>MIAMI</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </div>
                     <button onClick={handleShowDates} className="block w-full px-4 py-3 mt-6 font-bold text-center text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600">
                        SHOW DATES
                    </button>
                    {displayDates && (
                      <div className="mt-6">
                        <h3 className="font-bold text-gray-800">Available Dates for {selectedCampus}:</h3>
                        <ul className="mt-2 text-gray-700 list-disc list-inside">
                          {displayDates.map(date => <li key={date}>{date}</li>)}
                        </ul>
                      </div>
                    )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilAdvanced;
