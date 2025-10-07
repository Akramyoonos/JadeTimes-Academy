import React from 'react';

const Projects = () => {
    return (
        <div className="bg-white font-sans relative">
            <div className="container max-auto px-4 sm:px-6 lg:px-34 py-12">
                <div className="max-w-7xl ">
                    <div className="flex items-center mb-8">
                        <span className="inline-block w-1 h-12 bg-cyan-400 mr-4"></span>
                        <h1 className="text-4xl font-bold text-gray-800 tracking-wider">PROJECTS</h1>
                    </div>

                    <div className="text-gray-600 text-xl leading-relaxed space-y-6">
                        <p>
                            In addition to writing a feature-length script of 90-120 pages, students produce ten films through the program's duration, including a master's thesis film. These film projects reflect core film structures and formats, such as Mise en Scène, Continuity, Montage, POV, etc. Students also have the opportunity to work on 28 student films in various production roles such as director of photography, assistant camera operator, and gaffer, rounding out their experience.
                        </p>
                        <p>
                            For a full list of filmmaking projects, see our film projects on the <a href="#" className="text-purple-600 hover:underline">film projects page</a>.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Projects;