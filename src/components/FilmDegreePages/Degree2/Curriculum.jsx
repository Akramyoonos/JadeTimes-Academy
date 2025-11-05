import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const accordionItems = [
    {
        id: 'degree-details',
        title: 'Degree Details',
        content: 'The MFA degree in Filmmaking is an accelerated two-year, six or seven semester program.'
    },
    {
        id: 'history-theory',
        title: 'History and Theory Courses',
        content: 'Students will take a range of courses covering the history of cinema and critical theory to provide a strong academic foundation for their practical work. This includes studies of world cinema, documentary history, and contemporary film theory.'
    },
    {
        id: 'production-workshops',
        title: 'Production Workshops',
        content: 'Hands-on workshops are the core of the curriculum. Students will participate in intensive workshops on cinematography, sound recording, editing, and directing to build a comprehensive skillset.'
    }
];

const Curriculum = () => {
    const [openAccordion, setOpenAccordion] = useState(accordionItems[0].id);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="bg-white text-gray-800 font-sans">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-34">
                <div className="relative mb-12">
                    <h1 className="text-3xl md:text-4xl font-light text-gray-800 tracking-wider relative pl-6">
                        <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-cyan-400"></span>
                        CURRICULUM
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">The curriculum for the MFA in filmmaking at JIU includes:</h2>
                        <ul className="mt-6 space-y-4 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-3 mt-1">•</span>
                                <span>Advanced coursework in classes such as Advanced Directing, Screenwriting Short Thesis, Master's Professional Development, Sound Design, and more</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-3 mt-1">•</span>
                                <span>Instruction and critique by award-winning faculty and staff actively working in the film industry</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-3 mt-1">•</span>
                                <span>Consistent access to an equipment library with industry-standard cameras, dollies, light kits, sound equipment, and more</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-500 mr-3 mt-1">•</span>
                                <span>Exclusive guest lectures from top film industry Directors, Actors, Producers, Cinematographers, and more</span>
                            </li>
                        </ul>

                        <p className="mt-8 text-gray-600">
                            To obtain a full breakdown of the courses within the MFA program, refer to <a href="#" className="text-purple-500 font-semibold hover:underline">JIU's Course Catalog</a> or <a href="#" className="text-purple-500 font-semibold hover:underline">request more information</a>.
                        </p>

                        <p className="mt-8 text-gray-600">
                            If you are a <span className="font-bold">non-native English-speaking student</span> who meets all admissions requirements for a JIU degree program, <span className="font-bold">except for English proficiency,</span> apply to our <a href="#" className="text-purple-500 font-semibold hover:underline">International Pathway Program</a>!
                        </p>
                    </div>
                    <div className="space-y-4">
                        {accordionItems.map(item => (
                            <div key={item.id} className="border-b pb-4 text-gray-200">
                                <button onClick={() => toggleAccordion(item.id)} className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none">
                                    <span>{item.title}</span>
                                    <FontAwesomeIcon icon={openAccordion === item.id ? faChevronUp : faChevronDown} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === item.id ? 'max-h-96 mt-2' : 'max-h-0'}`}>
                                    <p className="text-gray-600 pt-2">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Curriculum;
