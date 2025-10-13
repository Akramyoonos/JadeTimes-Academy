import React from "react";

const AcademicCalendarSimple = () => {
  return (
<div className="min-h-screen bg-white flex flex-col items-start justify-start px-10 md:px-20 py-10 -mt-50">



      {/* --- Title --- */}
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 border-l-4 border-purple-800 h-20 pl-6 mb-12">
        2025-2026 ACADEMIC CALENDAR
      </h2>


      {/* --- Button --- */}
      <a
        href="#"
        className="bg-sky-400 hover:bg-sky-500 hover:underline text-black font-semibold tracking-wide px-8 py-4  transition-all duration-300"
      >
        VIEW THE 2025-2026 ACADEMIC CALENDAR HERE
      </a>
    </div>
  );
};

export default AcademicCalendarSimple;
