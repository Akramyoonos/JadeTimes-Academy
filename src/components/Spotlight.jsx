import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Spotlight7 from '../assets/Images/Spotlight 07.jpeg';
import Spotlight8 from '../assets/Images/Spotlight 09.jpeg';
import Card from './VideoCard'; // Renamed for clarity
import Spotlight1 from '../assets/Images/Spotlight 01.jpeg';
import Spotlight2 from '../assets/Images/Spotlight 02.png';
import Spotlight3 from '../assets/Images/Spotlight 03.png';
import Spotlight4 from '../assets/Images/Spotlight 04.jpeg';
import Spotlight5 from '../assets/Images/Spotlight 05.jpeg';

const Spotlight = () => {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      if (maxScrollLeft > 0) {
        const progress = (scrollLeft / maxScrollLeft) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    handleScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  const cardsData = [
    {
      src: Spotlight1,
      title: "Dark Side of Bollywood | Watch Before You Start Your Acting & Modeling Journey",
      description: "Welcome to \"Exclusive Pulse\" by JadeTimes Media LLC. In this episode, Nivedithaa charkrapani interviews special guest Prof. Simranjit Singh, a Film director & Assistant Professor to discuss two major topics impacting Dark Side of Bollywood"
    },
    {
      src: Spotlight2,
      title: "Jadetimes International Research Conference 2025 | Dr. Jaime Geronimo Vela",
      description: "Dr. Jaime Geronimo Vela is a multi-talented professional with a PhD in Anthropology from the prestigious University of California, Los Angeles (UCLA). Alongside his academic credentials, Dr. Vela is a seasoned SAG-AFTRA actor, director, and filmmaker known for his dynamic work both in front of and behind the camera."
    },
    {
      src: Spotlight3,
      title: "Jadetimes International Research Conference 2025 | Dr. Jaime Geronimo Vela",
      description: "Dr. Jaime Geronimo Vela is a multi-talented professional with a PhD in Anthropology from the prestigious University of California, Los Angeles (UCLA). Alongside his academic credentials, Dr. Vela is a seasoned SAG-AFTRA actor, director, and filmmaker known for his dynamic work both in front of and behind the camera."
    },
    {
      src: Spotlight4,
      title: "Jadetimes International Research Conference 2025 | Dr. Jaime Geronimo Vela",
      description: "Dr. Jaime Geronimo Vela is a multi-talented professional with a PhD in Anthropology from the prestigious University of California, Los Angeles (UCLA). Alongside his academic credentials, Dr. Vela is a seasoned SAG-AFTRA actor, director, and filmmaker known for his dynamic work both in front of and behind the camera."
    },
    {
      src: Spotlight5,
      title: "Check How PUBG’s Untold Origin Story Changed Gaming Forever | Jadetimes",
      description: "Its realistic gunplay, massive maps, and intense last-man-standing format revolutionized online multiplayer gaming. The game’s success influenced countless titles, popularizing the battle royale genre worldwide. Today, PUBG remains a global gaming icon, spawning esports tournaments, mobile versions, and inspiring an entire generation of competitive shooters."
    }
  ];

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <h2 className="jt-heading">
            <span className="jt-line">ACADEMY</span>
            <span className="jt-line">SPOTLIGHT</span>
          </h2>
        </div>

        <div>
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="grid grid-flow-col auto-cols-max gap-6 mb-5 overflow-x-auto pb- pr-6 no-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-4 scroll-none">
            <div className="flex items-center">
              <button
                onClick={() => scroll(-300)}
                className="bg-white rounded-full p-2 shadow-md"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div className="w-64 h-1 bg-blue-200 mx-2 relative rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${scrollProgress}%` }}
                ></div>
              </div>
              <button
                onClick={() => scroll(300)}
                className="bg-white rounded-full p-2 shadow-md"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <a href="/DegreeProgramsPage" className="relative group cursor-pointer overflow-hidden h-96 block">
            <img
              alt="Smiling young people posing for a photo"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={Spotlight7}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">DEGREE PROGRAMS</h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>

          <a href="/OnlineProgrames" className="relative group cursor-pointer overflow-hidden h-96 block">
            <img
              alt="Woman filming in front of a cathedral"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={Spotlight8}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">ONLINE PROGRAMS</h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>

          <a href="/OnlineProgrames" className="relative group cursor-pointer overflow-hidden h-96 block">
            <img
              alt="Woman filming in front of a cathedral"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={Spotlight8}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">ONLINE PROGRAMS</h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>

          <a href="/OnlineProgrames" className="relative group cursor-pointer overflow-hidden h-96 block">
            <img
              alt="Woman filming in front of a cathedral"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              src={Spotlight8}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">ONLINE PROGRAMS</h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
