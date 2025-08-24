import React from 'react';
import backgroundImageUrl from '../../assets/Images/StudentResourceHeading.jpeg';

const Heading = () => {

    return (
        <div 
            className="relative h-100 bg-cover bg-center" 
            style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            
            <header className="absolute top-0 left-0 p-8 pl-22">
                <p className="text-white text-sm tracking-widest ">NYFA / STUDENT RESOURCES</p>
            </header>

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