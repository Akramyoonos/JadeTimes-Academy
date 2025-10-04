import React from 'react';
import GraduateDegree01 from '../../assets/Images/GraduateDegree01.jpeg';
import GraduateDegree02 from '../../assets/Images/GraduateDegree02.jpeg';
import undergraduateDegree01 from '../../assets/Images/undergraduateDegree01.jpeg';
import undergraduateDegree02 from '../../assets/Images/undergraduateDegree02.jpeg';
import undergraduateDegree03 from '../../assets/Images/undergraduateDegree03.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Data for the degree programs
const degreePrograms = [
    {
        title: "The Art of Visual Storytelling",
        imageUrl: GraduateDegree01,
        altText: "A woman operating a large film camera."
    },
    {
        title: "History of Cinema",
        imageUrl: GraduateDegree02,
        altText: "A man in a denim jacket operating a film camera on a tripod in a smoky room."
    },
    {
        title: "Advance Scriptwriting ",
        imageUrl: undergraduateDegree01,
        altText: "A person with two-tone hair wearing a striped shirt operating a camera."
    },
    {
        title: "Color Grading & Correction",
        imageUrl: undergraduateDegree02,
        altText: "Silhouettes of a film crew in a dimly lit room with a boom mic."
    },
    {
        title: "Producing & Financing Films",
        imageUrl: undergraduateDegree03,
        altText: "A man in a white t-shirt looking intently at the viewfinder of a RED camera."
    },
];

// Reusable component for each degree card
const DegreeCard = ({ title, imageUrl, altText }) => (
    <div className="relative group overflow-hidden">
        <img src={imageUrl} alt={altText} className="w-full h-full object-cover transition-transform duration-2000 ease-in-out group-hover:scale-115" />
        {/* Added bg-black for better text visibility */}
        <div className="absolute inset-0  bg-opacity-50 flex items-end p-6">
            <div>
                <h2 className="text-xl uppercase font-semibold">{title}</h2>
                <div className="absolute top-4 right-4 w-10 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 text-2xl font-thin">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
            </div>
        </div>
    </div>
);


const Degrees = () => {
    // --- CHANGE: Split the array into two parts for a 3x2 layout ---
    const firstRowDegrees = degreePrograms.slice(0, 3);
    const secondRowDegrees = degreePrograms.slice(3, 5);

    return (
        <div className="text-white">
            {/* Using responsive padding for better layout on different screen sizes */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="flex items-center mb-8">
                    <div className="w-1.5 h-16 bg-yellow-400 mr-4"></div>
                    <h1 className="text-4xl font-semibold text-black tracking-wider">FILMMAKING DEGREES</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6 text-black">
                        <p>
                            The filmmaking degrees at JIU's Film School provide students with a well-rounded education that fully supports their development as directors and filmmakers. In our hands-on programs, students create a number of original films and content, gaining hands-on training and experience on a film set.
                        </p>
                    </div>
                    <div className="space-y-6 text-black">
                        <p>
                            Through large-scale production workshops and rigorous coursework, degree students develop a practical skill set that incorporates all major aspects of the filmmaking craft, as well as emerging storytelling mediums such as web series, podcasts, virtual reality, commercials, and music videos. Students also take liberal arts courses closely related to filmmaking, preparing them to develop their unique stories and express themselves cinematically.
                        </p>
                        <p>
                            Our degree students fully explore and gain mastery of filmmaking and visual content, developing their individual style and artistic voice. Students who fully commit to their program emerge with a wealth of experience and expertise in filmmaking, as well as a reel with their own films and video content.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- CHANGE: Using two separate grid containers for each row --- */}
            <div>
                {/* First row with 3 items */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2">
                    {firstRowDegrees.map((degree) => (
                        <DegreeCard
                            key={degree.title}
                            title={degree.title}
                            imageUrl={degree.imageUrl}
                            altText={degree.altText}
                        />
                    ))}
                </div>

                {/* Second row with 2 items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 h-80">
                    {secondRowDegrees.map((degree) => (
                        <DegreeCard
                            key={degree.title}
                            title={degree.title}
                            imageUrl={degree.imageUrl}
                            altText={degree.altText}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Degrees;