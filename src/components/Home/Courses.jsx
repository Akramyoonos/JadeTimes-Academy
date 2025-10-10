import React from 'react';
import courseImage1 from '../../assets/Images/CoursesImg01.webp';
import courseImage2 from '../../assets/Images/CoursesImg02.webp';

// Data for the courses - easy to add, remove, or update courses here
const coursesData = [
    {
        id: 1,
        title: 'Basics of Journalism Course',
        price: '100 USD',
        imageUrl: courseImage1,
        altText: 'Basics of Journalism Course Image',
    },
    {
        id: 2,
        title: 'Advance Level Journalism',
        price: '120 USD',
        imageUrl: courseImage2,
        altText: 'Advance Level Journalism Course Image',
    },
    {
        id: 3,
        title: 'Photojournalism Essentials',
        price: '110 USD',
        imageUrl: courseImage1, // Placeholder image
        altText: 'Photojournalism Course Image',
    },
    {
        id: 4,
        title: 'Broadcast Masterclass',
        price: '150 USD',
        imageUrl: courseImage2, // Placeholder image
        altText: 'Broadcast Journalism Course Image',
    },
];

// Reusable Course Card Component
const CourseCard = ({ imageUrl, altText, title, price }) => {
    return (
        // WARNING: The fixed width and height (w-90, h-160) might cause layout issues on smaller screens.
        <div className="w-90 h-160 max-w-sm text-left bg-white  shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <a href="#" className="block">
                <img src={imageUrl} alt={altText} className="w-full h-120 object-cover" />
            </a>
            <div className="p-6">
                <h2 className="text-xl font-bold tracking-wide uppercase text-gray-800">{title}</h2>
                <p className="mt-2 text-base text-gray-600">Course Fee : {price}</p>
            </div>
        </div>
    );
};

// Reusable Floating Logo Component
const FloatingLogo = () => {
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <div className="bg-black text-white p-4 rounded-full w-16 h-16 flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-900 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 7L12 12M22 7L12 12M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};


// Main Page Component
const Courses = () => {
    return (
        <div className="bg-gray-50 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex items-center px-4 sm:px-6 lg:px-4 pt-6 pb-12 gap-4">
                    <div className="w-2 h-12 bg-[#b61f9f]"></div>
                    <h2 id="faculty-heading" className="text-4xl md:text-5xl font-medium leading-tight text-black">
                        COURSES
                    </h2>
                </div>
                
                {/* Grid Layout for the cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center px-2 gap-8">
                    {/* We map over the data array to render a card for each course */}
                    {coursesData.map(course => (
                        <CourseCard
                            key={course.id}
                            imageUrl={course.imageUrl}
                            altText={course.altText}
                            title={course.title}
                            price={course.price}
                        />
                    ))}
                </div>

                {/* "More Courses" Button Section */}
                <div className="text-center mt-20">
                    <a href="/Degree-Programs/" className="inline-block bg-black text-white font-semibold uppercase tracking-wider px-10 py-4  hover:bg-gray-800 transition-colors duration-300 text-lg">
                        More Courses
                    </a>
                </div>
                
            </div>

            {/* Floating Logo */}
            <FloatingLogo />
        </div>
    );
};

export default Courses;