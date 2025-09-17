
import React from "react";
import BlogHeadingImg1 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg2 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg3 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg4 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg5 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg6 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg7 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg8 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg9 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg10 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg11 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg12 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg13 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg14 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg15 from "../../assets/Images/BlogHeadingImg.jpeg";


const programs = [
  {
    name: "Filmmaking",
    imageUrl: BlogHeadingImg1,
    href: "/",
  },
  {
    name: "Acting for Film",
    imageUrl: BlogHeadingImg2,
    href: "https://www.nyfa.edu/acting-for-film/",
  },
  {
    name: "Photography",
    imageUrl: BlogHeadingImg3,
    href: "https://www.nyfa.edu/photography/",
  },
  {
    name: "Cinematography",
    imageUrl: BlogHeadingImg4,
    href: "https://www.nyfa.edu/cinematography/",
  },
  {
    name: "Digital Editing",
    imageUrl: BlogHeadingImg5,
    href: "https://www.nyfa.edu/digital-editing/",
  },
  {
    name: "Documentary Filmmaking",
    imageUrl: BlogHeadingImg6,
    href: "https://www.nyfa.edu/documentary-filmmaking/",
  },
  {
    name: "3D Animation & Visual Effects",
    imageUrl: BlogHeadingImg7,
    href: "https://www.nyfa.edu/3d-animation-visual-effects/",
  },
  {
    name: "Game Design",
    imageUrl: BlogHeadingImg8,
    href: "https://www.nyfa.edu/game-design/",
  },
  {
    name: "Musical Theatre",
    imageUrl: BlogHeadingImg9,
    href: "https://www.nyfa.edu/musical-theatre/",
  },
  {
    name: "Screenwriting",
    imageUrl: BlogHeadingImg10,
    href: "https://www.nyfa.edu/screenwriting/",
  },
  {
    name: "Producing",
    imageUrl: BlogHeadingImg11,
    href: "https://www.nyfa.edu/producing/",
  },
    {
    name: "Game Design",
    imageUrl: BlogHeadingImg12,
    href: "https://www.nyfa.edu/game-design/",
  },
  {
    name: "Musical Theatre",
    imageUrl: BlogHeadingImg13,
    href: "https://www.nyfa.edu/musical-theatre/",
  },
  {
    name: "Screenwriting",
    imageUrl: BlogHeadingImg14,
    href: "https://www.nyfa.edu/screenwriting/",
  },
  {
    name: "Producing",
    imageUrl: BlogHeadingImg15,
    href: "https://www.nyfa.edu/producing/",
  },
];

const ProgramsSection = () => {
  return (
    <div className="bg-gray-50 font-sans py-16 px-6 sm:px-12 lg:px-10  shadow-inner">
      {/* Heading */}
      <div className="flex items-center mb-12">
        <div className="w-2 h-24 bg-purple-600 mr-6  shadow-md"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 leading-tight tracking-tight">
          DEGREE PROGRAMS, CONSERVATORY PROGRAMS, SHORT-
          <br />
          TERM WORKSHOPS
        </h1>
      </div>

      <div className="bg-white p-8  shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div key={index} className="bg-white  shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <a href={program.href} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-64 bg-gray-200  overflow-hidden">
                  <img
                    src={program.imageUrl}
                    alt={program.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </a>
              <div className="p-6">
                <a href={program.href} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-purple-700 transition-colors duration-200 cursor-pointer">
                    {program.name}
                  </h2>
                </a>
                {/* You can add more program details here if available */}
                <a
                  href={program.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 ro text-sm font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
