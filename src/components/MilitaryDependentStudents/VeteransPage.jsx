// src/components/VeteransPage.jsx
import React from "react";

const VeteransPage = () => {
  return (
    <div className="bg-white font-sans text-gray-900 py-10 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-3">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-6 border-l-4 border-yellow-400 pl-4">
            VETERANS & MILITARY DEPENDENT <br /> EDUCATION BENEFITS AT NYFA
          </h1>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The New York Film Academy (NYFA) has been privileged to enroll
              approximately 3,000 veteran and military-dependent students at our
              campuses in New York City, Los Angeles, and South Beach since 2009.
              All three domestic campuses participate in the Yellow Ribbon Program,
              which allows eligible veterans and dependents the opportunity to attend
              school. The Honorable Colonel Jack Jacobs, Medal of Honor recipient
              and on-air military strategist for NBC/MSNBC, is the Chair of the NYFA
              Veterans Advancement Program. Retired Command Sergeant Major Chris Moore
              is the Director of Veterans Services.
            </p>

            <p>
              NYFA’s Division of Veterans Services (DVS) has been able to bring
              unique opportunities to its veteran students while supporting many
              veteran communities external to the College. Examples of these include
              panel discussions and workshops with the Casting Society of America (CSA),
              the Texas Veterans Commission (TVC), and the Wounded Warriors Project.
              NYFA’s DVS also engages with U.S. military installations around the
              world including The Defense Information School (DINFOS) at Fort Meade.
            </p>

            <p>
              Additionally, The New York Film Academy was privileged to host the
              Writers Guild Foundation (WGF) Veterans Writing Retreat at the Los
              Angeles Campus. NYFA’s media content team and an all-veteran student
              crew filmed the event, which provided the vet students studying
              Filmmaking, Documentary, and Producing at NYFA with the valuable
              hands-on experience of working a large-scale production. The DVS has
              partnered with Veterans in Media & Entertainment to host exclusive
              workshops for veterans interested in the entertainment industry.
            </p>

            <p>
              NYFA’s DVS collaborates with Hire Heroes USA (HHUSA) to host daylong
              exclusive employment workshops for NYFA’s veteran students that provide
              important skills and knowledge to support them post-graduation. The DVS
              has been honored to work with major Hollywood studios including Lionsgate,
              Voltage Pictures, Mar Vista Entertainment, and many others to provide
              internship and employment opportunities to veteran students. For veteran
              students studying in the College’s Broadcast Journalism Program–
              based at NYFA’s NYC Campus — the opportunities have included visits to
              major media studios, internships on TV productions, and internships
              with Departments in the NYC Government including the New York City
              Department of Veterans Services.
            </p>

            <p>
              Several award-winning actors including Adam Driver, Joe Mantegna, Stephen Lang,
              and Joe Lisi have joined the New York Film Academy to support our veterans
              program and veteran students.
            </p>

            <div>
              <p>Additional information about NYFA’s Veterans Services on these pages:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><a href="URL_for_Admissions_&_Programs" className="text-pink-600 hover:underline">Admissions & Programs</a></li>
                <li><a href="URL_for_Military_Benefits" className="text-pink-600 hover:underline">Military Benefits</a></li>
                <li><a href="URL_for_Veteran_Alum" className="text-pink-600 hover:underline">Veteran Alum</a></li>
                <li><a href="URL_for_Veterans_Team" className="text-pink-600 hover:underline">Veterans Team</a></li>
                <li><a href="URL_for_News" className="text-pink-600 hover:underline">News</a></li>
                <li><a href="URL_for_Collaborations" className="text-pink-600 hover:underline">Collaborations</a></li>
                <li><a href="URL_for_Resources" className="text-pink-600 hover:underline">Resources</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-80 flex-shrink-0 bg-white p-4 rounded-lg shadow-xl max-h-108">
          <h2 id="related-links-heading" className="text-lg font-extrabold uppercase tracking-wider text-gray-800 mb-4">
            RELATED LINKS
          </h2>
          <nav aria-labelledby="related-links-heading" className="flex flex-col text-base font-medium text-gray-700 space-y-2">
            <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
              ADMISSIONS & PROGRAMS
            </a>
            <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
              MILITARY BENEFITS
            </a>
            <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
              VETERAN ALUM
            </a>
            <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
              TEAM
            </a>
            <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
              NEWS
            </a>
            <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
              COLLABORATIONS
            </a>
            <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
              RESOURCES
            </a>
          </nav>

          {/* Veterans' Services Office */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-extrabold uppercase tracking-wider text-gray-800 mb-2">Veterans' Services Office</h3>
            <p className="text-base text-gray-700">
              NYFA is proud to have a Veteran Services office fully staffed by veterans
              who also actively work in film, media, and entertainment. For additional
              information or to make an appointment, please contact the Veterans Office at
              +1 818-333-3558 or <br /> email at
              veteran@nyfa.edu.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default VeteransPage;
