import React from "react";

const CareersSection = () => {
  return (
    <div className="bg-white font-sans text-gray-900 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side - Now Hiring */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Heading */}

          <div className="flex items-start">
            <div className="w-1 h-20 bg-purple-500 mr-3"></div>
            <h2 className="text-3xl font-bold leading-tight">NOW<br />HIRING</h2>
          </div>

          
          <p className="text-lg font-semibold md:max-w-xl md:-ml-10">
  Don’t see a current opening for you in our job<br /> listings? 
  Send a cover letter, resume, reel and links <br /> to showcase your work to 
   jobs@nyfa.edu
  Please<br /> specify the location you are interested in the<br /> subject line.
</p>
</div>

        <div className="border-4 border-sky-400 text-center py-12 px-6 mt-12">
          <h3 className="text-xl font-semibold mb-6">
            View Open Positions and Become a Part of Our Team
          </h3>
          <a
            href="#"
            className="inline-block bg-sky-400 hover:bg-sky-500 text-black px-8 py-3 text-sm font-bold tracking-wider"
          >
            VIEW JOB OPENINGS
          </a>
        </div>

       
        <p className="text-gray-500 italic text-sm mt-12 leading-relaxed">
          In compliance with federal requirements, NYFA provides extensive information 
          on institutional policies concerning campus safety and security, sexual 
          misconduct, and other matters. This information is contained within NYFA’s 
          Annual Security Report or Annual Security and Fire Safety Report and{" "}
          <a href="#" className="text-pink-500 hover:underline">can be accessed here.</a>
        </p>
      </div>
    </div>
  );
};

export default CareersSection;
