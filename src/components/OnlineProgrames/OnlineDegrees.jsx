import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import OnlineDegrees01 from '../../assets/Images/undergraduateDegree01.webp';
import OnlineDegrees02 from '../../assets/Images/undergraduateDegree02.webp';
import OnlineDegrees03 from '../../assets/Images/undergraduateDegree03.webp';

const onlineDegreesData = [
  {
    image: OnlineDegrees01,
    title: 'Online Courses',
    link: '#',
    duration: '2500',
  },
  {
    image: OnlineDegrees02,
    title: 'Online Degrees (Coming Soon)',
    link: '#',
    duration: '2000',
  },
  {
    image: OnlineDegrees03,
    title: 'Online Workshops',
    link: '/Work-Shops/',
    duration: '2000',
  },
];

const OnlineDegreeCard = ({ image, title, link, duration }) => (
  <div
    className={`relative h-64 bg-cover bg-center overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-${duration} group`}
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-10 transition-opacity duration-900"></div>
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-opacity-10 backdrop-filter border border-white border-opacity-20">
      <h2 className="text-xl uppercase font-bold">{title}</h2>
      <a
        href={link}
        className="absolute bottom-6 right-6 border-2 border-white rounded-full h-10 w-10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:rotate-45"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>
  </div>
);

const OnlineDegrees = () => {
  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 font-sans animated-gradient">
      <style>
        {`
          @keyframes gradient-animation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animated-gradient {
            background-size: 200% 200%;
            animation: gradient-animation 15s ease infinite;
          }
        `}
      </style>
      <div className="py-12">
        <div className="flex items-center mb-12 px-4 sm:px-0 md:px-12 lg:px-34">
          <span className="w-1.5 h-12 bg-blue-400 mr-6"></span>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-wider uppercase text-black" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Online Degrees
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {onlineDegreesData.map((degree, index) => (
            <OnlineDegreeCard key={index} {...degree} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineDegrees;