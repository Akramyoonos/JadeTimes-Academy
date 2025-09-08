import React from 'react';

const Description = () => {
    return (
        <div className="bg-white font-sans text-gray-800">
            <div className="container mx-auto p-8 md:p-16 relative">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Main Content Section */}
                    <div className="lg:w-2/3 relative">

                        {/* Heading */}
                        <div className="flex items-center mb-8">
                            <span className="w-1 h-12 bg-purple-600 mr-5"></span>
                            <h1 className="text-4xl font-light tracking-wider">VISIT A NYFA CAMPUS</h1>
                        </div>

                        {/* Text Content */}
                        {/* CORRECTED LINE: Removed conflicting "text-base" class */}
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                            <p>
                                Prospective students and their families can tour the facilities, meet faculty, and connect with the
                                student community at NYFA New York, Los Angeles, or Florence, Italy. These are not the only times
                                you can visit the New York Film Academy, please feel free to contact our Admissions Department at
                                212-674-4300 to schedule an appointment. Please note, NYFA reserves the right to not grant on-campus
                                access to any guests who do not follow our policies.
                            </p>
                            <p>
                                For questions about visits and tours, contact our Admissions Department at:
                                <br />
                                212-674-4300 or
                                <br />
                                <a href="mailto:admissions@nyfa.edu" className="text-purple-600 hover:underline"> admissions@nyfa.edu</a>
                            </p>
                        </div>

                    </div>

                    {/* Sidebar Section */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-50 p-8">
                            <h2 className="text-sm font-bold tracking-widest text-gray-600 mb-6">RELATED LINKS</h2>
                            <nav>
                                <ul>
                                    <li className="border-b border-gray-200"><a href="/campuses" className="block py-4 text-sm tracking-wider hover:text-purple-600 transition-colors">NYFA CAMPUSES</a></li>
                                    <li className="border-b border-gray-200"><a href="/events" className="block py-4 text-sm tracking-wider hover:text-purple-600 transition-colors">OPEN HOUSE & ONLINE EVENTS</a></li>
                                    <li className="border-b border-gray-200"><a href="/admissions" className="block py-4 text-sm tracking-wider hover:text-purple-600 transition-colors">MEET NYFA NEAR YOU</a></li>
                                    <li><a href="/programs" className="block pt-4 text-sm tracking-wider hover:text-purple-600 transition-colors">EXPLORE OUR PROGRAMS</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Description;