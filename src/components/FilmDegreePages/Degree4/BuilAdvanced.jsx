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
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-34 py-12">
        <div className="flex flex-col lg:flex-row lg:space-x-16">
          {/* Left Column */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-start">
              <div className="w-1.5 h-20 bg-purple-600 mr-4 mt-1"></div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight leading-tight">
                BUILD ADVANCED FILMMAKING <br /> SKILLS AT JIU
              </h1>
            </div>

            <div className="mt-6 text-gray-600 leading-relaxed space-y-4">
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
            
            <button onClick={() => setIsExpanded(!isExpanded)} className="mt-4 flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900">
              <span>{isExpanded ? 'READ LESS' : 'READ MORE'}</span>
              <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} className="w-4 h-4 ml-1" />
            </button>

            <div className="mt-8 relative aspect-video group rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full transition-transform duration-2000 ease-in-out group-hover:scale-110"
                
                src="https://www.youtube.com/embed/FKz0Fnk_TRM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 mt-12 lg:mt-0">
            <div className="space-y-8">
              
              {/* Related Links */}
              <div className="border border-gray-200">
                <div className="bg-gray-100 p-4">
                  <h2 className="text-lg font-semibold uppercase text-gray-800">RELATED LINKS</h2>
                </div>
                <nav className="flex flex-col bg-white">
                  <a href="#" className="p-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-200">Open House</a>
                  <a href="#" className="p-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-200">Degree Programs</a>
                  <a href="#" className="p-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-200">Program Dates & Tuition</a>
                </nav>
                <div className="p-4 bg-white border-t border-gray-200">
                  <a href="#" className="block w-full text-center bg-blue-500 text-white font-bold py-3 px-4 hover:bg-blue-600 transition-colors rounded-md">APPLY FOR ADULT PROGRAMS</a>
                </div>
              </div>

              {/* Campus Info */}
              <div className="border border-gray-200 p-6 text-center">
                <p className="text-gray-700">The MFA filmmaking programs are offered at our <a href="#" className="text-purple-600 font-semibold">Los Angeles</a> campus.</p>
              </div>
              
              {/* Start Dates */}
              <div className="bg-gray-50 border border-gray-200">
                 <div className="p-6">
                    <h2 className="text-sm font-bold tracking-wider text-gray-700 uppercase">START DATES</h2>
                 </div>
                 <div className="p-6 border-t border-gray-200">
                    <label htmlFor="campus-select" className="block text-sm font-bold text-gray-700">START DATES FOR</label>
                    <div className="relative mt-2">
                        <select id="campus-select" value={selectedCampus} onChange={(e) => setSelectedCampus(e.target.value)} className="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>LOS ANGELES</option>
                            <option>NEW YORK</option>
                            <option>MIAMI</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </div>
                     <button onClick={handleShowDates} className="block mt-6 w-full text-center bg-blue-500 text-white font-bold py-3 px-4 hover:bg-blue-600 transition-colors rounded-md">
                        SHOW DATES
                    </button>
                    {displayDates && (
                      <div className="mt-6">
                        <h3 className="font-bold text-gray-800">Available Dates for {selectedCampus}:</h3>
                        <ul className="list-disc list-inside mt-2 text-gray-700">
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
