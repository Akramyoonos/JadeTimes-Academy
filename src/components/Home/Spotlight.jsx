import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Placeholder images - replace with your actual image imports
import NycImage from '../../assets/Images/Spotlight 01.webp';
import LaImage from '../../assets/Images/Spotlight 02.Webp';
import YouthImage from '../../assets/Images/Spotlight 03.Webp';
import VirtualImage from '../../assets/Images/Spotlight 04.Webp';
import YouthImage1 from '../../assets/Images/Spotlight 05.Webp';
import YouthImage2 from '../../assets/Images/Spotlight 06.Webp';
import Spotlight7 from '../../assets/Images/CERTIFICATEPROGRAMSImg.webp';
import Spotlight8 from '../../assets/Images/ONLINEPROGRAMSImg.webp';
import Spotlight9 from '../../assets/Images/jadetimesjournalsImg.webp';
import Spotlight10 from '../../assets/Images/JADETIMESCONFERENCESImg.webp';


// CHANGE 1: Created a new Card component to match the style in the image.
// ADDED ZOOM EFFECT: Added `group-hover:scale-110` to the image tag for the zoom effect on hover.
const InfoCard = ({ src, title, description, href }) => (
  <a href={href} className="w-[80vw] md:w-96 shrink-0 bg-white font-sans text-left select-none group overflow-hidden">
    <div className="overflow-hidden relative">
      <img
        src={src}
        alt={title}
        className="w-full h-96 object-cover pointer-events-none transition-transform duration-2000 ease-in-out group-hover:scale-115"
      />
      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
    </div>
    <div className="p-4">
      <h3 className="text-gray-800 text-lg font-semibold uppercase mb-2 tracking-wide transition-colors duration-300 group-hover:text-purple-700">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </a>
);


const Spotlight = () => {
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
        {
      src: YouthImage,
      title: "SIGN UP FOR SATURDAY / WEEKEND YOUTH WORKSHOPS THIS FALL!",
      description: "JIU offers in-person (NY & LA) and online Saturday workshops for teens (14-17) and kids (10-13). Sign up your aspiring youth filmmaker, performer, or visual storyteller today!",
      href: "/cards-data7/"
    },
        {
      src: YouthImage,
      title: "SIGN UP FOR SATURDAY / WEEKEND YOUTH WORKSHOPS THIS FALL!",
      description: "JIU offers in-person (NY & LA) and online Saturday workshops for teens (14-17) and kids (10-13). Sign up your aspiring youth filmmaker, performer, or visual storyteller today!",
      href: "/cards-data8/"
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
      <div className="py-16">
        {/* This is the heading from your original code */}
        <div className="max-w-7xl  px-8 sm:px-10 lg:px-12 mb-12 md:mb-10">
          <h2 className="jt-heading">
            <span className="jt-line">ACADEMY</span>
            <span className="jt-line">SPOTLIGHT</span>
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

      <div className="w-full pb-10">
        {/* CHANGE 4: Removed the duplicate links that were present in the original code. */}
        {/* CHANGE 5: Updated grid classes for mobile responsiveness. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/Degree-Programs/" className="relative group cursor-pointer overflow-hidden h-64 md:h-80 block">
            <div className="overflow-hidden relative">
              <img
                alt="Smiling young people posing for a photo"
                className="w-full h-full object-cover transform transition-transform duration-2000 group-hover:scale-115"
                src={Spotlight7}
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">CERTIFICATE PROGRAMS</h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4  group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>

          <a href="/online-programs/" className="relative group cursor-pointer overflow-hidden h-64 md:h-80 block">
            <img
              alt="Woman filming in front of a cathedral"
              className="w-full h-full object-cover transform transition-transform duration-2000 group-hover:scale-115"
              src={Spotlight8}
            />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">ONLINE PROGRAMS</h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>

          <a href="http://jadetimesjournals.com/" className="relative group cursor-pointer overflow-hidden h-64 md:h-80 block">
            <img
              alt="Smiling young people posing for a photo"
              className="w-full h-full object-cover transform transition-transform duration-2000 group-hover:scale-115"
              src={Spotlight9}
            />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/0 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">JADETIMES JOURNALS</h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>

          <a href="/Jadetimes-Conferences/" className="relative group cursor-pointer overflow-hidden h-64 md:h-80 block">
            <img
              alt="Woman filming in front of a cathedral"
              className="w-full h-full object-cover transform transition-transform duration-2000 group-hover:scale-115"
              src={Spotlight10}
            />
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-wider">JADETIMES CONFERENCES</h3>
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