import React from 'react';
import GraduateDegree01 from '../../assets/Images/VisualStorytellingImg.webp';
import GraduateDegree02 from '../../assets/Images/HistoryofCinemaImg.webp';
import undergraduateDegree01 from '../../assets/Images/AdvanceScriptwritingImg.webp';
import undergraduateDegree02 from '../../assets/Images/ColorGradingCorrectionImg.webp';
import undergraduateDegree03 from '../../assets/Images/ProducingFinancingFilmsImg.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// --- CHANGE: Added href property to each degree program ---
const degreePrograms = [
    {
        title: "The Art of Visual Storytelling",
        imageUrl: GraduateDegree01,
        altText: "A woman operating a large film camera.",
        href: "/The-Art-of-Visual-Storytelling/"
    },
    {
        title: "History of Cinema",
        imageUrl: GraduateDegree02,
        altText: "A man in a denim jacket operating a film camera on a tripod in a smoky room.",
        href: "/History-of-Cinema/"
    },
    {
        title: "Advance Scriptwriting ",
        imageUrl: undergraduateDegree01,
        altText: "A person with two-tone hair wearing a striped shirt operating a camera.",
        href: "/Advance-Scriptwriting/"
    },
    {
        title: "Color Grading & Correction",
        imageUrl: undergraduateDegree02,
        altText: "Silhouettes of a film crew in a dimly lit room with a boom mic.",
        href: "/Color-Grading-&-Correction/"
    },
    {
        title: "Producing & Financing Films",
        imageUrl: undergraduateDegree03,
        altText: "A man in a white t-shirt looking intently at the viewfinder of a RED camera.",
        href: "/Producing-&-Financing-Films/"
    },
];

// --- CHANGE: Updated DegreeCard to be a clickable link ---
// It now accepts an `href` prop and is wrapped in an anchor `<a>` tag.
const DegreeCard = ({ title, imageUrl, altText, href }) => (
    <a href={href} className="relative group overflow-hidden block">
        <img src={imageUrl} alt={altText} className="w-full h-full object-cover transition-transform duration-2000 ease-in-out group-hover:scale-115" />
        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-700"></div>
        <div className="absolute inset-0 bg-opacity-50 flex items-end p-6">
            <div>
                <h2 className="text-xl uppercase font-semibold">{title}</h2>
                <div className="absolute top-4 right-4 w-10 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 text-2xl font-thin">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
            </div>
        </div>
    </a>
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

            <div>
                {/* First row with 3 items */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-2 h-140 sm:h-80 md:h-80">
                    {firstRowDegrees.map((degree) => (
                        <DegreeCard
                            key={degree.title}
                            title={degree.title}
                            imageUrl={degree.imageUrl}
                            altText={degree.altText}
                            href={degree.href} // --- CHANGE: Passed href prop ---
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
                            href={degree.href} // --- CHANGE: Passed href prop ---
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Degrees;