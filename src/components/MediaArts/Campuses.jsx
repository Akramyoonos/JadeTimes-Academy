import React from 'react';
import onlineDegreeImage from '../../assets/Images/onlineDegreeImage.webp';

// Data for the campuses
const campusData = [
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
      <div className="absolute top-2 left-2 bg-black text-white uppercase text-xs font-bold px-2 py-1 tracking-wider">
        available
      </div>
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-700 uppercase">{name}</h3>
  </div>
);

// Main Campuses Component
const Campuses = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-6 md:px-6 lg:px-34 py-12">
        <div className="flex items-center mb-8">
          <div className="w-1 h-10 bg-yellow-400 mr-4"></div>
          <h2 className="text-3xl font-light uppercase tracking-widest text-gray-800">
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