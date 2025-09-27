import React from 'react';

const EntertainmentMediaPrograms = () => {
    const courses = [
        "Master of Fine Arts in 3D Animation & VFX",
        "Bachelor of Fine Arts in 3D Animation & VFX",
        "Bachelor of Fine Arts in Entertainment Media (Concentration in 3D Animation & VFX)",
        "1-Year 3D Animation & VFX Program",
        "12-Weekend Evening 3D Animation & VFX Workshop",
        "12-Week Evening Adobe After Effects Workshop",
        "3-Week 3D Animation & VFX Workshop",
        "4-Week 3D Animation & VFX Workshop",
        "4-Week Adobe After Effects Workshop",
        "1-Week Visual Effects Workshop",
        "4-Week Online 3D Animation & VFX Workshop"
    ];

    return (
        <div className="bg-white py-12 md:py-16 lg:py-20">
            <div className="container px-10">
                <div className="text-left mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 uppercase inline-block relative">Entertainment Media
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

export default EntertainmentMediaPrograms;
