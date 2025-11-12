import React from "react";

const MembershipSection = () => {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-6 md:px-6 lg:px-35">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Left Content */}
        <div className="relative">
          {/* Blue Vertical Line */}
          <div className="absolute left-0 top-0 h-16 w-1 bg-sky-400"></div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug pl-5">
            EXPLORE MORE AS A JIU MEMBER
           
            JOIN TODAY!
          </h3>

          <h3 className="text-2xl font-semibold text-gray-700 mb-2 mt-8">JIU Membership</h3>
          <p className="text-pink-600 font-bold mb-8">$50 per year</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-20 mb-10">
            <button className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-3.5 px-10 w-64 transition">
              JOIN/RENEW
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3.5 px-10 w-64 transition">
              GIFT IT
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-700 font-medium mb-4">
            JIU Membership is open to everyone! <br />
            You can become a JIU Member from anywhere in the world.
          </p>

          <p className="text-gray-600 mb-4">
            JIU Membership is our way to engage with and provide valuable Film, Media, and Performing Arts experiences to our community, prospective students, parents, fans, partners, and all audiences interested in exclusive content and access to industry professionals.
          </p>
          <p className="text-gray-600">
            JIU Membership perks include:
          </p>
        </div>

       {/* Right Sidebar */}
          <aside className="shrink-0 pl-6 pb-4 w-80 mt-6 lg:w-80 lg:mt-0">
          <div className="border border-gray-200">
            <div className="p-4 bg-gray-200 ">
              <h2 id="related-links-heading" className="text-2xl font-semibold text-black uppercase">
                RELATED LINKS
              </h2>
            </div>
            <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Open House
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Degree Programs
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Program Dates & Tuition
              </a>
            </nav>
          </div>
        </aside>

      </div>
    </section>
  );
};

export default MembershipSection;