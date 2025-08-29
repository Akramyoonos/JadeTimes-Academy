import React from 'react';

const Grants = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="px-4 py-12 ">
        {/* Main Heading */}
        <div className="flex items-center mb-12">
          <div className="w-1.5 h-12 bg-purple-600 mr-6"></div>
          <h1 className="text-4xl font-bold tracking-wider text-gray-700">GRANTS</h1>
        </div>

        {/* Federal and State Grants Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Federal and State Grants</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            First-time students can also apply for grants, which are awarded based on need and eligibility. Grants do not need to be repaid. Students are encouraged to review grant programs to help pay for educational costs.
          </p>

          {/* Pell Grant Subsection */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Federal Pell Grant (Pell)</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Pell Grant maximum awards change annually, please visit <a href="https://studentaid.gov/" className="text-purple-600 hover:underline">https://studentaid.gov/</a> for the current year maximum amounts. The Pell Grant is awarded to eligible undergraduate students who have not earned a Bachelor&apos;s or professional degree. Award amounts are based on the student&apos;s level of need and enrollment status. If the student is enrolled less than full-time, the award will be prorated. Applicants must complete a <a href="#" className="text-purple-600 hover:underline">Free Application for Federal Student Aid (FAFSA)</a> to begin the award review process.
            </p>
          </div>
        </section>

        {/* State Grants Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">State Grants</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Many states offer grant programs to qualified residents. However, most of the state grant programs require attendance and permanent residence in that state for grant eligibility.
          </p>
          <div className="space-y-2">
            <a href="#" className="block text-purple-600 hover:underline text-base">California State Grant Programs</a>
            <a href="#" className="block text-purple-600 hover:underline text-base">New York State Grant Programs</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Grants;