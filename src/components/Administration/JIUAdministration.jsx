import React, { useState } from 'react';
import JiuCABINET01 from '../../assets/Images/CabinetPageImages01.webp';
import JiuCABINET02 from '../../assets/Images/CabinetPageImages02.webp';
import JiuCABINET03 from '../../assets/Images/CabinetPageImages03.webp';
import JiuCABINET04 from '../../assets/Images/CabinetPageImages04.webp';
import JiuCABINET05 from '../../assets/Images/CabinetPageImages05.webp';
import JiuCABINET06 from '../../assets/Images/CabinetPageImages06.webp';
import JiuCABINET07 from '../../assets/Images/CabinetPageImages07.webp';
import JiuCABINET08 from '../../assets/Images/JiuCABINET08.webp';
import JiuCABINET09 from '../../assets/Images/JiuCABINET09.webp';
import JiuCABINET10 from '../../assets/Images/JiuCABINET10.webp';
import JiuCABINET11 from '../../assets/Images/JiuCABINET11.webp';
import JiuCABINET12 from '../../assets/Images/JiuCABINET12.webp';

const cabinetMembers = [
    {
        name: 'Geeth L. Roman',
        title: 'President/CEO',
        imageUrl: JiuCABINET01,
        showConsent: true,
        description: 'Michael J. Young is the President and Chief Executive Officer at the New York Film Academy...',
    },
    {
        name: 'Dr. jaime Geronimo Vela',
        title: 'Pro-Vice Chancellor',
        imageUrl: JiuCABINET02,
        description: "Klein is the Senior Executive Vice President at the New York Film Academy. Klein received his Master of Fine Arts in Film Directing at New York University's Graduate School of Film and Television in 1995. He has worked closely with NBC News, the Guggenheim Museum, the Brooklyn Museum, The Metropolitan Museum of Art and New York City public schools to create innovative media arts programs. In his current position at the Academy, he oversees the operations, development, and delivery of programs in the various disciplines taught, including Acting for Film, Filmmaking, Musical Theatre, Broadcast Journalism, and Cinematography, at the Academy's locations across the globe. As a film director and producer, Klein is a...",
    },
    {
        name: 'Dr. Tornike Shurgulaia',
        title: 'Vice President & Head of Student Affairs',
        imageUrl: JiuCABINET03,
        description: 'Dan Mackler oversees the Los Angeles campus, ensuring the highest standards of education and student satisfaction...',
    },
    {
        name: 'Prof.Cesar Dubor',
        title: 'Dean of JIU Online Programs',
        imageUrl: JiuCABINET04,
        description: 'Sonny Calderon is responsible for all academic affairs and curriculum development at the academy...',
    },
    {
        name: 'Dr. Keith Nester A. Lavin',
        title: 'Vice President of Institutional Research and Effectiveness',
        imageUrl: JiuCABINET05,
        description: 'Elli Ventouras leads the New York campus with a focus on student growth and program excellence...',
    },
    {
        name: 'Prof. Simranjit Singh',
        title: 'Chair of Film Arts',
        imageUrl: JiuCABINET06,
        description: 'Dr. Susan Ashe is dedicated to student welfare and success at the Los Angeles campus...',
    },
    {
        name: 'Dr. Ehi Iden',
        title: 'Chair of Liberal Arts & Sciences',
        imageUrl: JiuCABINET07,
        description: 'Rosa Belerique leads the academy\'s efforts in research and institutional effectiveness...',
    },
    {
        name: 'Randall Dottin',
        title: 'Chair of Film Arts',
        imageUrl: JiuCABINET08,
        description: 'Randall Dottin is an award-winning filmmaker and the Chair of Film Arts...',
    },
    {
        name: 'Denise Hamilton',
        title: 'Senior Campus Director',
        imageUrl: JiuCABINET09,
        description: 'Denise Hamilton manages the day-to-day operations of the campus...',
    },
    {
        name: 'James S. Miller III',
        title: 'Vice President of Strategic Initiatives & Interim Executive Director, 10 ARTS Foundation',
        imageUrl: JiuCABINET10,
        description: 'James S. Miller III drives strategic initiatives and partnerships for the academy...',
    },
    {
        name: 'Dr. Mary Samuelson',
        title: 'Dean of General Education; Chair of Liberal Arts & Sciences',
        imageUrl: JiuCABINET11,
        description: 'Dr. Mary Samuelson oversees the liberal arts and sciences curriculum...',
    },
    {
        name: 'Nick Sivakumaran',
        title: 'Senior Directing Instructor',
        imageUrl: JiuCABINET12,
        description: 'Nick Sivakumaran is a seasoned director and a senior instructor at the academy...',
    },
];

const Modal = ({ member, onClose }) => {
    if (!member) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold" onClick={onClose}>&times;</button>
                <div className="pl-6">
                    <div className="absolute left-0 top-8 w-1.5 h-12 bg-purple-600"></div>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight">{member.name}</h2>
                    <h3 className="text-lg text-gray-600 mt-1 mb-6 font-medium">{member.title}</h3>
                    <p className="text-base text-gray-700 leading-relaxed">{member.description}</p>
                </div>
            </div>
        </div>
    );
};

const MemberCard = ({ member, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-200 ease-in-out ${isHovered ? 'transform scale-105 shadow-xl' : 'shadow-lg'}`}
            onClick={() => onClick(member)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={member.imageUrl} alt={`Portrait of ${member.name}`} className="w-full h-96 object-cover object-center" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h2 className="text-xl font-bold text-white shadow-md">{member.name}</h2>
                {member.title && <p className="text-sm text-white opacity-90 shadow-md">{member.title}</p>}
            </div>
        </div>
    );
};

const JIUAdministration = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="font-sans bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <div className="w-1 h-10 bg-blue-500 mr-4"></div>
          <h1 className="text-3xl font-normal text-black tracking-wider m-0">ADMINISTRATION MEMBERS</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabinetMembers.map((member) => (
            <MemberCard key={member.name} member={member} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      <Modal member={selectedMember} onClose={handleCloseModal} />
    </div>
  );
};

export default JIUAdministration;