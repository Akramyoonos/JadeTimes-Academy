import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../assets/Images/Resources and Information01.webp';
import image2 from '../../assets/Images/Resources and Information02.webp';
import image3 from '../../assets/Images/Resources and Information01.webp';
import image4 from '../../assets/Images/Resources and Information02.webp';

const resourcesData = [
    {
        title: 'STUDENT VISAS',
        image: image1,
        alt: 'Person writing at a desk',
        href: '#student-visas',
    },
    {
        title: 'FINANCIAL ASSISTANCE',
        image: image2,
        alt: 'People reviewing documents',
        href: '#financial-assistance',
    },
    {
        title: 'FULBRIGHT',
        image: image3,
        alt: 'Two people talking at a conference',
        href: '#fulbright',
    },
    {
        title: 'FAQS',
        image: image4,
        alt: 'Film crew working on set',
        href: '#faqs',
    },
];

const ResourcesSection = () => {
    return (
        <div className="py-8 md:py-12 bg-white">
            {/* Header Section */}
            <header className="mb-8">
                <div className="flex items-center px-6 sm:px-6 md:px-6 lg:px-35">
                    <span className="inline-block w-1 h-10 bg-cyan-400 mr-4"></span>
                    <h1 className="text-2xl md:text-4xl font-light text-gray-700 tracking-wider">
                        RESOURCES AND INFORMATION
                    </h1>
                </div>
            </header>

            {/* Fixed Accessibility Icon */}
            <button className="fixed top-5 right-5 z-20 bg-cyan-400 text-white p-2.5 rounded-full shadow-lg">
                <FontAwesomeIcon icon={faUniversalAccess} />
            </button>

            {/* Grid Layout */}
            <main className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {resourcesData.map((resource, index) => (
                    <div key={index} className="relative group overflow-hidden">
                        <img src={resource.image} alt={resource.alt} className="w-full h-100 object-cover transform transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0  bg-opacity-40"></div>
                        <div className="absolute inset-0 p-6 flex flex-col">
                            <div className="mt-auto text-white">
                                <h2 className="text-xl font-medium tracking-wider">{resource.title}</h2>
                            </div>
                        </div>
                        <a href={resource.href} className="absolute bottom-6 right-6 text-white">
                            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </a>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default ResourcesSection;