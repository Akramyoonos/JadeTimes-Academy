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
              <br />
              MICHAEL J. YOUNG,
              <br />
              NYFA PRESIDENT
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
            <p>
              Like many aspiring filmmakers, I fell in love with film at an early age.
              I wanted to be part of the movies and was passionate about every aspect
              of the film world. Over the years, I did everything from working as an
              usher at an arthouse cinema to recording sound on independent features,
              shooting a film about war and friendship in former Yugoslavia, to producing
              documentaries. Inspired by my own experience in filmmaking, this passion
              led me to help establish The New York Film Academy (NYFA), a school where
              anyone who wished to pursue filmmaking could have the opportunity to do so.
            </p>``

            <p>
              We set out to create a school that provided practical training and resources,
              helping to remove barriers to entering the competitive film industry. By
              collaborating with inspiring educators, our experienced leadership team, and
              a cabinet that draws from an inclusive community of institution-wide deans,
              chairs, faculty, staff, and executives, we made a space where aspiring filmmakers
              could develop and strengthen their creative skills through hands-on experience.
            </p>

            <p>
              Thirty years later, NYFA has grown to{" "}
              <span className="text-pink-600 font-medium">
                eight campuses and satellite locations
              </span>{" "}
              worldwide. The college now meets the needs of not only film students but
              visual storytellers pursuing creative paths in film, media, and the performing arts.
              We’re a strong, diverse community with students from over 160 countries, each with their own unique voice. Our faculty of experienced industry professionals,<br /> 
              who all actively work in their fields, encourage students to take creative risks and make mistakes. 
              This learn-by-doing approach helps students build discipline and make a daily practice of their craft,
              which we believe is essential to artistic growth and sustained success.
            </p>

             <p>
          At NYFA, it’s this energetic, close-knit community of creators that will be your greatest resource. 
            </p>

            <p>
          Together, we share our talents, perspectives, and passions. It’s often said you are the author of your
          own story, however, anyone who has made films or television shows or video games or musicals
          knows they are the creation of a creative team of artists, actors, and craftspeople. That is what I
          hope you take away from your time at NYFA and remember as you go forward in your paths as
          artists. The ability to work and create with others may be the most important skill you can develop;
          this ultimately creates a creative community and a thriving industry. 
            </p>

             <p>
         I encourage incoming students to keep an open mind and abandon their preconceptions about
         how to tell stories. Visual and Performing Arts are fundamental human forms of communication
         and expression. We’ll challenge you, provide constructive critique, and help build upon your own
         abilities through project-based learning. Our goal is to enable our students to learn the process,
         expand on their ideas and develop their creative voices, and be prepared to meet opportunities
         with the strongest possible skill set. 
            </p>

             <p>
        If you’re a curious, resilient, determined artist looking to dedicate yourself to your craft and learn
        how to be an innovative, modern storyteller, we hope that you will join us at the New York Film
        Academy. We are excited to see what you will do, the stories you will bring to life, and how you will
        impact our community and society.
            </p>
<p className="italic mt-6">
  <span className="font-semibold">– Michael J. Young,</span> President of NYFA
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