import React from 'react';
import { Link } from 'react-router-dom';
import AlumniExplore01 from '../../assets/Images/AlumniExplore01.jpeg';
import AlumniExplore02 from '../../assets/Images/AlumniExplore02.jpeg';
import AlumniExplore03 from '../../assets/Images/AlumniExplore03.jpeg';
import AlumniExplore04 from '../../assets/Images/AlumniExplore03.jpeg';

const LeadershipSection = () => {
    const leadershipAreas = [
        {
            title: "PRESIDENT'S PAGE",
            image: AlumniExplore01,
            alt: "President Michael Young at a conference",
            href: "/leadership/president"
        },
        {
            title: "CABINET",
            image: AlumniExplore02,
            alt: "Two people wearing NYFA hoodies looking over a lake in a city park",
            href: "/cabinet/"
        },
        {
            title: "ADMINISTRATION",
            image: AlumniExplore03,
            alt: "An empty theater with red carpeted stairs",
            href: "/leadership/administration"
        },
        {
            title: "BOARD OF DIRECTORS",
            image: AlumniExplore04,
            alt: "Close-up of a director's chair back",
            href: "/who-we-are/leadership/board-of-directors/"
        }
    ];

    return (
        <div className="bg-white">
            <div className="py-12">
                <div className="flex items-center mb-8 px-4 sm:px-6 lg:px-8">
                    <div className="w-1 h-10 bg-purple-600 mr-4"></div>
                    <h1 className="text-4xl font-light text-gray-800 tracking-wider">
                        AREAS OF LEADERSHIP
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {leadershipAreas.map((area, index) => (
                        <Link to={area.href} key={index} className="relative group overflow-hidden">
                            <img 
                                src={area.image} 
                                alt={area.alt} 
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-6">
                                <div className="text-white">
                                    <div className="border-2 border-white rounded-full w-10 h-10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:translate-x-2">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-6 w-6" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" 
                                            />
                                        </svg>
                                    </div>
                                    <h2 className="text-lg font-semibold tracking-wider">{area.title}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeadershipSection;