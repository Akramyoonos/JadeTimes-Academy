import React from 'react';

const JIUEnrollmentPolicies = () => {
  return (
    <div className="bg-white font-sans">
      <div className="container px-14 sm:px-6 md:px-6 lg:px-44 py-6 mx-auto">
        <div className="relative">
          <div className="absolute top-0 left-[-2rem]">
            <div className="w-1 h-12 bg-cyan-400"></div>
          </div>
          <h1 className="text-4xl font-light text-gray-800 tracking-wider">
            NYFA ENROLLMENT AND DEFERRAL POLICIES
          </h1>
        </div>


        <ul className="mt-8 space-y-4 text-gray-700 text-base">
          <li className="flex items-start">
            <span className="text-pink-500 mr-3 mt-1">&#8226;</span>
            <p>
              Applicants who are not accepted by the application deadline of their program, their <span className="font-bold">application</span> will be rescinded and they must reapply for a later start date and pay a new application fee.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 mr-3 mt-1">&#8226;</span>
            <p>
              Students who are accepted by the deadline and cannot attend but want to defer their program start may defer up to one year (365 days) by paying the $500 deposit fee and an additional $500 deferral fee. Both the deposit and deferral fee will be credited toward their first semester at NYFA.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 mr-3 mt-1">&#8226;</span>
            <p>
              The deposit and deferral fee must be paid no less than 30 days prior to the application deadline for the start date to which the application is being deferred or the acceptance will be rescinded and the applicant will have to reapply.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 mr-3 mt-1">&#8226;</span>
            <p>
              NYFA considers students who are deferring their enrollment to have committed to attending NYFA. As a result, students will be expected to meet all of <span className="text-pink-500">NYFA application deadlines</span> and must confirm their commitment to their new program start date.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 mr-3 mt-1">&#8226;</span>
            <p>
              If after a year, the student still cannot make their deferred program start date, they may defer again by paying an additional $500 deferral fee. This will also be credited toward the first semester tuition.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 mr-3 mt-1">&#8226;</span>
            <p>
              Students may only defer their deferral once before their acceptance is rescinded and they will receive a refund less the non-refundable application fee, $100 processing fee, credit card convenience fees per the NYFA Refund Policy.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 mr-3 mt-1">&#8226;</span>
            <p>
              At any time if a student wishes to withdraw their commitment from attending NYFA, they must notify the NYFA Admissions Department.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-pink-500 mr-3 mt-1">&#8226;</span>
            <p>
              Additionally international students who plan to study at NYFA on an F-1 visa must inform the NYFA International Office of their plan to defer as it may impact their visa. Likewise, students using Financial Aid or Veterans benefits to study at NYFA must notify the Financial Aid department and/or the Veterans Department of their plan to defer, as it may impact their aid package.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JIUEnrollmentPolicies;