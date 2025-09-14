import React, { useState } from 'react';
import JiuCABINET01 from '../../assets/Images/JiuCABINET01.jpeg';
import JiuCABINET02 from '../../assets/Images/JiuCABINET02.jpeg';
import JiuCABINET03 from '../../assets/Images/JiuCABINET03.jpeg';
import JiuCABINET04 from '../../assets/Images/JiuCABINET04.jpeg';
import JiuCABINET05 from '../../assets/Images/JiuCABINET05.jpeg';
import JiuCABINET06 from '../../assets/Images/JiuCABINET06.jpeg';
import JiuCABINET07 from '../../assets/Images/JiuCABINET07.jpeg';
import JiuCABINET08 from '../../assets/Images/JiuCABINET08.jpeg';
import JiuCABINET09 from '../../assets/Images/JiuCABINET09.jpeg';
import JiuCABINET10 from '../../assets/Images/JiuCABINET10.jpeg';
import JiuCABINET11 from '../../assets/Images/JiuCABINET11.png';
import JiuCABINET12 from '../../assets/Images/JiuCABINET12.jpeg';

// --- DATA FOR THE CABINET MEMBERS ---
// NOTE: Replace the `imageUrl` placeholders with your actual image paths.
const cabinetMembers = [
    {
        name: 'Michael J. Young',
        title: 'President/CEO',
        imageUrl: JiuCABINET01,
        showConsent: true,
        description: 'Michael J. Young is the President and Chief Executive Officer at the New York Film Academy...',
    },
    {
        name: 'David Klein',
        title: 'Senior Executive Vice President/COO',
        imageUrl: JiuCABINET02,
        description: "Klein is the Senior Executive Vice President at the New York Film Academy. Klein received his Master of Fine Arts in Film Directing at New York University's Graduate School of Film and Television in 1995. He has worked closely with NBC News, the Guggenheim Museum, the Brooklyn Museum, The Metropolitan Museum of Art and New York City public schools to create innovative media arts programs. In his current position at the Academy, he oversees the operations, development, and delivery of programs in the various disciplines taught, including Acting for Film, Filmmaking, Musical Theatre, Broadcast Journalism, and Cinematography, at the Academy's locations across the globe. As a film director and producer, Klein is a...",
    },
    {
        name: 'Dan Mackler',
        title: 'Senior Vice President/CSO/Dean of NYFA Los Angeles',
        imageUrl: JiuCABINET03,
        description: 'Dan Mackler oversees the Los Angeles campus, ensuring the highest standards of education and student satisfaction...',
    },
    {
        name: 'Sonny Calderon',
        title: 'VP Academic Affairs/CAO',
        imageUrl: JiuCABINET04,
        description: 'Sonny Calderon is responsible for all academic affairs and curriculum development at the academy...',
    },
    {
        name: 'Elli Ventouras',
        title: 'Dean of NYFA New York',
        imageUrl: JiuCABINET05,
        description: 'Elli Ventouras leads the New York campus with a focus on student growth and program excellence...',
    },
    {
        name: 'Dr. Susan Ashe',
        title: 'Dean of Students, NYFA Los Angeles',
        imageUrl: JiuCABINET06,
        description: 'Dr. Susan Ashe is dedicated to student welfare and success at the Los Angeles campus...',
    },
    {
        name: 'Rosa Belerique',
        title: 'Vice President of Institutional Research and Effectiveness',
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
    {
        name: 'Andrea Swift',
        title: 'Chair of Documentary Filmmaking',
        imageUrl: JiuCABINET06,
        description: 'Andrea Swift leads the documentary filmmaking department with extensive industry experience...',
    },
];

// --- STYLES OBJECT ---
// All styles are defined here as JavaScript objects for portability.
const styles = {
    // Main container and layout
    pageContainer: {
        fontFamily: 'sans-serif',
        backgroundColor: '#ffffff',
    },
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '3rem 1rem',
    },
    mainHeading: {
        fontSize: '1.875rem',
        fontWeight: 600,
        color: '#2d3748',
        marginBottom: '2rem',
        letterSpacing: '0.05em',
    },
    grid: {
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(1, 1fr)',
    },
    // Media queries are handled inside the main component for simplicity
    
    // MemberCard styles
    memberCard: {
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    },
    memberImage: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    memberInfo: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '1rem',
    },
    memberName: {
        fontSize: '1.125rem',
        fontWeight: 600,
    },
    memberTitle: {
        fontSize: '0.875rem',
    },

    // Modal styles
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '30px 40px',
        borderRadius: '8px',
        maxWidth: '600px',
        width: '100%',
        position: 'relative',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        maxHeight: '90vh',
        overflowY: 'auto',
    },
    modalCloseButton: {
        position: 'absolute',
        top: '15px',
        right: '15px',
        background: 'none',
        border: 'none',
        fontSize: '2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: '#333',
        lineHeight: 1,
    },
    modalBody: {
        paddingLeft: '25px',
    },
    modalTitleBar: {
        position: 'absolute',
        left: 0,
        top: '30px',
        width: '5px',
        height: '50px',
        backgroundColor: '#d80073',
    },
    modalName: {
        fontSize: '2.25rem',
        fontWeight: 600,
        margin: 0,
        color: '#222',
        lineHeight: 1.2,
    },
    modalTitle: {
        fontSize: '1.1rem',
        color: '#555',
        marginTop: '5px',
        marginBottom: '25px',
        fontWeight: 500,
    },
    modalDescription: {
        fontSize: '1rem',
        lineHeight: 1.6,
        color: '#444',
    },
};

