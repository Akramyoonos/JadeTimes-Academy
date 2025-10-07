import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Import images
import Campus01 from '../../../assets/Images/Campus01.jpeg';
import AlumniExplore01 from '../../../assets/Images/AlumniExplore01.webp';
import AlumniExplore02 from '../../../assets/Images/AlumniExplore02.webp';
import AlumniExplore03 from '../../../assets/Images/AlumniExplore03.webp';

const staffData = [
    {
        name: 'Assaad Yacoub',
        title: 'Director | Writer | Producer',
        image: AlumniExplore02
    },
    {
        name: 'Jaco Dukes',
        title: 'Director | Cinematographer | Editor',
        image: AlumniExplore03
    },
    {
        name: 'Stefano Cipani',
        title: 'Director | Writer | Editor',
        image: AlumniExplore01
    }
];

const DegreeLocations = () => {
    const [isLocationOpen, setLocationOpen] = useState(false);

    return (
        <div className="bg-white text-black font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-34 py-16">

                {/* Locations Section */}
                <div className="mb-16">
                    <div className="flex items-center mb-8">
                        <span className="w-1.5 h-10 bg-purple-600 mr-4"></span>
                        <h2 className="text-3xl md:text-4xl font-light tracking-wider">LOCATIONS</h2>
                    </div>
                    <div className="w-full md:w-1/4 shadow-lg rounded-lg overflow-hidden group">
                        <div className="relative">
                            <img src={Campus01} alt="NYFA Los Angeles Campus" className="w-full h-auto object-cover transition-transform duration-2000 ease-in-out group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-900"></div>
                            <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">CAMPUS</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">NYFA Los Angeles</h3>
                            <button onClick={() => setLocationOpen(!isLocationOpen)} className="text-purple-600 text-sm font-bold mt-2 flex items-center">
                                SHOW MORE 
                                <FontAwesomeIcon icon={isLocationOpen ? faChevronUp : faChevronDown} className="ml-2" />
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isLocationOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                                <p className="text-gray-600">
                                    Our Los Angeles campus is situated in the heart of the entertainment industry, offering students unparalleled access to professional studios, networking opportunities, and a vibrant creative community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Staff Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {staffData.map((staff, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                            <img src={staff.image} alt={staff.name} className="w-full h-full object-cover transition-transform duration-2000 ease-in-out group-hover:scale-115" />
                            <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-700"></div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                                <div className="relative border-2 border-cyan-400 p-4 text-center">
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 px-2">
                                        <FontAwesomeIcon icon={faStar} className="text-cyan-400 text-2xl" />
                                    </div>
                                    <h4 className="font-bold text-lg">{staff.name}</h4>
                                    <p className="text-sm text-gray-300">{staff.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* More Card */}
                    <a href="#" className="group flex items-center justify-center h-full border-2 border-dashed border-gray-300 rounded-lg hover:border-cyan-400 hover:bg-gray-50 transition-all duration-300">
                        <div className="text-center">
                            <div className="border-2 border-gray-300 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto group-hover:border-cyan-400 transition-all duration-300">
                                <FontAwesomeIcon icon={faArrowRight} className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-all duration-300" />
                            </div>
                            <p className="font-semibold text-gray-600 group-hover:text-cyan-400 transition-all duration-300">View More</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DegreeLocations;