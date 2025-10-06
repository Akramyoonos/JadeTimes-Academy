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
    {
        title: "6-Week Filmmaking Workshop",
        description: "The 6-Week Filmmaking Workshop is a full-time, 120 hour program. Classes are typically scheduled Monday through Friday with the potential of weekend classes. Projects may include a Mise-en-scène film, a Continuity film, and a Non-sync final film."
    },
    {
        title: "4-Week Filmmaking Workshop",
        description: "The 4-Week Filmmaking Workshop is a full-time, 80 hour program. Classes are typically scheduled Monday through Friday with the potential of weekend classes. Projects may include a Mise-en-Scène, Continuity, and Montage/Music film."
    },
    {
        title: "3-Week Filmmaking Workshop",
        description: "The 3-Week Filmmaking Workshop is a full-time program. Classes are typically scheduled Monday through Friday with the potential of weekend classes. Projects may include a Continuity and Montage/Music film."
    },
    {
        title: "1-Week Filmmaking Workshop in Beijing, China",
        description: "This intensive program requires full commitment to a demanding filmmaking curriculum, with hours often extending beyond regular class time. Classes run throughout the week, while evenings focus on writing, location scouting, casting, and editing."
    },
    {
        title: "2-Day Directing Workshop",
        description: "The 2-Day Directing Workshop is a full-time, immersive, two-day workshop. In this weekend filmmaking workshop, students are taught by working industry professionals and learn the essentials of directorial style."
    }
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
    {
        title: "6-Week Holiday Filmmaking Workshop",
        description: "An intensive, hands-on program offered at a discounted rate during the holiday season. Students will learn the fundamentals of filmmaking and create three short films. The schedule includes a two-week break for pre-production."
    },
    {
        title: "4-Week Music Video Filmmaking Workshop",
        description: "This workshop teaches students how to direct, shoot, and edit their own music videos. The curriculum covers treatment writing, cinematography, editing, and working with recording artists. Students will complete two music video projects."
    },
    {
        title: "1-Week Filmmaking Workshop",
        description: "An intensive, introductory program where students will write, direct, shoot, and edit a short film. The curriculum covers visual storytelling, camera and lighting techniques, and digital editing."
    },
    {
        title: "2-Day Filmmaking Workshop",
        description: "A fast-paced introduction to the craft of filmmaking. This workshop covers fundamental areas such as camerawork, writing, and directing. Participants will create short filmed scenes and rotate through various crew positions."
    }
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
function Workshops() {
    return (
        <div className="bg-white text-gray-800 font-sans">
            <div className="container mx-auto px-4 sm:px-6 md:px-14 lg:px-4 py-14 max-w-7xl">
                <div className="relative mb-8">
                    <h1 className="text-4xl font-extrabold tracking-tight relative pl-6">
                        <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-purple-600"></span>
                        FILMMAKING WORKSHOPS
                    </h1>
                </div>
                <p className="mb-12 text-lg text-gray-600">
                    NYFA offers a range of in-person full-time and part-time filmmaking workshops at our campuses and satellite locations. To learn more about the curriculum and projects in each workshop, please visit the individual pages below. Explore examples of projects NYFA filmmaking students may complete on the <a href="#" className="text-purple-600 hover:underline">filmmaking projects page</a>.
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

export default Workshops;