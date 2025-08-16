import React, { useState, useEffect } from 'react';

import facultyDataImages01 from '../../assets/Images/facultyDataImages01.jpeg';
import facultyDataImages02 from '../../assets/Images/facultyDataImages02.jpeg';
import facultyDataImages03 from '../../assets/Images/facultyDataImages03.jpeg';
import facultyDataImages04 from '../../assets/Images/facultyDataImages04.png';
import facultyDataImages05 from '../../assets/Images/facultyDataImages05.png';
import facultyDataImages06 from '../../assets/Images/facultyDataImages06.jpeg';
import facultyDataImages07 from '../../assets/Images/facultyDataImages07.png';
import facultyDataImages08 from '../../assets/Images/facultyDataImages08.jpeg';
import facultyDataImages09 from '../../assets/Images/facultyDataImages09.jpeg';
import facultyDataImages10 from '../../assets/Images/facultyDataImages10.jpeg';
import facultyDataImages11 from '../../assets/Images/facultyDataImages11.jpeg';
import facultyDataImages12 from '../../assets/Images/facultyDataImages12.jpeg';
import facultyDataImages13 from '../../assets/Images/facultyDataImages13.jpeg';
import facultyDataImages14 from '../../assets/Images/facultyDataImages14.jpeg';
import facultyDataImages15 from '../../assets/Images/facultyDataImages15.png';
import facultyDataImages16 from '../../assets/Images/facultyDataImages16.jpeg';

const initialFacultyData = [
    { id: 1, name: 'Michael J. Young', title: 'President/CEO', imageUrl: facultyDataImages01, areaOfStudy: 'Administration', link: '/blog' },
    { id: 2, name: 'David Klein', title: 'Senior Executive Vice President/COO', imageUrl: facultyDataImages02, areaOfStudy: 'Administration', link: '/faculty/2' },
    { id: 3, name: 'Dan Mackler', title: 'Senior Vice President/CSO/Dean of NYFA Los Angeles', imageUrl: facultyDataImages03, areaOfStudy: 'Administration', link: '/faculty/3' },
    { id: 4, name: 'Sonny Calderon', title: 'Vice President of Academic Affairs', imageUrl: facultyDataImages04, areaOfStudy: 'Academics', link: '/faculty/4' },
    { id: 5, name: 'Daniel Brusci', title: 'Photography', imageUrl: facultyDataImages05, areaOfStudy: 'Photography', link: '/faculty/5' },
    { id: 6, name: 'Lisa Abukusumo', title: 'Filmmaking', imageUrl: facultyDataImages06, areaOfStudy: 'Filmmaking', link: '/faculty/6' },
    { id: 7, name: 'Adriana Elisa Alegre PhD', title: 'Screenwriting', imageUrl: facultyDataImages07, areaOfStudy: 'Screenwriting', link: '/faculty/7' },
    { id: 8, name: 'Alexa Alemanni', title: 'Acting', imageUrl: facultyDataImages08, areaOfStudy: 'Acting', link: '/faculty/8' },
    { id: 9, name: 'Harrison Allen', title: 'Animation', imageUrl: facultyDataImages09, areaOfStudy: 'Animation', link: '/faculty/9' },
    { id: 10, name: 'Alexis Alleyne-Caputo', title: 'Photography', imageUrl: facultyDataImages10, areaOfStudy: 'Photography', link: '/faculty/10' },
    { id: 11, name: 'Anne Alvergue', title: 'Documentary', imageUrl: facultyDataImages11, areaOfStudy: 'Filmmaking', link: '/faculty/11' },
    { id: 12, name: 'Diana Anpilohova', title: 'ESL', imageUrl: facultyDataImages12, areaOfStudy: 'Academics', link: '/faculty/12' },
    { id: 13, name: 'Jonathan Appell', title: 'Cinematography', imageUrl: facultyDataImages13, areaOfStudy: 'Filmmaking', link: '/faculty/13' },
    { id: 14, name: 'David Armstrong', title: 'Photography', imageUrl: facultyDataImages14, areaOfStudy: 'Photography', link: '/faculty/14' },
    { id: 15, name: 'Patrice DeGraff Arenas', title: 'Acting for Film', imageUrl: facultyDataImages15, areaOfStudy: 'Acting', link: '/faculty/15' },
    { id: 16, name: 'Katie Adams', title: 'Voice & Speech', imageUrl: facultyDataImages16, areaOfStudy: 'Acting', link: '/blog' },
];

const FacultyCard = ({ name, title, imageUrl, link }) => (
    <a href={link} className="block relative rounded-lg overflow-hidden group shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img src={imageUrl} alt={name} className="w-full h-90 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-white text-xl font-bold">{name}</h3>
            {title && <p className="text-gray-200 text-sm">{title}</p>}
        </div>
    </a>
);

const FacultyDirectory = () => {
    const [allFaculty] = useState(initialFacultyData);
    const [filteredFaculty, setFilteredFaculty] = useState(initialFacultyData);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArea, setSelectedArea] = useState('ALL');

    const ITEMS_PER_PAGE = 8;

    useEffect(() => {
        let faculty = allFaculty;

        if (searchTerm) {
            faculty = faculty.filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        if (selectedArea !== 'ALL') {
            faculty = faculty.filter(f => f.areaOfStudy === selectedArea);
        }

        setFilteredFaculty(faculty);
        setCurrentPage(1);
    }, [searchTerm, selectedArea, allFaculty]);

    const totalPages = Math.ceil(filteredFaculty.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentFaculty = filteredFaculty.slice(startIndex, endIndex);

    const areasOfStudy = ['ALL', ...new Set(allFaculty.map(f => f.areaOfStudy))];

    return (
        <div className="bg-gray-100 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800">Meet our distinguished faculty members.</h1>
                </div>

                <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
                        <div className="relative md:col-span-1 lg:col-span-1">
                            <label htmlFor="area-select" className="sr-only">Filter by area of study</label>
                            <select id="area-select" value={selectedArea} onChange={e => setSelectedArea(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
                                {areasOfStudy.map(area => <option key={area} value={area}>{area === 'ALL' ? 'ALL AREAS OF STUDY' : area}</option>)}
                            </select>
                        </div>
                        <div className="relative md:col-span-2 lg:col-span-2">
                            <label htmlFor="search-input" className="sr-only">Search by name</label>
                            <input
                                id="search-input"
                                type="text"
                                placeholder="SEARCH BY NAME"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                            />
                        </div>
                        <button type="button" className="w-full bg-purple-600 text-white font-semibold rounded-md px-4 py-3 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300 lg:col-span-1">
                            APPLY FILTERS
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {currentFaculty.map((faculty) => (
                        <FacultyCard
                            key={faculty.id}
                            name={faculty.name}
                            title={faculty.title}
                            imageUrl={faculty.imageUrl}
                            link={faculty.link}
                        />
                    ))}
                </div>

                <div className="flex justify-center items-center space-x-2 sm:space-x-4 mt-16">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="text-gray-600 hover:text-black disabled:text-gray-400 disabled:cursor-not-allowed p-2 rounded-full hover:bg-gray-200 transition">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    {[...Array(totalPages).keys()].map(n => (
                        <button
                            key={n + 1}
                            onClick={() => setCurrentPage(n + 1)}
                            className={`h-10 w-10 flex items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${currentPage === n + 1 ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                            {n + 1}
                        </button>
                    ))}
                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="text-gray-600 hover:text-black disabled:text-gray-400 disabled:cursor-not-allowed p-2 rounded-full hover:bg-gray-200 transition">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FacultyDirectory;