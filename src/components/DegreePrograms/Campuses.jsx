import React from 'react';
import campusImages01 from '../../assets/Images/Campus01.jpeg';
import campusImages02 from '../../assets/Images/Campus02.jpeg';
import campusImages03 from '../../assets/Images/Campus03.jpeg';

// Data for the campus cards
const campusData = [
  {
    name: 'NYFA New York',
    image: campusImages01,
    alt: 'NYFA New York Campus',
    type: 'Campus'
  },
  {
    name: 'NYFA Los Angeles',
    image: campusImages02,
    alt: 'NYFA Los Angeles Campus',
    type: 'Campus'
  },
  {
    name: 'Online',
    image: campusImages03,
    alt: 'Person working on a laptop and drawing tablet',
    type: 'Campus'
  }
];

// Reusable CampusCard component
const CampusCard = ({ image, alt, name, type }) => (
  <div className="text-center bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <div className="relative group">
      <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-bold uppercase">View {name}</span>
      </div>
      <div className="absolute top-4 left-0 bg-purple-600 text-white text-xs font-bold uppercase py-1 px-3 z-10 rounded-r-lg">{type}</div>
      <img src={image} alt={alt} className="w-full h-60 object-cover transform transition duration-300 group-hover:scale-110"/>
    </div>
    <h2 className="mt-4 text-2xl font-semibold text-gray-800 p-4">{name}</h2>
  </div>
);

const Campuses = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* <!-- Header --> */}
        <div className="flex flex-col items-center mb-12 animate-fade-in-up">
          <div className="w-16 h-1 bg-purple-600 mb-4"></div>
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tightest leading-tight text-center">OUR CAMPUSES</h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl">Explore our vibrant campuses and discover the perfect environment for your academic journey.</p>
        </div>

        {/* <!-- Campus Cards Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campusData.map((campus) => (
            <CampusCard
              key={campus.name}
              image={campus.image}
              alt={campus.alt}
              name={campus.name}
              type={campus.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campuses;