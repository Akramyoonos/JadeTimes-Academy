import React from "react";

const ApplyJIU = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 pt-12 md:pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3">
            <span className="w-1 h-20 bg-pink-500 inline-block"></span>
            APPLY TO NEW YORK FILM ACADEMY
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Thank you for your interest in applying to JIU. We are excited to welcome you to our creative and inclusive community as you start your educational journey!
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Click the links below to start or complete your application to JIU.
            Contact us via email or text at any time for assistance.
          </p>

          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
            Please see{" "}
            <a href="/important-dates/" className="text-pink-600 hover:text-pink-700">
              deadlines
            </a>{" "}
            and links to the JIU application below. You can also view Important
            Dates and Deadlines on this webpage:{" "}
            <a
              href="https://www.JIU.edu/important-dates/"
              className="text-pink-600 wrap-break-word hover:text-pink-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.JIU.edu/important-dates/
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/2 p-8  rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-8 text-center">Request Information</h2>
          <form action="#" method="POST" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input type="text" name="firstName" id="firstName" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm h-10 px-3" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input type="text" name="lastName" id="lastName" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm h-10 px-3" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm h-10 px-3" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" name="phone" id="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm h-10 px-3" />
            </div>
            <div>
              <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Program of Interest *</label>
              <select id="program" name="program" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm h-10 px-3">
                <option>Filmmaking</option>
                <option>Acting for Film</option>
                <option>Producing</option>
                <option>Screenwriting</option>
                <option>3D Animation & VFX</option>
                <option>Cinematography</option>
                <option>Broadcast Journalism</option>
                <option>Photography</option>
                <option>Game Design</option>
                <option>Documentary Filmmaking</option>
              </select>
            </div>
            <div className="pt-4">
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJIU;