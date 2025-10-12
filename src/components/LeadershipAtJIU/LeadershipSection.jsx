import React from 'react';


const LeadershipSection = () => {
    return (
        // Main Component Container
        // Added some padding for standalone viewing; adjust as needed within your app.
        <div className="relative bg-white font-sans w-full  py-24 px-6 sm:px-6 md:px-6 lg:px-35">



            {/* Centered Content Wrapper */}
            <div className=" relative">


                {/* Heading Section */}
                <div className="flex items-center mb-8">
                    <span className="w-1 h-12 bg-purple-600 mr-6"></span>
                    <h1 className="text-3xl sm:text-4xl font-light text-gray-800 tracking-widest">
                        NYFA LEADERSHIP TEAM
                    </h1>
                </div>

                {/* Paragraph Section */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                    Our experienced leadership allows us to create a welcoming, inclusive space where aspiring visual storytellers and performers can develop and strengthen their creative skills through hands-on experience.
                </p>

            </div>
        </div>
    );
};

export default LeadershipSection;