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
      title: "FESTIVAL FAVORITE 'SHIRAMPARI' DOCUMENTARY HEADED TO 2023 SUNDANCE FILM FESTIVAL"
    },
    {
      image: AboutHeading3,
      category: 'ACTING, STUDENT SPOTLIGHT',
      title: 'NYFA ACTING ALUM LANDS ROLE IN A MAJOR MOTION PICTURE'
    },
    {
      image: AboutHeading4,
      category: 'ANIMATION, ALUMNI SPOTLIGHT',
      title: 'ANIMATION GRADUATE WORKS ON AWARD-WINNING ANIMATED SHORT'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesLength = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slidesLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slidesLength - 1 : currentSlide + 1);
  };


  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-34 py-12">
        <div className="flex items-center mb-8">
          <div className="w-1 bg-cyan-400 h-16 mr-4"></div>
          <h1 className="text-4xl font-light text-gray-800 tracking-wider">
            SPOTLIGHT NYFA
          </h1>
        </div>

        <p className="text-gray-600 mb-12 max-w-4xl">
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

        {/* Updated section to match the image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-28 mb-12">
          {/* Left Block with Slider Arrows */}
          <div className="relative overflow-hidden group w-180 h-120">
            <img src={slides[currentSlide].image} alt="Documentary still" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-8 text-white">
              <p className="text-xs tracking-widest">
                {slides[currentSlide].category}
              </p>
              <h2 className="text-2xl font-semibold mt-2">
                {slides[currentSlide].title}
              </h2>
              <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
            {/* Slider Navigation Arrows */}
            <div
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10  bg-opacity-40 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer opacity-70 group-hover:opacity-100 transition-opacity"
              onClick={prevSlide}
            >
              &lt;
            </div>
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10  bg-opacity-40 rounded-full flex items-center justify-center text-white text-2xl cursor-pointer opacity-70 group-hover:opacity-100 transition-opacity"
              onClick={nextSlide}
            >
              &gt;
            </div>
          </div>

          {/* Right Block */}
          <div className="relative overflow-hidden w-120 h-120 ml-76">
            <img src={AboutHeading2} alt="Filmmaker with camera" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-8 text-white">
              <p className="text-xs tracking-widest">FILMMAKING</p>
              <h2 className="text-2xl font-semibold mt-2">Student Showcase</h2>
              <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
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