import React from 'react';

// Data for the campuses
const campusData = [
  {
    name: 'NYFA New York',
    imageUrl: 'https://s3.amazonaws.com/uploads.static.wearejh.com/uploads/2021/08/04104250/NYFA-New-York-1.jpg',
    altText: 'NYFA New York Campus',
  },
  {
    name: 'NYFA Los Angeles',
    imageUrl: 'https://www.nyfa.edu/student-resources/wp-content/uploads/2015/05/St.-Ideal-Apartments.jpg',
    altText: 'NYFA Los Angeles Campus',
  },
  {
    name: 'NYFA Florence',
    imageUrl: 'https://www.nyfa.edu/study-abroad/images/florence-hero-1920x1080.jpg',
    altText: 'NYFA Florence Campus',
  },
  {
    name: 'Online',
    imageUrl: 'https://www.nyfa.edu/online-learning/images/nyfa-online-courses.jpg',
    altText: 'Online Learning with a laptop and a drawing tablet',
  },
];

// Campus Card Component for reusability
const CampusCard = ({ name, imageUrl, altText }) => (
  <div className="campus-card">
    <div className="relative">
      <img src={imageUrl} alt={altText} className="w-full h-48 object-cover" />
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
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <div className="w-1 h-10 bg-yellow-400 mr-4"></div>
          <h2 className="text-3xl font-light tracking-widest text-gray-800">
            CAMPUSES
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