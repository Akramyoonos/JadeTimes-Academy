import React from 'react';

const ScholarshipAndGrantsOrganization = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto lg:px-24 px-4 py-12">

        <div className="relative mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600 -ml-4"></div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-wider">SCHOLARSHIPS AND GRANTS FROM OTHER ORGANIZATIONS</h1>
        </div>

        <p className="mb-8 text-base leading-relaxed">
          Scholarships are gifts from donors or organizations that do not have to be repaid. Scholarships may come from a variety of sources — community groups, corporate or donors, each with its own requirement and application process. They are an excellent resource for applicants and students seeking help with the cost of their education and can help reduce the dependence on loans to cover educational costs. Applicants and students are encouraged to search and apply for as many scholarships as possible.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Free Scholarship Search Engines</h2>
        <p className="mb-4 text-base leading-relaxed">Below you will find links to online scholarship search sites listing thousands of scholarships and financial aid awards.</p>
        <ul className="list-disc list-inside text-purple-600 mb-10">
          <li><span className="text-gray-800">College Board</span></li>
          <li><span className="text-gray-800">Fastweb</span></li>
          <li><span className="text-gray-800">Finaid</span></li>
          <li><span className="text-gray-800">Sallie Mae Scholarship Search</span></li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mb-4">SAG Discount</h2>
        <p className="mb-10 text-base leading-relaxed">
          NYFA offers a SAG Discount of 15%. Applicants need to demonstrate a valid/current SAG membership
        </p>

        <h2 className="text-xl font-bold text-gray-900 mb-4">International Students Scholarships</h2>
        <p className="mb-10 text-base leading-relaxed">
          Please visit the <a href="#" className="text-purple-600 hover:underline">Financial Aid for International Students page</a> for more information about financial aid opportunities that may be available to International Students.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Veterans</h2>
        <p className="mb-4 text-base leading-relaxed">
          Many of our programs have been approved for veterans education benefits. In addition, all those who are not fully covered by the Post-9/11 GI bill will receive a 15% discount on tuition. Please see www.gibill.va.gov or call 1-888-GIBILL-1 (1-888-442-4551) for information on your eligibility and how to obtain your certificate of eligibility.
        </p>
        <p className="text-base leading-relaxed">
          Please contact our Office of Veterans Services, 818-333-3558 to confirm program approvals. To learn more, visit <a href="#" className="text-purple-600 hover:underline">NYFA’s GI Bill and Yellow Ribbon Program page</a>.
        </p>

      </div>
    </div>
  );
};

export default ScholarshipAndGrantsOrganization;