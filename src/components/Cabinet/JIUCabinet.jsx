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

// --- DATA FOR THE CABINET MEMBERS ---
// NOTE: Replace the `imageUrl` placeholders with your actual image paths.
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
        title: 'Chair of Liberal Arts & Sciences',
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
     headingContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2rem',
    },
    headingLine: {
        width: '4px',
        height: '40px',
        backgroundColor: '#25A9E0', // A nice light blue
        marginRight: '1rem',
    },
    mainHeading: {
        fontSize: '2.5rem',
        fontWeight: 'normal',
        color: '#000000',
        letterSpacing: '0.1em',
        margin: 0, // Remove default margin from h1
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
        borderRadius: '8px', // Add rounded corners
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    },
    memberImage: {
        width: '100%',
        height: '400px', // A fixed height for uniform cards
        display: 'block',
        objectFit: 'cover', // Ensures the image covers the area without distortion
        objectPosition: 'center', // Center the image within the frame
    },
    memberInfo: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0) 100%)',
        color: 'white',
        padding: '2.5rem 1rem 1rem 1rem',
    },
    memberName: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
    },
    memberTitle: {
        fontSize: '0.9rem',
        textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
        opacity: 0.9,
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
      return { ...styles.grid, gridTemplateColumns: 'repeat(3, 1fr)' };
    }
    if (windowWidth >= 640) {
      return { ...styles.grid, gridTemplateColumns: 'repeat(2, 1fr)' };
    }
    return styles.grid;
  };

  return (
    <div style={styles.pageContainer}>
        <div style={styles.container}>
            <div style={styles.headingContainer}>
                <div style={styles.headingLine}></div>
                <h1 style={styles.mainHeading}>CABINET MEMBERS</h1>
            </div>
            
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