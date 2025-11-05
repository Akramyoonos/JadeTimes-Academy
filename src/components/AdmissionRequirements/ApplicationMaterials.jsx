import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-900 hover:text-gray-700 focus:outline-none"
      >
        {title}
        <FaChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-700 leading-relaxed">{children}</div>
      )}
    </div>
  );
};

const ApplicationMaterials = () => {
  return (
    <div className="bg-white font-sans text-gray-900 py-16 sm:py-20">
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          {/* Heading with yellow bar */}
          <div className="flex items-center mb-8">
            <div className="w-1 h-12 bg-yellow-400 mr-4"></div>
            <h2 className="text-3xl sm:text-4xl font-light">
              APPLICATION MATERIALS
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-10 max-w-4xl">
            Upon completing an application to JIU, students will be assigned an
            admissions counselor. Admissions counselors will guide students
            through the admissions process, and provide instructions for
            submitting application materials digitally. Please note that only
            transcripts may be submitted via mail. Email is preferred. Once a
            graduate student is admitted to JIU, they must pay a required
            deposit to secure their place.
          </p>

          {/* Address Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">JIU New York</h3>
            <p className="text-gray-800 whitespace-pre-line">
              JIU New York Mailing Address: <br />
              JIU / New York Film Academy
              <br />
              Office of Admissions
              <br />
              17 Battery Place, 5th Floor
              <br />
              New York, NY 10004
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">JIU Los Angeles</h3>
            <p className="text-gray-800 whitespace-pre-line">
              JIU Los Angeles Mailing Address: <br />
              JIU / New York Film Academy
              <br />
              Office of Admissions
              <br />
              3300 Riverside Dr.
              <br />
              Burbank, CA 91505
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              ESL and Non-Native Speakers
            </h3>
            <p className="text-gray-800">
              The ESL School at JIU offers English language classes to prepare
              non-native speakers for their program. To learn more, visit our
              ESL page.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-2">
              International Pathways Program
            </h3>
            <p className="text-gray-800">
              If you are a non-native English-speaking student who meets all
              admissions requirements for a JIU degree program, except for
              English proficiency,
              <br />
              apply to our International Pathway Program.
            </p>
          </div>

          {/* Accordion Section */}
          <div className="mt-10">
            <AccordionItem title="Admission Stipulation">
              <p>
               Please note that admission to any New York Film Academy program is based upon applicant information received during the admissions process. If,<br /> 
               however, a student, after having been admitted but before starting classes, demonstrates that he or she is not fully prepared to commence studies at<br /> 
               the Academy, JIU will meet with the student to determine a proper course of action. This may include additional testing or instruction, deferring<br /> 
               enrollment to a later semester, or enrollment in a different program of study better suited to the student.
              </p>
            </AccordionItem>

            <AccordionItem title="Health Requirements">
              <p>
               To learn more about JIU’s health requirements, please click here.
              </p>
            </AccordionItem>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationMaterials;
