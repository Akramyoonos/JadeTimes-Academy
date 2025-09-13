import React from 'react';

const Details = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 relative">
                        <div className="flex items-center gap-4">
                            <span className="h-16 w-1 bg-yellow-400"></span>
                            <h1 className="text-4xl font-light tracking-widest text-gray-800">
                                APPLICATION DEADLINES
                            </h1>
                        </div>
                        <p className="mt-6 text-lg text-gray-600">
                            Browse our upcoming application deadlines for long-term programs and short-term workshops.
                        </p>

                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-gray-50 p-6">
                            <h2 className="font-semibold tracking-wider text-gray-800">RELATED LINKS</h2>
                            <nav className="mt-4">
                                <ul>
                                    <li className="border-b border-gray-200">
                                        <a href="#" className="block py-4 text-gray-700 hover:text-black">
                                            OPEN HOUSE & LIVE ONLINE EVENTS
                                        </a>
                                    </li>
                                    <li className="border-b border-gray-200">
                                        <a href="#" className="block py-4 text-gray-700 hover:text-black">
                                            ADMISSIONS
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-4 text-gray-700 hover:text-black">
                                            EXPLORE OUR PROGRAMS
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Details;