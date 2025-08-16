// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faGlobeAmericas,
  faChevronDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import logo from '../assets/images/Logo.avif';

// ---------------- CONFIG ----------------
// Full-bleed: no max-width. Tweak gutters here.
// To remove side padding entirely, change px-4 sm:px-6 lg:px-8 -> px-0
const gutters = 'px-4 sm:px-6 lg:px-8';

const topBarLinks = [
  {
    href: '#',
    text: 'Current Students',
    className:
      'ml-10 md:ml-2 font-semibold hover:text-white transition-colors duration-300',
  },
  {
    href: '#',
    text: 'Parents',
    className:
      'hidden sm:inline font-semibold hover:text-white transition-colors duration-300',
  },
  {
    href: '#',
    text: 'Online Info Sessions',
    className:
      'hidden md:inline text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300',
  },
];


const navLinks = [
  { href: '/',                    text: 'HOME' },
  { href: '/about',               text: 'ABOUT US' },
  { href: '/programfinder',       text: 'PROGRAM FINDER' },
  { href: '/admissions',          text: 'ADMISSIONS' },
  { href: '/blog',                text: 'BLOG' },
  { href: '/contact_us',          text: 'CONTACT US' },
  { href: '/alumni',              text: 'ALUMNI' },
  { href: '/StudentResources',    text: 'STUDENT RESOURCES' },
  { href: '/CareerAndAlumniServices', text: 'CAREER AND ALUMNI SERVICES' },
];

const languages = ['English','Spanish','French','German','Chinese','Japanese','Korean','Arabic','Russian'];

// ---------------- HOOKS ----------------
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

// ---------------- PARTS ----------------
const LanguageSelector = ({ isOpen, onToggle }) => {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => onToggle(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => onToggle(!isOpen)}
        className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faGlobeAmericas} />
        <span className="text-xs font-semibold">ENGLISH</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`w-2 h-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg py-1 z-30 origin-top-right transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {languages.map((lang) => (
          <a
            key={lang}
            href="/"
            className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-colors duration-200"
          >
            {lang}
          </a>
        ))}
      </div>
    </div>
  );
};

// ---------- Full-bleed NYFA-style Search Dropdown ----------
const SearchDropdown = ({ open, onClose }) => {
  const boxRef = useRef(null);
  const [value, setValue] = useState('');
  useClickOutside(boxRef, onClose);

  // No body scroll lock needed for dropdown

  return (
    <div
      ref={boxRef}
      className={`absolute top-full left-0 w-full bg-[#101010] shadow-xl transition-all duration-300 ease-in-out ${gutters} ${
        open
          ? 'translate-y-0 opacity-100'
          : '-translate-y-4 opacity-0 pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      <div className="py-8 sm:py-10 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-1/2 -translate-y-1/2 sm:right-6 text-gray-400 hover:text-white"
          aria-label="Close search"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <label htmlFor="mega-search" className="sr-only">
          Search
        </label>
        <input
          id="mega-search"
          type="text"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onClose()}
          placeholder="Search"
          className="w-full bg-transparent text-white placeholder-gray-400 text-2xl sm:text-3xl outline-none pb-3 border-b-2 border-gray-600 focus:border-yellow-400 transition-colors"
        />
      </div>
    </div>
  );
};

// ---------- Mobile Menu ----------
const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>

      <div
        className={`absolute top-0 right-0 h-full w-80 bg-gray-900 shadow-2xl p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white">
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <ul className="flex flex-col gap-5 mt-12">
          {navLinks.map((link) => (
            <li key={link.text}>
              <NavLink
                to={link.href}
                onClick={onClose}
                className="block py-2 text-xl font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <hr className="border-gray-700 my-8"/>
      </div>
    </div>
  );
};

// ---------------- MAIN HEADER ----------------
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <>
      <header className="headerFont bg-gray-900 text-white shadow-lg sticky top-0 z-20 relative">
        {/* Top bar (full width) */}
        <div className="bg-black/30 border-b border-gray-800">
          <div className={`w-full ${gutters}`}>
            <div className="flex items-center justify-between py-2 text-xs">
              <div className="flex items-center gap-x-5 text-gray-400">
                {topBarLinks.map(link => (
                  <a key={link.text} href={link.href} className={link.className}>{link.text}</a>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <span className="hidden lg:inline text-white font-semibold">1-800-611-FILM</span>
                <LanguageSelector isOpen={isLangOpen} onToggle={setIsLangOpen} />
                <button
                  aria-label="Search"
                  onClick={() => setIsSearchOpen(prev => !prev)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav (full width) */}
        <nav className="relative">
          <div className={`w-full ${gutters}`}>
            <div className="flex items-center justify-between py-3">
              <NavLink to="/" className="flex-shrink-0">
                <img alt="jadetimes logo" className="h-12 w-auto" src={logo} />
              </NavLink>

              <ul className="hidden lg:flex items-center gap-x-7">
                {navLinks.map((link) => (
                  <li key={link.text}>
                    <NavLink
                      to={link.href}
                      className="relative block py-2 text-sm font-semibold tracking-wider uppercase text-gray-300 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-yellow-400 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="Toggle menu"
                  className="lg:hidden text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faBars} size="lg" />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <SearchDropdown open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </header>

      {/* Overlays */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
