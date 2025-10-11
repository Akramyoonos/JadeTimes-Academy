import React from 'react';
import ourfaculty1 from '../../assets/Images/ourfaculty1.webp';
import ourfaculty2 from '../../assets/Images/ourfaculty2.webp';
import ourfaculty3 from '../../assets/Images/ourfaculty3.webp';

// --- Data ---
// In a real application, this data would likely be fetched from an API.
// To better simulate this, the data is now in a dedicated constant.
const facultyData = [
  {
    department: "Film Arts",
    imageUrl: ourfaculty1,
    altText: "Black and white portrait of a woman with glasses on her head, looking forward with a slight smile.",
    color: "#3db4ff",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    department: "Media Arts",
    imageUrl: ourfaculty2,
    altText: "Black and white portrait of a man with a hat and beard, smiling gently.",
    color: "#ffca1f",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    department: "Performing Arts",
    imageUrl: ourfaculty3,
    altText: "Black and white portrait of a smiling woman with short hair and hoop earrings.",
    color: "#b61f9f",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14h6" />
      </svg>
    ),
  },
];

// --- Components ---

/**
 * A reusable chevron icon component.
 * Added focusable="false" and aria-hidden="true" for better accessibility,
 * as it's a decorative icon within a link.
 */
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" focusable="false" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

/**
 * A card component to display faculty information.
 * It's now more accessible and uses more descriptive class names.
 */
const FacultyCard = ({ department, imageUrl, altText, color, icon }) => (
  <div className="relative group w-full overflow-hidden shadow-xl transform-gpu transition-transform duration-300 hover:scale-100 focus-within:scale-100">
    <a href="/faculty-directory/" className="absolute inset-0 z-10" aria-label={`Learn more about the ${department} department`}>
      <span className="sr-only">Learn more about the {department} department</span>
    </a>
    <img alt={altText} className="w-full h-full object-cover" src={imageUrl} />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-70 transition-opacity duration-300"></div>
    <div
      className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4 transition-all duration-300 transform-gpu translate-y-0 group-hover:-translate-y-2"
    >
      <div style={{ color: color }} className="text-4xl mb-2 transform-gpu translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">{icon}</div>
      <h3 className="text-white text-2xl font-bold mb-1 transform-gpu translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">{department}</h3>
      <div
        style={{ color: color }}
        className="font-semibold text-sm uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform-gpu translate-y-4 group-hover:translate-y-0"
      >
        LEARN MORE
        <ChevronRightIcon />
      </div>
    </div>
  </div>
);


/**
 * The main component for the "Our Faculty" section.
 * Improved semantics and structure.
 */
const OurFaculty = () => {
  return (
    <div className="OurfacultyFont">
      <div className="bg-white">
        <section className="bg-[#0a0a0a] text-white" aria-labelledby="faculty-heading">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
              <div className="lg:col-span-1 flex flex-col items-start gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-1.5 h-20 bg-[#b61f9f]"></div>
                  <h2 id="faculty-heading" className="text-4xl md:text-5xl font-medium leading-tight text-white">
                    OUR
                    <br />
                    FACULTY
                  </h2>
                </div>
                <a href="/faculty-directory/" className="bg-purple-600 text-white font-medium text-base uppercase px-8 py-4 shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-purple-300 transition-colors duration-300 inline-block text-center">
                  MEET OUR FACULTY
                </a>
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                {facultyData.map((faculty) => (
                  <FacultyCard key={faculty.department} {...faculty} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurFaculty;