import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

// Images
import followUs1 from '../assets/Images/Followus1.jpg';
import followUs2 from '../assets/Images/Followus2.jpg';
import followUs3 from '../assets/Images/Followus3.jpg';
import followUs4 from '../assets/Images/Followus4.jpg';
import followUs5 from '../assets/Images/Followus5.jpg';
import followUs6 from '../assets/Images/Followus6.jpg';
import followUs7 from '../assets/Images/Followus7.jpg';
import followUs8 from '../assets/Images/Followus8.jpg';
import followUs9 from '../assets/Images/Followus9.jpg';
import followUs10 from '../assets/Images/Followus10.jpg';
import followUs11 from '../assets/Images/Followus11.jpg';
import followUs12 from '../assets/Images/Followus12.jpg';

const FollowUs = () => {
  const images = [
    { src: followUs1, alt: "Man illuminated by light", href: "https://www.instagram.com/" },
    { src: followUs2, alt: "NYFA Logo on a colorful background", href: "https://www.instagram.com/" },
    { src: followUs3, alt: "Woman holding a camera in a smoky environment", href: "https://www.instagram.com/" },
    { src: followUs4, alt: "Smiling student with headphones and camera gear", href: "https://www.instagram.com/" },
    { src: followUs5, alt: "Woman holding a film reel above her head", href: "https://www.instagram.com/" },
    { src: followUs6, alt: "Man in a suit walking on a city street", href: "https://www.instagram.com/" },
    { src: followUs7, alt: "Ring light with 'Official Selection' text", href: "https://www.instagram.com/" },
    { src: followUs8, alt: "Man sitting at a table with papers", href: "https://www.instagram.com/" },
    { src: followUs9, alt: "Sunset over a body of water with buildings", href: "https://www.instagram.com/" },
    { src: followUs10, alt: "Couple kissing outdoors", href: "https://www.instagram.com/" },
    { src: followUs11, alt: "Sculpture of a human skull and a hand", href: "https://www.instagram.com/" },
    { src: followUs12, alt: "Person filming with a camera, wearing a mask", href: "https://www.instagram.com/" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-12 sm:px-6 lg:px-8 py-10">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex flex-col">
          <div className="mb-10 ml-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <h2 className="jt-heading">
              <span className="jt-line">FOLLOW</span>
              <span className="jt-line">US</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {images.map((image, index) => (
          <Link
            key={index}
            to={image.href}
            className={`group relative overflow-hidden shadow-lg ${index % 2 === 0 ? "mt-0" : "mt-3"}`}
            style={{ aspectRatio: "4 / 5" }}
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover block transition-transform duration-300 ease-in-out group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>

            {/* Instagram Overlay */}
            <div className="absolute inset-0 flex flex-row items-center justify-center bg bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-4xl mr-2" />
              <span className="text-white text-lg font-semibold">Follow Us</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
