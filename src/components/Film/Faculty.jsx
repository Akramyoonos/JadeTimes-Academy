import React from 'react';
import ourfaculty1 from '../../assets/Images/ourfaculty1.png';
import ourfaculty2 from '../../assets/Images/ourfaculty2.png';

const Faculty = () => {
    const facultyData = [
        {
            name: "Andrea Swift",
            title: "",
            imgSrc: ourfaculty1,
        },
        {
            name: "Edward Timpe",
            title: "Co-Chair of Film Arts Department",
            imgSrc: ourfaculty2,
        },
    ];

    const styles = `
        .faculty-card {
            position: relative;
            overflow: hidden;
            border: 2px solid #00adee;
        }
        .faculty-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 1rem;
            border-top: 2px solid #00adee;
        }
        .faculty-info .name {
            font-weight: bold;
            font-size: 1.125rem;
            text-align: center;
        }
        .faculty-info .title {
            font-size: 0.875rem;
            text-align: center;
        }
        .star {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            color: #00adee;
            font-size: 2.5rem;
        }
        .more-card {
            border: 2px solid #00adee;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            transition: background-color 0.3s, color 0.3s;
        }
        .more-card:hover {
            background-color: #00adee;
            color: white;
        }
        .more-card:hover .arrow-icon {
            border-color: white;
            color: white;
        }
        .arrow-icon {
            border: 2px solid #00adee;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #00adee;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            transition: border-color 0.3s, color 0.3s;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="bg-white font-sans py-8">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="max-w-4xl mb-8">
                        <h1 className="text-4xl font-light text-gray-800 relative pl-4">
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400"></span>
                            FILM <br /> SCHOOL FACULTY
                        </h1>
                        <p className="text-gray-600 mt-6 text-base leading-relaxed">
                            The award-winning faculty at NYFA's Film School actively work in the film, television, and entertainment industries, possessing a wealth of experience in directing, screenwriting, acting for film and stage, cinematography, editing, sound design, and producing. NYFA's faculty are passionate professionals who live and breathe film, providing the guidance and expertise necessary for students to hone their craft and build their confidence as visual storytellers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facultyData.map((faculty, index) => (
                            <div key={index} className="faculty-card">
                                <img src={faculty.imgSrc} alt={faculty.name} className="w-full h-full object-cover" />
                                <div className="faculty-info">
                                    <div className="star">&#9733;</div>
                                    <p className="name">{faculty.name}</p>
                                    {faculty.title && <p className="title">{faculty.title}</p>}
                                </div>
                            </div>
                        ))}

                        <div className="more-card">
                            <div className="arrow-icon">
                                <span>&#x2197;</span>
                            </div>
                            <p className="text-lg">More</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faculty;
