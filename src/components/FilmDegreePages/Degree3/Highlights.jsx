import React from 'react';
import FilmHighlightsImg from '../../../assets/Images/FilmHighlightsImg.webp';

const Highlights = () => {
    return (
        <div className="bg-white font-sans">
            <div className="py-12">

                <div className="px-4 sm:px-6 lg:px-34">
                    <div className="flex items-center mb-8">
                        <span className="inline-block w-1.5 h-12 bg-yellow-400 mr-4"></span>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-wider">FACULTY HIGHLIGHTS</h1>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-6xl mt-12">
                        NYFA’s MFA in filmmaking curriculum is taught by experienced professionals who actively work in their field of study.
                    </p>
                </div>

                <div className="relative bg-gray-700 h-[50vh] mt-16 group overflow-hidden">
                    {/* The image is used as a background element with opacity */}
                    <img
                        src={FilmHighlightsImg}
                        alt=""
                        className="absolute inset-0 object-cover w-full h-full opacity-80 transition-transform duration-2000 ease-in-out group-hover:scale-115"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-700"></div>
                    
                    {/* Content overlay */}
                    <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-4 md:p-6 lg:p-6 text-white">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold tracking-widest">INTERVIEW WITH LOS ANGELES</h2>
                            <h2 className="text-xl md:text-2xl font-semibold tracking-widest">CHAIR, ED TIMPE</h2>
                        </div>
                        <div className="self-end">
                            <button className="w-14 h-14 border-2 border-blue-400 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors focus:outline-none">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlights;