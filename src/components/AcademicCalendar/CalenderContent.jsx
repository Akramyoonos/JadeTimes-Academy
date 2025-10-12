import React, { useState } from 'react';

// ===============================================
// Custom Discipline Dropdown Component Logic
// ===============================================

const disciplineOptions = [
  'SELECT A DISCIPLINE',
  'Filmmaking',
  'Producing',
  'Cinematography',
  '3D Animation',
  'Digital Editing',
  'Musical Theatre',
  'Acting for Film',
  'Screenwriting',
  'Photography',
  'Game Design',
  'Virtual Reality',
  'Documentary Filmmaking',
];

const DisciplineDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(disciplineOptions[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

 
  return (
    <div className="relative flex-1 border-r border-gray-300">
      
      {/* Custom Select Input (Visible part of the dropdown) */}
      <button
        type="button"
        className="flex justify-between items-center w-full px-6 py-4 text-sm tracking-wide uppercase text-gray-700 bg-white cursor-pointer 
                   focus:outline-none focus:ring-0"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)} // Close on blur, delayed to allow click on option
      >
        <span>{selectedOption}</span>
        
        {/* Custom Arrow Icon */}
        <span className={`text-xl leading-none transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>


      {/* Custom Dropdown Menu (The part that opens) */}
      {isOpen && (
        <div className="absolute top-full left-0 z-20 w-[calc(100%+1px)] bg-white shadow-xl border border-gray-300 mt-0.5">
          <div className="max-h-64 overflow-y-auto">
            {disciplineOptions.map((option, index) => (
              <div
                key={index}
                className={`px-6 py-3 text-gray-800 cursor-pointer text-base whitespace-nowrap 
                            ${(option === selectedOption && option !== 'SELECT A DISCIPLINE') || index === 0
                              ? 'bg-sky-500 text-white' // Highlight the default/selected option in blue
                              : 'hover:bg-gray-100' // Subtle hover for other options
                            }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ===============================================
// Custom Program Type Dropdown Component Logic
// ===============================================

const programTypeOptions = [
  'SELECT PROGRAM TYPE',
  'Bachelor of Fine Arts',
  'Bachelor of Arts',
  'Associate of Fine Arts',
  'Master of Fine Arts',
  'Master of Arts',
  'Masters of Arts Online',
  'International Pathways Program',
  '2-Year Certificate Program',
  '1-Year Certificate Program',
  'Short-Term Workshop',
  'Online Short-Term Workshop',
  'Teen Campus',
  'Kids Campus',


];

const ProgramTypeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(programTypeOptions[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

 
  return (
    <div className="relative flex-1 border-r border-gray-300">
      
      {/* Custom Select Input (Visible part of the dropdown) */}
      <button
        type="button"
        className="flex justify-between items-center w-full px-6 py-4 text-sm tracking-wide uppercase text-gray-700 bg-white cursor-pointer 
                   focus:outline-none focus:ring-0"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)} // Close on blur, delayed to allow click on option
      >
        <span>{selectedOption}</span>
        {/* Custom Arrow Icon */}
        <span className={`text-xl leading-none transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>

      {/* Custom Dropdown Menu (The part that opens) */}
      {isOpen && (
        <div className="absolute top-full left-0 z-20 w-[calc(100%+1px)] bg-white shadow-xl border border-gray-300 mt-0.5">
          <div className="max-h-64 overflow-y-auto">
            {programTypeOptions.map((option, index) => (
              <div
                key={index}
                className={`px-6 py-3 text-gray-800 cursor-pointer text-base whitespace-nowrap 
                            ${(option === selectedOption || index === 0) 
                              ? 'bg-sky-500 text-white' // Highlight the default/selected option in blue
                              : option === 'Master of Fine Arts' 
                                ? 'text-sky-600 hover:bg-gray-100' // Custom blue text for "Master of Fine Arts" (as per screenshot)
                                : 'hover:bg-gray-100' // Subtle hover for standard options
                            }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


// ===============================================
// Custom Program Start Date Dropdown Component Logic 
// ===============================================

const programStartDateOptions = [
  'PROGRAM START DATE',
  '2025',
  '2026',
];

const ProgramStartDateDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(programStartDateOptions[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


  return (
    <div className="relative flex-1">
      
      {/* Custom Select Input (Visible part of the dropdown) */}
      <button
        type="button"
        className="flex justify-between items-center w-full px-6 py-4 text-sm tracking-wide uppercase text-gray-700 bg-white cursor-pointer 
                   focus:outline-none focus:ring-0"
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)} // Close on blur, delayed to allow click on option
      >
        <span>{selectedOption}</span>
        {/* Custom Arrow Icon */}
        <span className={`text-xl leading-none transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>

      {/* Custom Dropdown Menu (The part that opens) */}
      {isOpen && (
        <div className="absolute top-full right-0 z-20 w-[calc(100%+1px)] bg-white shadow-xl border border-gray-300 mt-0.5">
          <div className="max-h-64 overflow-y-auto">
            {programStartDateOptions.map((option, index) => (
              <div
                key={index}
                className={`px-6 py-3 text-gray-800 cursor-pointer text-base whitespace-nowrap 
                            ${(option === selectedOption || index === 0) 
                              ? 'bg-sky-500 text-white' 
                              : 'hover:bg-gray-100' 
                            }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


// ===============================================
// Main Calendar Content Component
// ===============================================
const CalendarContent = () => {
  return (
    
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f8f9fa;
          }
        `}
      </style>



      {/* ========================================
        1. VIEW YOUR ACADEMIC CALENDAR Header 
        ========================================
      */}

      <div className="flex items-start mb-8">
     
        <div className="h-20 w-1 bg-cyan-400 mr-4 mt-1"></div>
        
        <div>
          <h2 className="text-4xl font-semibold text-gray-800 tracking-tight">
            VIEW YOUR <br />ACADEMIC CALENDAR
          </h2>
        </div>
      </div>


       {/* ========================================
        2. Introductory Text
        ========================================
      */}
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
      

     {/* ========================================
        3. Dropdown/Form Section - WIDTH INCREASED TO FULL
      ======================================== */}
      <div className="flex flex-col md:flex-row mb-24 w-full mx-auto">
        
      <div className="flex flex-1 border border-gray-300">

          {/* 1. Select a Discipline  */}
          <DisciplineDropdown />

          {/* 2. Select Program Type  */}
          <ProgramTypeDropdown />

          {/* 3. Program Start Date  */}
          <ProgramStartDateDropdown />

        </div>


        {/* Search Button */}
        <button
          className="flex-shrink-0 w-full md:w-52 bg-sky-500 hover:bg-sky-600 
                     text-white font-semibold tracking-wide uppercase 
                     py-4 px-6 transition duration-200"
        >
          SEARCH
        </button>
      </div>



      {/* ========================================
        4. 2025-2026 ACADEMIC CALENDAR Header and Button
        ========================================
      */}
      <div className="mb-16">
        <div className="flex items-start mb-15">
          <div className="h-15 w-1 bg-fuchsia-600 mr-4 mt-1"></div>
         <h2 className="text-4xl font-semibold text-gray-800 tracking-tight">
            2025–2026 ACADEMIC CALENDAR
          </h2>
        </div>

        <a 
          href="#"
          className="inline-block bg-sky-500 hover:underline text-black font-semibold 
                     py-3 px-4 ml-5 text-sm uppercase transition duration-200 mb-20"
          style={{ letterSpacing: '0.05em' }}
        >
          VIEW THE 2025-2026 ACADEMIC CALENDAR HERE
        </a>
      </div>


      {/* ========================================
        5. 2025 NATIONAL HOLIDAYS Header
        ========================================
      */}
      <div className="flex items-start mb-12">
        <div className="h-20 w-1 bg-fuchsia-600 mr-4 mt-1"></div>
         <h2 className="text-4xl font-semibold text-gray-800 tracking-tight">
          2025 NATIONAL <br />HOLIDAYS
        </h2>
      </div>
      

{/* ========================================
        Holidays Table
        ========================================
      */}
      <div className="mb-12 w-full mx-auto">
        <table className="w-full text-left border-collapse">
          
          <thead>
            <tr className="bg-gray-900 text-white text-base">
              <th className="py-3 px-4 font-semibold w-1/2">HOLIDAY</th>
              <th className="py-3 px-4 font-semibold w-1/2">DATES</th>
            </tr>
          </thead>
          
          <tbody>
            <tr className="border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Martin Luther King, Jr. Day</td><td className="py-3 px-4 text-gray-800">Monday, January 20th, 2025</td></tr>
            <tr className="bg-gray-50 border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Good Friday*</td><td className="py-3 px-4 text-gray-800">Friday, April 18th, 2025</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Memorial Day</td><td className="py-3 px-4 text-gray-800">Monday, May 26th, 2025</td></tr>
            <tr className="bg-gray-50 border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Juneteenth</td><td className="py-3 px-4 text-gray-800">Thursday, June 19th, 2025</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Fourth of July</td><td className="py-3 px-4 text-gray-800">Friday, July 4th, 2025</td></tr>
            <tr className="bg-gray-50 border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Labor Day</td><td className="py-3 px-4 text-gray-800">Monday, September 1st, 2025</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Rosh Hashanah</td><td className="py-3 px-4 text-gray-800">Starts 5pm Monday, September 22nd, 2025 (All day Tuesday, September 23rd, 2025)</td></tr>
            <tr className="bg-gray-50 border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Yom Kippur</td><td className="py-3 px-4 text-gray-800">Starts 5pm Wednesday, October 1st, 2025 (All Day Thursday, October 2nd, 2025)</td></tr>
            
            <tr className="border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Veteran's Day</td><td className="py-3 px-4 text-gray-800">Tuesday, November 11th, 2025</td></tr>
            <tr className="bg-gray-50 border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Thanksgiving</td><td className="py-3 px-4 text-gray-800">Thursday, November 27th, 2025</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Native American Heritage Day</td><td className="py-3 px-4 text-gray-800">Friday, November 28th, 2025</td></tr>
            <tr className="bg-gray-50 border-b border-gray-200"><td className="py-3 px-4 text-gray-800">Christmas Day</td><td className="py-3 px-4 text-gray-800">Thursday, December 25th, 2025</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-4 text-gray-800">New Year</td><td className="py-3 px-4 text-gray-800">Thursday, January 1st, 2026</td></tr>
          </tbody>
        </table>
      </div>


         {/* ========================================
        6. Asterisk Note Paragraph
        ========================================
      */}
      <div className="w-full mt-4 mb-30">
        <p className="text-sm text-gray-600">
          *Dates that only have an asterisk are days where some programs may have classes but others may not.
        </p>
      </div>



      {/* ========================================
        7. 2025 GRADUATION Header 
        ========================================
      */}
      <div className="w-full px-4 mt-24"> 
        <div className="flex items-start mb-6">
          <div className="h-15 w-1 bg-fuchsia-600 mr-4 mt-1"></div>
          <h2 className="text-4xl font-semibold text-gray-800 tracking-tight mb-20">
            2025 GRADUATION
          </h2>
        </div>
      </div>



       {/* ========================================
        8. Graduation Dates Table 
        ========================================
      */}
      <div className="mb-24 w-full">
        <table className="w-full text-left border-collapse">
          
          <thead>
            <tr className="bg-gray-900 text-white text-base">
              <th className="py-3 px-4 font-semibold w-1/2">HOLIDAY</th>
              <th className="py-3 px-4 font-semibold w-1/2">DATES</th>
            </tr>
          </thead>
          
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-gray-800">NYFA New York</td>
              <td className="py-3 px-4 text-gray-800">TBD</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="py-3 px-4 text-gray-800">NYFA Los Angeles</td>
              <td className="py-3 px-4 text-gray-800">TBD</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 text-gray-800">NYFA Miami</td>
              <td className="py-3 px-4 text-gray-800">TBD</td>
            </tr>
          </tbody>
        </table>
      </div>



     {/* ========================================
        9. Concluding Note/Disclaimer 
        ========================================
      */}
      <div className="w-full px-4 mt-8 mb-24">
        <p className="text-base text-gray-600 leading-relaxed"> 
          <strong className="font-extrabold text-black">**</strong> Costs listed above do not include housing, food, transportation, books, additional necessary supplies or health insurance. Students will also incur additional expenses on their own productions. These expenses will vary depending on the scale of their projects. For more information, please contact our admissions team.
        </p>
      </div>
    </div>
  );
};

export default CalendarContent;
