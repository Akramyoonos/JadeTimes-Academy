// src/Components/CardsData.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import programImg1 from "../../assets/Images/AboutHeading.Webp";
import programImg2 from "../../assets/Images/AboutHeading.Webp";
import programImg3 from "../../assets/Images/AboutHeading.Webp";
import programImg4 from "../../assets/Images/AboutHeading.Webp";
import programImg5 from "../../assets/Images/AboutHeading.Webp";
import programImg6 from "../../assets/Images/AboutHeading.Webp";


// ✅ Array of card content
const cards = [
  {
    href: "#",
    img: programImg1,
    alt: "Students operating a camera on set",
    title: "UNDERGRADUATE, GRADUATE, 1-YEAR & 2-YEAR PROGRAMS",
  },
  {
    href: "#",
    img: programImg2,
    alt: "Student filming outdoors",
    title: "SHORT-TERM PROGRAMS (1-12 WEEKS)",
  },
  {
    href: "#",
    img: programImg3,
    alt: "Teen with a clapper board",
    title: "TEEN CAMPS (AGE 14-17) SUMMER, ONLINE & WEEKEND",
  },
  {
    href: "#",
    img: programImg4,
    alt: "Two students holding a clapper board",
    title: "KIDS CAMPS (AGE 10-13) SUMMER, ONLINE & WEEKEND",
  },
  {
    href: "#",
    img: programImg5,
    alt: "Veteran student with camera",
    title: "VETERAN AND MILITARY FAMILIES",
  },
  {
    href: "#",
    img: programImg6,
    alt: "Student smiling with camera in front of church",
    title: "STUDY ABROAD & STUDY AWAY – ITALY",
  },
];

// ✅ Single card UI
const ProgramCard = ({ href, img, alt, title }) => (
  <a
    href={href}
    className="relative group block aspect-[16/9] overflow-hidden rounded-lg shadow-md"
  >
    <img
      src={img}
      alt={alt}
      className="w-full h-full object-cover brightness-[0.6] group-hover:brightness-[0.8] group-hover:scale-105 transition duration-300"
      loading="lazy"
    />
    <div className="absolute inset-0 flex flex-col justify-end p-4">
      <span className="text-white font-semibold text-base sm:text-lg md:text-xl leading-snug">
        {title}
      </span>
      <span
        aria-hidden="true"
        className="text-white text-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mt-2"
      >
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </span>
    </div>
  </a>
);

// ✅ Grid wrapper
const CardsData = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {cards.map((card, i) => (
      <ProgramCard
        key={i}
        href={card.href}
        img={card.img}
        alt={card.alt}
        title={card.title}
      />
    ))}
  </section>
);

export default CardsData;
