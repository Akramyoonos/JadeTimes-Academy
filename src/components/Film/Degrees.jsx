import React from 'react';
import GraduateDegree01 from '../../assets/Images/GraduateDegree01.jpeg';
import GraduateDegree02 from '../../assets/Images/GraduateDegree02.jpeg';
import undergraduateDegree01 from '../../assets/Images/undergraduateDegree01.jpeg';
import undergraduateDegree02 from '../../assets/Images/undergraduateDegree02.jpeg';
import undergraduateDegree03 from '../../assets/Images/undergraduateDegree03.jpeg';
import onlineDegreeImage from '../../assets/Images/onlineDegreeImage.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Data for the degree programs
const degreePrograms = [
    {
        title: "MASTER OF FINE ARTS (MFA) IN FILMMAKING",
        imageUrl: GraduateDegree01,
        altText: "A woman operating a large film camera."
    },
    {
        title: "MASTER OF ARTS (MA) IN FILMMAKING AND MEDIA PRODUCTION",
        imageUrl: GraduateDegree02,
        altText: "A man in a denim jacket operating a film camera on a tripod in a smoky room."
    },
    {
        title: "BACHELOR OF FINE ARTS (BFA) IN FILMMAKING",
        imageUrl: undergraduateDegree01,
        altText: "A person with two-tone hair wearing a striped shirt operating a camera."
    },
    {
        title: "BACHELOR OF FINE ARTS (BFA) IN ENTERTAINMENT MEDIA",
        imageUrl: undergraduateDegree02,
        altText: "Silhouettes of a film crew in a dimly lit room with a boom mic."
    },
    {
        title: "BACHELOR OF ARTS (BA) IN MEDIA STUDIES",
        imageUrl: undergraduateDegree03,
        altText: "A man in a white t-shirt looking intently at the viewfinder of a RED camera."
    },
    {
        title: "ASSOCIATE OF FINE ARTS (AFA) IN FILMMAKING",
        imageUrl: undergraduateDegree01,
        altText: "A smiling blonde woman holding a camera rig with colorful lights in the background."
    },
];

const onlineDegreeProgram = {
    title: "ONLINE BACHELOR OF FINE ARTS DEGREE IN FILM AND CONTENT CREATION",
    imageUrl: onlineDegreeImage,
    altText: "A person from behind operating a camera with green lighting."
};

// Reusable component for each degree card
const DegreeCard = ({ title, imageUrl, altText }) => (
    <div className="relative group overflow-hidden">
        <img src={imageUrl} alt={altText} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
        <div className="absolute inset-0  bg-opacity-50 flex items-end p-6">
            <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <div className="absolute top-4 right-4 w-10 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 text-2xl font-thin">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
            </div>
        </div>
    </div>
);


const Degrees = () => {
    return (
        <div className=" text-white">
            <div className="container mx-auto px-34 py-12">

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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0.5">
                    {degreePrograms.map((degree) => (
                        <DegreeCard
                            key={degree.title}
                            title={degree.title}
                            imageUrl={degree.imageUrl}
                            altText={degree.altText}
                        />
                    ))}
                </div>

                <div className="mt-0.5">
                    <DegreeCard
                        title={onlineDegreeProgram.title}
                        imageUrl={onlineDegreeProgram.imageUrl}
                        altText={onlineDegreeProgram.altText}
                    />
                </div>

            </div>
        
    );
};

export default Degrees;