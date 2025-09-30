import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


import mfaImg from "../../assets/Images/AboutHeading.Webp";
import maImg from "../../assets/Images/AboutHeading.Webp";
import baImg from "../../assets/Images/AboutHeading.Webp";
import bfaImg from "../../assets/Images/AboutHeading.Webp";
import aasImg from "../../assets/Images/AboutHeading.Webp";

const degreePrograms = [
  {
    href: "#",
    imgSrc: mfaImg,
    imgAlt: "Students working with a professional camera",
    label: "MFA",
  },
  {
    href: "#",
    imgSrc: maImg,
    imgAlt: "Student with NYFA shirt operating a camera",
    label: "MA",
  },
  {
    href: "#",
    imgSrc: baImg,
    imgAlt: "Two students filming with bright stage light",
    label: "BA",
  },
  {
    href: "#",
    imgSrc: bfaImg,
    imgAlt: "Students filming outdoors with camera equipment",
    label: "BFA",
  },
  {
    href: "#",
    imgSrc: aasImg,
    imgAlt: "Student filming in front of a smoke effect",
    label: "AAS",
  },
];

const DegreeCard = ({ href, imgSrc, imgAlt, label }) => (
  <a
    href={href}
    className="relative group block overflow-hidden aspect-[16/9]"
  >
    <img
      src={imgSrc}
      alt={imgAlt}
      className="object-cover w-full h-full brightness-[0.6] group-hover:brightness-[0.8] transition-all duration-300 transform group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 flex justify-between items-end p-4">
      <span className="text-white text-lg sm:text-xl font-semibold tracking-wide">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="text-cyan-400 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
      >
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </span>
    </div>
  </a>
);

const DegreePrograms = () => {
  const firstRowPrograms = degreePrograms.slice(0, 2);
  const secondRowPrograms = degreePrograms.slice(2, 5);

  return (
    <div className="bg-white font-sans text-gray-900 py-16 sm:py-20">
      <section>
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-pink-400 pl-4 mb-6">
            REQUIREMENTS BY DEGREE PROGRAM
          </h1>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {firstRowPrograms.map((program) => (
                <DegreeCard key={program.label} {...program} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {secondRowPrograms.map((program) => (
                <DegreeCard key={program.label} {...program} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DegreePrograms;