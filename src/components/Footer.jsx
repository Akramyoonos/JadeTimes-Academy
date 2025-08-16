import React from 'react';
import logo from '../assets/images/Logo.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faYoutube,
  faSnapchat,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

/* ───────── CTA config (text + color behavior) ───────── */
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

/* ───────── Footer content ───────── */
const footerColumns = [
  {
    title: 'About',
    links: [
      { text: 'JadeTimes Brochures', href: '#' },
      { text: 'Faculty', href: '#' },
      { text: 'Alum Network', href: '#' },
      { text: 'Store', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Jobs', href: 'https://www.jadetimes.com/job-vacancies' },
      { text: 'Teach-Out Policy', href: '#' },
      { text: 'Privacy Policy', href: '#' },
      { text: 'BPPE', href: '#' },
    ],
  },
];

const socialIcons = [
  { icon: faInstagram, href: '#', label: 'Instagram' },
  { icon: faFacebookF, href: '#', label: 'Facebook' },
  { icon: faXTwitter, href: '#', label: 'X (Twitter)' },
  { icon: faYoutube, href: '#', label: 'YouTube' },
  { icon: faSnapchat, href: '#', label: 'Snapchat' },
  { icon: faPinterestP, href: '#', label: 'Pinterest' },
  { icon: faLinkedinIn, href: '#', label: 'LinkedIn' },
];

/* ───────── Small pieces ───────── */
const FooterLink = ({ href, children, className = '' }) => (
  <a
    href={href}
    className={`text-gray-400 hover:text-white hover:underline transition-colors duration-300 ${className}`}
  >
    {children}
  </a>
);

const SocialIcon = ({ icon, href, label }) => (
  <a
    href={href}
    aria-label={label}
    className="text-gray-500 hover:text-white transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300"
  >
    <FontAwesomeIcon icon={icon} size="lg" />
  </a>
);

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, i) => (
        <li key={i}>
          <FooterLink href={link.href}>{link.text}</FooterLink>
        </li>
      ))}
    </ul>
  </div>
);

const NewsletterForm = () => (
  <div>
    <h3 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">Stay Connected</h3>
    <p className="text-gray-400 mb-4 text-sm">Get the latest news and updates from JadeTimes.</p>
    <form className="flex">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
        aria-label="Subscribe to newsletter"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  </div>
);

/* ───────── Footer ───────── */
export default function Footer() {
  return (
    <div className="FooterFont bg-gradient-to-b from-gray-900 to-black text-white">
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
                  className={`text-white text-[13px] md:text-sm font-bold tracking-[0.35em] uppercase transition-colors duration-200 ${l.textHover}`}
                >
                  {l.text}
                </span>

                <span
                  aria-hidden="true"
                  className={`inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full border ${l.ringBorder} ${l.ringFill} transition-colors duration-200`}
                >
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className={`text-[13px] md:text-sm ${l.iconColor} transition-colors duration-200`}
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <footer className="max-w-screen-xl mx-auto pt-16 pb-12 px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo & socials */}
          <div className="md:col-span-12 lg:col-span-3">
            <img alt="New York Film Academy logo" className="h-16 w-auto mb-6" src={logo} />
            <div className="flex flex-wrap gap-5 text-gray-500">
              {socialIcons.map((s, i) => (
                <SocialIcon key={i} {...s} />
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerColumns.map((col, i) => (
            <div key={i} className="md:col-span-6 lg:col-span-2">
              <FooterColumn {...col} />
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-12 lg:col-span-5">
            <NewsletterForm />
          </div>
        </div>
      </footer>

      {/* Bottom legal */}
      <div className="border-t border-gray-800">
        <div className="max-w-screen-xl mx-auto py-8 px-6 sm:px-8 text-gray-500 text-xs leading-relaxed space-y-4 text-center">
          <p>
            Copyright © 2025 New York Film Academy • <FooterLink href="#">Privacy Policy</FooterLink>
          </p>
          <p className="max-w-4xl mx-auto">
            All programs and workshops are solely owned and operated by the New York Film Academy and are not affiliated
            with Universal Studios or Harvard University. GI Bill® is a registered trademark of the U.S. Department of
            Veterans Affairs (VA). More information about education benefits offered by VA is available at the official
            U.S. government website at{' '}
            <a
              className="hover:underline text-gray-400"
              href="http://www.benefits.va.gov/gibill"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.benefits.va.gov/gibill
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