// --- REUSABLE MODAL COMPONENT ---
const Modal = ({ member, onClose }) => {
    if (!member) return null;

    return (
        <div style={styles.modalOverlay} onClick={onClose}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button style={styles.modalCloseButton} onClick={onClose}>&times;</button>
                <div style={styles.modalBody}>
                    <div style={styles.modalTitleBar}></div>
                    <h2 style={styles.modalName}>{member.name}</h2>
                    <h3 style={styles.modalTitle}>{member.title}</h3>
                    <p style={styles.modalDescription}>{member.description}</p>
                </div>
            </div>
        </div>
    );
};

// --- REUSABLE CARD COMPONENT ---
const MemberCard = ({ member, onClick }) => {
    // Add hover effect state
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        ...styles.memberCard,
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        boxShadow: isHovered ? '0 10px 20px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    };
    
    return (
        <div 
            style={cardStyle}
            onClick={() => onClick(member)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={member.imageUrl} alt={`Portrait of ${member.name}`} style={styles.memberImage} />
            <div style={styles.memberInfo}>
                <h2 style={styles.memberName}>{member.name}</h2>
                {member.title && <p style={styles.memberTitle}>{member.title}</p>}
            </div>
        </div>
    );
};


// --- MAIN CABINET COMPONENT ---
const JIUCabinet = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };
  
  // Responsive grid styles
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getGridStyle = () => {
    if (windowWidth >= 1024) {
      return { ...styles.grid, gridTemplateColumns: 'repeat(4, 1fr)' };
    }
    if (windowWidth >= 640) {
      return { ...styles.grid, gridTemplateColumns: 'repeat(2, 1fr)' };
    }
    return styles.grid;
  };

  return (
    <div style={styles.pageContainer}>
        <div style={styles.container}>
            <h1 style={styles.mainHeading}>JIU CABINET</h1>
            
            <div style={getGridStyle()}>
                {cabinetMembers.map((member) => (
                    <MemberCard key={member.name} member={member} onClick={handleCardClick} />
                ))}
            </div>
        </div>

        <Modal member={selectedMember} onClose={handleCloseModal} />
    </div>
  );
};

export default JIUCabinet;