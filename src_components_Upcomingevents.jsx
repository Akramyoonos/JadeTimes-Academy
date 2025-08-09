import React, { useState } from 'react';

// --- Data ---
const deadlineData = [
  {
    type: "Spring ’26 Undergraduate Application",
    deadline: "December 1, 2025",
    commit: "December 12, 2025",
    fee: 75,
    duration: "4 weeks",
    mode: "Online / Live Sessions",
    seats: 25,
  },
  {
    type: "Spring ’26 Graduate Application",
    deadline: "December 1, 2025",
    commit: "December 12, 2025",
    fee: 75,
    duration: "6 weeks",
    mode: "Self-paced",
    seats: 30,
  },
  {
    type: "Fall ’25 Undergraduate Application",
    deadline: "Extended to March 15, 2025",
    commit: "May 1, 2025",
    fee: 75,
    duration: "4 weeks",
    mode: "Online / Live Sessions",
    seats: null,
  },
  {
    type: "Fall ’25 Graduate Application",
    deadline: "Extended to July 7, 2025",
    commit: null,
    fee: 200,
    duration: "8 weeks",
    mode: "Self-paced",
    seats: 15,
  },
];

// --- Components ---

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const EnrollIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const UpcomingEvents = () => {
  const [activeTab, setActiveTab] = useState('deadlines');

  const renderContent = () => {
    if (activeTab === 'workshops') {
      return <div className="text-center py-16 text-gray-500">Short-term workshop information will be available soon.</div>;
    }

    return (
      <>
        {/* --- Desktop Table View --- */}
        <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full ">
            <thead className="bg-gradient-to-r from-gray-800 to-gray-900 text-white uppercase text-sm">
              <tr>
                <th className="py-4 px-6 text-left font-semibold">Application Type/Term</th>
                <th className="py-4 px-6 text-left font-semibold">Duration</th>
                <th className="py-4 px-6 text-left font-semibold">Mode of Learning</th>
                <th className="py-4 px-6 text-left font-semibold">Application Deadline</th>
                <th className="py-4 px-6 text-left font-semibold">Commitment Deadline</th>
                <th className="py-4 px-6 text-left font-semibold">Fee</th>
                <th className="py-4 px-6 text-left font-semibold">Seats</th>
                <th className="py-4 px-6 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {deadlineData.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                  <td className="py-4 px-6 align-middle font-medium text-gray-900">{item.type}</td>
                  <td className="py-4 px-6 align-middle">{item.duration}</td>
                  <td className="py-4 px-6 align-middle">{item.mode}</td>
                  <td className="py-4 px-6 align-middle font-semibold text-red-600">{item.deadline}</td>
                  <td className="py-4 px-6 align-middle">{item.commit || 'N/A'}</td>
                  <td className="py-4 px-6 align-middle font-bold">${item.fee}</td>
                  <td className="py-4 px-6 align-middle">
                    {item.seats ? (
                      <span className={`font-bold ${item.seats < 20 ? 'text-red-500' : 'text-green-600'}`}>
                        {item.seats} available
                      </span>
                    ) : 'N/A'}
                  </td>
                  <td className="py-4 px-6 align-middle">
                    <a href="/enroll" className="flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                      Enroll Now
                      <EnrollIcon />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Mobile Card View --- */}
        <div className="block md:hidden space-y-6">
          {deadlineData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4 text-gray-800">{item.type}</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-600">Duration:</span>
                    <span className="font-medium">{item.duration}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-600">Mode:</span>
                    <span className="font-medium">{item.mode}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-600">Deadline:</span>
                    <span className="font-bold text-red-600">{item.deadline}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-600">Commit By:</span>
                    <span className="font-medium">{item.commit || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold text-gray-600">Fee:</span>
                    <span className="font-bold text-lg">${item.fee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">Seats Left:</span>
                    {item.seats ? (
                      <span className={`font-bold text-lg ${item.seats < 20 ? 'text-red-500' : 'text-green-600'}`}>
                        {item.seats}
                      </span>
                    ) : 'N/A'}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4">
                <a href="/enroll" className="w-full flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                  Enroll Now
                  <EnrollIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="EventsFont bg-gray-50 min-h-screen">
      <div className="bg-white font-sans text-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b-2 border-gray-100">
            <nav className="flex space-x-6">
              <button
                onClick={() => setActiveTab('deadlines')}
                className={`uppercase font-semibold text-sm tracking-wider pb-2 transition-all duration-300 ${activeTab === 'deadlines' ? 'text-sky-500 border-b-2 border-sky-500' : 'text-gray-500 hover:text-sky-500'}`}>
                Application Deadlines
              </button>
            </nav>
            <a href="/events" className="flex items-center text-sm font-semibold text-gray-600 hover:text-sky-600 transition-colors duration-300 mt-4 sm:mt-0">
              <CalendarIcon />
              See All Upcoming Events
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </div>
    </div>
  );
};

export default UpcomingEvents;
