import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImageUrl from '../../assets/Images/StudentResourceHeading.webp';

const Heading = () => {

    return (
        <div 
            className="relative h-100 bg-cover bg-center" 
            style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>            
            <nav className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex flex-wrap items-center space-x-2 uppercase text-white text-xs sm:text-sm font-sans bg-opacity-30 px-3 sm:px-4 py-2 rounded-full">
                    <Link to="/"><span className="font-semibold hover:underline">JIU</span></Link>
                    <span className="text-gray-300">/</span>
                    <span>Current Students</span>
                  </nav>

            <main className="relative z-10 h-full flex items-center justify-center text-center text-white">
                <div>
                    <h1 className="text-4xl font-semibold tracking-wider pb-5">STUDENT RESOURCE</h1>
                    <div className="mt-4 border-y-7 border-sky-500 py-2 ">
                        <div className="border-x-7 border-sky-500 px-8 py-2">
                            <p className="text-lg tracking-widest">IMPORTANT LINKS</p>
                            <p className="text-lg tracking-widest">STUDENTS NEED</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Heading;