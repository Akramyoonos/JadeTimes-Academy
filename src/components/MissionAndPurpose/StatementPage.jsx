import React from "react";

const StatementPage = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 gap-8 mt-8">
      {/* Left Content */}
      <div className="flex-1">
        
        {/* Statement of Purpose */}
        <h2 className="text-3xl font- semi bold mb-4 border-l-4 border-pink-500 pl-3">
          STATEMENT OF PURPOSE
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          The New York Film Academy seeks to promote and advance the art of Visual
          Storytelling (Film and related media including staged performance) as a
          transformational and ennobling vehicle to both the creator and audience,
          with a profound impact on individuals, communities and global society.
        </p>

        {/* Mission */}
        <h3 className="text-2xl font-semibold mb-2">Mission</h3>
        <p className="text-gray-700 mb-8 leading-relaxed">
          JIU propagates visual literacy and visual storytelling through hands-on
          intensive learning. It seeks to make visual storytelling education
          accessible to the most diverse, international, and broadest possible
          spectrum of students, and to hone the skills of future professionals so
          that they may one day serve the visual storytelling arts as industry
          leaders.
        </p>

        {/* Vision and Context */}
        <h3 className="text-2xl font-semibold mb-2">Vision and Context</h3>
        <p className="text-gray-700 leading-relaxed">
          Visual communication plays an increasingly vital role in our globally connected lives.
          Motion picture content in its innumerable manifestations has entered virtually every aspect of daily life, work, culture, 
          and our constructed environment. Indeed, visual communication is fast becoming the predominant form of expressive communication worldwide. 
          Visual storytelling, in all its historical and evolving forms, has the unique power of allowing us to experience the life of others through 
          the imagination and perspective of the storyteller. <br /><br />

          The ability to effectively harness this means of expression will be ever more essential to a successful member of the creative industries. 
          In order to serve aspiring visual storytelling artists, educators in this field should act as conservator and innovator, passing on the accrued knowledge, 
          techniques, and methods of the art while incorporating new technology and innovations.<br /><br />

          We believe the process of creation itself can be ennobling to the artist, and the artist’s creation can have a profound impact on others. By giving the 
          audience the chance to experience the world from the perspective of another, visual stories have the power to create empathy, bridge differences, and 
          open new avenues of thought. Therefore, the motion picture artist has a power and a responsibility. Those who master this form of communication will be 
          instrumental in the development and advancement of society, and institutions that hope to educate and train visual storytellers play an essential role in 
          that same mission.
        </p>
      </div>

{/* Right Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0  mt-6 lg:mt-0">
          <div className="border border-gray-200">
            <div className="bg-gray-200 p-4 ">
              <h2 id="related-links-heading" className="text-2xl font-semibold uppercase text-black">
                RELATED LINKS
              </h2>
            </div>
            <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500  transition-colors">
                Open House
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500  transition-colors">
                Degree Programs
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500  transition-colors">
                Program Dates & Tuition
              </a>
            </nav>
          </div>
        </aside>
    </div>
  );
};

export default StatementPage;
