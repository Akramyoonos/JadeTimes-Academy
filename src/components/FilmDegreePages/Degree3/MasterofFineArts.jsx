import React from 'react';

const MasterofFineArts = () => {
    return (
        <div className="bg-gray-100 flex  min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-34 pb-16 bg-white shadow-sm max-w-8xl relative">
                <div className="flex items-center mb-8">
                    <div className="w-1.5 h-16 bg-purple-600 mr-6"></div>
                    <h1 className="text-4xl font-light text-gray-800 tracking-wider">
                        MASTER OF FINE ARTS DEGREE IN FILMMAKING
                    </h1>
                </div>

                <div className="border-t border-gray-200">
                    <div className="bg-black text-white flex px-6 py-4">
                        <div className="w-1/3">
                            <h2 className="font-semibold tracking-widest">LOCATION</h2>
                        </div>
                        <div className="w-1/3">
                            <h2 className="font-semibold tracking-widest">PROGRAM START DATE AND END DATE</h2>
                        </div>
                        <div className="w-1/3">
                            <h2 className="font-semibold tracking-widest">TUITION</h2>
                        </div>
                    </div>

                    <div className="flex px-6 py-8 border-b border-gray-200">
                        <div className="w-1/3 text-gray-700">
                            <p>Los Angeles</p>
                        </div>
                        <div className="w-1/3 text-gray-700 space-y-4">
                            <p>January 12, 2026 – December 14, 2027</p>
                            <p>May, 2026 – April, 2028</p>
                            <p>September, 2026 – December, 2026</p>
                        </div>
                        <div className="w-1/3 text-gray-700 space-y-8">
                            <div>
                                <h3 className="font-semibold text-black">Spring 2026 Semester Tuition and Equipment & Technology Fee</h3>
                                <div className="mt-4 space-y-2">
                                    <p><span className="font-semibold text-black">Tuition:</span><br />$16,804 Per Semester</p>
                                    <p><span className="font-semibold text-black">Equipment & Technology Fee:</span><br />$1,956 Per Semester</p>
                                    <p><span className="font-semibold text-black">Wellness Services & Programming Fee:</span><br />$145 Per Semester</p>
                                    <p className="mt-4"><span className="font-semibold text-black">Program Duration:</span><br />6 Semesters</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-black">Summer 2026 Semester Tuition and Equipment & Technology Fee</h3>
                                <div className="mt-4 space-y-2">
                                    <p><span className="font-semibold text-black">Tuition:</span><br />$16,804 Per Semester</p>
                                    <p><span className="font-semibold text-black">Equipment & Technology Fee:</span><br />$1,956 Per Semester</p>
                                    <p><span className="font-semibold text-black">Wellness Services & Programming Fee:</span><br />$145 Per Semester</p>
                                    <p className="mt-4"><span className="font-semibold text-black">Program Duration:</span><br />6 Semesters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterofFineArts;