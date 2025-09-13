import React, { useState } from 'react';
import './JIUCabinet.css';

// --- DATA FOR THE CABINET MEMBERS ---
// NOTE: I have replaced your local image paths with placeholders.
// Update the `imageUrl` to point to your actual images.
const cabinetMembers = [
    {
        name: 'Michael J. Young',
        title: 'President/CEO',
        imageUrl: new URL('../../assets/Images/JiuCABINET01.jpeg', import.meta.url).href,
        showConsent: true,
        description: 'Michael Young is the President and CEO of the New York Film Academy. Michael earned his Bachelor’s in Film and Visual Studies from Harvard University. His thesis film, McJew, was nominated for best documentary in the Student Academy Awards. After working as crew on films, commercials, and industrials in any role he could get, he went on to earn an MFA in Film Directing from NYU Tisch School of the Arts. He also studied acting for two years with the brilliant Meisner trained teacher, Suzanne Shepard. In 1992, NYFA founder Jerry Sherlock brought Michael to design its original curriculum of learning to make films by making films in an “intensive hands-on total immersion program,” and he helped start the school. In the years since, when not teaching or administrating at NYFA, Michael has worked on feature films, including as Cinematographer for the documentary Comrades and as Executive Producer on the documentary Turn Every Page, released in theatres in 2023 by Sony Pictures Classics.',
    },
    {
        name: 'David Klein',
        title: 'Senior Executive Vice President/COO',
        imageUrl: new URL('../../assets/Images/JiuCABINET02.jpeg', import.meta.url).href,
        description: "Klein is the Senior Executive Vice President at the New York Film Academy. Klein received his Master of Fine Arts in Film Directing at New York University’s Graduate School of Film and Television in 1995. He has worked closely with NBC News, the Guggenheim Museum, the Brooklyn Museum, The Metropolitan Museum of Art and New York City public schools to create innovative media arts programs. In his current position at the Academy, he oversees the operations, development, and delivery of programs in the various disciplines taught, including Acting for Film, Filmmaking, Musical Theatre, Broadcast Journalism, and Cinematography, at the Academy’s locations across the globe. As a film director and producer, Klein is a recipient of the Tisch Excellence in Producing Award for producing several short films, including Gone With the Moon and Butterfly Dance starring Vera Farmiga. He was awarded the Warner Brothers Post-Production Award for a film he wrote and directed titled To Dye For.",
    },
    {
        name: 'Dan Mackler',
        title: 'Senior Vice President/CSO/Dean of NYFA Los Angeles',
        imageUrl: new URL('../../assets/Images/JiuCABINET03.jpeg', import.meta.url).href,
        description: 'Dan Mackler oversees the Los Angeles campus, ensuring the highest standards of education and student satisfaction...',
    },
    {
        name: 'Sonny Calderon',
        title: 'VP Academic Affairs/CAO',
        imageUrl: new URL('../../assets/Images/JiuCABINET04.jpeg', import.meta.url).href,
        description: 'Sonny Calderon is responsible for all academic affairs and curriculum development at the academy...',
    },
    {
        name: ' Elli Ventouras',
        title: 'Dean of NYFA New York',
        imageUrl: new URL('../../assets/Images/JiuCABINET05.jpeg', import.meta.url).href,
        description: ' Elli Ventouras leads the New York campus with a focus on student growth and program excellence...',
    },
    {
        name: 'Dr. Susan Ashe',
        title: 'Dean of Students, NYFA Los Angeles',
        imageUrl: new URL('../../assets/Images/JiuCABINET06.jpeg', import.meta.url).href,
        description: 'Dr. Susan Ashe is dedicated to student welfare and success at the Los Angeles campus...',
    },
    {
        name: 'Rosa Belerique',
        title: 'Vice President of Institutional Research and Effectiveness',
        imageUrl: new URL('../../assets/Images/JiuCABINET07.jpeg', import.meta.url).href,
        description: 'Rosa Belerique leads the academy\'s efforts in research and institutional effectiveness...',
    },
    {
        name: 'Randall Dottin',
        title: 'Chair of Film Arts',
        imageUrl: new URL('../../assets/Images/JiuCABINET08.jpeg', import.meta.url).href,
        description: 'Randall Dottin is an award-winning filmmaker and the Chair of Film Arts...',
    },
    {
        name: 'Denise Hamilton',
        title: 'Senior Campus Director', // Added a title for consistency
        imageUrl: new URL('../../assets/Images/JiuCABINET09.jpeg', import.meta.url).href,
        description: 'Denise Hamilton manages the day-to-day operations of the campus...',
    },
    {
        name: 'James S. Miller III',
        title: 'Vice President of Strategic Initiatives & Interim Executive Director, 10 ARTS Foundation',
        imageUrl: new URL('../../assets/Images/JiuCABINET10.jpeg', import.meta.url).href,
        description: 'James S. Miller III drives strategic initiatives and partnerships for the academy...',
    },
    {
        name: 'Dr. Mary Samuelson',
        title: 'Dean of General Education; Chair of Liberal Arts & Sciences',
        imageUrl: new URL('../../assets/Images/JiuCABINET11.png', import.meta.url).href,
        description: 'Dr. Mary Samuelson oversees the liberal arts and sciences curriculum...',
    },
    {
        name: 'Nick Sivakumaran',
        title: 'Senior Directing Instructor',
        imageUrl: new URL('../../assets/Images/JiuCABINET12.jpeg', import.meta.url).href,
        description: 'Nick Sivakumaran is a seasoned director and a senior instructor at the academy...',
    },
    {
        name: 'Andrea Swift',
        title: 'Chair of Documentary Filmmaking', // Added a title for consistency
        imageUrl: new URL('../../assets/Images/JiuCABINET06.jpeg', import.meta.url).href,
        description: 'Andrea Swift leads the documentary filmmaking department with extensive industry experience...',
    },
];


// --- REUSABLE MODAL COMPONENT ---
const Modal = ({ member, onClose }) => {
    // Don't render the modal if no member is selected
    if (!member) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>&times;</button>
                <div className="modal-body">
                    <div className="modal-title-bar"></div>
                    <h2 className="modal-name">{member.name}</h2>
                    <h3 className="modal-title">{member.title}</h3>
                    <p className="modal-description">{member.description}</p>
                </div>
            </div>
        </div>
    );
};

// --- REUSABLE CARD COMPONENT ---
const MemberCard = ({ member, onClick }) => {
    return (
        <div className="relative member-card" onClick={() => onClick(member)}>
            <div className="image-container">
                <img src={member.imageUrl} alt={`Portrait of ${member.name}`} className="w-full h-auto member-image" />
            </div>
            {member.showConsent && (
                 <div className="absolute top-4 left-4">
                    <button className=""></button>
                </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4 member-info">
                <h2 className="text-lg font-semibold">{member.name}</h2>
                {member.title && <p className="text-sm">{member.title}</p>}
            </div>
        </div>
    );
};


// --- MAIN CABINET COMPONENT ---
const JIUCabinet = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Function to open the modal with the clicked member's data
  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="bg-white font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-semibold text-gray-800 mb-8 tracking-wider">NYFA CABINET</h1>
            
            {/* Grid of Cabinet Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {cabinetMembers.map((member) => (
                    <MemberCard key={member.name} member={member} onClick={handleCardClick} />
                ))}
            </div>
        </div>

        {/* The Modal, which will appear when a member is selected */}
        <Modal member={selectedMember} onClose={handleCloseModal} />
    </div>
  );
};

export default JIUCabinet;