import React from 'react';

// Data for the satellite locations. This makes the component cleaner and easier to update.
const locations = [
  {
    name: 'NYFA Kazakhstan',
    imageSrc: 'https://storage.googleapis.com/gemini-prod/images/40551c5f-3ec2-4d2d-a197-e85dfba6019a',
    altText: 'The entrance to the NYFA Kazakhstan campus building.'
  },
  {
    name: 'NYFA at Harvard University',
    imageSrc: 'https://storage.googleapis.com/gemini-prod/images/49339e08-9993-41bb-a558-8b965f33f00f',
    altText: 'Students walking on the Harvard University campus near a brick building.'
  },
  {
    name: 'Paris, France',
    imageSrc: 'https://storage.googleapis.com/gemini-prod/images/d31dd3b2-601e-4581-9b6d-495e9ff0eb0b',
    altText: 'A group of people taking a picture with the Eiffel Tower in the background.'
  },
  {
    name: 'Beijing and Greater China',
    imageSrc: 'https://storage.googleapis.com/gemini-prod/images/4090b4d4-53c8-4eb4-b6c8-f86a0149bbd5',
    altText: 'A film crew recording a group of people in traditional clothing in a park in Beijing.'
  }
];

// The React component
const Locations = () => {
  return (
    <div className="bg-white p-8">
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