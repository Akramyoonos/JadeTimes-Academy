import React, { useState } from 'react';
import Icon1 from '../../assets/Images/Icon1.webp';
import Icon2 from '../../assets/Images/Icon2.webp';
import Icon3 from '../../assets/Images/Icon3.webp';
import Icon4 from '../../assets/Images/Icon4.webp';
import Icon5 from '../../assets/Images/Icon5.webp';
import Icon6 from '../../assets/Images/Icon6.webp';
import Icon7 from '../../assets/Images/Icon7.webp';
import Icon8 from '../../assets/Images/Icon8.webp';
import Icon9 from '../../assets/Images/Icon9.webp';
import Icon10 from '../../assets/Images/Icon10.webp';
import AboutHeading1 from '../../assets/Images/AboutHeading.webp';
import AboutHeading2 from '../../assets/Images/AboutHeading.webp';
import AboutHeading3 from '../../assets/Images/Campus01.jpeg';
import AboutHeading4 from '../../assets/Images/Campus03.jpeg';

const Spotlight = () => {
    const slides = [
        {
            image: AboutHeading1,
            category: 'FILMMAKING, FILM, FILM FESTIVAL HIGHLIGHTS, STUDENT & ALUMNI SPOTLIGHTS, FILM FESTIVALS',
            title: "FESTIVAL DOCUMENTARY HEADED TO 2023 SUNDANCE FILM FESTIVAL"
        },
        {
            image: AboutHeading3,
            category: 'ACTING, STUDENT SPOTLIGHT',
            title: 'JIU ACTING ALUM LANDS ROLE IN A MAJOR MOTION PICTURE'
        },
        {
            image: AboutHeading4,
            category: 'ANIMATION, ALUMNI SPOTLIGHT',
            title: 'GRADUATE WORKS ON AWARD-WINNING ANIMATED SHORT'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesLength = slides.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slidesLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slidesLength - 1 : currentSlide - 1);
    };

    return (
        <div className="bg-white font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-34 py-12">
                <div className="flex items-center mb-8">
                    <div className="w-1 bg-cyan-400 h-12 sm:h-16 mr-4"></div>
                    <h1 className="text-3xl sm:text-4xl font-light text-gray-800 tracking-wider">
                        SPOTLIGHT NYFA
                    </h1>
                </div>

                <p className="text-gray-600 mb-12 max-w-4xl text-sm sm:text-base">
                    At the New York Film Academy's film school, faculty members and curriculum are focused on providing students with the real world know-how to help them achieve their goals. These achievements are the result of their hard work, perseverance, talent and circumstances. Below are some of the positions and networks in which our alumni have worked:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-16">
                    <img src={Icon1} alt="Nickelodeon" className="grayscale transform hover:scale-110 transition-transform duration-300" />
                    <img src={Icon2} alt="ABC" className="grayscale transform hover:scale-110 transition-transform duration-300" />
                    <img src={Icon3} alt="AMC" className="grayscale transform hover:scale-110 transition-transform duration-300" />
                    <img src={Icon4} alt="OCBS" className="grayscale transform hover:scale-110 transition-transform duration-300" />
                    <img src={Icon5} alt="Disney" className="grayscale transform hover:scale-110 transition-transform duration-300" />
                    <img src={Icon6} alt="HBO" className="grayscale transform hover:scale-110 transition-transform duration-300" />
                    <img src={Icon7} alt="Magnolia Pictures" className="grayscale transform hover:scale-110 transition-transform duration-300" />
                    <img src={Icon8} alt="NBC" className="grayscale transform hover:scale-110 transition-transform duration-300" />
                    <img src={Icon9} alt="New Line Cinema" className="grayscale transform hover:scale-110 transition-transform duration-300" />
                    <img src={Icon10} alt="Syfy" className="grayscale transform hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Updated section for mobile responsiveness */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 mb-12">
                    {/* Left Block with Slider Arrows */}
                    <div className="md:col-span-2 relative overflow-hidden group h-96 md:h-auto">
                        <img src={slides[currentSlide].image} alt="Documentary still" className="w-full h-full object-cover block transition-transform duration-2000 ease-in-out group-hover:scale-115" />
                        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>

                        {/* Content for larger screens */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex-col justify-end p-6 sm:p-8 text-white hidden md:flex">
                            <p className="text-xs tracking-widest uppercase">
                                {slides[currentSlide].category}
                            </p>
                            <h2 className="text-xl sm:text-2xl font-semibold mt-2">
                                {slides[currentSlide].title}
                            </h2>
                            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center cursor-pointer">
                                <i className="fas fa-arrow-right text-cyan-400"></i>
                            </div>
                        </div>

                        {/* Slider Navigation Arrows */}
                        <div
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-40 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={prevSlide}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </div>
                        <div
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-40 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={nextSlide}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>

                    {/* Content for mobile screens */}
                    <div className="md:hidden bg-gray-100 p-6 rounded-lg">
                        <p className="text-xs tracking-widest uppercase text-gray-500">
                            {slides[currentSlide].category}
                        </p>
                        <h2 className="text-xl font-semibold mt-2 text-gray-800">
                            {slides[currentSlide].title}
                        </h2>
                    </div>

                    {/* Right Block */}
                    <div className="relative overflow-hidden group h-96 md:h-auto">
                        <img src={AboutHeading2} alt="Filmmaker with camera" className="w-full h-full object-cover transition-transform duration-2000 ease-in-out group-hover:scale-115" />
                        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                            <p className="text-xs tracking-widest uppercase">FILMMAKING</p>
                            <h2 className="text-xl sm:text-2xl font-semibold mt-2">Student Showcase</h2>
                            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center cursor-pointer">
                                <i className="fas fa-arrow-right text-cyan-400"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-gray-500 text-sm italic">
                    Please note: Equipment, curriculum, and projects are subject to change and may vary depending on location. Students should consult the most recently published campus catalog for the most up-to-date curriculum.
                </p>
            </div>
        </div>
    );
};

export default Spotlight;