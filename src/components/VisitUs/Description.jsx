import React from 'react';

const NyfaCampusVisit = () => {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Content Section */}
          <div className="md:col-span-2">
            <div className="relative mb-12">
              <div className="absolute left-0 top-0 h-full w-1 bg-purple-600 -ml-8"></div>
              <h1 className="text-3xl font-semibold text-gray-800 tracking-wider">VISIT A NYFA CAMPUS</h1>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Prospective students and their families can tour the facilities, meet faculty, and connect with the student community at NYFA New York, Los Angeles, or Florence, Italy. These are not the only times you can visit the New York Film Academy, please feel free to contact our Admissions Department at 212-674-4300 to schedule an appointment. Please note, NYFA reserves the right to not grant on-campus access to any guests who do not follow our policies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For questions about visits and tours, contact our <span className="font-bold">Admissions Department</span> at:
              <br />
              212-674-4300 or
              <br />
              <a href="mailto:admissions@nyfa.edu" className="text-purple-600 font-bold">admissions@nyfa.edu</a>
            </p>
          </div>

          {/* Sidebar with Related Links */}
          <div className="md:col-span-1">
            <div className="bg-gray-100 p-8">
              <h2 className="text-lg font-bold text-gray-800 mb-6 tracking-wider">RELATED LINKS</h2>
              <ul className="space-y-6 text-sm font-semibold text-gray-700">
                <li><a href="#" className="hover:text-purple-600">NYFA CAMPUSES</a></li>
                <li><a href="#" className="hover:text-purple-600">OPEN HOUSE & ONLINE EVENTS</a></li>
                <li><a href="#" className="hover:text-purple-600">MEET NYFA NEAR YOU</a></li>
                <li><a href="#" className="hover:text-purple-600">EXPLORE OUR PROGRAMS</a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NyfaCampusVisit;