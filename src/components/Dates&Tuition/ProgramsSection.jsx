
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
];

const ProgramsSection = () => {
  return (
    <div className="bg-white font-sans py-12 px-6 sm:px-12 lg:px-20">
      {/* Heading */}
      <div className="flex items-center mb-10">
        <div className="w-1 h-20 bg-purple-500 mr-4"></div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          DEGREE PROGRAMS, CONSERVATORY PROGRAMS, SHORT-
          <br />
          TERM WORKSHOPS
        </h1>
      </div>

      <div className="shadow-lg bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index}>
              <a href={program.href} target="_blank" rel="noopener noreferrer">
                <h2 className="text-purple-500 font-medium mb-4 hover:underline cursor-pointer">
                  {program.name}
                </h2>
              </a>
              <a href={program.href} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-64 bg-gray-200">
                  <img
                    src={program.imageUrl}
                    alt={program.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
