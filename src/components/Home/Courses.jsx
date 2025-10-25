import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
  <motion.a
    href={href}
    className="w-[85vw] md:w-85 h-160 flex-shrink-0 bg-white font-sans text-left select-none group overflow-hidden "
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <div className="overflow-hidden relative">
      <img
        src={src}
        alt={title}
        className="w-100 h-110 object-contain pointer-events-none transition-transform ease-in-out "
      />
      <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-300"></div>
    </div>
    <div className="p-4">
      <h3 className="text-gray-800 text-lg font-semibold uppercase mb-2 tracking-wide transition-colors duration-300 group-hover:text-purple-700 group-active:text-purple-700">{title}</h3>
      <p className="text-black font-bold text-2xl leading-relaxed">{description}</p>
    </div>
  </motion.a>
);


const Courses = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragStartTime, setDragStartTime] = useState(0);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftChevron(scrollLeft > 0);
      setShowRightChevron(scrollLeft < scrollWidth - clientWidth);
    }
  };

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
      description: " $ 100 ",
      href: "/Jadetimes-International-University-(JIU):Shaping-the-Future-of-Online-Education/"
    },
    {
      src: LaImage,
      title: "Empowering Research and Innovation",
      description: " $ 100  ",
      href: "/The-Story-of-Jadetimes:Empowering-Research-and-Innovation/"
    },
    {
      src: YouthImage,
      title: "Advancing Knowledge Across Borders",
      description: " $ 100  ",
      href: "/Jadetimes-Journal-of-Universal-Studies-(JJUS):Advancing-Knowledge-Across-Borders/"
    },
    {
      src: VirtualImage,
      title: "Partners with Special Graphics LLC for Advanced Graphic Design Education",
      description: " $ 100  ",
      href: "/Jadetimes-International-University-Partners-with-Special-Graphics-LLC-for-Advanced-Graphic-Design-Education/"
    },
        {
      src: YouthImage1,
      title: "Jadetimes International Research Conference 2025",
      description: " $ 100  ",
      href: "/Jadetimes-International-Research-Conference-2025/"
    },
        {
      src: YouthImage2,
      title: "How Jadetimes University Launches Students Into Industry",
      description: " $ 100  ",
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
    <div className="bg-gray-100 font-sans text-gray-800">
      <div className="py-12">
        {/* This is the heading from your original code */}
        <div className="max-w-7xl px-8 sm:px-10 lg:px-12 mb-12 md:mb-10">
          <h2 className="jt-heading">
            <span className="jt-line">AVAILABLE</span>
            <span className="jt-line">COURSES</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
                  {showLeftChevron && <button onClick={handleScrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md"><FontAwesomeIcon icon={faChevronLeft} /></button>}
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
                    onScroll={handleScroll}
                  >
                    {/* CHANGE 3: Using the new InfoCard component and updated data. */}
                    {cardsData.map((card, index) => (
                      <InfoCard key={index} {...card} />
                    ))}
                  </div>
                  {showRightChevron && <button onClick={handleScrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-md"><FontAwesomeIcon icon={faChevronRight} /></button>}
                </div>
      </div>

    </div>
  );
};


export default Courses;