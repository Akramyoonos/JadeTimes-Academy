import React from "react";

const ViewAcademicCalendar = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-24 py-16">
      {/* --- Title Section --- */}
      
      <div className="max-w-5xl mx-auto ml-10 ">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 border-l-4 border-sky-500 pl-4 mb-15">
          VIEW YOUR <br /> ACADEMIC CALENDAR
        </h2>
       

        {/* --- Description --- */}
        <div className="space-y-2 text-gray-600 mb-12 w-full text-lg">
        <p>
          Completion dates may vary depending on the production and post-production schedule of students’ final film projects and performances.
        </p>

        <p className="italic">
          All sessions will have a holiday recess.
        </p>

        <p>
          To find out the semester start and completion dates and your programs holiday breaks please select your program start date below (the year your program began).
        </p>
      </div>


        {/* --- Dropdown Section --- */}
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          <select
            className="w-full md:w-1/3 border border-gray-300  px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            defaultValue=""
          >
            <option value="" disabled>
              SELECT A DISCIPLINE
            </option>
            <option>Filmmaking</option>
            <option>Producing</option>
            <option>Cinematography</option>
            <option>3D Animation</option>
            <option>Digital Editing</option>
            <option>Musical Theatre</option>
            <option>Acting for Film</option>
            <option>Screenwriting</option>
            <option>Photography</option>
            <option>Game Design</option>
            <option>Virtual Reality</option>
            <option>Documentary Filmmaking</option>


          </select>

          <select
            className="w-full md:w-1/3 border border-gray-300  px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            defaultValue=""
          >
            <option value="" disabled>
              SELECT PROGRAM TYPE
            </option>
            <option>Bachelor of Fine Arts</option>
            <option>Bachelor of Arts</option>
            <option>Associate of Fine Arts</option>
            <option>Master of Fine Arts</option>
            <option>Master of Arts</option>
            <option>Masters of Arts Online</option>
            <option>International Pathways Program</option>
            <option>2-Year Certificate Program</option>
            <option>1-Year Certificate Program</option>
            <option>Short-Term Workshop</option>
            <option>Online Short-Term Workshop</option>
            <option>Teen Campus</option>
            <option>Kids Campus</option>
          </select>

          <select
            className="w-full md:w-1/3 border border-gray-300  px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            defaultValue=""
          >
            <option value="" disabled>
              PROGRAM START DATE
            </option>
            <option>2025</option>
            <option>2026</option>
           
          </select>


         {/* Search Button */}
        <button
          className="flex-shrink-0 w-full md:w-52 bg-sky-500 hover:bg-sky-600 
                     text-white font-semibold tracking-wide uppercase 
                     py-4 px-6 transition duration-200"
        >
          SEARCH
        </button>

        </div>
      </div>
    </div>
  );
};

export default ViewAcademicCalendar;
