import React from 'react';

const AccreditationPage = () => {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">

        {/* Main Content Section */}
        <div className="lg:w-3/4 space-y-8">

          {/* Main Title Block */}
          <div className="flex items-start space-x-4">
            <div className="w-1 bg-fuchsia-600 h-20 sm:h-24"></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-snug">
            ACCREDITATION, LICENSING, AND <br /> APPROVALS
            </h1>
          </div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            New York Film Academy is a regionally accredited college that is licensed to operate in several
            locations.
          </p>

          {/* Accreditation Section */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-1 bg-cyan-400 h-12 sm:h-16"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                ACCREDITATION
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-gray-600 leading-relaxed">
                New York Film Academy is accredited by the{" "}
                <span className="text-fuchsia-600 font-medium">
                  WASC Senior College and University Commission<br /> (WSCUC)
                </span>
                , 985 Atlantic Avenue, Suite 100, Alameda, CA 94501, 510.748.9001.
              </p>
              <p className="text-gray-600 leading-relaxed">
                NYFA's accreditation listing can be found on the{" "}
                <span className="text-fuchsia-600 font-medium">
                  Council for Higher Education website
                </span>
                .
              </p>
              <p className="text-gray-600 leading-relaxed">
                Click{" "}
                <a href="#" className="text-fuchsia-600 font-medium  hover:text-fuchsia-700">
                  here
                </a>{" "}
                for NYFA's most recent WSCUC Commission Action Letter
              </p>
              <p className="text-gray-600 leading-relaxed">
                Click{" "}
                <a href="#" className="text-fuchsia-600 font-medium  hover:text-fuchsia-700">
                  here
                </a>{" "}
                for the most recent WSCUC Visiting Team Report
              </p>
            </div>
          </div>

          {/* Licensing and Approvals Section */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-1 bg-yellow-400 h-12 sm:h-16"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                LICENSING AND APPROVALS
              </h2>
            </div>

            {/* Los Angeles */}
            <div className="space-y-3">
              <p className="text-lg font-medium text-gray-800">
                New York Film Academy - Los Angeles:
              </p>
              <p className="text-gray-600 leading-relaxed">
                The New York Film Academy has received “approval” from the Bureau for Private Postsecondary <br />
                Education (BPPE) to operate as a degree-granting institution in the state of California. “Approval” or <br />
                “approval to operate” means that the Bureau has determined and certified that an institution meets<br />
                 minimum standards established by the Bureau and according to the California Private<br /> 
                 Postsecondary Education Act of 2009.
              </p>

              <p className="text-gray-600 leading-relaxed">
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

              <p className="text-gray-600 leading-relaxed">
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

              <p className="text-gray-600 leading-relaxed">
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
              <p className="text-gray-600 leading-relaxed">
                New York Film Academy’s Miami Campus closed operations on Aug 31, 2025. For information on the
                Miami Campus accreditation, licensing, program curriculum and student records. Please click{" "}
                <a href="#" className="text-fuchsia-600 font-medium  hover:text-fuchsia-700">
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
              <p className="text-gray-600 leading-relaxed">
                Accepted by the Australian Commonwealth Register of Institutions and Courses for Overseas
                Students (CRICOS).
              </p>
              
            </div>

            <div className="space-y-3">
              <p className="text-lg font-medium text-gray-800">
                New York Film Academy – Gold Coast Australia:
              </p>

              <p className="text-gray-600 leading-relaxed">
                Approved and accredited by the Australian Skills Quality Authority (ASQA).
              </p>

</div>
          </div>
        </div>



        {/* Related Links Section */}
        <aside className="w-full lg:w-80 flex-shrink-0 bg-white p-4 rounded-lg shadow-xl max-h-64">
  <h2 id="related-links-heading" className="text-lg font-extrabold uppercase tracking-wider text-gray-800 mb-4">
    RELATED LINKS
  </h2>
  <nav aria-labelledby="related-links-heading" className="flex flex-col text-base font-medium text-gray-700 space-y-2">
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
      ABOUT US
    </a>
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
  AFFILIATIONS
    </a>
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
  ARTICULATION
    </a>
  </nav>
</aside>
      </div>
    </div>
  );
};

export default AccreditationPage;
