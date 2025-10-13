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
            JIU ENROLLMENT AND DEFERRAL POLICIES
          </h1>
        </div>

        <div className="mt-8 space-y-4 text-gray-700 text-base">
          <h2 className="text-2xl font-semibold text-gray-800">1. Course Format and Duration</h2>
          <p>
            All JIU programs are short-term online professional certificate courses delivered entirely through virtual learning sessions. Each course runs for 1 month, consisting of 8 live instructor-led sessions. Course fees start from USD 100, depending on the subject and specialization.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">2. Application Validity</h2>
          <p>
            Applicants who do not complete their registration or payment by the published course start deadline will have their application automatically canceled. They may reapply for a future batch by submitting a new application form and paying the application fee again.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">3. Deferral of Course Start Date</h2>
          <p>
            Students who are accepted but cannot attend their scheduled batch may defer their start date for up to one year (365 days) by paying a USD 100 course deposit and a USD 50 deferral fee. Both payments will be credited toward the course fee when the student begins the deferred course.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">4. Payment Deadline for Deferral</h2>
          <p>
            The deposit and deferral fee must be paid no later than 15 days before the new course start date. Failure to make payment within this period will result in cancellation of acceptance, and the student must reapply for a later batch.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">5. Course Commitment</h2>
          <p>
            Students who defer are considered to have committed to completing the course online with JIU. They must confirm their participation in writing and complete all updated course requirements before joining their deferred batch.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">6. Second Deferral Option</h2>
          <p>
            If a student cannot begin even after their first deferral, they may request one additional deferral by paying another USD 50 deferral fee, which will also be credited toward their tuition. After this, if they still cannot attend, their admission will be canceled and they will receive a refund minus the following:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Non-refundable application fee</li>
            <li>USD 25 administrative charge</li>
            <li>Any applicable card or transaction fees (per JIU Refund Policy)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">7. Withdrawal Policy</h2>
          <p>
            Students wishing to withdraw from their course must notify the JIU Admissions Office by email before the course begins. Refunds, if applicable, will be processed according to the JIU Refund Policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">8. International and Sponsored Students</h2>
          <p>
            International learners or those studying under scholarship or sponsorship must notify the JIU International Office or Financial Aid Department of any deferral or withdrawal, as it may affect their enrollment status or funding eligibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JIUEnrollmentPolicies;