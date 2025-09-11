
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Reusable card with background image
const Card = ({ title, imageUrl, href }) => (
  <a href={href} className="relative group overflow-hidden shadow-lg h-72 flex items-center justify-center">
    <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

    {/* Title + Arrow */}
    <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
      <span className="text-lg font-semibold">{title}</span>
      <FontAwesomeIcon icon={faArrowRight} className="opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </div>
  </a>
);

export default Card;
