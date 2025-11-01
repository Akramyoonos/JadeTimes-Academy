import React from 'react';
import GraduateDegree01 from '../../assets/Images/VisualStorytellingImg.webp';
import GraduateDegree02 from '../../assets/Images/HistoryofCinemaImg.webp';
import undergraduateDegree01 from '../../assets/Images/AdvanceScriptwritingImg.webp';
import undergraduateDegree02 from '../../assets/Images/ColorGradingCorrectionImg.webp';
import undergraduateDegree03 from '../../assets/Images/ProducingFinancingFilmsImg.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

// --- CHANGE: Added href property to each degree program ---
const degreePrograms = [
    {
        title: "The Art of Visual Storytelling",
        imageUrl: GraduateDegree01,
        altText: "A woman operating a large film camera.",
    },
    {
        title: "History of Cinema",
        imageUrl: GraduateDegree02,
        altText: "A man in a denim jacket operating a film camera on a tripod in a smoky room.",
    },
    {
        title: "Advance Scriptwriting ",
        imageUrl: undergraduateDegree01,
        altText: "A person with two-tone hair wearing a striped shirt operating a camera.",
    },
    {
        title: "Color Grading & Correction",
        imageUrl: undergraduateDegree02,
        altText: "Silhouettes of a film crew in a dimly lit room with a boom mic.",
    },
    {
        title: "Producing & Financing Films",
        imageUrl: undergraduateDegree03,
        altText: "A man in a white t-shirt looking intently at the viewfinder of a RED camera.",
    },
];

// --- CHANGE: Updated DegreeCard to be a clickable link ---
// It now accepts an `href` prop and is wrapped in an anchor `<a>` tag.
const DegreeCard = ({ title, imageUrl, altText }) => (
    <div className="relative group overflow-hidden block cursor-not-allowed">
        <img src={imageUrl} alt={altText} className="w-full h-full object-cover transition-transform duration-2000 ease-in-out group-hover:scale-115" />
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="relative group">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border-2 border-white/30 inline-block">
                    <FontAwesomeIcon icon={faLock} className="text-white text-4xl" />
                </div>
                <div className="absolute bottom-full mb-2 w-max left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="bg-black text-white text-sm px-3 py-1.5 rounded-lg shadow-lg">Coming soon</span>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-black"></div>
                </div>
            </div>
        </div>
        <div className="absolute inset-0 bg-opacity-50 flex items-end p-6 opacity-100 group-hover:opacity-0 transition-opacity duration-700">
            <div>
                <h2 className="text-xl uppercase font-semibold">{title}</h2>
            </div>
        </div>
    </div>
);


const Degrees = () => {
    const firstRowDegrees = degreePrograms.slice(0, 3);
    const secondRowDegrees = degreePrograms.slice(3, 5);

    return (
        <div className="text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-34 py-12">

                <div className="flex items-center mb-8">
                    <div className="w-1.5 h-16 bg-yellow-400 mr-4"></div>
                    <h1 className="text-4xl font-semibold text-black tracking-wider">FILMMAKING DEGREES</h1>
                </div>

            </div>

            <div>
                {/* First row with 3 items */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2 h-140 sm:h-80 md:h-80">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 h-120 sm:h-100 md:h-100">
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