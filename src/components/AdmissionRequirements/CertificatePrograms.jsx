import React from 'react';
import certificateImg1 from '../../assets/Images/WorkShopsForAdultsImages01.webp';
import certificateImg2 from '../../assets/Images/WorkShopsForAdultsImages02.webp';

const certificateData = [
  {
    imgSrc: certificateImg1,
    imgAlt: "Person filming with a camera",
    label: "1- & 2-YEAR CERTIFICATE PROGRAMS",
  },
  {
    imgSrc: certificateImg2,
    imgAlt: "A group of film students on location",
    label: "SHORT-TERM WORKSHOPS",
  },
];

const CertificateCard = ({ imgSrc, imgAlt, label }) => (
  <div className="relative overflow-hidden group">
    <img 
      src={imgSrc} 
      alt={imgAlt} 
      className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-end p-6 text-white transition-opacity duration-300 group-hover:bg-opacity-50">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium tracking-wide">{label}</p>
        <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const CertificatePrograms = () => {
  return (
    <div className="bg-white font-sans text-gray-800 py-16 sm:py-20">
      <div>
        <div className="flex-1 mb-12 px-6 sm:px-6 md:px-6 lg:px-35">
        <div className="flex-1 ">
          <h1 className="text-3xl md:text-4xl font-semibold border-l-4 border-yellow-400 pl-4">
            REQUIREMENTS BY CERTIFICATE PROGRAM
          </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certificateData.map((cert) => (
            <CertificateCard key={cert.label} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatePrograms;