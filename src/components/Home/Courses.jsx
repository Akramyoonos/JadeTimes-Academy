import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Placeholder images - replace with your actual image imports
import NycImage from '../../assets/Images/CoursesImg01.webp';
import LaImage from '../../assets/Images/CoursesImg02.webp';
import YouthImage from '../../assets/Images/CoursesImg01.webp';
import VirtualImage from '../../assets/Images/CoursesImg02.webp';
import YouthImage1 from '../../assets/Images/CoursesImg01.webp';
import YouthImage2 from '../../assets/Images/CoursesImg02.webp';


// CHANGE 1: Created a new Card component to match the style in the image.
// ADDED ZOOM EFFECT: Added `group-hover:scale-110` to the image tag for the zoom effect on hover.
const InfoCard = ({ src, title, description, href }) => (
  <a href={href} className="w-[85vw] md:w-85  flex-shrink-0 bg-white font-sans text-left select-none group overflow-hidden">
    <div className="overflow-hidden relative">
      <img
        src={src}
        alt={title}
        className="w-100 h-110 object-contain pointer-events-none transition-transform duration-2000 ease-in-out group-hover:scale-115"
      />
      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
    </div>
    <div className="p-4">
      <h3 className="text-gray-800 text-lg font-semibold uppercase mb-2 tracking-wide transition-colors duration-300 group-hover:text-purple-700">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </a>
);


const Courses = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragStartTime, setDragStartTime] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setDragStartTime(Date.now());
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

    const dragDuration = Date.now() - dragStartTime;
    // Adjust scrolling speed based on the duration of the drag
    const scrollSpeed = Math.min(5, 1 + dragDuration / 100);

    scrollContainerRef.current.scrollLeft = scrollLeft - walk * scrollSpeed;
  };

  // CHANGE 2: Updated the card data to match the content from the image.
  const cardsData = [
    {
      src: NycImage,
      title: "Shaping the Future of Online Education",
      description: "Jadetimes International University (JIU) is built on a clear mission: to provide world-class education to students across the globe through accessible, flexible, and innovative online learning. ",
      href: "/Jadetimes-International-University-(JIU):Shaping-the-Future-of-Online-Education/"
    },
    {
      src: LaImage,
      title: "Empowering Research and Innovation",
      description: "Jadetimes began as a bold vision—to create a global platform where creativity, knowledge, and innovation could come together to shape the future. ",
      href: "/The-Story-of-Jadetimes:Empowering-Research-and-Innovation/"
    },
    {
      src: YouthImage,
      title: "Advancing Knowledge Across Borders",
      description: "The Jadetimes Journal of Universal Studies (JJUS) is a peer-reviewed, multidisciplinary academic platform dedicated to advancing knowledge across a wide spectrum of disciplines. Founded.",
      href: "/Jadetimes-Journal-of-Universal-Studies-(JJUS):Advancing-Knowledge-Across-Borders/"
    },
    {
      src: VirtualImage,
      title: "Partners with Special Graphics LLC for Advanced Graphic Design Education",
      description: "The partnership comes shortly after Geeth Roman, President of JIU, increased his shareholding in Special Graphics to 74%, becoming the new Chairman of the company.",
      href: "/Jadetimes-International-University-Partners-with-Special-Graphics-LLC-for-Advanced-Graphic-Design-Education/"
    },
        {
      src: YouthImage1,
      title: "Jadetimes International Research Conference 2025",
      description: "The Jadetimes International Research Conference 2025 is a global forum for scholars, professionals, and students to present original research, build collaborations, and gain international visibility.",
      href: "/Jadetimes-International-Research-Conference-2025/"
    },
        {
      src: YouthImage2,
      title: "How Jadetimes University Launches Students Into Industry",
      description: "Jadetimes International University (JIU) was built to do one thing exceptionally well: take motivated learners and make them industry-ready. ",
      href: "/How-Jadetimes-University-Launches-Students-Into-Industry/"
    },
  ];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white font-sans text-gray-800">
      <div className="py-8">
        {/* This is the heading from your original code */}
        <div className="max-w-7xl px-8 sm:px-10 lg:px-12 mb-12 md:mb-10">
          <h2 className="jt-heading">
            <span className="jt-line">AVAILABLE</span>
            <span className="jt-line">COURSES</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <button onClick={handleScrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md"><FontAwesomeIcon icon={faChevronLeft} /></button>
          <div
            ref={scrollContainerRef}
            className={`grid grid-flow-col  gap-4 mb-5 overflow-x-auto pb-4 no-scrollbar  flex-initial px-4 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ scrollBehavior: 'smooth' }} 
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
          >
            {/* CHANGE 3: Using the new InfoCard component and updated data. */}
            {cardsData.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>
          <button onClick={handleScrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md"><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
        <div className="text-center mt-8">
          <a href="/Degree-Programs/" className="inline-block bg-purple-600 text-white font-semibold px-8 py-3  hover:bg-purple-700 transition-colors duration-300">
            More Courses
          </a>
        </div>
      </div>

    </div>
  );
};


export default Courses;