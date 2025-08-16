// src/components/Home/WeAreDifferent.jsx
import React from "react";

export default function WeAreDifferent() {
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
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-16">
            {/* 135k+ */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center px-16 py-10 mb-4 border-4 border-blue-500 rounded-none">
                <span className="text-6xl font-extrabold text-blue-500">135k+</span>
              </div>
              <p className="text-lg text-gray-600 font-medium">
                Students Graduated Since 1992
              </p>
            </div>

            {/* 160+ */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center px-16 py-10 mb-4 border-4 border-violet-500 rounded-none">
                <span className="text-6xl font-extrabold text-violet-500">160+</span>
              </div>
              <p className="text-lg text-gray-600 font-medium">
                International Students From Over 160 Countries
              </p>
            </div>

            {/* 30 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center px-16 py-10 mb-4 border-4 border-amber-500 rounded-none">
                <span className="text-6xl font-extrabold text-amber-500">30</span>
              </div>
              <p className="text-lg text-gray-600 font-medium">
                Years of Hands-On Programs
              </p>
            </div>

            {/* 8 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center px-16 py-10 mb-4 border-4 border-blue-500 rounded-none">
                <span className="text-6xl font-extrabold text-blue-500">8</span>
              </div>
              <p className="text-lg text-gray-600 font-medium">
                Campuses and Locations Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
