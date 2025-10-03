import React from "react";

const EnrollmentPolicies = () => {
  return (
    <div className="w-full px-4 md:px-12 lg:px-34 py-10">
      {/* Page Title */}
      <div className="flex items-center mb-6">
        <div className="w-1 h-20 bg-yellow-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-semi bold flex items-center gap-3">
          JIU ENROLLMENT AND DEFERRAL POLICIES
        </h1>
      </div>

      {/* Policies */}
      <ul className="list-none space-y-4 text-gray-700 text-xl leading-relaxed">
        <li className="flex">
          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
          <span>
            Applicants who are not accepted by the application deadline of their program, their{" "}
            <span className="font-semibold">application will be rescinded</span> and they must reapply for a later
            start date and pay a new application fee.
          </span>
        </li>
        <li className="flex">
          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
          <span>
            Students who are accepted by the deadline and cannot attend but want to defer their program start may defer
            up to one year (365 days) by paying the <span className="font-semibold">$500 deposit fee</span> and an
            additional <span className="font-semibold">$500 deferral fee</span>. Both the deposit and deferral fee will
            be credited toward their first semester at JIU.
          </span>
        </li>
        <li className="flex">
          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
          <span>
            The deposit and deferral fee must be paid no less than 30 days prior to the application deadline for the
            start date to which the application is being deferred or the acceptance will be rescinded and the applicant
            will have to reapply.
          </span>
        </li>
        <li className="flex">
          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
          <span>
            JIU considers students who are deferring their enrollment to have committed to attending JIU. As a result,
            students will be expected to meet all of <span className="font-semibold">JIU application deadlines</span>{" "}
            and must confirm their commitment to their new program start date.
          </span>
        </li>
        <li className="flex">
          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
          <span>
            If after a year, the student still cannot make their deferred program start date, they may defer again by
            paying an additional <span className="font-semibold">$500 deferral fee</span>. This will also be credited
            toward the first semester tuition.
          </span>
        </li>
        <li className="flex">
          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
          <span>
            Students may only defer their deferral once before their acceptance is rescinded and they will receive a
            refund less the non-refundable application fee, $100 processing fee, credit card convenience fees per the
            JIU Refund Policy.
          </span>
        </li>
        <li className="flex">
          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
          <span>
            At any time if a student wishes to withdraw their commitment from attending JIU, they must notify the JIU
            Admissions Department.
          </span>
        </li>

        <li className="flex">
          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0" />
          <span>
            Additionally international students who plan to study at JIU on an F-1 visa must inform the JIU International Office of their plan to defer as it may <br />
            impact their visa. Likewise, students using Financial Aid or Veterans benefits to study at JIU must notify  the Financial Aid department and/or the <br /> 
            Veterans Department of their plan to defer, as it may impact their aid package.
          </span>
        </li>


      </ul>
    </div>
  );
};

export default EnrollmentPolicies;