import React from 'react';

const Scholarship = () => {
  return (
    <div className="text-gray-800 bg-white">
      <div className="container px-6 sm:px-6 md:px-6 lg:px-35 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4 lg:pr-8">
            <div className="flex items-start mb-8">
              <div className="w-1 h-12 mr-4 bg-cyan-400"></div>
              <h1 className="text-5xl font-light text-gray-700">SCHOLARSHIPS</h1>
            </div>

            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-light text-gray-700">JIU Institutional Scholarships</h2>
              <p className="text-gray-600">
                Students can apply for JIU Scholarships, a form of institutional support that reduces a portion of student tuition costs. Scholarships are directly applied to tuition and do not need to be repaid.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="mb-4 text-xl font-semibold text-gray-700">Talent Based Scholarship</h3>
              <p className="mb-4 text-gray-600">
                JIU's Talent Based Scholarship is designed to identify applicants with exceptional aptitude for their program of study. Scholarships are awarded based on an applicant's audition or creative portfolio and determined by the JIU scholarship award committee during the admissions process. Domestic and international applicants to our 1 and 2 Year Certificate programs, AFA, BA, BFA, MA and MFA programs may apply for this award.
              </p>
              <p className="text-gray-600">For more information or to learn how to apply, contact <a href="mailto:admissions@JIU.edu" className="text-purple-500">admissions@JIU.edu</a></p>
            </div>

            <div className="mb-12">
              <h3 className="mb-4 text-xl font-semibold text-gray-700">Need Based Scholarship</h3>
              <p className="mb-4 text-gray-600">
                JIU's Need Based Scholarship is designed for students with financial need in order to help reduce the cost of education in New York Film Academy's long-term programs. Domestic and international applicants to our 1 and 2 Year Certificate programs, AFA, BA, BFA, MA and MFA programs may apply for this assistance.
              </p>
              <p className="text-gray-600">For more information contact <a href="mailto:admissions@JIU.edu" className="text-purple-500">admissions@JIU.edu</a></p>
            </div>

            <div className="mb-12">
              <h3 className="mb-4 text-xl font-semibold text-gray-700">Merit Based Scholarship</h3>
              <p className="mb-4 text-gray-600">
                JIU's Merit Based Scholarship is awarded to qualified candidates of the college's Bachelor of Arts and Bachelor of Fine Arts Programs. Applicants are evaluated based upon information provided in the admissions process including high school GPA. Domestic and International applicants to our BFA and BA programs may apply for this scholarship.
              </p>
              <p className="mb-4 italic text-gray-600">
                *International Students who wish to be considered for a Merit Based Scholarship must have academic transcripts converted by WES into a U.S. equivalent GPA
              </p>
              <p className="text-gray-600">For more information contact <a href="mailto:admissions@JIU.edu" className="text-purple-500">admissions@JIU.edu</a></p>
            </div>

            <div className="mb-12">
              <h3 className="mb-4 text-xl font-semibold text-gray-700">Bridge Grant</h3>
              <p className="mb-4 text-gray-600">
                The New York Film Academy Bridge Grant provides financial assistance to candidates of Master's, Bachelor's, Associate's, and One- and Two-Year Certificate Programs.
              </p>
              <p className="mb-4 text-gray-600">
                The Bridge Grant is being offered to students interested in assisting with JIU's mission "to make visual storytelling education accessible to the most diverse, international, and broadest possible spectrum of students." The purpose of the Bridge Grant is to build a bridge between the unique voices of Bridge Grant awardees and JIU's mission of supporting visual storytellers.
              </p>
              <p className="text-gray-600">To learn more, visit our <a href="#" className="text-purple-500">Bridge Grant page</a>.</p>
            </div>

            <div className="mb-12">
              <h3 className="mb-4 text-xl font-semibold text-gray-700">Matthew Modine Masters Scholarship (MFA Programs Only)</h3>
              <p className="mb-4 text-gray-600">
                The Matthew Modine Scholarship is based on the applicant's exhibition of exemplary purpose, creativity, and commitment to community and is awarded to JIU's top graduate applicants. This prestigious scholarship is awarded based on information provided during the admissions process including the applicant's audition/portfolio, undergraduate academic performance, professional experience, narrative statement, letters of recommendation, admissions interview as well as evidence of leadership, community service and arts participation. Domestic and international applicants to our MFA Programs may apply for this scholarship. To learn more, visit our <a href="#" className="text-purple-500">Matthew Modine Masters Scholarship page</a>.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-700">Rising Artist Scholarships</h3>
              <p className="mb-4 text-gray-600">
                The Rising Artist Scholarship is awarded to exceptional students with a demonstrated passion for film, media, or performing arts. Students must be nominated by a teacher, program director, or school faculty member. A JIU Talent Recruiter may attend the nominated production or event to evaluate student work and determine scholarship eligibility.
              </p>
              <p className="text-gray-600">To learn more about how your teacher can nominate your school's event or production, <a href="#" className="text-purple-500">click here</a>.</p>
            </div>

          </div>
          <div className="w-full mt-8 lg:w-1/4 lg:mt-0">
            {/* Right Sidebar */}
          <aside className="flex-shrink-0 w-full mt-6 mb-6 lg:w-80 lg:mt-0">
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
      </div>
    </div>
  );
};

export default Scholarship;