import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

// Hint: Make sure to import your images correctly
import facultyDataImages01 from '../../assets/Images/facultyDataImages01.jpeg';
import facultyDataImages02 from '../../assets/Images/facultyDataImages02.jpeg';

// --- Reusable Modal Component ---
const FacultyModal = ({ faculty, onClose }) => {
    if (!faculty) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-220 h-120 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    aria-label="Close"
                >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
                <div className="pt-18 p-6 flex items-start gap-4 h-full overflow-y-auto">
                    <div className="w-[6px] bg-fuchsia-500 h-14 self-stretch" aria-hidden="true"></div>
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.05] tracking-wide">
                            <span className="text-3xl font-bold text-gray-800 mb-4">{faculty.name}</span>
                        </h2>
                        <p className="text-gray-600 pt-12 text-xl leading-relaxed">
                            {faculty.bio}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Faculty = () => {
    const [selectedFaculty, setSelectedFaculty] = useState(null);

    const facultyData = [
        {
            id: 1,
            name: 'Andrea Swift',
            title: 'Chair of Filmmaking Department',
            image: facultyDataImages01,
            bio: "A cinematic storyteller with more than 20 years experience, Swift has served as executive producer and director of PBS’ Emmy-nominated documentary series, In the Life. Her films have screened at the United Nations Earth Summit and festivals worldwide, including Berlin International Film Festival (Best Short Film), Raindance Film Festival (Best of Festival Selection), CIFF, and Chicago International Film Festival (Silver). She has created content for AMC, History, WE, the NY Knicks and Madison Square Garden; and has directed and written for top talent including Oscar winner Susan Sarandon, nominees Laura Linney, Patricia Clarkson, and Lesley Gore, and Tony Award and Emmy Award winners including Alan Cumming."
        },
        {
            id: 2,
            name: 'Edward Timpe',
            title: 'Co-Chair of Film Arts Department',
            image: facultyDataImages02,
            bio: "Edward Timpe is an accomplished filmmaker and educator with extensive experience in cinematography and directing. His work has been featured in numerous film festivals, and he is known for his hands-on approach to teaching, helping students to master both the technical and artistic aspects of filmmaking. He is dedicated to mentoring the next generation of visual storytellers."
        }
    ];

    const openModal = (faculty) => {
        setSelectedFaculty(faculty);
    };

    const closeModal = () => {
        setSelectedFaculty(null);
    };

    return (
        <div className="bg-white font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-34 py-16 relative">

                <div className="max-w-4xl">
                    <div className="flex items-center space-x-4">
                        <div className="w-1 bg-blue-500 h-16"></div>
                        <h1 className="text-4xl font-light text-gray-800 tracking-wider">
                            FILM<br />SCHOOL FACULTY
                        </h1>
                    </div>

                    <p className="mt-6 text-gray-600 leading-relaxed">
                        The award-winning faculty at NYFA's Film School actively work in the film, television, and entertainment industries, possessing a wealth of experience in directing, screenwriting, acting for film and stage, cinematography, editing, sound design, and producing. NYFA's faculty are passionate professionals who live and breathe film, providing the guidance and expertise necessary for students to hone their craft and build their confidence as visual storytellers.
                    </p>
                </div>

                <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-55">
                    {facultyData.map((faculty) => (
                        <div key={faculty.id} onClick={() => openModal(faculty)} className="block w-70 h-96 cursor-pointer group">
                            <div className="relative w-full h-full overflow-hidden">
                                <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover grayscale transition-transform duration-300 ease-in-out group-hover:scale-110" />
                                <div className="absolute bottom-0 left-0 right-0 p-4  bg-opacity-80 border-2 border-blue-500">
                                    <div className="flex items-center justify-center -mt-8 mb-2">
                                        <div className=" p-1  border-blue-500 inline-block">
                                            <FontAwesomeIcon icon={faStar} className="text-blue-500 text-2xl" />
                                        </div>
                                    </div>
                                    <div className="text-center text-white">
                                        <p className="font-semibold">{faculty.name}</p>
                                        <p className="text-sm">{faculty.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <a href="/faculty-directory/" className="block w-70 h-96">
                        <div className="relative w-full h-full border-2 border-blue-500 flex items-center justify-center group">
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                                    <FontAwesomeIcon icon={faArrowRight} className="text-blue-500 text-2xl" />
                                </div>
                                <p className="text-lg font-semibold text-gray-800">More</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <FacultyModal faculty={selectedFaculty} onClose={closeModal} />
        </div>
    );
};

export default Faculty;