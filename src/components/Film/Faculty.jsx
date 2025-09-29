import React from 'react';

const Faculty = () => {
    // It's often better to move these styles to a separate CSS file
    // and import it, but for a self-contained component, this works.
    const styles = `
        .faculty-card {
            position: relative;
            overflow: hidden;
        }
        .faculty-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 1rem;
        }
        .faculty-info .name {
            font-weight: bold;
            font-size: 1.125rem;
        }
        .faculty-info .title {
            font-size: 0.875rem;
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
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="bg-white font-sans">
                <div className="container mx-auto p-8">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl font-light text-gray-800 relative pl-4">
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400"></span>
                            FILM <br /> SCHOOL FACULTY
                        </h1>
                        <p className="text-gray-600 mt-6 text-base leading-relaxed">
                            The award-winning faculty at NYFA's Film School actively work in the film, television, and entertainment industries, possessing a wealth of experience in directing, screenwriting, acting for film and stage, cinematography, editing, sound design, and producing. NYFA's faculty are passionate professionals who live and breathe film, providing the guidance and expertise necessary for students to hone their craft and build their confidence as visual storytellers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {/* Andrea Swift */}
                        <div className="faculty-card border-2 border-blue-400">
                            <img src="https://i.imgur.com/K91nL3z.png" alt="Andrea Swift" className="w-full h-full object-cover" />
                            <div className="faculty-info border-t-2 border-blue-400">
                                <div className="star">&#9733;</div>
                                <p className="name text-center">Andrea Swift</p>
                            </div>
                        </div>

                        {/* Edward Timpe */}
                        <div className="faculty-card border-2 border-blue-400">
                            <img src="https://i.imgur.com/kSMCGjY.png" alt="Edward Timpe" className="w-full h-full object-cover" />
                            <div className="faculty-info border-t-2 border-blue-400">
                                <div className="star">&#9733;</div>
                                <p className="name text-center">Edward Timpe</p>
                                <p className="title text-center">Co-Chair of Film Arts Department</p>
                            </div>
                        </div>

                        {/* More */}
                        <div className="more-card">
                            <div className="arrow-icon">
                                <span>&#x2197;</span>
                            </div>
                            <p className="text-gray-800 text-lg">More</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Faculty;