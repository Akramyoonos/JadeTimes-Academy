import React, { useState } from 'react';

// SVG Icon Components
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-1 transition-transform duration-300 transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="white" viewBox="0 0 24 24" stroke="white">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// Video Modal Component
const VideoModal = ({ videoId, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={onClose}>
    <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose} className="absolute -top-10 right-0 text-white text-4xl font-bold">&times;</button>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-2xl"
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  </div>
);

const DegreesCertificatesAndWorkshops = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const fullText = "At the New York Film Academy (NYFA), aspiring filmmakers tell captivating stories through film, television, and new media, using compelling narratives and engaging performances to bring their cinematic vision to life. At NYFA's Film School, aspiring filmmakers master these skills and techniques, choosing from a variety of Filmmaking degrees, certificate programs, and workshops at our campuses in New York, Los Angeles, and Florence (Italy), as well as numerous international locations. During these hands-on programs, students learn-by-doing, spending a majority of their studies writing, shooting, editing, directing, and producing original films and digital content.";
  const truncatedText = fullText.substring(0, 280) + "...";

  return (
    <>
      <div className="bg-gray-50 font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content Section */}
            <div className="lg:col-span-2">
              <div className="text-left mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  <span className="block">Hands-On Filmmaking:</span>
                  <span className="block text-purple-600">Degrees, Certificates, and Workshops</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                  {isExpanded ? fullText : truncatedText}
                </p>
                <div className="mt-6">
                  <button onClick={toggleReadMore} className="text-purple-600 font-semibold text-base tracking-wider flex items-center group">
                    {isExpanded ? "READ LESS" : "READ MORE"} <ChevronDownIcon />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Video Thumbnail Card */}
                <div className="relative rounded-xl shadow-lg overflow-hidden group h-72 transform hover:-translate-y-2 transition-transform duration-300" onClick={openVideoModal}>
                  <img
                    src="https://img.youtube.com/vi/FKz0Fnk_TRM/maxresdefault.jpg"
                    alt="Filmmaking students on a beach at sunset"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 text-white rounded-full h-20 w-20 flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <PlayIcon />
                    </div>
                  </div>
                </div>

                {/* Student Showcase Card */}
                <div className="relative rounded-xl shadow-lg overflow-hidden group h-72 transform hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src="https://i.ibb.co/SNjN9q0/filmmaking-student-showcase.jpg"
                    alt="Filmmaker with a professional camera"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <p className="text-sm font-bold text-white uppercase tracking-widest">Filmmaking</p>
                    <p className="text-2xl font-bold text-white mt-1">Student Showcase</p>
                  </div>
                  <div className="absolute top-6 right-6">
                    <a href="#" className="bg-purple-600 text-white rounded-full h-12 w-12 flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-lg sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 tracking-wide">Related Links</h2>
                <ul className="mt-6 space-y-1">
                  <li>
                    <a href="#" className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-medium transition-colors duration-200">
                      Open House
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-medium transition-colors duration-200">
                      Degree Programs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-medium transition-colors duration-200">
                      Program Dates & Tuition
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isVideoModalOpen && <VideoModal videoId="FKz0Fnk_TRM" onClose={closeVideoModal} />}
    </>
  );
};

export default DegreesCertificatesAndWorkshops;
