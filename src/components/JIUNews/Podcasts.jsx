
import React from "react";

import Podcast1 from "../../assets/Images/AboutHeading.Webp";
import Podcast2 from "../../assets/Images/AboutHeading.Webp";
import Podcast3  from "../../assets/Images/AboutHeading.Webp";
import Podcast4  from "../../assets/Images/AboutHeading.Webp";

const podcasts = [
  {
    id: 1,
    img: Podcast1,
    title: "CRAIG CATON: HOW 1 FILM CHANGED THE VFX INDUSTRY FOREVER",
    type: "Podcast",
  },
  {
    id: 2,
    img: Podcast2,
    title: "NEW YORK FILM ACADEMY VETERAN ON THE MOVE",
    type: "Podcast",
  },
  {
    id: 3,
    img: Podcast3,
    title: "COMMUNICATION AND THE POWER OF IMPROV WITH LYNDA GOODFRIEND",
    type: "Podcast",
  },
  {
    id: 4,
    img: Podcast4,
    title: "SCHOOL OF DOC A PODCAST ABOUT DOCUMENTARY FILMMAKING: LIZZIE GOTTLIEB",
    type: "Podcast",
  },
];

const Podcasts = () => {
  return (
    <div className="w-full bg-white py-10 px-6 md:px-12 lg:px-20">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 flex items-center">
        <span className="w-1 h-8 bg-yellow-500 mr-3"></span>
        PODCASTS AND AUDIO INTERVIEWS
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {podcasts.map((podcast) => (
          <div key={podcast.id} className="flex flex-col">
            {/* Image */}
            <div className="w-full h-60 overflow-hidden">
              <img
                src={podcast.img}
                alt={podcast.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <p className="text-sm text-gray-500 mt-3">{podcast.type}</p>
            <h3 className="text-lg font-medium text-gray-900">
              {podcast.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
