import React from 'react';

const MediaArtsPrograms = () => {
    const courses = [
        { name: "Master of Fine Arts in Media Arts", href: "/media-arts-programs/mfa-media-arts" },
        { name: "Bachelor of Fine Arts in Media Arts", href: "/media-arts-programs/bfa-media-arts" },
        { name: "1-Year Media Arts Program", href: "/media-arts-programs/1-year-media-arts-program" },
        { name: "12-Weekend Evening Media Arts Workshop", href: "/media-arts-programs/12-weekend-media-arts-workshop" },
        { name: "4-Week Online Media Arts Workshop", href: "/media-arts-programs/4-week-online-media-arts-workshop" }
    ];

    return (
        <div className="bg-white py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <div className="text-left mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 inline-block relative">MEDIA ARTS
                    </h1>
                </div>
                <div className="bg-gray-50 p-8 md:p-12 lg:p-16 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {courses.map((course, index) => (
                            <div key={index} className="border-b border-gray-200 pb-6 group">
                                <a href={course.href} className="text-gray-800 text-lg group-hover:text-purple-600 transition-colors duration-300 cursor-pointer">{course.name}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaArtsPrograms;