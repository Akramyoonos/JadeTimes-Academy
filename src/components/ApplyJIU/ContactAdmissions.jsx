import React from "react";

const ContactAdmissions = () => {
  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-10">
      {/* Page Title */}
      <div className="flex items-center mb-6">
        <div className="w-1 h-20 bg-sky-400 mr-3" />
      <h1 className="text-3xl md:text-4xl font-semi bold flex items-center gap-3">
          CONTACT ADMISSIONS
        </h1>
      </div>

      {/* Contact Information */}
      <p className="text-gray-600">
        Have a question? Call us at <span className="font-semibold">1-800-611-FILM</span> or email{" "}
        <a href="mailto:admissions@JIU.edu" className="text-purple-600 ">admissions@JIU.edu</a>
      </p>
    </div>
  );
};

export default ContactAdmissions;