import React from 'react';
import WorkShopsForAdults01 from '../../assets/Images/WorkShopsForAdultsImages01.webp';
import WorkShopsForAdults02 from '../../assets/Images/WorkShopsForAdultsImages02.webp';
import WorkShopsForAdults03 from '../../assets/Images/WorkShopsForAdultsImages03.webp';
import WorkShopsForAdults04 from '../../assets/Images/WorkShopsForAdultsImages04.webp';
import WorkShopsForAdults05 from '../../assets/Images/WorkShopsForAdultsImages05.webp';
import WorkShopsForAdults06 from '../../assets/Images/WorkShopsForAdultsImages06.webp';
import WorkShopsForAdults07 from '../../assets/Images/WorkShopsForAdultsImages07.webp';
import WorkShopsForAdults08 from '../../assets/Images/WorkShopsForAdultsImages08.webp';
import WorkShopsForAdults09 from '../../assets/Images/WorkShopsForAdultsImages09.webp';
import WorkShopsForAdults10 from '../../assets/Images/WorkShopsForAdultsImages10.webp';
import WorkShopsForAdults11 from '../../assets/Images/WorkShopsForAdultsImages11.webp';
import WorkShopsForAdults12 from '../../assets/Images/WorkShopsForAdultsImages10.webp';
import WorkShopsForAdults13 from '../../assets/Images/WorkShopsForAdultsImages11.webp';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Data for all workshops
const workshopsData = [
  {
    title: "FILM",
    imageUrl:WorkShopsForAdults01 ,
    alt: "Filmmaking",
    gridSpan: "md:col-span-2",
    href: "/film"
  },
  {
    title: "MEDIA ARTS",
    imageUrl:WorkShopsForAdults02 ,
    alt: "Acting for Film",
    gridSpan: "md:col-span-2",
  },
  {
    title: "PERFORMING ARTS",
    imageUrl: WorkShopsForAdults03,
    alt: "Producing",
    gridSpan: "md:col-span-2",
  },
  {
    title: "CREATIVE EXPRESSION",
    imageUrl: WorkShopsForAdults04,
    alt: "Musical Theatre",
    gridSpan: "md:col-span-3",
  },
  {
    title: "JOURNALISM",
    imageUrl: WorkShopsForAdults05,
    alt: "Screenwriting",
    gridSpan: "md:col-span-3",
  },
  {
    title: "COMMUNIVATION",
    imageUrl: WorkShopsForAdults06,
    alt: "Photography",
    gridSpan: "md:col-span-2",
  },
  {
    title: "DIGITAL MEDIA",
    imageUrl: WorkShopsForAdults07,
    alt: "3D Animation & VFX",
    gridSpan: "md:col-span-2",
  },
  {
    title: "TECHNOLOGY",
    imageUrl: WorkShopsForAdults08,
    alt: "Documentary Filmmaking",
    gridSpan: "md:col-span-2",
  },
  {
    title: "INTERACTIVE MEDIA",
    imageUrl: WorkShopsForAdults09,
    alt: "Digital Editing",
    gridSpan: "md:col-span-3",
  },
  {
    title: "ENTERTAINMENT MEDIA",
    imageUrl: WorkShopsForAdults10,
    alt: "Broadcast Journalism",
    gridSpan: "md:col-span-3",
  },
  {
    title: "PSYCHOLOGY",
    imageUrl: WorkShopsForAdults11,
    alt: "Cinematography",
    gridSpan: "md:col-span-6",
  },
  {
    title: "HUMAN BEHAVIOR",
    imageUrl: WorkShopsForAdults12,
    alt: "Broadcast Journalism",
    gridSpan: "md:col-span-3",
  },
  {
    title: "MARKETING",
    imageUrl: WorkShopsForAdults13,
    alt: "Cinematography",
    gridSpan: "md:col-span-3",
  },
];

// Reusable WorkshopCard component
const WorkshopCard = ({ title, image, alt, gridSpan, href }) => {
  if (href) {
    return (
      <a href={href} className={`group h-64 block relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${gridSpan}`}>
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-2500 ease-in-out group-hover:scale-130"
        />
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-10 transition-opacity duration-900"></div>
        <div className="relative flex justify-between items-end h-full p-6 text-white">
          <h3 className="text-xl font-light uppercase tracking-wide whitespace-pre-line">{title}</h3>
          <div className="w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center shrink-0 ml-4">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className={`group h-64 block relative overflow-hidden shadow-lg cursor-not-allowed ${gridSpan}`}>
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-2500 ease-in-out group-hover:scale-130"
      />
      <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition-opacity duration-900"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="relative group">
            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-full border-2 border-white/30">
                <FontAwesomeIcon icon={faLock} className="text-white text-5xl" />
            </div>
            <div className="absolute bottom-full mb-3 w-max left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-black text-white text-sm px-3 py-1.5 rounded-lg">Coming soon</span>
            </div>
        </div>
      </div>
      <div className="relative flex justify-between items-end h-full p-6 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-700">
        <h3 className="text-xl font-light uppercase tracking-wide whitespace-pre-line">{title}</h3>
      </div>
    </div>
  );
};


const Discription = () => {
  return (
    <>
      <div className="DiscriptionFont bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-1 bg-[#9b7f00]"></div>
                <div className="pl-8">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight headingFont">
                    <span className="text-gray-700">Select Your Interested Area of Study</span>
                  </h1>
                </div>
              </div>

              <div className="mt-10 text-gray-700 text-lg space-y-6 leading-relaxed font-sans">
                <p>
                  At Jadetimes International University (JIU), we offer a wide range of online professional certificate courses designed to match your interests and career goals.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="w-full lg:w-80 shrink-0 mt-6 lg:mt-0">
              <div className="border border-gray-200">
                <div className="bg-gray-200 p-4 ">
                  <h2 id="related-links-heading" className="text-2xl font-semibold uppercase text-black">
                    RELATED LINKS
                  </h2>
                </div>
                <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
                  <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500 transition-colors">
                    Open House
                  </a>
                  <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500 transition-colors">
                    Degree Programs
                  </a>
                  <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500 transition-colors">
                    Program Dates & Tuition
                  </a>
                </nav>
              </div>
            </aside>

          </div>
        </div>
      </div>

      {/* Workshops Grid - Now dynamically generated */}
      <div className="container mx-auto px-1 sm:px-1 lg:px-1 py-5 text-black">
        <main className="grid grid-cols-1 md:grid-cols-6 gap-1">
          {workshopsData.map((workshop, index) => (
            <WorkshopCard
              key={index}
              title={workshop.title}
              image={workshop.imageUrl}
              alt={workshop.alt}
              gridSpan={workshop.gridSpan}
              href={workshop.href}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default Discription;