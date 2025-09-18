// src/Components/LetterFromPresident.jsx
import React from "react";

const LetterFromPresident = () => {
  return (
    <div className="bg-white font-sans text-gray-900 py-10 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Content */}
        <div className="lg:col-span-3">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
            <span className="border-l-4 border-pink-500 pl-4">
              A LETTER FROM
              Geeth Roman,
              JIU PRESIDENT
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
            <p>
              From the very beginning, JIU has been envisioned as more than a university, it is a community of innovators and storytellers. Students from diverse backgrounds and nations join us with unique voices and perspectives, and together we create an environment where creativity, inquiry, and leadership thrive. Whether in journalism, media studies, film, or future academic disciplines, JIU stands for inclusivity, innovation, and impact.
            </p>

            <p>
              Our faculty practicing professionals and experienced academics challenge students to take bold steps, experiment with ideas, and collaborate across disciplines. We believe the ability to work together, learn from critique, and embrace resilience are the foundations of personal growth and professional success.
            </p>

            <p>
              To every incoming student, I encourage you to arrive with curiosity and courage. At JIU, you will be guided, supported, and challenged, but above all, you will be empowered to develop your voice, sharpen your skills, and prepare to influence society through your work.
            </p>

            <p>
              If you are determined, open-minded, and ready to dedicate yourself to learning, I warmly welcome you to Jadetimes International University. We are eager to see the stories you will tell, the ideas you will bring to life, and the change you will create in the world.
            </p>

<p className="italic mt-6">
  <span className="font-semibold">– Geeth Roman,</span> President, Jadetimes International University
</p>






          </div>
        </div>

        {/* Right Sidebar */}
         <aside className="w-full lg:w-80 flex-shrink-0 bg-white p-4 rounded-lg shadow-xl max-h-64">
  <h2 id="related-links-heading" className="text-lg font-extrabold uppercase tracking-wider text-gray-800 mb-4">
    RELATED LINKS
  </h2>
  <nav aria-labelledby="related-links-heading" className="flex flex-col text-base font-medium text-gray-700 space-y-2">
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
      CABINET
    </a>
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
   ADMINISTRATION
    </a>
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
     BOARD OF DIRECTORS
    </a>
  </nav>
</aside>
      </div>
    </div>
  );
};

export default LetterFromPresident;