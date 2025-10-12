import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-7xl px-6 sm:px-6 md:px-6 lg:px-15 py-16">

      <p className="text-sm text-gray-600 mb-8 px-4 sm:px-8 md:px-20">
        *Online events are free to JIU members. JIU will make access to online
        guest speaker events available to members as they occur. Some live online
        events may be recorded and posted to JIU’s public video platforms within
        3–8 weeks after the event, based on each guest’s permission and preferences.
      </p>

    
      <p className="text-lg text-gray-700 mb-12 px-4 sm:px-8 md:px-20">
        Whether you’re a beginner, looking to sharpen your skills, or want to stay
        up-to-date on the latest industry trends, JIU Membership allows you to
        gain access to essential film, media, and performing arts principles and
        insights from anywhere in the world.
      </p>

      <div className="flex items-center mb-8 px-4 sm:px-8 md:px-20">
        <div className="w-1 bg-pink-600 h-12 mr-4"></div>
        <h2 className="text-3xl font-bold text-black">CONTACT US</h2>
      </div>

    
      <p className="text-gray-700 text-lg px-4 sm:px-8 md:px-20">
        Have a question? Call us at{" "}
        <span className="font-semibold">1-800-611-FILM</span> or email{" "}
        <a
          href="mailto:membership@JIU.edu"
          className="text-pink-600 font-semibold hover:underline"
        >
          membership@JIU.edu
        </a>
        .
      </p>
    </div>
  );
};

export default ContactUs;