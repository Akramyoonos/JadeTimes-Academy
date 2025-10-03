import React from "react";

const ApplyNYFA = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 pt-12 md:pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold flex items-center gap-3">
            <span className="w-1 h-20 bg-pink-500 inline-block"></span>
            APPLY TO NEW YORK FILM ACADEMY
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Thank you for your interest in applying to NYFA. We are excited to welcome you to our creative and inclusive community as you start your educational journey!
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            Click the links below to start or complete your application to NYFA.
            Contact us via email or text at any time for assistance.
          </p>

          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
            Please see{" "}
            <a href="#" className="text-pink-600 hover:text-pink-700">
              deadlines
            </a>{" "}
            and links to the NYFA application below. You can also view Important
            Dates and Deadlines on this webpage:{" "}
            <a
              href="https://www.nyfa.edu/important-dates/"
              className="text-pink-600 break-words hover:text-pink-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.nyfa.edu/important-dates/
            </a>
          </p>
        </div>

        <div className="w-full md:w-1/2 p-8 ">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Request Information</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="program" className="block text-gray-700 font-medium mb-2">
                Program of Interest
              </label>
              <select
                id="program"
                name="program"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
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
            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyNYFA;