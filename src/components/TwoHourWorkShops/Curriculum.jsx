import React, { useState } from 'react';

// --- Reusable SVG Icon Components ---

const ChevronUpIcon = () => (
    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
    </svg>
);

const ChevronDownIcon = () => (
    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
);

const BlackboxIcon = () => (
    <div className="fixed top-8 right-8 z-50">
        <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center shadow-lg">
            <div className="grid grid-cols-3 gap-0.5 p-2">
                {[...Array(9)].map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                ))}
            </div>
        </div>
    </div>
);


// --- Reusable AccordionItem Component ---

const AccordionItem = ({ id, title, children, isOpen, handleToggle }) => {
    return (
        <div className="border-t border-gray-200">
            <div
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => handleToggle(id)} // Attach the click handler here
            >
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
            {isOpen && (
                <div className="pb-4 text-gray-600">
                    {children}
                </div>
            )}
        </div>
    );
};


// --- Main Page Component ---

const Curriculum = () => {
    // State to manage which accordion is open.
    // 'who-should-apply' is open by default.
    const [openAccordion, setOpenAccordion] = useState('who-should-apply');

    /**
     * Toggles the accordion sections.
     * If the clicked section is already open, it closes it.
     * Otherwise, it opens the clicked section.
     * @param {string} accordionId - The ID of the accordion to toggle.
     */
    const handleAccordionToggle = (accordionId) => {
        setOpenAccordion(prevOpen => (prevOpen === accordionId ? null : accordionId));
    };

    return (
        <div className="relative bg-white text-gray-800 min-h-screen">
            


            <div className="container  px-6 sm:px-6 md:px-6 lg:px-34 py-24">

                {/* Title Section */}
                <div className="flex items-center mb-16">
                    <span className="w-1 h-16 bg-purple-600 mr-6"></span>
                    <h1 className="text-5xl font-light tracking-widest text-gray-800">CURRICULUM</h1>
                </div>

                {/* Main Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-16 lg:gap-24">

                    {/* Left Column */}
                    <div className="md:col-span-3">
                        <p className="text-lg leading-relaxed text-gray-700">
                            The 1 & 2-Year programs are designed to provide hands-on, practical training in the creative process through practice and repetition. JIU’s real-world approach allows students to spend the majority of their time creating content, helping them develop essential creative and technical skills in visual storytelling. For more information, please visit our <a href="#" className="text-purple-600">course catalog</a>.
                        </p>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="md:col-span-2">
                        {/* 
                          This first item doesn't have a top border in the design,
                          so it is rendered outside the reusable component structure.
                        */}
                        <div>
                           <div
                                className="flex justify-between items-center py-4 cursor-pointer"
                                onClick={() => handleAccordionToggle('who-should-apply')}
                            >
                                <h3 className="text-lg font-semibold text-gray-800">Who Should Apply</h3>
                                {openAccordion === 'who-should-apply' ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </div>
                            {openAccordion === 'who-should-apply' && (
                                <div className="pb-4 text-gray-600">
                                    <p className="mb-6">Our 1 & 2-Year programs are great opportunities to build lasting skills in a non-degree, conservatory-based program.</p>
                                    <ul className="space-y-4 list-disc pl-5">
                                        <li>Individuals who prefer to gain practical, hands-on training in their chosen field in lieu of a degree</li>
                                        <li>Students with an undergraduate or graduate degree who do not wish to pursue an additional degree</li>
                                        <li>Professionals looking to make a shift and enter a new industry</li>
                                        <li>Professionals looking to add a specialization or upskill</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        
                        <AccordionItem
                            id="how-to-apply"
                            title="How to Apply"
                            isOpen={openAccordion === 'how-to-apply'}
                            handleToggle={handleAccordionToggle}
                        >
                            {/* Content for "How to Apply" would go here */}
                            <p>Information about the application process, deadlines, and requirements will be displayed here when this section is expanded.</p>
                        </AccordionItem>

                        <AccordionItem
                            id="application-materials"
                            title="Application Materials"
                            isOpen={openAccordion === 'application-materials'}
                            handleToggle={handleAccordionToggle}
                        >
                            {/* Content for "Application Materials" would go here */}
                            <p>A checklist of necessary application materials, such as transcripts, portfolios, and letters of recommendation, will be displayed here.</p>
                        </AccordionItem>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Curriculum;