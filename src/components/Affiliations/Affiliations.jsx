
import React from "react";

const Affiliations = () => {
  return (
    <div className="flex flex-col gap-12 px-6 sm:px-6 md:px-6 lg:px-37 py-12 font-sans text-gray-900 bg-white  lg:flex-row">
      {/* Left Content */}
      <div className="space-y-8 lg:w-3/4">
        {/* Heading */}
        <h2 className="relative text-3xl font-semibold md:text-4xl">
          <span className="absolute left-[-12px] top-0 h-full w-1 bg-sky-500"></span>
          <span className="pl-4">AFFILIATIONS AND PARTNERSHIPS</span>
        </h2>

        {/* Intro Paragraph */}
        <p className="text-lg leading-relaxed text-gray-700">
          JIU is a leading international film, media, and performing arts college with campuses across the<br />
          world. JIU’s international community has welcomed students from all over the globe, many{" "}<br />
       
             <a
              href="#"
              className="text-pink-600 hover:underline"
            >
           through government funded programs.
            </a>
        </p>

        {/* Bullet Points */}
        <ul className="pl-6 space-y-4 text-gray-700 list-disc">
          <li>
            JIU is accredited by the WASC Senior College and University Commission (WSCUC).
          </li>
          <li>
            JIU is affiliated with a number of public and private institutions, government programs,<br /> 
            community service organizations, and NGOs around the world.
          </li>
          <li>
            JIU has been honored with numerous prestigious awards and recognitions by industry and<br />
            educational entities and has established partnerships with top media and entertainment studios<br /> 
            and companies.
          </li>
          <li>
            JIU has partnered with and provided visual and performing arts training programming to<br /> 
            organizations including the USG, International Govs, NGOs, U.N., NETFLIX, USAID, European,<br /> 
           Union, Freedom House, UNESCO, USIP, and NED.
          </li>

          <li>
          JIU has participated in programs with at least eight Embassies and has hosted nearly 100<br /> 
          Fulbrighters from 35 countries
          </li>

        </ul>
      </div>




  {/* Right Sidebar */}
          <aside className="flex-shrink-0 w-full mt-6 lg:w-80 lg:mt-0">
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
  );
};

export default Affiliations;
