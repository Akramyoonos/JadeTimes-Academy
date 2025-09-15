import React from "react";
import Logo from "../../assets/images/Logo.png";
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
    href: '/request-info/',
    ringBorder: 'border-sky-400',
    ringFill: 'group-hover:bg-sky-400',
    iconColor: 'text-sky-300 group-hover:text-black',
    textHover: 'group-hover:text-sky-400',
  },
  {
    text: 'APPLY NOW',
    href: '/apply-now/',
    ringBorder: 'border-yellow-400',
    ringFill: 'group-hover:bg-yellow-400',
    iconColor: 'text-yellow-300 group-hover:text-black',
    textHover: 'group-hover:text-yellow-400',
  },
  {
    text: 'VISIT US',
    href: '/on-campus/visit-us/',
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
                          py-5 md:py-6  transition-colors duration-200
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
      <div className="py-10  bg-black bg-opacity-20 border-b-2 border-gray-800 mx-12">
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
              <a href="jobs-at-nyfa/" className="hover:text-gray-400">
                JOBS
              </a>
              <a href="#" className="hover:text-gray-400">
                OUR STORY
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 text-xl mt-8 text-gray-400">
              <a href="https://www.instagram.com/jadetimes_university/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://web.facebook.com/jadetimesuniversity/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="https://x.com/JIU_University" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@Jadetimes-University" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaYoutube />
              </a>
              <a href="https://www.pinterest.com/jadetimesuniversity/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaPinterestP />
              </a>
              <a href="https://www.linkedin.com/company/108746942" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
        </div>
      </div>

      {/* ───────── Bottom Section ───────── */}
      <div className=" py-10 px-4 sm:px-10 lg:px-12 flex flex-col-reverse md:flex-row md:justify-between gap-6 text-gray-200 text-xs">
        {/* Left text */}
        <div className="md:w-2/3">
          <p>
            <span className="text-gray-600">Copyright © 2024 Jadetimes International University(JIU) •</span>{" "}
            <a href="/policy/" className="hover:text-blue-400 text-gray-400">
              Privacy Policy
            </a>
          </p>

          <p className="mt-4 text-gray-600">

All programs and workshops are owned and operated by Jadetimes International University LLC.<br/> JIU is an independent institution providing professional development, certificate programs, and <br/> non-degree courses. 
          Until official authorization is granted, JIU does not confer state-recognized degrees.  
          </p>

          <p className="mt-4 text-gray-700">
            Disclaimer: Jadetimes International University is currently in the process of seeking approval and accreditation <br/> with relevant higher education authorities. All courses offered at present are for professional training <br/> and continuing education purposes only. Programs, schedules, and availability may vary by online delivery.   
          </p>

          <p className="mt-4">
            <a href="#" className="text-gray-400  hover:text-blue-400">
              Click here
            </a>{" "}
            <span className="text-gray-700">to learn more about JIU’s programs.  </span>
            <br />
            <a href="#" className="text-gray-400 hover:text-blue-400">

              Click here
            </a>{" "}
            <span className="text-gray-700">to view JIU’s Global Agent Offices.  </span>
            <br />
            <a href="#" className="text-gray-400 hover:text-blue-400">

              Click here
            </a>{" "}
            <span className="text-gray-700">to contact JIU Admission Support.</span>
          </p>
        </div>

        {/* Right language list */}
        <ul className="grid grid-cols-4 sm:grid-cols-8 gap-4 md:gap-6 text-lg pr-6 text-right">
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