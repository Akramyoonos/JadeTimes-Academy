import React, { useState, useRef, useEffect } from 'react';

// ===============================================
// Reusable Dropdown Component
// ===============================================

const Dropdown = ({ options, defaultLabel, containerClassName, 'aria-label': ariaLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultLabel);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative flex-1 ${containerClassName}`} ref={dropdownRef}>
      <button
        type="button"
        className="flex justify-between items-center w-full px-6 py-4 text-sm tracking-wide uppercase text-gray-700 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
      >
        <span>{selectedOption}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>

      {isOpen && (
        <ul
          className="absolute top-full left-0 z-20 w-full bg-white shadow-lg border border-gray-200 mt-1 rounded-md"
          role="listbox"
          aria-labelledby={ariaLabel}
        >
          <div className="max-h-64 overflow-y-auto">
            {options.map((option, index) => (
              <li
                key={index}
                className={`px-6 py-3 text-gray-800 cursor-pointer text-base whitespace-nowrap transition-colors duration-150
                            ${(option === selectedOption)
                              ? 'bg-sky-500 text-white'
                              : 'hover:bg-sky-100'
                            }`}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={option === selectedOption}
              >
                {option}
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};


// ===============================================
// Data Definitions
// ===============================================

const disciplineOptions = [
  'SELECT A DISCIPLINE', 'Filmmaking', 'Producing', 'Cinematography', '3D Animation', 'Digital Editing',
  'Musical Theatre', 'Acting for Film', 'Screenwriting', 'Photography', 'Game Design', 'Virtual Reality', 'Documentary Filmmaking',
];

const programTypeOptions = [
  'SELECT PROGRAM TYPE', 'Bachelor of Fine Arts', 'Bachelor of Arts', 'Associate of Fine Arts', 'Master of Fine Arts',
  'Master of Arts', 'Masters of Arts Online', 'International Pathways Program', '2-Year Certificate Program',
  '1-Year Certificate Program', 'Short-Term Workshop', 'Online Short-Term Workshop', 'Teen Campus', 'Kids Campus',
];

const programStartDateOptions = ['PROGRAM START DATE', '2025', '2026'];

const nationalHolidays2025 = [
    { name: "Martin Luther King, Jr. Day", date: "Monday, January 20th, 2025" },
    { name: "Good Friday*", date: "Friday, April 18th, 2025" },
    { name: "Memorial Day", date: "Monday, May 26th, 2025" },
    { name: "Juneteenth", date: "Thursday, June 19th, 2025" },
    { name: "Fourth of July", date: "Friday, July 4th, 2025" },
    { name: "Labor Day", date: "Monday, September 1st, 2025" },
    { name: "Rosh Hashanah", date: "Starts 5pm Monday, September 22nd, 2025 (All day Tuesday, September 23rd, 2025)" },
    { name: "Yom Kippur", date: "Starts 5pm Wednesday, October 1st, 2025 (All Day Thursday, October 2nd, 2025)" },
    { name: "Veteran's Day", date: "Tuesday, November 11th, 2025" },
    { name: "Thanksgiving", date: "Thursday, November 27th, 2025" },
    { name: "Native American Heritage Day", date: "Friday, November 28th, 2025" },
    { name: "Christmas Day", date: "Thursday, December 25th, 2025" },
    { name: "New Year", date: "Thursday, January 1st, 2026" },
];

const graduationLocations2025 = [
    { location: "NYFA New York", date: "TBD" },
    { location: "NYFA Los Angeles", date: "TBD" },
    { location: "NYFA Miami", date: "TBD" },
];

// ===============================================
// Helper Components for Readability
// ===============================================

const PageHeader = () => (
    <header className="mb-12 px-4 sm:px-6 lg:px-2">
        <div className="flex items-center  mb-6">
            <div className="h-16 w-1.5 bg-sky-500 mr-5"></div>
            <h1 className="text-5xl font-bold text-gray-900 tracking-tighter">
                Academic Calendar
            </h1>
        </div>
        <div className="space-y-4 text-gray-600 text-lg max-w-4xl">
            <p>
                Completion dates may vary depending on the production and post-production schedule of students’ final film projects and performances.
            </p>
            <p className="italic">
                All sessions will have a holiday recess.
            </p>
            <p>
                To find out the semester start and completion dates and your program's holiday breaks please select your program start date below (the year your program began).
            </p>
        </div>
    </header>
);

const FilterSection = () => (
    <div className="flex flex-col md:flex-row mb-20 shadow-md rounded-lg">
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-l-lg">
            <Dropdown options={disciplineOptions} defaultLabel="SELECT A DISCIPLINE" aria-label="Select a discipline" containerClassName="border-b md:border-b-0 md:border-r border-gray-200" />
            <Dropdown options={programTypeOptions} defaultLabel="SELECT PROGRAM TYPE" aria-label="Select a program type" containerClassName="border-b md:border-b-0 md:border-r border-gray-200" />
            <Dropdown options={programStartDateOptions} defaultLabel="PROGRAM START DATE" aria-label="Select a program start date" />
        </div>
        <button className="flex-shrink-0 w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold tracking-wider uppercase py-4 px-8 transition duration-300 rounded-r-lg rounded-b-lg md:rounded-b-none">
            Search
        </button>
    </div>
);

const SectionHeader = ({ title, color = 'purple' }) => {
    const colorClass = color === 'purple' ? 'bg-purple-600' : 'bg-sky-500';
    const titleWithBreaks = title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div className="flex items-center mb-6">
            <div className={`h-12 w-1.5 ${colorClass} mr-5`}></div>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
                {titleWithBreaks}
            </h2>
        </div>
    );
};

const HolidaysTable = () => (
    <>
        <SectionHeader title={"2025 National \nHolidays"} />
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse shadow-md rounded-lg">
                <thead className="bg-gray-800 text-white text-base">
                    <tr>
                        <th className="py-4 px-6 font-semibold w-1/2">HOLIDAY</th>
                        <th className="py-4 px-6 font-semibold w-1/2">DATES</th>
                    </tr>
                </thead>
                <tbody>
                    {nationalHolidays2025.map((holiday, index) => (
                        <tr key={holiday.name} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
                            <td className="py-4 px-6 text-gray-800">{holiday.name}</td>
                            <td className="py-4 px-6 text-gray-800">{holiday.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
            *Dates that only have an asterisk are days where some programs may have classes but others may not.
        </p>
    </>
);

const GraduationTable = () => (
    <>
        <SectionHeader title="2025 Graduation" />
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse shadow-md rounded-lg">
                <thead className="bg-gray-800 text-white text-base">
                    <tr>
                        <th className="py-4 px-6 font-semibold w-1/2">LOCATION</th>
                        <th className="py-4 px-6 font-semibold w-1/2">DATES</th>
                    </tr>
                </thead>
                <tbody>
                    {graduationLocations2025.map((grad, index) => (
                        <tr key={grad.location} className={`border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
                            <td className="py-4 px-6 text-gray-800">{grad.location}</td>
                            <td className="py-4 px-6 text-gray-800">{grad.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);

const PageFooter = () => (
    <footer className="mt-8">
        <p className="text-base text-gray-600 leading-relaxed max-w-4xl">
            <strong className="font-bold text-gray-900">**</strong> Costs listed above do not include housing, food, transportation, books, additional necessary supplies or health insurance. Students will also incur additional expenses on their own productions. These expenses will vary depending on the scale of their projects. For more information, please contact our admissions team.
        </p>
    </footer>
);


// ===============================================
// Main Calendar Content Component
// ===============================================
const CalendarContent = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f9fafb;
          }
        `}
      </style>

      <PageHeader />
      <FilterSection />

      <section className="mb-20">
        <SectionHeader title="2025–2026 Academic Calendar" />
        <a
          href="#"
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 text-sm uppercase tracking-wider transition duration-300 rounded-md shadow-sm"
        >
          View The 2025-2026 Academic Calendar Here
        </a>
      </section>

      <section className="mb-20">
        <HolidaysTable />
      </section>

      <section className="mb-20">
        <GraduationTable />
      </section>

      <PageFooter />
    </div>
  );
};

export default CalendarContent;