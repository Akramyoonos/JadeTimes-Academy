import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 flex ">
      <div className="bg-white px-6 sm:px-6 md:px-6 lg:px-35 w-full relative">



        <div className="relative">
          {/* Heading Section */}
          <div className="flex items-center mb-12">
            <div className="w-1.5 h-12 bg-yellow-400 mr-3"></div>
            <h1 className="text-4xl font-sans text-gray-800 tracking-widest">CONTACT US</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="text-gray-600 space-y-8">
          <p className="text-base">
            All inquiries regarding studying at JIU as an international student should be referred to:
          </p>

          <div className="text-base text-gray-800">
            <p className="font-bold">International Student Office</p>
            <p>Phone: 212-966-3488</p>
            <p>Email: International@JIU.edu</p>
          </div>

          <p className="text-base">
            New York Film Academy is authorized under Federal law to enroll nonimmigrant alien students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;