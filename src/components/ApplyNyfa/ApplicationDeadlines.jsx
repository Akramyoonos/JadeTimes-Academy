import React, { useState } from "react";

const ApplicationDeadlines = () => {
  const [activeTab, setActiveTab] = useState("deadlines");

  const renderContent = () => {
    switch (activeTab) {
      case "deadlines":
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-black text-white text-left text-sm md:text-base">
                  <th className="px-4 py-3 font-medium w-1/3">
                    APPLICATION TYPE / TERM
                  </th>
                  <th className="px-4 py-3 font-medium">
                    EARLY ACTION (NON-BINDING)
                  </th>
                  <th className="px-4 py-3 font-medium">
                    GENERAL APPLICATION DEADLINE
                  </th>
                  <th className="px-4 py-3 font-medium">
                    LATE APPLICATION DEADLINE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                {/* Spring '26 Rows */}
                <tr>
                  <td className="px-4 py-4 font-medium">
                    Spring ’26 Undergraduate Application Deadline
                  </td>
                  <td className="px-4 py-4"></td>
                  <td className="px-4 py-4">
                    <p>
                      <span className="font-semibold">Domestic Students (US Citizens):</span> December 1, 2025
                    </p>
                    <p className="italic text-sm">Deadline to commit: December 12, 2025</p>
                    <hr className="my-2" />
                    <p>
                      <span className="font-semibold">International Students (Non-US):</span> October 15, 2025
                    </p>
                    <p className="italic text-sm">Deadline to commit: November 1, 2025</p>
                    <hr className="my-2" />
                    <p className="text-gray-500">Application Fee: $75</p>
                  </td>
                  <td className="px-4 py-4">N/A</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">
                    Spring ’26 Graduate Application Deadline
                  </td>
                  <td className="px-4 py-4"></td>
                  <td className="px-4 py-4">
                    <p>
                      <span className="font-semibold">Domestic Students (US Citizens):</span> December 1, 2025
                    </p>
                    <p className="italic text-sm">Deadline to commit: December 12, 2025</p>
                    <hr className="my-2" />
                    <p>
                      <span className="font-semibold">International Students (Non-US):</span> October 15, 2025
                    </p>
                    <p className="italic text-sm">Deadline to commit: November 1, 2025</p>
                    <hr className="my-2" />
                    <p className="text-gray-500">Application Fee: $75</p>
                  </td>
                  <td className="px-4 py-4">N/A</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">
                    Spring ’26 1-Year, and 2-Year Certificate Application Deadline
                  </td>
                  <td className="px-4 py-4"></td>
                  <td className="px-4 py-4">
                    <p>
                      <span className="font-semibold">Domestic Students (US Citizens):</span> December 1, 2025
                    </p>
                    <p className="italic text-sm">Deadline to commit: December 12, 2025</p>
                    <hr className="my-2" />
                    <p>
                      <span className="font-semibold">International Students (Non-US):</span> October 15, 2025
                    </p>
                    <p className="italic text-sm">Deadline to commit: November 1, 2025</p>
                    <hr className="my-2" />
                    <p className="text-gray-500">Application Fee: $75</p>
                  </td>
                  <td className="px-4 py-4">N/A</td>
                </tr>

                {/* Summer '26 Row */}
                <tr>
                  <td className="px-4 py-4 font-medium">
                    Summer ’26 Undergraduate, Graduate, 1-Year, and 2-Year Certificate Application Deadline
                  </td>
                  <td className="px-4 py-4"></td>
                  <td className="px-4 py-4">
                    <p>
                      <span className="font-semibold">Domestic Students (US Citizens):</span> April 1, 2026
                    </p>
                    <p className="italic text-sm">Deadline to commit: April 12, 2026</p>
                    <hr className="my-2" />
                    <p>
                      <span className="font-semibold">International Students (Non-US):</span> February 15, 2026
                    </p>
                    <p className="italic text-sm">Deadline to commit: March 1, 2026</p>
                    <hr className="my-2" />
                    <p className="text-gray-500">Application Fee: $75</p>
                  </td>
                  <td className="px-4 py-4">N/A</td>
                </tr>

                {/* Fall '26 Rows */}
                <tr>
                  <td className="px-4 py-4 font-medium">
                    Fall ’26 Undergraduate Application Deadline
                  </td>
                  <td className="px-4 py-4"></td>
                  <td className="px-4 py-4">
                    <p>
                      <span className="font-semibold">Domestic Students (US Citizens):</span> November 21, 2025
                    </p>
                    <p className="italic text-sm">Deadline to commit: May 1, 2026</p>
                    <hr className="my-2" />
                    <p>
                      <span className="font-semibold">International Students (Non-US):</span> November 21, 2025
                    </p>
                    <p className="italic text-sm">Deadline to commit: May 1, 2026</p>
                    <hr className="my-2" />
                    <p className="text-gray-500">Application Fee: $75</p>
                  </td>
                  <td className="px-4 py-4">N/A</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">
                    Fall ’26 Graduate Application Deadline
                  </td>
                  <td className="px-4 py-4"></td>
                  <td className="px-4 py-4">
                    <p>
                      <span className="font-semibold">Domestic Students (US Citizens):</span> March 15, 2026
                    </p>
                    <p className="italic text-sm">Deadline to commit: June 1, 2026</p>
                    <hr className="my-2" />
                    <p>
                      <span className="font-semibold">International Students (Non-US):</span> March 15, 2026
                    </p>
                    <p className="italic text-sm">Deadline to commit: June 1, 2026</p>
                    <hr className="my-2" />
                    <p className="text-gray-500">Application Fee: $75</p>
                  </td>
                  <td className="px-4 py-4">N/A</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium">
                    Fall ’26 1-Year, and 2-Year Certificate Application Deadline
                  </td>
                  <td className="px-4 py-4"></td>
                  <td className="px-4 py-4">
                    <p>
                      <span className="font-semibold">Domestic Students (US Citizens):</span> March 15, 2026
                    </p>
                    <p className="italic text-sm">Deadline to commit: June 1, 2026</p>
                    <hr className="my-2" />
                    <p>
                      <span className="font-semibold">International Students (Non-US):</span> March 15, 2026
                    </p>
                    <p className="italic text-sm">Deadline to commit: June 1, 2026</p>
                    <hr className="my-2" />
                    <p className="text-gray-500">Application Fee: $75</p>
                  </td>
                  <td className="px-4 py-4">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "workshops":
        return (
          <div className="text-gray-700 space-y-4">
            <p>
              Short-term workshop applications are accepted up until 10 days prior to the start of the program. NYFA will continue to accept short-term workshop applications until a program is full. Please submit your application as early as possible to reserve your place.
            </p>
            <h3 className="text-xl font-semibold pt-4">Key Application Details:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>A completed program application is required.</li>
              <li>A non-refundable application fee of $50 is necessary for the application to be processed.</li>
              <li>Proof of high school completion and English proficiency are also required.</li>
            </ul>
          </div>
        );
      case "youth":
        return (
          <div className="text-gray-700 space-y-4">
             <p>
              Applications for youth programs are accepted up until 10 days prior to the start of the program, contingent on availability. NYFA maintains an open enrollment policy for its summer camps and workshops, allowing applications to be submitted throughout the year.
            </p>
             <h3 className="text-xl font-semibold pt-4">Key Application Details:</h3>
             <ul className="list-disc list-inside space-y-2">
                <li>A non-refundable application fee of $25 is required.</li>
                <li>To officially enroll and reserve a place, a non-refundable deposit of $500 is needed, which is applied toward tuition.</li>
                <li>The deposit is $100 for 2-day holiday programs and $50 for online modules.</li>
                <li>Full tuition payment is due no later than 30 days before the workshop begins.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-10">
      {/* Page Title */}
      <div className="flex items-center mb-6">
        <div className="w-1 h-20 bg-yellow-400 mr-3" />
        <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3">
          APPLICATION DEADLINES
        </h1>
      </div>
      <p className="text-gray-600 mb-8">
        NYFA offers 3 semesters and application deadlines per year for its long-term programs. Short-term and youth programs offer rolling admissions.
      </p>

      {/* Tabs */}
      <div className="flex border-b mb-6 text-sm font-semibold tracking-wide">
        <button
          onClick={() => setActiveTab("deadlines")}
          className={`px-4 pb-3 ${
            activeTab === "deadlines"
              ? "border-b-2 border-sky-400 text-sky-500"
              : "text-gray-500 hover:text-black"
          }`}
        >
          APPLICATION DEADLINES
        </button>
        <button
          onClick={() => setActiveTab("workshops")}
          className={`px-4 pb-3 ${
            activeTab === "workshops"
              ? "border-b-2 border-sky-400 text-sky-500"
              : "text-gray-500 hover:text-black"
          }`}
        >
          SHORT-TERM WORKSHOPS
        </button>
        <button
          onClick={() => setActiveTab("youth")}
          className={`px-4 pb-3 ${
            activeTab === "youth"
              ? "border-b-2 border-sky-400 text-sky-500"
              : "text-gray-500 hover:text-black"
          }`}
        >
          YOUTH PROGRAMS (KIDS AND TEENS CAMPS)
        </button>
      </div>

      {/* Content */}
      <div className="mt-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default ApplicationDeadlines;