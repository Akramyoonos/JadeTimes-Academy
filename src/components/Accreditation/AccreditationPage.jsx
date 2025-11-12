import React from 'react';

const AccreditationPage = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <div className="container flex flex-col px-6 sm:px-6 md:px-6 lg:px-35 py-8  space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">

        {/* Main Content Section */}
        <div className="space-y-8 lg:w-3/4">

          {/* Main Title Block */}
          <div className="flex items-start space-x-4">
            <div className="w-1 h-20 bg-fuchsia-600 sm:h-24"></div>
            <h1 className="text-2xl font-medium leading-snug text-gray-900 sm:text-3xl md:text-4xl">
            ACCREDITATION, LICENSING, AND <br /> APPROVALS
            </h1>
          </div>

          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            New York Film Academy is a regionally accredited college that is licensed to operate in several
            locations.
          </p>

          {/* Accreditation Section */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-1 h-12 bg-cyan-400 sm:h-16"></div>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
                ACCREDITATION
              </h2>
            </div>

            <div className="space-y-3">
              <p className="leading-relaxed text-gray-600">
                New York Film Academy is accredited by the{" "}
                <span className="font-medium text-fuchsia-600">
                  WASC Senior College and University Commission<br /> (WSCUC)
                </span>
                , 985 Atlantic Avenue, Suite 100, Alameda, CA 94501, 510.748.9001.
              </p>
              <p className="leading-relaxed text-gray-600">
                JIU's accreditation listing can be found on the{" "}
                <span className="font-medium text-fuchsia-600">
                  Council for Higher Education website
                </span>
                .
              </p>
              <p className="leading-relaxed text-gray-600">
                Click{" "}
                <a href="#" className="font-medium text-fuchsia-600 hover:text-fuchsia-700">
                  here
                </a>{" "}
                for JIU's most recent WSCUC Commission Action Letter
              </p>
              <p className="leading-relaxed text-gray-600">
                Click{" "}
                <a href="#" className="font-medium text-fuchsia-600 hover:text-fuchsia-700">
                  here
                </a>{" "}
                for the most recent WSCUC Visiting Team Report
              </p>
            </div>
          </div>

          {/* Licensing and Approvals Section */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-1 h-12 bg-yellow-400 sm:h-16"></div>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl md:text-4xl">
                LICENSING AND APPROVALS
              </h2>
            </div>

            {/* Los Angeles */}
            <div className="space-y-3">
              <p className="text-lg font-medium text-gray-800">
                New York Film Academy - Los Angeles:
              </p>
              <p className="leading-relaxed text-gray-600">
                The New York Film Academy has received “approval” from the Bureau for Private Postsecondary <br />
                Education (BPPE) to operate as a degree-granting institution in the state of California. “Approval” or <br />
                “approval to operate” means that the Bureau has determined and certified that an institution meets<br />
                 minimum standards established by the Bureau and according to the California Private<br /> 
                 Postsecondary Education Act of 2009.
              </p>

              <p className="leading-relaxed text-gray-600">
                2535 Capital Oaks Drive, Ste 400 <br />
                Sacramento, CA 95833 <br />
                P.O. Box 980818 West Sacramento, CA <br />
                Website: www.bppe.ca.gov <br />
                Toll-Free Telephone & Fax: (888) 370-7589 or<br />
                by fax (916) 263-1897 or (916) 431-6959 or by fax (916) 263-1987.
              </p>
            </div>

            {/* New York */}
            <div className="space-y-3">
              <p className="text-lg font-medium text-gray-800">
                New York Film Academy - New York:
              </p>

              <p className="leading-relaxed text-gray-600">
                New York Film Academy is registered by the New York State Education Department to confer the<br /> 
                degree of Bachelor of Fine Arts on graduates of programs in Acting for Film, Filmmaking,<br /> 
                Entertainment Media and Musical Theatre; to confer certificates of completion on graduates of one-<br />
                year and two-year programs in Acting for Film, 3D Animation & Visual Effects, Broadcast Journalism,<br />
                Cinematography, Documentary Filmmaking, Filmmaking, Game Design & Writing, Graphic Design,<br />
                Musical Theatre, Photography, Producing, and Screenwriting; and to confer certificates of<br /> 
                completion on graduates of workshop programs in Acting for Film, 3D Animation & Visual Effects,<br /> 
                Broadcast Journalism, Documentary Filmmaking, Filmmaking, Musical Theatre, Photography,<br />
                Producing, and Screenwriting.
              </p>

              <p className="leading-relaxed text-gray-600">
                Office of College and University Evaluation <br />
                New York State Education Department <br />
                89 Washington Avenue Room 960 <br />
                Albany, NY 12234 <br />
                Website Address: http://www.nysed.gov/college-university-evaluation Telephone: (518) 474 – 1151
              </p>
            </div>

            {/* Miami */}
            <div className="space-y-3">
              <p className="text-lg font-medium text-gray-800">
                New York Film Academy – Miami (South Beach):
              </p>
              <p className="leading-relaxed text-gray-600">
                New York Film Academy’s Miami Campus closed operations on Aug 31, 2025. For information on the
                Miami Campus accreditation, licensing, program curriculum and student records. Please click{" "}
                <a href="#" className="font-medium text-fuchsia-600 hover:text-fuchsia-700">
                  here
                </a>
                .
              </p>
            </div>

            {/* Gold Coast */}
            <div className="space-y-3">
              <p className="text-lg font-medium text-gray-800">
                New York Film Academy – Gold Coast Australia:
              </p>
              <p className="leading-relaxed text-gray-600">
                Accepted by the Australian Commonwealth Register of Institutions and Courses for Overseas
                Students (CRICOS).
              </p>
              
            </div>

            <div className="space-y-3">
              <p className="text-lg font-medium text-gray-800">
                New York Film Academy – Gold Coast Australia:
              </p>

              <p className="leading-relaxed text-gray-600">
                Approved and accredited by the Australian Skills Quality Authority (ASQA).
              </p>

</div>
          </div>
        </div>



       {/* Right Sidebar */}
          <aside className="flex-shrink-0 w-full mt-6 lg:w-80 lg:mt-0">
          <div className="border border-gray-200">
            <div className="p-4 bg-gray-200 ">
              <h2 id="related-links-heading" className="text-2xl font-semibold text-black uppercase">
                RELATED LINKS
              </h2>
            </div>
            <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Open House
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Degree Programs
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Program Dates & Tuition
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AccreditationPage;
