import React from 'react';
import Campus01 from '../../assets/Images/NEWMEXICO.webp';
import Campus02 from '../../assets/Images/AUSTRALIA.webp';
import Campus03 from '../../assets/Images/INDIA.webp';
import Campus04 from '../../assets/Images/SRILANKA.webp';
import LocationMobile from '../../assets/Images/SPAIN.webp';

// Data for the satellite locations. This makes the component cleaner and easier to update.
const locations = [
  {
    name: 'AUSTRALIA',
    imageSrc: Campus02,
    altText: 'Students walking on the Harvard University campus near a brick building.'
  },
  {
    name: 'INDIA',
    imageSrc: Campus03,
    altText: 'A group of people taking a picture with the Eiffel Tower in the background.'
  },
  {
    name: 'NEW MEXICO',
    imageSrc: Campus01,
    altText: 'The entrance to the JIU Kazakhstan campus building.'
  },
  {
    name: 'SPAIN',
    imageSrc: LocationMobile,
    altText: 'A film crew recording a group of people in traditional clothing in a park in Beijing.'
  },
  {
    name: 'SRI LANKA',
    imageSrc: Campus04,
    altText: 'A modern building with a large glass facade, home to the JIU Australia campus.'
  }
];

// The React component
const Locations = () => {
  return (
    <div className="bg-white px-6 sm:px-6 md:px-12 lg:px-34 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-1 h-12 bg-purple-600 mr-4"></div>
          <h1 className="text-4xl font-light uppercase text-gray-800 tracking-wider">
           Other Locations
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="text-center group">
              <div className="relative overflow-hidden">
                <img
                  src={location.imageSrc}
                  alt={location.altText}
                  className="w-full h-48 object-cover transition-transform duration-2000 ease-in-out group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>
                <div className="absolute top-2 left-2 bg-black bg-opacity-75 uppercase text-white text-xs font-semibold px-2 py-1 tracking-wider">
                  coming soon
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