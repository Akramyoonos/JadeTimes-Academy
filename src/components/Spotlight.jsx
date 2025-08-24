import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Placeholder images - replace with your actual image imports
import NycImage from '../assets/Images/Spotlight 01.jpeg';
import LaImage from '../assets/Images/Spotlight 02.png';
import YouthImage from '../assets/Images/Spotlight 03.png';
import VirtualImage from '../assets/Images/Spotlight 04.jpeg';
import Spotlight7 from '../assets/Images/Spotlight 07.jpeg';
import Spotlight8 from '../assets/Images/Spotlight 09.jpeg';


// CHANGE 1: Created a new Card component to match the style in the image.
const InfoCard = ({ src, title, description }) => (
  <div className="w-90 flex-shrink-4 bg-white font-sans text-left select-none">
    <img src={src} alt={title} className="w-full h-96 object-cover pointer-events-none" />
    <div className="p-4">
      <h3 className="text-gray-800 text-lg font-bold uppercase mb-2 tracking-wide">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);


const Spotlight = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };
  
  // CHANGE 2: Updated the card data to match the content from the image.
  const cardsData = [
    {
      src: NycImage,
      title: "JOIN OUR SEPTEMBER 20 OPEN HOUSE IN NYC",
      description: "Experience NYFA in the heart of NYC! Join us for an unforgettable day at the New York Film Academy Open House in New York City, located at our stunning NYC campus!"
    },
    {
      src: LaImage,
      title: "JOIN OUR SEPTEMBER 20 OPEN HOUSE IN LA",
      description: "Join us in person for an unforgettable day at the NYFA Los Angeles Open House. The LA campus is located in the entertainment capital of world, in the heart of the historic media district of Burbank."
    },
    {
      src: YouthImage,
      title: "SIGN UP FOR SATURDAY / WEEKEND YOUTH WORKSHOPS THIS FALL!",
      description: "NYFA offers in-person (NY & LA) and online Saturday workshops for teens (14-17) and kids (10-13). Sign up your aspiring youth filmmaker, performer, or visual storyteller today!"
    },
    {
      src: VirtualImage,
      title: "OPEN HOUSE & LIVE ONLINE VIRTUAL EVENTS",
      description: "NYFA holds monthly open houses as well as a number of online virtual info sessions and events."
    },
        {
      src: YouthImage,
      title: "SIGN UP FOR SATURDAY / WEEKEND YOUTH WORKSHOPS THIS FALL!",
      description: "NYFA offers in-person (NY & LA) and online Saturday workshops for teens (14-17) and kids (10-13). Sign up your aspiring youth filmmaker, performer, or visual storyteller today!"
    },
        {
      src: YouthImage,
      title: "SIGN UP FOR SATURDAY / WEEKEND YOUTH WORKSHOPS THIS FALL!",
      description: "NYFA offers in-person (NY & LA) and online Saturday workshops for teens (14-17) and kids (10-13). Sign up your aspiring youth filmmaker, performer, or visual storyteller today!"
    },
        {
      src: YouthImage,
      title: "SIGN UP FOR SATURDAY / WEEKEND YOUTH WORKSHOPS THIS FALL!",
      description: "NYFA offers in-person (NY & LA) and online Saturday workshops for teens (14-17) and kids (10-13). Sign up your aspiring youth filmmaker, performer, or visual storyteller today!"
    },
        {
      src: YouthImage,
      title: "SIGN UP FOR SATURDAY / WEEKEND YOUTH WORKSHOPS THIS FALL!",
      description: "NYFA offers in-person (NY & LA) and online Saturday workshops for teens (14-17) and kids (10-13). Sign up your aspiring youth filmmaker, performer, or visual storyteller today!"
    },
  ];

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <div className="py-16">
        {/* This is the heading from your original code */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-10">
          <h2 className="jt-heading">
            <span className="jt-line">ACADEMY</span>
            <span className="jt-line">SPOTLIGHT</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className={`grid grid-flow-col auto-cols-max gap-4 mb-5 overflow-x-auto pb-4 no-scrollbar  flex-initial px-4 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ scrollBehavior: 'smooth' }}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {/* CHANGE 3: Using the new InfoCard component and updated data. */}
            {cardsData.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>
          {/* Left gradient overlay */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none hidden md:block"></div>
          {/* Right gradient overlay */}
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none hidden md:block"></div>
        </div>
      </div>

      <div className="w-full  pb-10">
        {/* CHANGE 4: Removed the duplicate links that were present in the original code. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <a href="/DegreeProgramsPage" className="relative group cursor-pointer overflow-hidden h-80 block">
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

          <a href="/OnlineProgrames" className="relative group cursor-pointer overflow-hidden h-80 block">
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

          <a href="/DegreeProgramsPage" className="relative group cursor-pointer overflow-hidden h-80 block">
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

          <a href="/OnlineProgrames" className="relative group cursor-pointer overflow-hidden h-80 block">
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