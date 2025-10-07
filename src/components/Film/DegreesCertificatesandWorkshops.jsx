import React, { useState } from 'react';
import ourStudents01 from '../../assets/Images/our-students-01-948x815-1-768x660.webp';

// --- Icon Components ---
export const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);

export const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.002v3.996a1 1 0 001.555.832l3.197-2.002a1 1 0 000-1.664l-3.197-1.996z" clipRule="evenodd" />
  </svg>
);

export const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

export const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


// --- Video Modal Component ---
export const VideoModal = ({ videoId, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors">
                <CloseIcon />
            </button>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    title="YouTube video player"
                ></iframe>
            </div>
        </div>
    </div>
);

const DegreesCertificatesandWorkshops = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const openVideoModal = () => setIsVideoModalOpen(true);
    const closeVideoModal = () => setIsVideoModalOpen(false);

    const fullText = "At the New York Film Academy (NYFA), aspiring filmmakers tell captivating stories through film, television, and new media, using compelling narratives and engaging performances to bring their cinematic vision to life. At NYFA's Film School, aspiring filmmakers master these skills and techniques, choosing from a variety of Filmmaking degrees, certificate programs, and workshops at our campuses in New York, Los Angeles, and Florence (Italy), as well as numerous international locations. During these hands-on programs, students learn-by-doing, spending a majority of their studies writing, shooting, editing, directing, and producing original films and digital content.";

    return (
        <>
            <div className="bg-white">
                <div className="container mx-auto px-4 sm:px-8 md:px-6 lg:px-34 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:gap-16">

                        {/* --- Main Content Section (2/3 width) --- */}
                        <div className="md:col-span-2">
                            <div className="flex items-start">
                                <div className="w-1 bg-purple-600 h-24 mr-6 flex-shrink-0" />
                                <h1 className="text-3xl sm:text-4xl font-light text-gray-800 tracking-wider">
                                    HANDS-ON FILMMAKING DEGREES, CERTIFICATES, AND WORKSHOPS
                                </h1>
                            </div>
                            <div className={`mt-6 text-gray-600 space-y-4 overflow-hidden transition-max-height duration-700 ease-in-out ${isExpanded ? 'max-h-screen' : 'max-h-24'}`}>
                                <p>
                                    {fullText}
                                </p>
                            </div>
                            <div className="mt-6">
                                <button onClick={() => setIsExpanded(!isExpanded)} className="text-purple-600 font-semibold text-sm tracking-wider flex items-center hover:text-purple-800 hover:underline">
                                    {isExpanded ? "READ LESS" : "READ MORE"} {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                </button>
                            </div>

                            {/* --- Video Thumbnail Card --- */}
                            <div className="relative mt-20 h-80 sm:h-96 md:h-120 cursor-pointer group overflow-hidden rounded-lg" onClick={openVideoModal}>
                                {/* Background Image with Hover Effect */}
                                <img
                                    src="https://img.youtube.com/vi/FKz0Fnk_TRM/maxresdefault.jpg"
                                    alt="Filmmaking students on a beach at sunset"
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                {/* Content: Centered Play Button and Bottom Text */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6">
                                    {/* Top spacer */}
                                    <div></div>
                                    
                                    {/* Centered Play Button */}
                                    <div className="flex items-center justify-center">
                                        <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm border border-white/30 transition-all duration-300 group-hover:bg-white/40 group-hover:scale-110">
                                            <PlayIcon />
                                        </div>
                                    </div>

                                    {/* Bottom Text */}
                                    <div>
                                        <h3 className="text-white text-xl font-bold">NYFA Filmmaking</h3>
                                        <p className="text-white/80 text-sm mt-1">Watch our students in action.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- Right Sidebar --- */}
                        {/* --- UPDATED: Changed lg:mt-0 to md:mt-0 for proper alignment on tablets --- */}
                        <aside className="w-full lg:w-80 flex flex-col mt-12 md:mt-0">
                          {/* --- UPDATED: Changed order and margin classes to start from md breakpoint --- */}
                          <div className="border border-gray-200 order-2 md:order-1 mt-8 md:mt-0">
                            <div className="bg-gray-100 p-4 ">
                              <h2 id="related-links-heading" className="text-2xl font-medium uppercase text-black">
                                RELATED LINKS
                              </h2>
                            </div>
                            <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
                              <a href="#" className="p-4 mt-4 ml-3 text-lg font-medium uppercase text-gray-700 hover:text-pink-500 transition-colors">
                                Open House
                              </a>
                              <a href="/degree-programs" className="p-4 mt-4 ml-3 text-lg font-medium uppercase text-gray-700 hover:text-pink-500 transition-colors">
                                Degree Programs
                              </a>
                              <a href="#" className="p-4 mt-4 ml-3 text-lg font-medium uppercase text-gray-700 hover:text-pink-500 transition-colors">
                                Program Dates & Tuition
                              </a>
                            </nav>
                          </div>
                          
                          {/* --- UPDATED: Changed order and margin classes to start from md breakpoint --- */}
                          <div className="relative h-80 sm:h-96 md:h-120 md:w-66 lg:w-80 group hover:shadow-xl overflow-hidden order-1 md:order-2 md:mt-10">
                                <img
                                    src={ourStudents01}
                                    alt="Filmmaker with a professional camera"
                                    className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-115"
                                />
                                <div className="absolute bottom-0 left-0 p-5 text-white bg-black bg-opacity-50 w-full">
                                    <p className="text-xs font-semibold tracking-wider">FILMMAKING</p>
                                    <p className="text-lg font-bold">Student Showcase</p>
                                </div>
                                 <a href="#" className="absolute bottom-5 right-5 bg-cyan-500 text-white rounded-full h-10 w-10 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                                    <ArrowRightIcon />
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            {isVideoModalOpen && <VideoModal videoId="FKz0Fnk_TRM" onClose={closeVideoModal} />}
        </>
    );
};

export default DegreesCertificatesandWorkshops;