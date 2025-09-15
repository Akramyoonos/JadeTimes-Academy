
import React from "react";

const Affiliations = () => {
  return (
    <div className="bg-white font-sans text-gray-900 py-12 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row gap-12">
      {/* Left Content */}
      <div className="lg:w-3/4 space-y-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold relative">
          <span className="absolute left-[-12px] top-0 h-full w-1 bg-sky-500"></span>
          <span className="pl-4">AFFILIATIONS AND PARTNERSHIPS</span>
        </h2>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed">
          NYFA is a leading international film, media, and performing arts college with campuses across the<br />
          world. NYFA’s international community has welcomed students from all over the globe, many{" "}<br />
       
             <a
              href="#"
              className="text-pink-600 hover:underline"
            >
           through government funded programs.
            </a>
        </p>

        {/* Bullet Points */}
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            NYFA is accredited by the WASC Senior College and University Commission (WSCUC).
          </li>
          <li>
            NYFA is affiliated with a number of public and private institutions, government programs,<br /> 
            community service organizations, and NGOs around the world.
          </li>
          <li>
            NYFA has been honored with numerous prestigious awards and recognitions by industry and<br />
            educational entities and has established partnerships with top media and entertainment studios<br /> 
            and companies.
          </li>
          <li>
            NYFA has partnered with and provided visual and performing arts training programming to<br /> 
            organizations including the USG, International Govs, NGOs, U.N., NETFLIX, USAID, European,<br /> 
           Union, Freedom House, UNESCO, USIP, and NED.
          </li>

          <li>
          NYFA has participated in programs with at least eight Embassies and has hosted nearly 100<br /> 
          Fulbrighters from 35 countries
          </li>

        </ul>
      </div>




  <aside className="w-full lg:w-80 flex-shrink-0 bg-white p-4 rounded-lg shadow-xl max-h-64">
  <h2 id="related-links-heading" className="text-lg font-extrabold uppercase tracking-wider text-gray-800 mb-4">
    RELATED LINKS
  </h2>
  <nav aria-labelledby="related-links-heading" className="flex flex-col text-base font-medium text-gray-700 space-y-2">
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
      ABOUT US
    </a>
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
    ACCREDITATION, LICENSING, AND APPROVALS
    </a>
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
      ARTICULATIION
    </a>
  </nav>
</aside>

    </div>
  );
};

export default Affiliations;
