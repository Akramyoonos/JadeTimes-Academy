import React from 'react';

const JIUInternationalCommunity = () => {
  return (
    <div className="font-sans">
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/4 pr-8">
            <div className="flex items-center mb-6">
              <div className="w-1 bg-purple-600 h-12 mr-4"></div>
              <h1 className="text-3xl font-light text-gray-800">
                THE NYFA INTERNATIONAL COMMUNITY
              </h1>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              NYFA strives to make education in the visual arts accessible to the most diverse, international, and
              broadest spectrum of students. With students from over 160 countries and a student body that is almost 50%
              international, NYFA students make up a unique, close-knit global community of aspiring visual storytellers.
              The International Student Office is here to assist students from outside the United States in studying at
              NYFA's campuses in Los Angeles, New York City, and South Beach, Florida. To learn more about applying for
              visas and getting an I-20, please visit these resources or request more information today.
            </p>
          </div>
          <div className="md:w-1/4 mt-8 md:mt-0">
            <div className="bg-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">RELATED LINKS</h2>
              <ul>
                <li className="border-b border-gray-200 py-3">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    STUDENT VISAS
                  </a>
                </li>
                <li className="border-b border-gray-200 py-3">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    FAQS
                  </a>
                </li>
                <li className="border-b border-gray-200 py-3">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    FULBRIGHT
                  </a>
                </li>
                <li className="border-b border-gray-200 py-3">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    INTERNATIONAL FINANCIAL AID
                  </a>
                </li>
                <li className="py-3">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    PATHWAY TRACK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JIUInternationalCommunity;