// src/Components/LetterFromPresident.jsx
import React from "react";

const LetterFromPresident = () => {
  return (
    <div className="bg-white font-sans text-gray-900 py-30 px-6 sm:px-6 md:px-6 lg:px-35">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Content */}
        <div className="lg:col-span-3">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
            <span className="border-l-4 border-pink-500 uppercase pl-4">
              A LETTER FROM
              Geeth Roman,
              JIU PRESIDENT
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg pl-6">
            <p>
              From the very beginning, JIU has been envisioned as more than a university, it is a community of <br />
              innovators and storytellers. Students from diverse backgrounds and nations join us with unique voices <br /> 
              and perspectives, and together we create an environment where creativity, inquiry, and leadership thrive. <br />
              Whether in journalism, media studies, film, or future academic disciplines, JIU stands for inclusivity, <br /> 
              innovation, and impact.
            </p>

            <p>
              Our faculty practicing professionals and experienced academics challenge students to take bold steps, <br />
              experiment with ideas, and collaborate across disciplines. We believe the ability to work together, learn <br />  
              from critique, and embrace resilience are the foundations of personal growth and professional success.
            </p>

            <p>
              To every incoming student, I encourage you to arrive with curiosity and courage. At JIU, you will be guided, <br />
              supported, and challenged, but above all, you will be empowered to develop your voice, sharpen your skills, <br /> 
              and prepare to influence society through your work.
            </p>

            <p>
              If you are determined, open-minded, and ready to dedicate yourself to learning, I warmly welcome you to 
              Jadetimes International University. We are eager to see the stories you will tell, the ideas you will bring 
              to life, and the change <br />
              you  will create in the world.
            </p>

<p className="italic mt-6">
  <span className="font-semibold">– Geeth Roman,</span> President, Jadetimes International University
</p>

          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0 lg:-ml-22 mt-6 lg:mt-0">
          <div className="border border-gray-200">
            <div className="bg-gray-100 p-4 ">
              <h2 id="related-links-heading" className="text-2xl font-medium uppercase text-black">
                RELATED LINKS
              </h2>
            </div>
            <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-medium uppercase text-gray-700 hover:text-pink-500">
                CABINET
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-medium uppercase text-gray-700 hover:text-pink-500">
                ADMINISTRATION
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-medium uppercase text-gray-700 hover:text-pink-500">
                BOARD OF DIRECTORS
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LetterFromPresident;