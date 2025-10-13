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

// Data for all workshops is now in a single array.
// This makes it easy to add, remove, or edit workshops without changing the component's structure.
// The `gridSpan` property controls how many columns each card takes up on medium screens and larger.
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
    href: "/media-arts"
  },
  {
    title: "PERFORMING ARTS",
    imageUrl: WorkShopsForAdults03,
    alt: "Producing",
    gridSpan: "md:col-span-2",
    href: "/performing-arts"
  },
  {
    title: "CREATIVE EXPRESSION",
    imageUrl: WorkShopsForAdults04,
    alt: "Musical Theatre",
    gridSpan: "md:col-span-3",
    href: "/creative-expression"
  },
  {
    title: "JOURNALISM",
    imageUrl: WorkShopsForAdults05,
    alt: "Screenwriting",
    gridSpan: "md:col-span-3",
    href: "/journalism"
  },
  {
    title: "COMMUNIVATION",
    imageUrl: WorkShopsForAdults06,
    alt: "Photography",
    gridSpan: "md:col-span-2",
    href: "/communication"
  },
  {
    title: "DIGITAL MEDIA",
    imageUrl: WorkShopsForAdults07,
    alt: "3D Animation & VFX",
    gridSpan: "md:col-span-2",
    href: "/digital-media"
  },
  {
    title: "TECHNOLOGY",
    imageUrl: WorkShopsForAdults08,
    alt: "Documentary Filmmaking",
    gridSpan: "md:col-span-2",
    href: "/technology"
  },
  {
    title: "INTERACTIVE MEDIA",
    imageUrl: WorkShopsForAdults09,
    alt: "Digital Editing",
    gridSpan: "md:col-span-3",
    href: "/interactive-media"
  },
  {
    title: "ENTERTAINMENT MEDIA",
    imageUrl: WorkShopsForAdults10,
    alt: "Broadcast Journalism",
    gridSpan: "md:col-span-3",
    href: "/entertainment-media"
  },
  {
    title: "PSYCHOLOGY",
    imageUrl: WorkShopsForAdults11,
    alt: "Cinematography",
    gridSpan: "md:col-span-6",
    href: "/psychology"
  },
  {
    title: "HUMAN BEHAVIOR",
    imageUrl: WorkShopsForAdults12,
    alt: "Broadcast Journalism",
    gridSpan: "md:col-span-3",
    href: "/human-behavior"
  },
  {
    title: "MARKETING",
    imageUrl: WorkShopsForAdults13,
    alt: "Cinematography",
    gridSpan: "md:col-span-3",
    href: "/marketing"
  },
];

/**
 * A reusable component to display a single workshop card.
 * It receives all necessary data as props.
 */
const WorkshopCard = ({ title, image, alt, gridSpan, href = "#" }) => {
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
        <div className="w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center flex-shrink-0 ml-4">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </div>
      </div>
    </a>
  );
};

/**
 * The main component for the Workshops page.
 * It now maps over the workshopsData array to render the grid of cards.
 */
const WorkShopsForAdults = () => {
  return (
    <div className="container mx-auto px-1 sm:px-1 lg:px-1 py-5 text-black">
      {/* Header Section */}
      <header className="relative mb-10 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-1">
          <div className='px-6 sm:px-6 md:px-6 lg:px-33'>
            <h1 className="text-4xl lg:text-4xl font-semibold tracking-wide ext-black flex items-start">
              <span className="block w-1.25 h-14 bg-yellow-400 mr-6 flex-shrink-0"></span>
              <span>Select Your Interested Area of Study</span>
            </h1>
            <p className="mt-6 text-xl lg:text-xl text-black leading-relaxed ">
              At Jadetimes International University (JIU), we offer a wide range of online professional certificate courses designed to match your interests and career goals.
            </p>
          </div>
        </div>
      </header>

      {/* Workshops Grid - Now dynamically generated */}
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
  );
};

export default WorkShopsForAdults;