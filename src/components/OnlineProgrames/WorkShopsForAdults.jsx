import React from 'react';
import WorkShopsForAdults01 from '../../assets/Images/WorkShopsForAdultsImages01.jpeg';
import WorkShopsForAdults02 from '../../assets/Images/WorkShopsForAdultsImages02.jpeg';
import WorkShopsForAdults03 from '../../assets/Images/WorkShopsForAdultsImages03.jpeg';
import WorkShopsForAdults04 from '../../assets/Images/WorkShopsForAdultsImages04.jpeg';
import WorkShopsForAdults05 from '../../assets/Images/WorkShopsForAdultsImages05.jpeg';
import WorkShopsForAdults06 from '../../assets/Images/WorkShopsForAdultsImages06.jpeg';
import WorkShopsForAdults07 from '../../assets/Images/WorkShopsForAdultsImages07.jpeg';
import WorkShopsForAdults08 from '../../assets/Images/WorkShopsForAdultsImages08.jpeg';
import WorkShopsForAdults09 from '../../assets/Images/WorkShopsForAdultsImages09.jpeg';
import WorkShopsForAdults10 from '../../assets/Images/WorkShopsForAdultsImages10.jpeg';
import WorkShopsForAdults11 from '../../assets/Images/WorkShopsForAdultsImages11.jpeg';

// Data for all workshops is now in a single array.
// This makes it easy to add, remove, or edit workshops without changing the component's structure.
// The `gridSpan` property controls how many columns each card takes up on medium screens and larger.
const workshopsData = [
  {
    title: "Online Filmmaking\nWorkshops",
    imageUrl:WorkShopsForAdults01 ,
    alt: "Filmmaking",
    gridSpan: "md:col-span-2",
  },
  {
    title: "Online Acting For Film\nWorkshops",
    imageUrl:WorkShopsForAdults02 ,
    alt: "Acting for Film",
    gridSpan: "md:col-span-2",
  },
  {
    title: "Online Producing\nWorkshops",
    imageUrl: WorkShopsForAdults03,
    alt: "Producing",
    gridSpan: "md:col-span-2",
  },
  {
    title: "Online Musical Theatre\nWorkshops",
    imageUrl: WorkShopsForAdults04,
    alt: "Musical Theatre",
    gridSpan: "md:col-span-3",
  },
  {
    title: "Online Screenwriting\nWorkshops",
    imageUrl: WorkShopsForAdults05,
    alt: "Screenwriting",
    gridSpan: "md:col-span-3",
  },
  {
    title: "Online Photography\nWorkshops",
    imageUrl: WorkShopsForAdults06,
    alt: "Photography",
    gridSpan: "md:col-span-2",
  },
  {
    title: "Online 3D Animation & VFX\nWorkshops",
    imageUrl: WorkShopsForAdults07,
    alt: "3D Animation & VFX",
    gridSpan: "md:col-span-2",
  },
  {
    title: "Online Documentary\nFilmmaking Workshops",
    imageUrl: WorkShopsForAdults08,
    alt: "Documentary Filmmaking",
    gridSpan: "md:col-span-2",
  },
  {
    title: "Online Digital Editing\nWorkshops",
    imageUrl: WorkShopsForAdults09,
    alt: "Digital Editing",
    gridSpan: "md:col-span-3",
  },
  {
    title: "Online Broadcast Journalism\nWorkshops",
    imageUrl: WorkShopsForAdults10,
    alt: "Broadcast Journalism",
    gridSpan: "md:col-span-3",
  },
  {
    title: "Online Cinematography\nWorkshops",
    imageUrl: WorkShopsForAdults11,
    alt: "Cinematography",
    gridSpan: "md:col-span-6",
  },
];

/**
 * A reusable component to display a single workshop card.
 * It receives all necessary data as props.
 */
const WorkshopCard = ({ title, image, alt, gridSpan, href = "#" }) => {
  return (
    <a href={href} className={`group h-64 block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${gridSpan}`}>
      <img 
        src={image} 
        alt={alt} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60"></div>
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 text-black">
      {/* Header Section */}
      <header className="relative mb-10 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-light text-black flex items-start">
              <span className="block w-1 h-20 bg-yellow-400 mr-6 flex-shrink-0"></span>
              <span>ONLINE SHORT-TERM AND EVENING WORKSHOPS FOR ADULTS</span>
            </h1>
            <p className="mt-6 text-black leading-relaxed max-w-md">
              Unlike other online courses, in NYFA’s Hands-Online workshops, you will meet your professors and your classmates in the virtual classroom, share your ideas and collaborate on your projects.
            </p>
          </div>
        </div>
      </header>

      {/* Workshops Grid - Now dynamically generated */}
      <main className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {workshopsData.map((workshop, index) => (
          <WorkshopCard
            key={index}
            title={workshop.title}
            image={workshop.imageUrl}
            alt={workshop.alt}
            gridSpan={workshop.gridSpan}
          />
        ))}
      </main>
    </div>
  );
};

export default WorkShopsForAdults;