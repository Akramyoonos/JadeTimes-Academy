import React from "react";

const AdmissionRequirements = () => {
  return (
    <div className="flex flex-col w-full gap-10 px-6 py-16 font-sans text-gray-800 bg-white lg:flex-row lg:px-16 sm:py-20">
      
      {/* Left Content */}
      <div className="flex-1">
        <h1 className="pl-4 mb-6 text-3xl font-semibold border-l-4 border-blue-400 md:text-4xl">
          NYFA ADMISSIONS REQUIREMENTS
        </h1>

        <p className="mb-6 leading-relaxed">
          NYFA provides a supportive, welcoming community for students of all
          backgrounds and experience levels to pursue higher education in the
          arts. Students with ambitious creative goals are invited to apply year
          round for our Fall, Spring, and Summer graduate and undergraduate
          programs through our rolling admissions process. All applicants to our
          programs and workshops must have a high school diploma or acceptable
          equivalent by the time of the course start date.
        </p>

        <p className="mb-6 leading-relaxed">
          NYFA strives to make education in the visual arts accessible to the
          most diverse, international, and broadest spectrum of students.
          Applicants must express a serious desire to explore the art and craft
          of visual storytelling in their application materials. Please note
          that our classes are taught in English and students must be fluent.
          Students can find the required application materials for each program
          in the resources listed below.
        </p>

        <h2 className="mb-2 text-lg font-bold">
          NYFA Enrollment and Deferral Policies
        </h2>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>
            Applicants who are not accepted by the application deadline of their
            program,<br /> their <span className="font-semibold">application</span> will be rescinded and they must
            reapply for a later start date and pay a new<br /> application fee.
          </li>
        </ul>

        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>
           Students who are accepted by the deadline and cannot attend but want to defer their program<br /> 
           start may defer up to one year (365 days) by paying the $500 deposit fee and an additional $500<br /> 
           deferral fee. Both the deposit and deferral fee will be credited toward their first semester at NYFA.
          </li>
        </ul>

        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>
          The deposit and deferral fee must be paid within 30 days of the application deadline or their<br />
          acceptance will be rescinded and they will have to reapply.
          </li>
        </ul>

        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>
          NYFA considers students who are deferring their enrollment to have committed to attending<br /> 
          NYFA. As a result, students will be expected to meet all of NYFA application deadlines and must<br /> 
          confirm their commitment to their new program start date.
          </li>
        </ul>

        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>
        If after a year, the student still cannot make their deferred program start date, they may  defer<br /> 
        again by paying an additional $500 deferral fee. This will also be credited toward the first<br /> 
        semester tuition.
          </li>
        </ul>

         <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>
        Students may only defer their deferral once before their acceptance is rescinded and they will<br /> 
        receive a refund less the non-refundable application fee, $100 processing fee, credit card<br /> 
        convenience fees per the NYFA Refund Policy.
          </li>
        </ul>

        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>
        At any time if a student  wishes to withdraw their commitment from attending NYFA, they must<br />
        notify the  NYFA Admissions Department.
          </li>
        </ul>

          <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>
        Additionally international students who plan to study at NYFA on an F-1 visa must inform the<br /> 
        NYFA International Office of their plan to defer as it may impact their visa. Likewise, students<br /> 
        using Financial Aid or Veterans benefits to study at NYFA must notify  the Financial Aid<br /> 
        department and/or the Veterans Department of their plan to defer, as it may impact their aid<br /> 
        package.
          </li>
        </ul>

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
  );
};

export default AdmissionRequirements;
