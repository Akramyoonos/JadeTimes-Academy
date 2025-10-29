import React from "react";
import Logo from "../../assets/images/Logo.webp";
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
     <div className="text-white bg-black FooterFont from-gray-900 to-black">
      {/* Top CTA strip (centered text + icon, color on hover) */}
      <div className="bg-black border-b border-gray-800 bg-opacity-20">
        <div className="grid max-w-screen-xl grid-cols-1 mx-auto sm:grid-cols-3">
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
      <div className="py-10 mx-12 bg-black border-b-2 border-gray-800 bg-opacity-20">
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
            <div className="flex flex-wrap gap-6 font-sans text-sm">
              <a href="/Admin-Login/" className="hover:text-gray-400">
                ADMIN
              </a>
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
              <a href="/jobs-at-nyfa/" className="hover:text-gray-400">
                JOBS
              </a>
              <a href="#" className="hover:text-gray-400">
                OUR STORY
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8 text-xl text-gray-400">
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
      <div className="flex flex-col-reverse gap-6 px-4 py-10 text-xs text-gray-200  sm:px-10 lg:px-12 md:flex-row md:justify-between">
        {/* Left text */}
        <div className="md:w-2/3">
          <div>
            <span>Copyright © 2024 Jadetimes International University (JIU)</span>
            <span className="mx-2">•</span>
            <a href="/policy/" className="transition-colors hover:text-blue-400">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="/Terms-Conditions/" className="transition-colors hover:text-blue-400">Terms & Conditions</a>
          </div>

          <p className="mt-4 text-gray-600">

All programs and workshops are owned and operated by Jadetimes International University LLC.<br/> JIU is an independent institution providing professional development, certificate programs, and <br/> non-degree courses. 
          Until official authorization is granted, JIU does not confer state-recognized degrees.  
          </p>

          <p className="mt-4 text-gray-700">
            Disclaimer: Jadetimes International University is currently in the process of seeking approval and accreditation <br/> with relevant higher education authorities. All courses offered at present are for professional training <br/> and continuing education purposes only. Programs, schedules, and availability may vary by online delivery.   
          </p>

          <p className="mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400">
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
        <ul className="grid grid-cols-4 gap-4 pr-6 text-lg text-right sm:grid-cols-8 md:gap-6">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              RU
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              ES
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              AR
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              IT
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              PT
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              JP
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              KR
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              CN
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;