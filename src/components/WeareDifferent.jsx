// src/components/Home/WeAreDifferent.jsx
import React from "react";

export default function WeareDifferent() {
  const stats = [
    // Data for the statistics displayed in the component
    {
      value: "135k+",
      description: "Students Graduated Since 1992",
      borderColor: "border-blue-500",
      textColor: "text-blue-500",
    },
    {
      value: "160+",
      description: "International Students From Over 160 Countries",
      borderColor: "border-violet-500",
      textColor: "text-violet-500",
    },
    {
      value: "30",
      description: "Years of Hands-On Programs",
      borderColor: "border-amber-500",
      textColor: "text-amber-500",
    },
    {
      value: "8",
      description: "Campuses and Locations Worldwide",
      borderColor: "border-blue-500",
      textColor: "text-blue-500",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Left title */}
          <div className="md:col-span-1">
            <h2 className="jt-heading">
              <span className="jt-line">WE ARE</span>
              <span className="jt-line">DIFFERENT</span>
            </h2>
          </div>

          {/* Right stats grid – square, no card bg, no shadows */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8 sm:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center px-10 py-10 mb-4 border-4 ${stat.borderColor} rounded-none`}>
                  <span className={`text-6xl font-extrabold ${stat.textColor}`}>{stat.value}</span>
                </div>
                <p className="text-lg text-gray-600 font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
