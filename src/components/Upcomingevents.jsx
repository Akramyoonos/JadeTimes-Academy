// src/components/Upcomingevents.jsx
import React, { useState } from "react";

import { applicationDeadlines } from "../deadlines.js";

/* ---------- Icons ---------- */
const CalendarIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

/* ---------- Little render helpers ---------- */
function Fee({ amount }) {
  return (
    <em className="italic text-gray-600">
      Application Fee: ${amount}
    </em>
  );
}
function Commit({ date }) {
  return (
    <p className="mt-4 italic text-gray-700">
      <span className="font-semibold">Deadline to commit:</span> {date}
    </p>
  );
}

const Upcomingevents = () => {
  const [activeTab, setActiveTab] = useState("deadlines");

  return (
    <section className="EventsFont bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-20 py-12">

        {/* ---------- Tabs header + See events link ---------- */}
        <div className="flex items-center justify-between">
          <nav className="w-full">
            <div className="flex items-center gap-10 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("deadlines")}
                className={`pt-2 pb-3 text-sm font-semibold tracking-widest uppercase ${
                  activeTab === "deadlines"
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Application Deadlines
                {/* underline indicator */}
                <div
                  className={`h-1 mt-2 transition-all ${
                    activeTab === "deadlines" ? "bg-blue-400 w-40" : "bg-transparent w-0"
                  }`}
                />
              </button>

              <button
                onClick={() => setActiveTab("workshops")}
                className={`pt-2 pb-3 text-sm font-semibold tracking-widest uppercase ${
                  activeTab === "workshops"
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Short-Term Workshops
                <div
                  className={`h-1 mt-2 transition-all ${
                    activeTab === "workshops" ? "bg-blue-400 w-52" : "bg-transparent w-0"
                  }`}
                />
              </button>

              {/* trailing border line so it looks like the screenshot */}
              <div className="flex-1 h-[1px] bg-gray-200 translate-y-[22px]" />
            </div>
          </nav>

          <a
            href="/events"
            className="ml-6 shrink-0 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
          >
            <CalendarIcon />
            See Upcoming Events
          </a>
        </div>

        {/* ---------- Content ---------- */}
        {activeTab === "deadlines" ? (
          <div className="mt-8 overflow-hidden rounded-md shadow-sm border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="text-left py-5 px-6 text-sm font-bold tracking-wider uppercase">
                      Application Type/Term
                    </th>
                    <th className="text-left py-5 px-6 text-sm font-bold tracking-wider uppercase">
                      Early Action (Non-Binding)
                    </th>
                    <th className="text-left py-5 px-6 text-sm font-bold tracking-wider uppercase">
                      General Application Deadline
                    </th>
                    <th className="text-left py-5 px-6 text-sm font-bold tracking-wider uppercase">
                      Late Application Deadline
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {applicationDeadlines.map((row, idx) => (
                    <tr key={idx} className="align-top">
                      {/* Term / Type */}
                      <td className="px-6 py-8">
                        <p className="text-xl font-semibold text-gray-700 leading-snug">
                          {row.term}
                        </p>
                      </td>

                      {/* Early Action */}
                      <td className="px-6 py-8">
                        <p className="text-gray-800">{row.early.date}</p>
                        <p className="mt-2">
                          <Fee amount={row.early.fee} />
                        </p>
                        <Commit date={row.early.commit} />
                      </td>

                      {/* General Deadline with strike + extended */}
                      <td className="px-6 py-8">
                        <p className="text-red-600 line-through">
                          {row.general.original}
                        </p>
                        <p className="text-gray-800">
                          Extended to {row.general.extendedTo}
                        </p>
                        <p className="mt-2">
                          <Fee amount={row.general.fee} />
                        </p>
                        <Commit date={row.general.commit} />
                      </td>

                      {/* Late Deadline */}
                      <td className="px-6 py-8">
                        <p className="text-red-600 line-through">
                          {row.late.original}
                        </p>
                        <p className="text-gray-800">
                          Extended to {row.late.extendedTo}
                        </p>
                        <p className="mt-2">
                          <Fee amount={row.late.fee} />
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Workshops tab placeholder - style matches page, change as needed */
          <div className="mt-12 text-gray-600">
            <p className="text-lg">
              Workshop schedules will be posted soon. Please check back or{" "}
              <a href="/events" className="text-indigo-600 font-semibold hover:text-indigo-800">
                see upcoming events
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Upcomingevents;
