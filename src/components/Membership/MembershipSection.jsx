import React from "react";
import MemberImage from "../../assets/Images/nyfa-membership-card-m.webp";

const MembershipSection = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Left Content */}
        <div className="relative">
          {/* Blue Vertical Line */}
          <div className="absolute left-0 top-0 h-16 w-1 bg-sky-400"></div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug pl-5">
            EXPLORE MORE AS A JIU MEMBER
            <br />
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
        {/* Right Content - Image */}
        <div className="flex justify-center md:justify-end md:pr-16">
          <img
            src={MemberImage}
            alt="JIU Member Card"
            className="w-full max-w-[18rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;