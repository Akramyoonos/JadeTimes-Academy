import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import FeaturedContentImage1 from "../../assets/Images/FeaturedContent.webp"; 
import FeaturedContentImage2 from "../../assets/Images/AlumniExplore01.webp"; 
import FeaturedContentImage3 from "../../assets/Images/AlumniExplore03.webp"; 
import FeaturedContentImage4 from "../../assets/Images/AlumniExplore02.webp";
import FeaturedContentImage5 from "../../assets/Images/Campus01.webp";

const FeaturedContent = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const firstArticle = scrollContainer.current.querySelector('article');
      if (firstArticle) {
        const scrollAmount = firstArticle.offsetWidth + 48; // 48px for space-x-12 (3rem)
        scrollContainer.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-900 ">
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div className="flex items-center lg:px-27 gap-6 mb-6 sm:mb-0">
            <div className="w-1.5 h-25 bg-yellow-500 "></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
              FEATURED<br /> CONTENT
            </h2>
          </div>
          <div className="flex space-x-4 lg:pr-48">
            <button onClick={() => scroll('left')} aria-label="Previous" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:bg-.200 hover:border-gray-400 transition-all duration-300 shadow-md">
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>
            <button onClick={() => scroll('right')} aria-label="Next" className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:border-gray-400 transition-all duration-300 shadow-md">
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
          </div>
        </div>
        <div ref={scrollContainer} className="flex space-x-12 overflow-x-auto w-full pb-8 no-scrollbar" role="list">
          <article className="relative shrink-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-7xl h-[500px] sm:h-[450px] md:h-[500px] overflow-hidden shadow-xl group" role="listitem">
            <img
              alt="Three people dressed in period clothing at a ball, two facing the camera smiling, one with back turned"
              className="w-full h-full object-cover transform transition-transform duration-2100 ease-in-out group-hover:scale-115"
              src={FeaturedContentImage1} 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end items-center">
              <h3 className="uppercase text-xl sm:text-2xl font-semibold tracking-wide text-white mb-3 leading-snug">
                NYFA ALUM MASALI BADUZA STARS IN SURPRISE ‘BRIDGERTON’ ROLE
              </h3>
              <p className="text-base text-gray-200 leading-relaxed mb-6 max-w-lg">
                The newest member of the ‘ton? NYFA AFA in Acting for Film alum Masali Baduza!
              </p>
              <a
                href="#"
                aria-label="Read more"
                className="self-start flex items-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-wider px-5 py-2 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                READ MORE
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </article>
          <article className="relative shrink-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-7xl h-[500px] sm:h-[450px] md:h-[500px]  overflow-hidden shadow-xl group" role="listitem">
            <img
              alt="Three people dressed in period clothing at a ball, two facing the camera smiling, one with back turned"
              className="w-full h-full object-cover transform transition-transform duration-2100 ease-in-out group-hover:scale-115"
              src={FeaturedContentImage2} 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end items-center">
              <h3 className="uppercase text-xl sm:text-2xl font-semibold tracking-wide text-white mb-3 leading-snug">
                NYFA ALUM MASALI BADUZA STARS IN SURPRISE ‘BRIDGERTON’ ROLE
              </h3>
              <p className="text-base text-gray-200 leading-relaxed mb-6 max-w-lg">
                The newest member of the ‘ton? NYFA AFA in Acting for Film alum Masali Baduza!
              </p>
              <a
                href="#"
                aria-label="Read more"
                className="self-start flex items-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-wider px-5 py-2 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                READ MORE
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </article>
          <article className="relative shrink-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-7xl h-[500px] sm:h-[450px] md:h-[500px]  overflow-hidden shadow-xl group" role="listitem">
            <img
              alt="Three people dressed in period clothing at a ball, two facing the camera smiling, one with back turned"
              className="w-full h-full object-cover transform transition-transform duration-2100 ease-in-out group-hover:scale-115"
              src={FeaturedContentImage3} 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end items-center">
              <h3 className="uppercase text-xl sm:text-2xl font-semibold tracking-wide text-white mb-3 leading-snug">
                NYFA ALUM MASALI BADUZA STARS IN SURPRISE ‘BRIDGERTON’ ROLE
              </h3>
              <p className="text-base text-gray-200 leading-relaxed mb-6 max-w-lg">
                The newest member of the ‘ton? NYFA AFA in Acting for Film alum Masali Baduza!
              </p>
              <a
                href="#"
                aria-label="Read more"
                className="self-start flex items-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-wider px-5 py-2 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                READ MORE
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </article>
          <article className="relative shrink-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-7xl h-[500px] sm:h-[450px] md:h-[500px]  overflow-hidden shadow-xl group" role="listitem">
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end items-center">
              <h3 className="uppercase text-xl sm:text-2xl font-semibold tracking-wide text-white mb-3 leading-snug">
                NYFA ALUM MASALI BADUZA STARS IN SURPRISE ‘BRIDGERTON’ ROLE
              </h3>
              <p className="text-base text-gray-200 leading-relaxed mb-6 max-w-lg">
                The newest member of the ‘ton? NYFA AFA in Acting for Film alum Masali Baduza!
              </p>
              <a
                href="#"
                aria-label="Read more"
                className="self-start flex items-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-wider px-5 py-2 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                READ MORE
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </article>
          <article className="relative shrink-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-7xl h-[500px] sm:h-[450px] md:h-[500px]  overflow-hidden shadow-xl group" role="listitem">
            <img
              alt="Three people dressed in period clothing at a ball, two facing the camera smiling, one with back turned"
              className="w-full h-full object-cover transform transition-transform duration-2100 ease-in-out group-hover:scale-115"
              src={FeaturedContentImage4} 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end items-center">
              <h3 className="uppercase text-xl sm:text-2xl font-semibold tracking-wide text-white mb-3 leading-snug">
                NYFA ALUM MASALI BADUZA STARS IN SURPRISE ‘BRIDGERTON’ ROLE
              </h3>
              <p className="text-base text-gray-200 leading-relaxed mb-6 max-w-lg">
                The newest member of the ‘ton? NYFA AFA in Acting for Film alum Masali Baduza!
              </p>
              <a
                href="#"
                aria-label="Read more"
                className="self-start flex items-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-wider px-5 py-2 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                READ MORE
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </article>
        </div>
      </div>
      
    </div>
  );
};

export default FeaturedContent;