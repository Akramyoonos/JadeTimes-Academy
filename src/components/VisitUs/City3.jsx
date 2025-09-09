import React, { useState } from 'react';

const City3 = () => {
  // State to manage the visibility of the detailed content
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto p-8 md:p-16 relative">

        {/* --- TOP SECTION --- */}
        <div className="flex items-center mb-12">
          <div className="w-1.5 h-10 bg-cyan-500 mr-6"></div>
          <h1 className="text-4xl font-light tracking-wider text-gray-800">NEW YORK CITY</h1>
        </div>

        <div className="space-y-4 text-gray-600">
          <p>Tour Location: 17 Battery Place, New York, NY 10004</p>
          <p>Tour Timings: JIU NYC tours are Monday, Wednesday and Friday at 12PM and 3PM.</p>
        </div>

        <div className="mt-8 mb-8 relative inline-block">
          <button className="bg-cyan-500 text-white font-semibold py-4 px-10 text-lg rounded-md hover:bg-cyan-600 transition duration-300">
            Book a Tour
          </button>
        </div>

        <div>
          <p className="text-gray-600 mb-2">Tour Policy and Directions:</p>
          {/* The button now toggles the content visibility */}
          <button onClick={toggleReadMore} className="text-purple-600 font-semibold text-sm flex items-center group">
            {isExpanded ? 'READ LESS' : 'READ MORE'}
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* --- EXPANDABLE CONTENT SECTION --- */}
        {/* This content is shown only when isExpanded is true */}
        {isExpanded && (
          <div className="mt-8 text-gray-700 space-y-10">
            
            {/* Tour Policy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-gray-800">Tour Policy:</h2>
              <p>Please arrive 15 minutes early to allow yourself time to check in with our Front Desk Representative on the 1<sup>st</sup> floor and meet our Student Ambassador.</p>
              <p>Please provide your QR code or Name of reservation to the Front Desk Representative confirming your upcoming tour.</p>
              <p>
                It is the policy of the New York Film Academy to afford individuals with disabilities, who require the assistance of a service animal, with equal opportunity to access Academy property, courses, programs, and activities. Please find our Accessibilities and Disabilities policy <a href="#" className="text-purple-600 underline">here</a>.
              </p>
            </div>

            {/* Directions */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light text-gray-800">
                Directions to JIU at Battery Place: <span className="text-purple-600">17 Battery Place NY NY 10004</span>
              </h2>

              {/* Subways */}
              <div>
                <h3 className="text-xl font-normal text-gray-800 mb-3">Closest subways</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Bowling Green - ( 4, 5 train)</li>
                </ul>
              </div>

              {/* Airports */}
              <div>
                <h3 className="text-xl font-normal text-gray-800 mb-3">Closest Airports</h3>
                <ul className="list-disc list-inside space-y-4">
                  <li>
                    <strong>JFK International Airport</strong>
                    <p className="pl-2">Jamaica, New York 11430</p>
                    <p className="pl-2">718-244-4444</p>
                  </li>
                  <li>
                    <strong>La Guardia Airport</strong>
                    <p className="pl-2">Flushing, NY 11371</p>
                    <p className="pl-2">718-533-3400</p>
                  </li>
                  <li>
                    <strong>Newark Liberty International Airport</strong>
                    <p className="pl-2">1 Brewster Rd. Newark, NJ 07114</p>
                    <p className="pl-2">973-961-6000</p>
                  </li>
                </ul>
              </div>

              {/* Train Stations */}
              <div>
                <h3 className="text-xl font-normal text-gray-800 mb-3">Bus Station and Train Stations</h3>
                <ul className="list-disc list-inside space-y-4">
                  <li>
                    <strong>From Penn Station</strong>
                    <p className="pl-2">Take the R or 1 Train to Rector Street</p>
                  </li>
                  <li>
                    <strong>From Grand Central Station</strong>
                    <p className="pl-2">Take the 4 or 5 train to Bowling Green</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default City3;