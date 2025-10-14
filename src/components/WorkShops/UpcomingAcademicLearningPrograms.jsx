import React from 'react';

// Data for the academic learning programs
const eventsData = [
    {
        month: 'OCT',
        day: '15',
        category: 'Meeting',
        title: 'Lecturers and Academic Teaching Staff Fall Kick-Off',
        dateTime: 'Wednesday, October 15, 2025 | 11:30am - 1:30pm PDT',
        externalLink: true,
    },
    {
        month: 'OCT',
        day: '16',
        category: 'Other',
        title: '50 Years of Teaching and Learning at Stanford: Celebration and Reception!',
        dateTime: 'Thursday, October 16, 2025 | 3:00pm - 5:00pm PDT',
        location: 'Faculty Club',
        externalLink: true,
    },
    {
        month: 'OCT',
        day: '16',
        category: 'Engineering Grad Studios',
        title: 'Getting Started with Zotero for Citation Management',
        description: 'Tired of manually keeping track of all your sources in your papers? Come learn about Zotero for your citation management!',
        audience: 'Open to all Stanford students',
        dateTime: 'Thursday, October 16, 2025 | 3:30pm - 5:00pm PDT',
    },
    {
        month: 'OCT',
        day: '17',
        category: 'Other',
        title: 'Center for Teaching & Learning: 50th Anniversary Open House',
        dateTime: 'Friday, October 17, 2025 | 2:00pm - 4:00pm PDT',
        location: 'Center for Teaching and Learning',
        externalLink: true,
    },
    {
        month: 'OCT',
        day: '19',
        category: 'Study Halls',
        title: 'In Person Study Hall',
        description: 'Make progress on your academic work with Study Halls!',
        audience: 'Open to all Stanford students',
        dateTime: 'Sunday, October 19, 2025 | 1:00pm - 4:00pm PDT',
    },
    {
        month: 'OCT',
        day: '22',
        category: 'Engineering Grad Studios',
        title: 'Introduction to LaTeX on Overleaf',
        description: 'Ever been asked to use LaTeX for a problem set or journal paper but got overwhelmed by its features? Let\'s learn LaTeX together!',
        audience: 'Open to all Stanford students',
        dateTime: 'Wednesday, October 22, 2025 | 4:30pm - 6:00pm PDT',
    },
    {
        month: 'OCT',
        day: '30',
        category: 'Other',
        title: 'CTL Drop-in Office Hours Autumn 2025: October 30',
        description: 'Drop by and discuss your teaching-related questions and ideas.',
        dateTime: 'Thursday, October 30, 2025 | 10:30am - 3:00pm PDT',
        location: 'Coupa Cafe (Green Library)',
    },
    {
        month: 'NOV',
        day: '02',
        category: 'Study Halls',
        title: 'In Person Study Hall',
        description: 'Make progress on your academic work with Study Halls!',
        audience: 'Open to all Stanford students',
        dateTime: 'Sunday, November 2, 2025 | 1:00pm - 4:00pm PST',
    },
    {
        month: 'NOV',
        day: '12',
        category: 'Other',
        title: 'CTL Drop-in Office Hours Autumn 2025: November 12',
        description: 'Drop by and discuss your teaching-related questions and ideas.',
        dateTime: 'Wednesday, November 12, 2025 | 10:30am - 3:00pm PST',
        location: 'Blend Cafe',
    },
];

// SVG Icon Components
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

// Event Card Component
const EventCard = ({ event }) => (
    // FIX: Corrected border class from `border-b-1` to `border-b`
    <div className="flex items-start text-gray-300 py-6 border-b">
        {/* FIX: Made the date section narrower on small screens and adjusted font sizes for better responsiveness */}
        <div className="w-20 md:w-24 text-center flex-shrink-0">
            <p className="text-xs md:text-sm font-bold text-gray-500">{event.month}</p>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-800">{event.day}</p>
        </div>
        {/* FIX: Reduced left padding on small screens */}
        <div className="pl-4 md:pl-6 flex-grow">
            <p className="text-sm text-gray-500">{event.category}</p>
            {/* FIX: Made the title font size responsive */}
            <h2 className="text-lg md:text-xl font-bold text-red-700">
                {event.title}
                {event.externalLink && <ExternalLinkIcon />}
            </h2>
            {event.description && <p className="mt-2 text-gray-700">{event.description}</p>}
            {event.audience && <p className="mt-2 text-sm text-gray-500">{event.audience}</p>}
            <div className="flex items-center text-gray-600 mt-2">
                <CalendarIcon />
                <span>{event.dateTime}</span>
            </div>
            {event.location && (
                <div className="flex items-center text-gray-600 mt-2">
                    <LocationIcon />
                    <span>{event.location}</span>
                </div>
            )}
        </div>
    </div>
);


// Main Component for the page
const AcademicLearningPrograms = () => {
    return (
        <div className="bg-white">
            {/* FIX: Replaced fixed padding with responsive padding. 
                - p-4: Padding on extra-small screens.
                - md:p-8: Padding on medium screens and up.
                - lg:pl-64: Adds the large left padding for a sidebar layout only on large screens. */}
            <div className="max-w-6xl mx-auto p-4 md:p-8 lg:pl-64">
                {/* FIX: Made the heading font size responsive */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Upcoming Academic Learning Programs</h1>
                
                <div className="space-y-4">
                    {eventsData.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AcademicLearningPrograms;