import React from "react";

const ApplyNYFA = () => {
  return (
    <div className="w-full px-6 py-12 bg-white">
     
        <div className="max-w-4xl ml-20">
        <h1 className="text-3xl md:text-4xl font-semi bold flex items-center gap-3">
          <span className="w-1 h-20 bg-pink-500 inline-block"></span>
          APPLY TO NEW YORK FILM ACADEMY
        </h1>

       <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
         Thank you for your interest in applying to NYFA. We are excited to welcome you to our creative and inclusive community as you start your educational 
         journey!
       </p>

        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          Click the links below to start or complete your application to NYFA.
          Contact us via email or text at any time for assistance.
        </p>

        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
        Please see{" "}
        <a href="#" className="text-pink-600  hover:text-pink-700">
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
    </div>
  );
};

export default ApplyNYFA;
