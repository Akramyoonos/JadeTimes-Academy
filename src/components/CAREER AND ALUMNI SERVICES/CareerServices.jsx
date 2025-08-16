import React from 'react';
import { FaPaintBrush, FaBullhorn, FaUsers, FaBriefcase, FaCalendarAlt, FaProjectDiagram } from 'react-icons/fa';

const services = [
  {
    icon: <FaPaintBrush className="text-purple-500" size={40} />,
    title: 'Portfolio and Reel Reviews',
    description: 'Receive expert feedback on your portfolio and reels to showcase your best work to potential employers.',
  },
  {
    icon: <FaBullhorn className="text-purple-500" size={40} />,
    title: 'Industry Outreach and Job Postings',
    description: 'Access exclusive job postings and connect with our network of industry partners.',
  },
  {
    icon: <FaUsers className="text-purple-500" size={40} />,
    title: 'Guest Lectures and Panels',
    description: 'Learn from the best in the business through our ongoing series of guest lectures and panels.',
  },
  {
    icon: <FaBriefcase className="text-purple-500" size={40} />,
    title: 'Internship Assistance',
    description: 'Gain real-world experience and make valuable connections with our internship placement assistance.',
  },
  {
    icon: <FaCalendarAlt className="text-purple-500" size={40} />,
    title: 'Networking Events',
    description: 'Attend exclusive networking events to meet industry professionals and build your contact list.',
  },
  {
    icon: <FaProjectDiagram className="text-purple-500" size={40} />,
    title: 'Project and Pitching Support',
    description: 'Get guidance and support for your creative projects, from concept to pitching.',
  },
];

const CareerServices = () => {
  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Career Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are dedicated to helping our students and alumni succeed in their creative careers.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div className="ml-5 w-0 flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-base text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerServices;