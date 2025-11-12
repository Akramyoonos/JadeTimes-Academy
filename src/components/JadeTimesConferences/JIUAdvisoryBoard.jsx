import React from 'react';

// Import images from assets
import Member1 from '../../assets/Images/JIUAdvisoryBoardImg01.webp';
import Member2 from '../../assets/Images/JIUAdvisoryBoardImg02.webp';
import Member3 from '../../assets/Images/JIUAdvisoryBoardImg03.webp';
import Member4 from '../../assets/Images/JIUAdvisoryBoardImg04.webp';
import Member5 from '../../assets/Images/JIUAdvisoryBoardImg05.webp';
import Member6 from '../../assets/Images/JIUAdvisoryBoardImg06.webp';
import Member7 from '../../assets/Images/JIUAdvisoryBoardImg07.webp';
import Member8 from '../../assets/Images/JIUAdvisoryBoardImg08.webp';
import Member9 from '../../assets/Images/JIUAdvisoryBoardImg09.webp';
import Member10 from '../../assets/Images/JIUAdvisoryBoardImg10.webp';
import Member11 from '../../assets/Images/JIUAdvisoryBoardImg11.webp';
import Member12 from '../../assets/Images/JIUAdvisoryBoardImg12.webp';
import Member13 from '../../assets/Images/JIUAdvisoryBoardImg13.webp';

// Data for the advisory board members with imported images
const advisoryBoardMembers = [
    { name: 'Dr. Jaime Geronimo Vela', title: 'Professor & Senior Researcher, USA', imageUrl: Member1 },
    { name: 'Dr. Ehi Iden', title: 'Senior Researcher, Nigeria', imageUrl: Member2 },
    { name: 'Dr. Antony Mbithi', title: 'Senior Researcher, Kenya', imageUrl: Member3 },
    { name: 'Dr. Keith Nester A. Lavin', title: 'Senior Researcher, Philippines', imageUrl: Member4 },
    { name: 'Dr. Francois Phopho', title: 'Senior Researcher, USA', imageUrl: Member5 },
    { name: 'Dr. Rachel Wolford', title: 'Senior Researcher, USA', imageUrl: Member6 },
    { name: 'Dr. Roderick Mann', title: 'Assistant Professor, USA', imageUrl: Member7 },
    { name: 'Dr. Akash Deep Muni', title: 'Dean & Assistant Professor, India', imageUrl: Member8 },
    { name: 'Dr. Sumit Kumar Pandey', title: 'Assistant Professor, India', imageUrl: Member9 },
    { name: 'Dr. Amresh Kumar Gauda', title: 'Assistant Professor, India', imageUrl: Member10 },
    { name: 'Dr. Anand Joshi', title: 'Professor, India', imageUrl: Member11 },
    { name: 'Dr. Rekha', title: 'HOD & Professor, India', imageUrl: Member12 },
    { name: 'Dr. Rajan Miglani', title: 'HOD & Professor, India', imageUrl: Member13 },
    { name: 'Dr. Sugandha Shekhar', title: 'Assistant Professor, India', imageUrl: Member4 }, // Reusing Member4 as per original data
];

// Reusable component for each board member card
const BoardMemberCard = ({ name, title, imageUrl }) => (
    <div className="relative min-h-80 overflow-hidden rounded-lg shadow-lg group">
        {/* Background Image */}
        <img 
            src={imageUrl} 
            alt={`Portrait of ${name}`}
            className="object-cover w-full h-full transition-transform transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold drop-shadow-md">{name}</h3>
            <p className="text-md text-red-400 drop-shadow-md">{title}</p>
        </div>
    </div>
);

// Main component for the advisory board page
const JIUAdvisoryBoard = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Title */}
                <div className="text-center mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-800">
                        Jadetimes Advisory Board Who Leads the International
                        <br />
                        Research Conference 2025
                    </h1>
                </div>

                {/* Advisory Board Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {advisoryBoardMembers.map((member, index) => (
                        <BoardMemberCard
                            key={index} // Using index as key since the list is static
                            name={member.name}
                            title={member.title}
                            imageUrl={member.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JIUAdvisoryBoard;
