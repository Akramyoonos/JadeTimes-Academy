import React from 'react';
import undergraduateDegree01 from '../../assets/Images/undergraduateDegree01.jpeg';
import undergraduateDegree02 from '../../assets/Images/undergraduateDegree02.jpeg';

const Programs = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-34 py-12">
                <div className="flex items-center mb-8">
                    <div className="w-1 bg-blue-500 h-16 mr-4"></div>
                    <h1 className="text-4xl font-bold text-gray-800 tracking-wider">
                        FILMMAKING<br />PROGRAMS
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 mb-12">
                    <p className="leading-relaxed">
                        The 1-Year and 2-Year Filmmaking Certificates are conservatory-style programs where students learn essential creative and technical skills in filmmaking, cinematography, directing, screenwriting, producing, and editing.
                    </p>
                    <p className="leading-relaxed">
                        Designed for aspiring filmmakers who wish to apply their learned and developed skills as soon as possible, these full-time programs offer students the opportunity to create a variety of original films, gain experience on-set in various roles, and build fundamental knowledge in the craft of filmmaking.
                    </p>
                </div>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                        <img src={undergraduateDegree01} alt="Man operating a camera with dramatic lighting" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0  bg-opacity-40 flex items-end p-8">
                            <h2 className="text-white text-2xl font-semibold">2-YEAR FILMMAKING PROGRAM</h2>
                        </div>
                        <a href="#" className="absolute bottom-8 right-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl transform transition-transform duration-300 group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                    <div className="relative group">
                        <img src={undergraduateDegree02} alt="Filming a scene with a professional camera and colorful smoke" className="w-full h-auto object-cover" />
                        <div className="absolute inset-0  bg-opacity-40 flex items-end p-8">
                            <h2 className="text-white text-2xl font-semibold">1-YEAR FILMMAKING PROGRAM</h2>
                        </div>
                        <a href="#" className="absolute bottom-8 right-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl transform transition-transform duration-300 group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            
        </div>
    );
};

export default Programs;