import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

// Hint: Make sure to import your images correctly
import facultyDataImages01 from "../../assets/Images/facultyDataImages01.webp";
import facultyDataImages02 from "../../assets/Images/facultyDataImages02.webp";

// --- Reusable Modal Component ---
const FacultyModal = ({ faculty, onClose }) => {
  if (!faculty) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <div className="p-8 flex items-start gap-6 overflow-y-auto">
          <div
            className="w-1.5 bg-fuchsia-500 self-stretch"
            aria-hidden="true"
          ></div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {faculty.name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {faculty.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const facultyData = [
    {
      id: 1,
      name: "Andrea Swift",
      title: "Chair of Filmmaking Department",
      image: facultyDataImages01,
      bio: "A cinematic storyteller with more than 20 years experience, Swift has served as executive producer and director of PBS’ Emmy-nominated documentary series, In the Life. Her films have screened at the United Nations Earth Summit and festivals worldwide, including Berlin International Film Festival (Best Short Film), Raindance Film Festival (Best of Festival Selection), CIFF, and Chicago International Film Festival (Silver). She has created content for AMC, History, WE, the NY Knicks and Madison Square Garden; and has directed and written for top talent including Oscar winner Susan Sarandon, nominees Laura Linney, Patricia Clarkson, and Lesley Gore, and Tony Award and Emmy Award winners including Alan Cumming.",
    },
    {
      id: 2,
      name: "Edward Timpe",
      title: "Co-Chair of Film Arts Department",
      image: facultyDataImages02,
      bio: "Edward Timpe is an accomplished filmmaker and educator with extensive experience in cinematography and directing. His work has been featured in numerous film festivals, and he is known for his hands-on approach to teaching, helping students to master both the technical and artistic aspects of filmmaking. He is dedicated to mentoring the next generation of visual storytellers.",
    },
  ];

  const openModal = (faculty) => {
    setSelectedFaculty(faculty);
  };

  const closeModal = () => {
    setSelectedFaculty(null);
  };

  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-34 py-16">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4">
            <div className="w-1 bg-blue-500 h-16"></div>
            <h1 className="text-4xl font-light text-gray-800 tracking-wider">
              FILM
              <br />
              SCHOOL FACULTY
            </h1>
          </div>
        </div>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-6xl ">
            The award-winning faculty at JIU's Film School actively work in the
            film, television, and entertainment industries, possessing a wealth
            of experience in directing, screenwriting, acting for film and
            stage, cinematography, editing, sound design, and producing. JIU's
            faculty are passionate professionals who live and breathe film,
            providing the guidance and expertise necessary for students to hone
            their craft and build their confidence as visual storytellers.
          </p>
        

        {/* --- UPDATED: Grid and gap classes for better responsiveness --- */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {facultyData.map((faculty) => (
            <div
              key={faculty.id}
              // --- UPDATED: Removed fixed width (w-86) ---
              className="group bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl  "
            >
              <div className="relative h-80">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-40"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {faculty.name}
                </h3>
                <p className="text-blue-600">{faculty.title}</p>
                <button
                  onClick={() => openModal(faculty)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold transition-colors duration-300 hover:bg-blue-600"
                >
                  View Bio
                </button>
              </div>
            </div>
          ))}

          {/* --- UPDATED: Removed fixed width/height and added classes to align with other cards --- */}
          <a
            href="/faculty-directory/"
            className="bg-gray-50 flex flex-col items-center justify-center text-center p-6 transition-transform duration-300 hover:shadow-xl  min-h-[450px]"
          >
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-blue-500 text-3xl"
                />
              </div>
              <p className="text-xl font-semibold text-gray-800">View More</p>
            </div>
          </a>
        </div>
      </div>

      <FacultyModal faculty={selectedFaculty} onClose={closeModal} />
    </div>
  );
};

export default Faculty;