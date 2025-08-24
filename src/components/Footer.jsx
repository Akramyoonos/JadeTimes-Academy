import React from "react";
import Logo from "../assets/Images/Logo.avif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaSnapchatGhost,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

const topLinks = [
  {
    text: 'REQUEST INFO',
    href: '#',
    ringBorder: 'border-sky-400',
    ringFill: 'group-hover:bg-sky-400',
    iconColor: 'text-sky-300 group-hover:text-black',
    textHover: 'group-hover:text-sky-400',
  },
  {
    text: 'APPLY NOW',
    href: '#',
    ringBorder: 'border-yellow-400',
    ringFill: 'group-hover:bg-yellow-400',
    iconColor: 'text-yellow-300 group-hover:text-black',
    textHover: 'group-hover:text-yellow-400',
  },
  {
    text: 'VISIT US',
    href: '#',
    ringBorder: 'border-fuchsia-500',
    ringFill: 'group-hover:bg-fuchsia-500',
    iconColor: 'text-fuchsia-400 group-hover:text-black',
    textHover: 'group-hover:text-fuchsia-400',
  },
];

const Footer = () => {
  return (
     <div className="FooterFont bg-black from-gray-900 to-black text-white">
      {/* Top CTA strip (centered text + icon, color on hover) */}
      <div className="bg-black bg-opacity-20 border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3">
          {topLinks.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className={`group relative flex items-center border-gray-800
                          py-5 md:py-6 hover:bg-[#0C1118] transition-colors duration-200
                          ${i !== 2 ? 'border-b sm:border-b-0 sm:border-r' : 'border-b sm:border-b-0'}`}
            >
              {/* Center label + icon together */}
              <div className="w-full max-w-[520px] mx-auto flex items-center justify-center gap-3 md:gap-4 px-6">
                <span
                  className={`text-white text-xs md:text-sm font-bold tracking-[0.35em] uppercase transition-colors duration-200 ${l.textHover}`}
                >
                  {l.text}
                </span>

                <span
                  aria-hidden="true"
                  className={`inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full border ${l.ringBorder} ${l.ringFill} transition-colors duration-200`}
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className={`text-xs md:text-sm ${l.iconColor} transition-colors duration-200`}
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>


      {/* ───────── Middle Section ───────── */}
      {/* ───────── Middle Section ───────── */}
      <div className="py-10 px-6 md:px-20 bg-black bg-opacity-20 border-b border-gray-800">
        <div className="flex flex-col items-start">
            {/* Logo */}
            <div className="mb-6">
              <img
                src={Logo}
                alt="New York Film Academy Logo"
                className="h-20"
              />
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap gap-6 text-sm font-sans">
              <a href="#" className="hover:text-gray-400">
                COURSES
              </a>
              <a href="#" className="hover:text-gray-400">
                ENROLLMENT
              </a>
              <a href="#" className="hover:text-gray-400">
                INSTRUCTORS
              </a>
              <a href="#" className="hover:text-gray-400">
                CAMPUS LIFE
              </a>
              <a href="#" className="hover:text-gray-400">
                UPDATES & ARTICLES
              </a>
              <a href="#" className="hover:text-gray-400">
                OUR STORY
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-xl mt-8 text-gray-400">
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-white">
                <FaSnapchatGhost />
              </a>
              <a href="#" className="hover:text-white">
                <FaPinterestP />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
        </div>
      </div>

      {/* ───────── Bottom Section ───────── */}
      <div className="border-t border-gray-800 py-10 px-6 md:px-20 flex flex-col md:flex-row md:justify-between gap-6 text-gray-200 text-xs">
        {/* Left text */}
        <div className="md:w-2/3">
          <p>
            <span className="text-gray-600">Copyright © 2024 JadeTimes Academy •</span>{" "}
            <a href="#" className="hover:text-blue-400 text-gray-400">
              Privacy Policy
            </a>
          </p>

          <p className="mt-4 text-gray-600">
            All programs and workshops are solely owned and operated by the
            JadeTimes Academy and are not affiliated with Universal <br/>
            Studios, or Harvard University. GI Bill® is a registered trademark of the U.S.
            Department of Veterans Affairs (VA). More <br/> information about
            education benefits offered by VA is available at the official U.S.
            government website <br/> at{" "}
            <a
              href="http://www.benefits.va.gov/gibill"
              className="text-gray-400 hover:text-blue-400"
            >
              http://www.benefits.va.gov/gibill
            </a>
            . Not all programs are offered at all locations.
          </p>

          <p className="mt-4 text-gray-700">
            BPPE: The JadeTimes Academy is approved to operate by the
            California Bureau for Private Postsecondary Education (BPPE) <br />
            “Approval” or “approval to operate” means that the institution is
            compliant with the minimum standards contained in the <br /> California
            Private Postsecondary Education Act of 2009 (as amended) and
            Division 7.5 of Title 5 of the California Code of <br /> Education.
          </p>

          <p className="mt-4">
            <a href="#" className="text-gray-400  hover:text-blue-400">
              Click here
            </a>{" "}
            <span className="text-gray-700">to access the Bureau for Private Postsecondary Education website.</span>
            <br />
            <a href="#" className="text-gray-400 hover:text-blue-400">

              Click here
            </a>{" "}
            <span className="text-gray-700">to download JadeTimes Academy’s 2023 School Performance Fact
            Sheet for the Los Angeles Campus.</span>
            <br />
            <a href="#" className="text-gray-400 hover:text-blue-400">

              Click here
            </a>{" "}
            <span className="text-gray-700">to download JadeTimes Academy – BPPE 2023 Annual Report.</span>
          </p>
        </div>

        {/* Right language list */}
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 text-sm text-right">
          <li>
            <a href="#" className="hover:text-white text-gray-400">
              RU
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white text-gray-400">
              ES
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white text-gray-400">
              AR
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white text-gray-400">
              IT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white text-gray-400">
              PT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white text-gray-400">
              JP
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white text-gray-400">
              KR
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white text-gray-400">
              CN
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;