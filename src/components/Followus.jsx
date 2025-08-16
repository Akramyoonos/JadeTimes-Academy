import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

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

const followUsImages = [
  { src: followUs1, alt: 'Man walking towards bright orange light wearing JadeTimes shirt holding a camera' },
  { src: followUs2, alt: 'Colorful vibrant background with JadeTimes New York Film Academy text' },
  { src: followUs3, alt: 'Silhouette of woman holding camera in blue smoky background' },
  { src: followUs4, alt: 'Smiling woman wearing JadeTimes cap and headphones with camera' },
  { src: followUs5, alt: 'Woman in red shirt and beret holding film reel on pink background' },
  { src: followUs6, alt: 'Man in suit holding JadeTimes diploma on city street' },
  { src: followUs7, alt: 'Back of person with ring lights and official selection logo' },
  { src: followUs8, alt: 'Man sitting at table with books and wooden chair' },
  { src: followUs9, alt: 'Sunset sky over water with buildings' },
  { src: followUs10, alt: 'Couple kissing outdoors in wedding attire' },
  { src: followUs11, alt: 'Clay skull model with blue hand sculpture on wooden table' },
  { src: followUs12, alt: 'Two people wearing masks operating film camera in black and white' },
];

const FollowUsCard = ({ src, alt }) => (
  <div className="relative overflow-hidden rounded-none shadow-sm bg-white">
    {/* Consistent size: 4:3 ratio, cropped via object-cover */}
    <div className="aspect-[4/3] w-full">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
      />
    </div>

    {/* Hover CTA */}
    <a
      href="https://www.instagram.com/jadetimes_academy/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-3 right-3 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 bg-black/70 px-4 py-2 opacity-0 translate-y-2
                 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
    >
      <FontAwesomeIcon icon={faInstagram} className="text-base" />
      <span>Follow Us</span>
    </a>
  </div>
);

const FollowUs = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-start">
            <span className="h-12 sm:h-14 w-1.5 bg-fuchsia-500 mr-4 rounded"></span>
            <h2 className="leading-tight text-4xl sm:text-5xl font-normal tracking-tight text-gray-900">
              FOLLOW<br/>US
            </h2>
          </div>
        </div>

        {/* Uniform grid: 2 cols on mobile, 3 on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {followUsImages.map((img, idx) => (
            <div key={idx} className="group">
              <FollowUsCard src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
