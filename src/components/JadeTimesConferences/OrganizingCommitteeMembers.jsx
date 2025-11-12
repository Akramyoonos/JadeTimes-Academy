import React from 'react';
import memberImage01 from '../../assets/Images/OrganizingCommitteeMembersImg01.webp';
import memberImage02 from '../../assets/Images/OrganizingCommitteeMembersImg02.webp';
import memberImage03 from '../../assets/Images/OrganizingCommitteeMembersImg03.webp';
import memberImage04 from '../../assets/Images/OrganizingCommitteeMembersImg04.webp';
import memberImage05 from '../../assets/Images//OrganizingCommitteeMembersImg05.webp';
import memberImage06 from '../../assets/Images/OrganizingCommitteeMembersImg06.webp';
import memberImage07 from '../../assets/Images/OrganizingCommitteeMembersImg07.webp';
import memberImage08 from '../../assets/Images/OrganizingCommitteeMembersImg08.webp';
import memberImage09 from '../../assets/Images/OrganizingCommitteeMembersImg09.webp';
import memberImage10 from '../../assets/Images/OrganizingCommitteeMembersImg10.webp';
import memberImage11 from '../../assets/Images/OrganizingCommitteeMembersImg11.webp';
import memberImage12 from '../../assets/Images/OrganizingCommitteeMembersImg12.webp';
import memberImage13 from '../../assets/Images/OrganizingCommitteeMembersImg13.webp';

// 1. Data for the committee members
// It's good practice to keep data separate, but for a single-file example, we'll include it here.
const members = [
    {
        name: 'Geeth Roman',
        title: 'CEO & Director at Jadetimes',
        imageUrl: memberImage01,
    },
    {
        name: 'Prof. Simranjit Singh',
        title: 'Conference Chair, India',
        imageUrl: memberImage02,
    },
    {
        name: 'Dr. Tornike Shurgulaia',
        title: 'Co-Conference Chair, USA',
        imageUrl: memberImage03,
    },
    {
        name: 'Prof. Rabbi Victor Gross',
        title: 'Co-Conference Chair, USA',
        imageUrl: memberImage04,
    },
    {
        name: 'Prof. Ceasar Dubor',
        title: 'Co-Conference Chair, Finland',
        imageUrl: memberImage05,
    },
    {
        name: 'Prof. Kirandeep Singh',
        title: 'Co-Conference Chair, India',
        imageUrl: memberImage06,
    },
    {
        name: 'Prof. (Dr.) Manvendra Singh',
        title: 'Co-Conference Chair, India',
        imageUrl: memberImage07,
    },
    {
        name: 'Kingzang Thinley',
        title: 'Africa Conference Coordinator',
        imageUrl: memberImage08,
    },
    {
        name: 'Fedra Ferro',
        title: 'USA Conference Coordinator',
        imageUrl: memberImage09,
    },
    {
        name: 'A. F. Syeda',
        title: 'UK Conference Coordinator',
        imageUrl: memberImage10,
    },
    {
        name: 'Chamitha Ranneththi',
        title: 'Australian Conference Coordinator',
        imageUrl: memberImage11,
    },
    {
        name: 'Mehul Bansal',
        title: 'India Conference Coordinator',
        imageUrl: memberImage12,
    },
    {
        name: 'Thiloththama Jayasinghe',
        title: 'Sri Lankan Conference Coordinator',
        imageUrl: memberImage13,
    },
];

// 2. Reusable Member Card Component
const MemberCard = ({ name, title, imageUrl }) => {
    return (
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
};

// 3. Main Component that assembles everything
const OrganizingCommittee = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                <h2 className="mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-800">
                    Organizing Committee Members
                </h2>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Map through the members array and render a card for each member */}
                    {members.map((member, index) => (
                        <MemberCard
                            key={index} // Using index as a key is okay for a static list
                            name={member.name}
                            title={member.title}
                            imageUrl={member.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


// The main App component that renders our committee section
export default OrganizingCommittee;