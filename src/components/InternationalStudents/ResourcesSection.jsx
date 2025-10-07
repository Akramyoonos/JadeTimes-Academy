import React from 'react';
import image1 from '../../assets/Images/Resources and Information01.webp';
import image2 from '../../assets/Images/Resources and Information02.webp';
import image3 from '../../assets/Images/Resources and Information01.webp';
import image4 from '../../assets/Images/Resources and Information02.webp';
// Reusable SVG Icon for the cards
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

// Reusable SVG Icon for the accessibility button
const AccessibilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

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
        <div className="container  py-8 md:py-12  bg-white">
            {/* Header Section */}
            <header className="mb-8">
                <div className="flex items-center">
                    <span className="inline-block w-1 h-10 bg-cyan-400 mr-4"></span>
                    <h1 className="text-2xl md:text-4xl font-light text-gray-700 tracking-wider">
                        RESOURCES AND INFORMATION
                    </h1>
                </div>
            </header>

            {/* Fixed Accessibility Icon */}
            <button className="fixed top-5 right-5 z-20 bg-cyan-400 text-white p-2.5 rounded-full shadow-lg">
                <AccessibilityIcon />
            </button>

            {/* Grid Layout */}
            <main className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {resourcesData.map((resource, index) => (
                    <div key={index} className="relative group overflow-hidden">
                        <img src={resource.image} alt={resource.alt} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0  bg-opacity-40"></div>
                        <div className="absolute inset-0 p-6 flex flex-col">
                            <div className="mt-auto text-white">
                                <h2 className="text-xl font-medium tracking-wider">{resource.title}</h2>
                            </div>
                        </div>
                        <a href={resource.href} className="absolute bottom-6 right-6 text-white">
                            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                                <ArrowIcon />
                            </div>
                        </a>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default ResourcesSection;