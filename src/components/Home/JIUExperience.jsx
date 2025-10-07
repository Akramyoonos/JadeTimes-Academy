import React, { useState, useEffect } from 'react';
import campusImage from '../../assets/Images/Campus01.webp';

const JIUExperience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white font-sans py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >

          <div className="flex justify-between items-start ">
        <div className="flex flex-col">
          <div className="pl-6 mb-10 ml-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <h2 className="jt-heading">
              <span className="jt-line">WHO  </span>
              <span className="jt-line"> WE ARE</span>
            </h2>
          </div>
        </div>
      </div>

          {/* Grid container for the two separate cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 ">

            {/* Image Card */}
            <div className="bg-white  shadow-xl overflow-hidden">
              <img
                src={campusImage}
                alt="JIU Campus"
                className="w-full h-full object-cover"
                style={{ minHeight: '400px' }}
              />
            </div>

            {/* Text Card */}
            <div className="bg-transparent  shadow-xl p-8 sm:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-medium text-gray-900 mb-4">
                JIU’s Dynamic Learning Approach
              </h2>
              <p className="text-gray-700 text-xl mb-6">
               Born from the bold philosophy of “learning by doing,” our programs throw you straight into the action, immersing you in the real, hands-on craft of film, media, and the performing arts from day one. You’ll train alongside our award-winning, industry-seasoned faculty. Every project, every scene, every moment is designed to prepare you for the real world, where your skills and creativity take center stage.
              </p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default JIUExperience;
