import React from "react";
import ResourcesAndInformation01 from '../../assets/Images/BlogImg.webp';

const JIUSection = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-6 md:px-6 lg:px-35">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Side - Text */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center mb-6">
            <span className="w-1 h-10 bg-purple-500 mr-3"></span>
            WHY WORK AT NYFA?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            New York Film Academy is committed to an inclusive work culture where
            people’s thoughts, ideas, concerns, and cultures are valued and respected.
            We welcome applicants with diverse backgrounds and those sharing in our
            commitment to inclusivity.
          </p>
        </div>

        {/* Right Side - Sidebar Cards */}
        <div className="space-y-8">
          {/* Job Openings Card */}
          <div className="border-4 border-sky-400 p-6 text-center shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
              View Open Positions and Become a Part of Our Team
            </h3>
            <a href="/job-positions">
            <button className="bg-sky-400 hover:bg-sky-500 text-black font-semibold px-6 py-3 rounded w-full transition-colors duration-300">
              VIEW JOB OPENINGS
            </button>
            </a>
          </div>

{/* Annual Report Card with Placeholder */}
<div className="bg-white shadow-md">
    <img src={ResourcesAndInformation01} alt="Annual Report Card Placeholder" className="w-full h-48 object-cover" />
  <div className="p-5 border border-gray-300">
    <h3 className="text-lg font-bold mb-3">Annual Security Report</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">
      Report includes statistics for the<br /> previous three years concerning<br />
      the reported crimes that<br /> occurred on campus
    </p>
    <a
      href="/Blog/"
      className="text-pink-600 text-sm font-semibold hover:underline inline-flex items-center"
    >
      LEARN MORE <span className="ml-1">›</span>
    </a>
  </div>


          </div>
        </div>
        
      </div>
    </div>
  );
};

export default JIUSection;
