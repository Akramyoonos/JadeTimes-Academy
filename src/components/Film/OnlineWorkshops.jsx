import React, { useState } from 'react';

// Data for the workshops, separated into two columns
const leftColumnWorkshops = [
    {
        title: "1-Semester Filmmaking Workshop",
        description: "During the full-time 1-Semester Filmmaking Workshop, students create short films and video content for their own reel. Projects may include a Mise en Scène, Continuity, Montage, and Point of View."
    },
    {
        title: "8-Week Filmmaking Workshop",
        description: "The 8-Week Filmmaking Workshop is a full-time, 160 hour program. Classes are typically scheduled Monday through Friday with the potential of weekend classes. Projects may include a Mise-en-Scène, Continuity, a Music, a Checkovian, and a final short."
    },
];

const rightColumnWorkshops = [
    {
        title: "12-Week Evening Filmmaking Workshop",
        description: "The 12-Week Evening Filmmaking Workshop is a part-time, 64-hour intensive program. Classes are typically scheduled on evenings and weekends, making it ideal for working professionals. Students will write, produce, direct, and edit three short film projects."
    },
    {
        title: "8-Week Cinematic VR Filmmaking Workshop",
        description: "This workshop provides an in-depth introduction to VR production. Students will learn storytelling techniques for designing and directing virtual reality content, working with 360 camera rigs, and various post-production platforms."
    },
];


// Reusable Icon Components
const ChevronUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);

const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


// Reusable Workshop Item Component
const WorkshopItem = ({ title, description, initiallyOpen = false }) => {
    const [isOpen, setIsOpen] = useState(initiallyOpen);

    return (
        <div className="border-b border-gray-200 pb-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="text-lg font-semibold">{title}</h2>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </div>
            {isOpen && description && (
                <div className="mt-4 text-gray-600">
                    <p>{description}</p>
                    <a href="#" className="text-purple-600 hover:underline mt-2 inline-block">Learn More</a>
                </div>
            )}
        </div>
    );
};


// Main Component
function OnlineWorkshops() {
    return (
        <div className="bg-white text-gray-800 font-sans pt-12">
            <div className="container mx-auto px-4 sm:px-6 md:px-14 lg:px-4 py-4 max-w-7xl">
                <div className="relative mb-8">
                    <h1 className="text-4xl font-extrabold tracking-tight relative pl-6">
                        <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-600"></span>
                          ONLINE FILMMAKING WORKSHOPS
                    </h1>
                </div>
                <p className="mb-12 text-lg text-gray-600">
                    JIU offers a range of in-person full-time and part-time filmmaking workshops at our campuses and satellite locations. To learn more about the curriculum and projects in each workshop, please visit the individual pages below. Explore examples of projects JIU filmmaking students may complete on the <a href="#" className="text-purple-600 hover:underline">filmmaking projects page</a>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {leftColumnWorkshops.map((workshop, index) => (
                            <WorkshopItem
                                key={index}
                                title={workshop.title}
                                description={workshop.description}
                                initiallyOpen={true}
                            />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {rightColumnWorkshops.map((workshop, index) => (
                            <WorkshopItem
                                key={index}
                                title={workshop.title}
                                description={workshop.description}
                                initiallyOpen={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineWorkshops;