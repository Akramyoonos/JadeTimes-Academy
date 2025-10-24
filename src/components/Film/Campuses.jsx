import React from 'react';
import Campus01 from '../../assets/Images/Campus01.webp';
import Campus02 from '../../assets/Images/Campus02.webp';
import Campus03 from '../../assets/Images/Campus03.webp';
import onlineDegreeImage from '../../assets/Images/onlineDegreeImage.webp';

// Data for the campuses
const campusData = [
  {
    name: 'NYFA New York',
    imageUrl: Campus01,
    altText: 'NYFA New York Campus',
  },
  {
    name: 'NYFA Los Angeles',
    imageUrl: Campus02,
    altText: 'NYFA Los Angeles Campus',
  },
  {
    name: 'NYFA Florence',
    imageUrl: Campus03,
    altText: 'NYFA Florence Campus',
  },
  {
    name: 'Online',
    imageUrl: onlineDegreeImage,
    altText: 'Online Learning with a laptop and a drawing tablet',
  },
];

// Campus Card Component for reusability with zooming hover effect
const CampusCard = ({ name, imageUrl, altText }) => (
  <div className="campus-card group">
    <div className="relative overflow-hidden">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-48 object-cover transition-transform duration-2000 ease-in-out group-hover:scale-115"
      />
      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>
      <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 tracking-wider">
        CAMPUS
      </div>
    </div>
    <h3 className="mt-4 text-lg text-gray-700">{name}</h3>
  </div>
);

// Main Campuses Component
const Campuses = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-6 md:px-6 lg:px-34 py-12">
        <div className="flex items-center mb-8">
          <div className="w-1 h-10 bg-yellow-400 mr-4"></div>
          <h2 className="text-3xl font-light tracking-widest text-gray-800">
            Campuses available
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {campusData.map((campus, index) => (
            <CampusCard
              key={index}
              name={campus.name}
              imageUrl={campus.imageUrl}
              altText={campus.altText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campuses;