import React, { useState, useEffect, useRef } from "react";
import ProgramDisplay from "./ProgramDisplay";
import BlogHeadingImg1 from "../../assets/Images/FilmImg.webp";
import BlogHeadingImg2 from "../../assets/Images/MediaArtsImg.webp";
import BlogHeadingImg3 from "../../assets/Images/PerformingArtsImg.webp";
import BlogHeadingImg4 from "../../assets/Images/CreativeExpressionImg.webp";
import BlogHeadingImg5 from "../../assets/Images/JournalismImg.webp";
import BlogHeadingImg6 from "../../assets/Images/CommunivationImg.webp";
import BlogHeadingImg7 from "../../assets/Images/DigitalMediaImg.webp";
import BlogHeadingImg8 from "../../assets/Images/TechnologyImg.webp";
import BlogHeadingImg9 from "../../assets/Images/InteractiveMediaImg.webp";
import BlogHeadingImg10 from "../../assets/Images/EntertainmentMediaImg.webp";
import BlogHeadingImg11 from "../../assets/Images/PsychologyImg.webp";
import BlogHeadingImg12 from "../../assets/Images/HumanBehaviorImg.webp";
import BlogHeadingImg13 from "../../assets/Images/MarketingImg.webp";

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

// Helper function to create a URL-friendly slug
const createSlug = (text) => {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

const programCourses = {
  "FILM": [
    { name: "The Art of Visual Storytelling", href: `/The-Art-of-Visual-Storytelling/${createSlug("")}` },
    { name: "History of Cinema", href: `/History-of-Cinema/${createSlug("")}` },
    { name: "Advance Scriptwriting", href: `/Advance-Scriptwriting/${createSlug("")}` },
    { name: "Color Grading & Correction", href: `/Color-Grading-&-Correction/${createSlug("")}` },
    { name: "Producing & Financing Films", href: `/Producing-&-Financing-Films/${createSlug("")}` },
  ],
  "MEDIA ARTS": [
    { name: "Master of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Master of Fine Arts in Media Arts")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
  "PERFORMING ARTS": [
    { name: "Master of Fine Arts in Performing Arts", href: `/programs/performing-arts/${createSlug("Master of Fine Arts in Performing Arts")}` },
    { name: "Bachelor of Fine Arts in Performing Arts", href: `/programs/performing-arts/${createSlug("Bachelor of Fine Arts in Performing Arts")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
  "CREATIVE EXPRESSION": [
    { name: "Bachelor of Fine Arts in Creative Expression", href: `/programs/creative-expression/${createSlug("Bachelor of Fine Arts in Creative Expression")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
  "JOURNALISM": [
    { name: "Bachelor of Arts in Journalism", href: `/programs/journalism/${createSlug("Bachelor of Arts in Journalism")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
  "COMMUNICATION": [
    { name: "Bachelor of Arts in Communication", href: `/programs/communication/${createSlug("Bachelor of Arts in Communication")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
  "DIGITAL MEDIA": [
    { name: "Master of Arts in Digital Media", href: `/programs/digital-media/${createSlug("Master of Arts in Digital Media")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
  "TECHNOLOGY": [
    { name: "Bachelor of Science in Technology", href: `/programs/technology/${createSlug("Bachelor of Science in Technology")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
  "INTERACTIVE MEDIA": [
    { name: "Bachelor of Science in Interactive Media", href: `/programs/interactive-media/${createSlug("Bachelor of Science in Interactive Media")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
  "ENTERTAINMENT MEDIA": [
    { name: "Master of Arts in Entertainment Media", href: `/programs/entertainment-media/${createSlug("Master of Arts in Entertainment Media")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
  "PSYCHOLOGY": [
    { name: "Bachelor of Science in Psychology", href: `/programs/psychology/${createSlug("Bachelor of Science in Psychology")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
  "HUMAN BEHAVIOR": [
    { name: "Bachelor of Science in Human Behavior", href: `/programs/human-behavior/${createSlug("Bachelor of Science in Human Behavior")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
  "MARKETING": [
    { name: "Bachelor of Business Administration in Marketing", href: `/programs/marketing/${createSlug("Bachelor of Business Administration in Marketing")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
    { name: "Bachelor of Fine Arts in Media Arts", href: `/programs/media-arts/${createSlug("Bachelor of Fine Arts in Media Arts")}` },
    { name: "1-Year Media Arts Program", href: `/programs/media-arts/${createSlug("1-Year Media Arts Program")}` },
  ],
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
          className="mb-8 bg-purple-600 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-purple-700 "
        >
          &larr; Back to Programs
        </button>
        {renderProgramContent()}
      </div>
    );
  }

  return (
    <div ref={programsSectionRef} className="bg-gray-50 font-sans py-16 px-6 sm:px-6 md:px-6 lg:px-34 shadow-inner">
      {/* Heading */}
      <div className="flex items-center mb-12">
        <div className="w-1.5 h-24 bg-purple-600 mr-6  shadow-md"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 leading-tight tracking-tight">
          DEGREE PROGRAMS, CONSERVATORY PROGRAMS, SHORT-
          <br />
          TERM WORKSHOPS
        </h1>
      </div>

      <div className="bg-white p-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white  shadow-md overflow-hidden transform transition-all duration-300 cursor-pointer"
              onClick={() => handleProgramClick(program.name)}
            >
              <div className="w-full h-64 bg-gray-200  overflow-hidden">
                <img
                  src={program.imageUrl}
                  alt={program.name}
                  className="w-full h-full object-cover transform transition-transform duration-2500 hover:scale-130"
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