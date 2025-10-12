import React from "react";
import Card from "./Card";

import undergraduateDegree01 from "../../assets/Images/undergraduateDegree01.webp";
import undergraduateDegree02 from "../../assets/Images/undergraduateDegree02.webp";
import undergraduateDegree03 from "../../assets/Images/undergraduateDegree03.webp";
import GraduateDegree01 from "../../assets/Images/GraduateDegree01.webp";
import GraduateDegree02 from "../../assets/Images/GraduateDegree02.webp";
import Campus01 from "../../assets/Images/Campus01.webp";
import Campus02 from "../../assets/Images/Campus02.webp";
import Campus03 from "../../assets/Images/Campus03.webp";
import onlineDegreeImage from "../../assets/Images/onlineDegreeImage.webp";
import events01 from "../../assets/Images/events01.webp";
import Spotlight01 from "../../assets/Images/Spotlight 01.webp";
import Spotlight02 from "../../assets/Images/Spotlight 02.webp";
import Spotlight03 from "../../assets/Images/Spotlight 03.webp";

const TrainingSection = () => {
  const programs = [
    {
      title: "FILMMAKING",
      imageUrl: undergraduateDegree01,
      href: "https://www.nyfa.edu/filmmaking/",
    },
    {
      title: "ACTING FOR FILM",
      imageUrl: undergraduateDegree02,
      href: "https://www.nyfa.edu/acting-for-film/",
    },
    {
      title: "PHOTOGRAPHY",
      imageUrl: undergraduateDegree03,
      href: "https://www.nyfa.edu/photography/",
    },
    {
      title: "PRODUCING",
      imageUrl: GraduateDegree01,
      href: "https://www.nyfa.edu/producing/",
    },
    {
      title: "SCREENWRITING",
      imageUrl: GraduateDegree02,
      href: "https://www.nyfa.edu/screenwriting/",
    },
    {
      title: "CINEMATOGRAPHY",
      imageUrl: Campus01,
      href: "https://www.nyfa.edu/cinematography/",
    },
    {
      title: "DOCUMENTARY FILMMAKING",
      imageUrl: Campus02,
      href: "https://www.nyfa.edu/documentary-filmmaking/",
    },
    {
      title: "3D ANIMATION & VISUAL EFFECTS",
      imageUrl: Campus03,
      href: "https://www.nyfa.edu/3d-animation-visual-effects/",
    },
    {
      title: "DIGITAL EDITING",
      imageUrl: onlineDegreeImage,
      href: "https://www.nyfa.edu/digital-editing/",
    },
    {
      title: "BROADCAST JOURNALISM",
      imageUrl: events01,
      href: "https://www.nyfa.edu/broadcast-journalism/",
    },
    {
      title: "MUSICAL THEATRE",
      imageUrl: Spotlight01,
      href: "https://www.nyfa.edu/musical-theatre/",
    },
    {
      title: "GAME DESIGN",
      imageUrl: Spotlight02,
      href: "https://www.nyfa.edu/game-design/",
    },
    {
      title: "ENTERTAINMENT MEDIA",
      imageUrl: Spotlight03,
      href: "https://www.nyfa.edu/entertainment-media/",
    },
  ];

  return (
    <section className="w-full  py-12">
      {/* Heading */}
      <div className="mb-10 px-6 sm:px-6 md:px-6 lg:px-35 ">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight border-l-4 border-pink-500 pl-4">
          TRAINING FOR A FUTURE IN FILM, TELEVISION, MEDIA, AND <br /> ENTERTAINMENT
        </h2>
        <p className="mt-6 text-gray-700 text-lg max-w-4xl">
          NYFA is devoted to providing the most hands-on and <br />intensive programs
          in the world, including:
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid gap-2">
        {/* Row 1 - 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {programs.slice(0, 3).map((program, index) => (
            <Card key={index} title={program.title} imageUrl={program.imageUrl} href={program.href} />
          ))}
        </div>

        {/* Row 2 - 2 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {programs.slice(3, 5).map((program, index) => (
            <Card key={index} title={program.title} imageUrl={program.imageUrl} href={program.href} />
          ))}
        </div>

        {/* Row 3 - 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {programs.slice(5, 8).map((program, index) => (
            <Card key={index} title={program.title} imageUrl={program.imageUrl} href={program.href} />
          ))}
        </div>

        {/* Row 4 - 2 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {programs.slice(8, 10).map((program, index) => (
            <Card key={index} title={program.title} imageUrl={program.imageUrl} href={program.href} />
          ))}
        </div>

        {/* Row 5 - 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {programs.slice(10, 13).map((program, index) => (
            <Card key={index} title={program.title} imageUrl={program.imageUrl} href={program.href} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;