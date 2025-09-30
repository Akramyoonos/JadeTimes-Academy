import React from 'react';
import Campus01 from '../../assets/Images/Campus01.jpeg';
import Campus02 from '../../assets/Images/Campus02.jpeg';
import Campus03 from '../../assets/Images/Campus03.jpeg';
import LocationMobile from '../../assets/Images/Location-mobile.jpg';

// Data for the satellite locations. This makes the component cleaner and easier to update.
const locations = [
  {
    name: 'NYFA Kazakhstan',
    imageSrc: Campus01,
    altText: 'The entrance to the NYFA Kazakhstan campus building.'
  },
  {
    name: 'NYFA at Harvard University',
    imageSrc: Campus02,
    altText: 'Students walking on the Harvard University campus near a brick building.'
  },
  {
    name: 'Paris, France',
    imageSrc: Campus03,
    altText: 'A group of people taking a picture with the Eiffel Tower in the background.'
  },
  {
    name: 'Beijing and Greater China',
    imageSrc: LocationMobile,
    altText: 'A film crew recording a group of people in traditional clothing in a park in Beijing.'
  }
];

// The React component
const Locations = () => {
  return (
    <div className="bg-white px-34 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-1 h-12 bg-purple-600 mr-4"></div>
          <h1 className="text-4xl font-light text-gray-800 tracking-wider">
            SATELLITE LOCATIONS
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <img 
                  src={location.imageSrc} 
                  alt={location.altText} 
                  className="w-full h-48 object-cover" 
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-xs font-semibold px-2 py-1 tracking-wider">
                  SATELLITE LOCATION
                </div>
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-700">
                {location.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;