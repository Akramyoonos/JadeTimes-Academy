import React from 'react';

const ProgramDisplay = ({ programName, courses }) => {
    return (
        <div className="bg-white py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="text-left mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 inline-block relative">{programName}
                        <span className="block w-1/2 h-1 bg-purple-600 mt-2"></span>
                    </h1>
                </div>
                <div className="bg-gray-50 p-8 md:p-12 lg:p-16 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {courses.map((course, index) => (
                            <div key={index} className="border-b border-gray-200 pb-6 group">
                                <p className="text-gray-800 text-lg group-hover:text-purple-600 transition-colors duration-300 cursor-pointer">{course}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDisplay;
