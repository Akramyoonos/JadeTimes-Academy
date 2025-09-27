import React, { useState, useEffect, useRef } from "react";
import ProgramDisplay from "./ProgramDisplay";
import BlogHeadingImg1 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg2 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg3 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg4 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg5 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg6 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg7 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg8 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg9 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg10 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg11 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg12 from "../../assets/Images/BlogHeadingImg.jpeg";
import BlogHeadingImg13 from "../../assets/Images/BlogHeadingImg.jpeg";

const programs = [
  { name: "FILM", imageUrl: BlogHeadingImg1 },
  { name: "MEDIA ARTS", imageUrl: BlogHeadingImg2 },
  { name: "PERFORMING ARTS", imageUrl: BlogHeadingImg3 },
  { name: "CREATIVE EXPRESSION", imageUrl: BlogHeadingImg4 },
  { name: "JOURNALISM", imageUrl: BlogHeadingImg5 },
  { name: "COMMUNICATION", imageUrl: BlogHeadingImg6 },
  { name: "DIGITAL MEDIA", imageUrl: BlogHeadingImg7 },
  { name: "TECHNOLOGY", imageUrl: BlogHeadingImg8 },
  { name: "INTERACTIVE MEDIA", imageUrl: BlogHeadingImg9 },
  { name: "ENTERTAINMENT MEDIA", imageUrl: BlogHeadingImg10 },
  { name: "PSYCHOLOGY", imageUrl: BlogHeadingImg11 },
  { name: "HUMAN BEHAVIOR", imageUrl: BlogHeadingImg12 },
  { name: "MARKETING", imageUrl: BlogHeadingImg13 },
];

const programCourses = {
  "FILM": [
    "Master of Fine Arts in 3D Animation & VFX",
    "Bachelor of Fine Arts in 3D Animation & VFX",
    "1-Year 3D Animation & VFX Program",
  ],
  "MEDIA ARTS": [
    "Master of Fine Arts in Media Arts",
    "Bachelor of Fine Arts in Media Arts",
    "1-Year Media Arts Program",
  ],
  "PERFORMING ARTS": [
    "Master of Fine Arts in Performing Arts",
    "Bachelor of Fine Arts in Performing Arts",
  ],
  "CREATIVE EXPRESSION": ["Bachelor of Fine Arts in Creative Expression"],
  "JOURNALISM": ["Bachelor of Arts in Journalism"],
  "COMMUNICATION": ["Bachelor of Arts in Communication"],
  "DIGITAL MEDIA": ["Master of Arts in Digital Media"],
  "TECHNOLOGY": ["Bachelor of Science in Technology"],
  "INTERACTIVE MEDIA": ["Bachelor of Science in Interactive Media"],
  "ENTERTAINMENT MEDIA": ["Master of Arts in Entertainment Media"],
  "PSYCHOLOGY": ["Bachelor of Science in Psychology"],
  "HUMAN BEHAVIOR": ["Bachelor of Science in Human Behavior"],
  "MARKETING": ["Bachelor of Business Administration in Marketing"],
};

const ProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const programsSectionRef = useRef(null);

  useEffect(() => {
    if (selectedProgram && programsSectionRef.current) {
      programsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedProgram]);

  const handleProgramClick = (programName) => {
    setSelectedProgram(programName);
  };

  const renderProgramContent = () => {
    if (selectedProgram && programCourses[selectedProgram]) {
      return (
        <ProgramDisplay
          programName={selectedProgram}
          courses={programCourses[selectedProgram]}
        />
      );
    }
    return null;
  };

  if (selectedProgram) {
    return (
      <div ref={programsSectionRef} className="bg-gray-50 font-sans py-16 px-6 sm:px-12 lg:px-10 shadow-inner">
        <button
          onClick={() => setSelectedProgram(null)}
          className="mb-8 bg-purple-600 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          &larr; Back to Programs
        </button>
        {renderProgramContent()}
      </div>
    );
  }

  return (
    <div ref={programsSectionRef} className="bg-gray-50 font-sans py-16 px-6 sm:px-12 lg:px-10  shadow-inner">
      {/* Heading */}
      <div className="flex items-center mb-12">
        <div className="w-2 h-24 bg-purple-600 mr-6  shadow-md"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 leading-tight tracking-tight">
          DEGREE PROGRAMS, CONSERVATORY PROGRAMS, SHORT-
          <br />
          TERM WORKSHOPS
        </h1>
      </div>

      <div className="bg-white p-8  shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white  shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => handleProgramClick(program.name)}
            >
              <div className="w-full h-64 bg-gray-200  overflow-hidden">
                <img
                  src={program.imageUrl}
                  alt={program.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-purple-700 transition-colors duration-200">
                  {program.name}
                </h2>
                <span
                  className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 ro text-sm font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Learn More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;