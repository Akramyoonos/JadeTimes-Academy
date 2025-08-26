// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faGlobeAmericas,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/Logo.avif";

// ---------------- CONFIG ----------------
const gutters = "px-6 sm:px-8 lg:px-10";

// accent colors
const ACCENTS = {
  academics: "#28A8E0", // blue
  admissions: "#A44FBF", // purple
  campuses: "#F5C94A",   // yellow
  discover: "#A44FBF",   // purple
  alumni:   "#28A8E0",   // blue
  youth:    "#F5C94A",   // yellow
};

// one-place font size control
const FONT_SIZES = {
  topbar: "15px",
  phone: "15px",
  nav: "16px",
  cta: "15px",
  megaHeading: "16px",
  megaItem: "14px",
};

const topBarLinks = [
  { href: "#", text: "Current Students" },
  { href: "#", text: "Parents" },
  { href: "#", text: "Online Info Sessions", style: { color: ACCENTS.campuses } },
  { href: "#", text: "Become a JadeTimes Member", style: { color: ACCENTS.academics } },
];

const navLinks = [
  { key: "academics", text: "ACADEMICS", href: "/academics", menu: "academicsMenu", accent: ACCENTS.academics },
  { key: "admissions", text: "ADMISSIONS & FINANCES", href: "/admissions", menu: "admissionsFinancesMenu", accent: ACCENTS.admissions },
  { key: "campuses", text: "CAMPUSES", href: "/campuses", menu: "campusesMenu", accent: ACCENTS.campuses },
  { key: "discover", text: "DISCOVER NYFA", href: "/discover", menu: "discoverMenu", accent: ACCENTS.discover },
  { key: "alumni", text: "ALUMNI", href: "/alumni", accent: ACCENTS.alumni },
  { key: "youth", text: "YOUTH PROGRAMS", href: "/youth", menu: "youthMenu", accent: ACCENTS.youth },
];

const megaMenus = {
  academicsMenu: {
    "AREAS OF STUDY": [
      "FILMMAKING",
      "ACTING FOR FILM",
      "PHOTOGRAPHY",
      "PRODUCING",
      "SCREENWRITING",
      "CINEMATOGRAPHY",
      "DOCUMENTARY FILMMAKING",
      "DIGITAL EDITING",
      "3D ANIMATION & VISUAL EFFECTS",
      "BROADCAST JOURNALISM",
      "MUSICAL THEATRE",
      "GAME DESIGN",
      "ENTERTAINMENT MEDIA",
      "VIRTUAL REALITY",
      "NYFA'S PATHWAY TRACK",
    ],
    "DEGREE PROGRAMS": [
      "BACHELOR OF FINE ARTS",
      "BACHELOR OF ARTS",
      "MASTER OF FINE ARTS",
      "MASTER OF ARTS",
      "ASSOCIATE OF FINE ARTS",
      "ONLINE DEGREES",
    ],
    "CERTIFICATE PROGRAMS": [
      "1 & 2-YEAR PROGRAMS",
      "SHORT-TERM WORKSHOPS",
      "ONLINE PROGRAMS",
      "CORPORATE TRAINING",
    ],
    "STUDY ABROAD WITH NYFA": ["FILMMAKING", "ACTING FOR FILM"],
  },
  admissionsFinancesMenu: {
    ADMISSIONS: [
      "PROGRAM DATES",
      "APPLICATION DEADLINES",
      "ADMISSIONS REQUIREMENTS",
      "INTERNATIONAL STUDENTS",
      "VETERANS & MILITARY",
    ],
    FINANCES: [
      "TUITION",
      "FEDERAL FINANCIAL AID",
      "SCHOLARSHIPS & GRANTS",
      "PRIVATE STUDENT LOANS",
      "HOUSING INFORMATION",
    ],
  },
  campusesMenu: {
    CAMPUSES: ["New York City", "Los Angeles", "Florence, Italy", "Online"],
    LOCATIONS: [
      "NYFA Kazakhstan",
      "NYFA at Harvard University",
      "Paris, France",
      "Beijing and Greater China",
    ],
  },
  discoverMenu: {
    "WHO WE ARE": [
      "ABOUT US",
      "HISTORY",
      "MISSION & PURPOSE",
      "ACCREDITATION",
      "LEADERSHIP & ADMINISTRATION",
    ],
    "ON CAMPUS": [
      "VISIT US",
      "OPEN HOUSE & LIVE ONLINE EVENTS",
      "ACADEMIC CALENDAR",
      "STUDENT LIFE",
      "HEALTH AND WELLNESS",
    ],
    "NEWS AND CULTURE": [
      "GUEST SPEAKERS",
      "NYFA IN THE NEWS",
      "BLOG",
      "NYFA YOUTUBE CHANNEL",
      "PODCASTS",
    ],
  },
  youthMenu: {
    "TEEN CAMPS AND WORKSHOPS": [
      "FILMMAKING",
      "ACTING FOR FILM",
      "PHOTOGRAPHY",
      "SCREENWRITING",
      "3D ANIMATION",
      "GAME DESIGN",
    ],
    "KIDS CAMPS AND WORKSHOPS": [
      "FILMMAKING",
      "ACTING FOR FILM",
      "PHOTOGRAPHY",
      "3D ANIMATION",
      "MUSICAL THEATRE",
    ],
    "YOUTH ADMISSIONS": [
      "PROGRAM DATES",
      "TUITION",
      "HOUSING",
      "INTERNATIONAL STUDENTS",
      "YOUTH OPEN HOUSES",
    ],
    LOCATIONS: [
      "NEW YORK CITY",
      "LOS ANGELES",
      "MIAMI",
      "FLORENCE, ITALY",
      "HARVARD UNIVERSITY",
    ],
  },
};

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Korean",
  "Arabic",
  "Russian",
];

// ---------------- HOOKS ----------------
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
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
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faGlobeAmericas} />
        <span className="font-normal text-[length:var(--size-topbar)]">ENGLISH</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`w-3 h-3 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: isOpen ? ACCENTS.youth : "" }}
        />
      </button>

      <div
        className={`absolute right-0 mt-2 w-40 bg-black border-white border shadow-lg py-1 z-40 origin-top-right transition-all duration-500 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {languages.map((lang) => (
          <a
            key={lang}
            href="/"
            className="block px-4 py-2 text-[length:var(--size-topbar)] text-gray-200 hover:bg-gray-700 transition-colors duration-300"
          >
            {lang}
          </a>
        ))}
      </div>
    </div>
  );
};

const SearchDropdown = ({ open, onClose }) => {
  const boxRef = useRef(null);
  const [value, setValue] = useState("");
  useClickOutside(boxRef, onClose);

  return (
    <div
      ref={boxRef}
      className={`absolute top-full left-0 w-full bg-[#101010] shadow-xl transition-all duration-300 ease-in-out ${gutters} ${
        open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="py-8 sm:py-10 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-1/2 -translate-y-1/2 sm:right-6 text-gray-400 hover:text-white"
          aria-label="Close search"
        >
          <FontAwesomeIcon icon={faTimes} />
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
          onKeyDown={(e) => e.key === "Enter" && onClose()}
          placeholder="Search"
          className="w-full bg-transparent text-white placeholder-gray-400 text-2xl sm:text-3xl outline-none pb-3 border-b-2 border-gray-600 focus:border-yellow-400 transition-colors"
        />
      </div>
    </div>
  );
};

const MegaMenu = ({ open, config, accent }) => {
  if (!config) return null;

  return (
    <div
      className={`absolute left-0 right-0 top-full z-30 origin-top transform transition-all duration-300 ease-in-out ${
        open
          ? "scale-100 translate-y-0 opacity-100"
          : "scale-95 -translate-y-2 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-screen bg-[#141414]">
        <div className="py-10 px-4 sm:px-6 lg:px-8">
          <div
            className="grid gap-x-8 gap-y-6"
            style={{ gridTemplateColumns: `repeat(${Object.keys(config).length}, minmax(0, 1fr))` }}
          >
            {Object.entries(config).map(([section, items]) => (
              <div key={section}>
                <h3
                  className="uppercase mb-4 pb-2 font-normal tracking-tight"
                  style={{
                    color: "white",
                    borderBottom: `2px solid ${accent}`,
                    fontSize: "var(--size-mega-heading)",
                    lineHeight: 1.25,
                  }}
                >
                  {section}
                </h3>

                <ul className="space-y-2">
                  {items.map((item) => {
                    const wrapClass =
                      section === "AREAS OF STUDY"
                        ? "max-w-[300px] whitespace-normal leading-tight"
                        : "whitespace-normal leading-tight";

                    return (
                      <li key={item}>
                        <a
                          href="#"
                          className={`block text-gray-300 hover:text-white transition-colors ${wrapClass}`}
                          style={{ fontSize: "var(--size-mega-item)" }}
                          title={item}
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-3 px-4 text-2xl font-semibold text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-300"
        onClick={onToggle}
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 pl-8 pr-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose, isLangOpen, setIsLangOpen }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleAccordion = (key) => {
    setActiveAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-80 bg-[#0A0A0A] shadow-2xl rounded-l-lg p-6 transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl"
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <ul className="flex flex-col gap-2 mt-10">
          {navLinks.map((link) => (
            <li key={link.text}>
              {link.menu ? (
                <AccordionItem
                  title={link.text}
                  isOpen={activeAccordion === link.key}
                  onToggle={() => toggleAccordion(link.key)}
                >
                  {Object.entries(megaMenus[link.menu]).map(([section, items]) => (
                    <div key={section} className="mb-4 last:mb-0">
                      <h4 className="uppercase text-sm font-bold text-gray-400 mb-2" style={{ color: link.accent }}>
                        {section}
                      </h4>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li key={item}>
                            <a
                              href="#" // You might want to make this dynamic based on actual routes
                              className="block py-1 text-base text-gray-300 hover:text-white transition-colors duration-300"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </AccordionItem>
              ) : (
                <NavLink
                  to={link.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-2xl font-semibold text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-300"
                >
                  {link.text}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <hr className="border-gray-700 my-5" />
        <div className="flex flex-col gap-2 mt-5">
          {topBarLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="block py-2 text-lg font-normal text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              style={link.style || {}}
            >
              {link.text}
            </a>
          ))}
          <div className="flex items-center justify-between py-2">
            <span className="text-white font-light" style={{ fontSize: "var(--size-phone)" }}>
              1-800-JADETIMES
            </span>
            <div className="flex items-center gap-5">
              <LanguageSelector isOpen={isLangOpen} onToggle={setIsLangOpen} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          <a
            href="/request-info"
            className="text-center w-full px-4 py-3  font-semibold text-white"
            style={{ backgroundColor: ACCENTS.academics, fontSize: "var(--size-cta)" }}
          >
            REQUEST INFO
          </a>
          <a
            href="/apply"
            className="text-center w-full px-4 py-3 rounded border-2 border-white font-semibold text-white"
            style={{ fontSize: "var(--size-cta)" }}
          >
            APPLY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

// Small helper to render desktop nav item with sliding underline
const DesktopNavItem = ({ children, active, color, onClick, to }) => {
  const base =
    "relative group block py-6 uppercase tracking-tight text-white hover:text-white transition-colors";
  const styleText = { fontSize: "var(--size-nav)", fontWeight: 400 };

  // underline animates left->right on hover; stays full when active
  const underlineStyle = {
    backgroundColor: color || "transparent",
  };

  if (to) {
    return (
      <NavLink to={to} className={base} style={styleText}>
        <span>{children}</span>
        <span
          className={`pointer-events-none absolute left-0 -bottom-[2px] h-[2px] w-0 group-hover:w-full transition-[width] duration-300 ${active ? "w-full" : ""}`}
          style={underlineStyle}
        />
      </NavLink>
    );
  }
  return (
    <button onClick={onClick} className={base} style={styleText}>
      <span>{children}</span>
      <span
        className={`pointer-events-none absolute left-0 -bottom-[2px] h-[2px] w-0 group-hover:w-full transition-[width] duration-300 ${active ? "w-full" : ""}`}
        style={underlineStyle}
      />
    </button>
  );
};

// ---------------- MAIN HEADER ----------------
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const navRef = useRef(null);
  useClickOutside(navRef, () => setActiveMenu(null));

  const toggleMenu = (key) => setActiveMenu((prev) => (prev === key ? null : key));

  return (
    <>
      {/* Root header (NOT sticky) */}
      <header
        className="bg-[#111111] text-white shadow-lg"
        style={{
          ["--size-topbar"]: FONT_SIZES.topbar,
          ["--size-phone"]: FONT_SIZES.phone,
          ["--size-nav"]: FONT_SIZES.nav,
          ["--size-cta"]: FONT_SIZES.cta,
          ["--size-mega-heading"]: FONT_SIZES.megaHeading,
          ["--size-mega-item"]: FONT_SIZES.megaItem,
        }}
      >
        {/* Top bar — scrolls away */}
        <div className="hidden lg:block bg-black border-b border-gray-800">
          <div className={`w-full ${gutters}`}>
            <div className="flex items-center justify-between py-2" style={{ fontSize: "var(--size-topbar)" }}>
              <div className="flex items-center gap-x-6 text-gray-400">
                {topBarLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className="font-normal hover:text-white transition-colors duration-300"
                    style={link.style || {}}
                  >
                    {link.text}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <span
                  className="hidden lg:inline text-white font-light"
                  style={{ fontSize: "var(--size-phone)" }}
                >
                  1-800-JADETIMES
                </span>
                <button
                  aria-label="Search"
                  onClick={() => setIsSearchOpen((v) => !v)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <LanguageSelector isOpen={isLangOpen} onToggle={setIsLangOpen} />
              </div>
            </div>
          </div>
        </div>

        {/* Main nav — sticky */}
        <nav className="sticky top-0 z-30 bg-black w-full" ref={navRef}>
          <div className={`w-full ${gutters}`}>
            <div className="flex items-center justify-between py-2">
              <NavLink to="/" className="flex-shrink-0">
                <img alt="JadeTimes Academy Logo" className="h-16 w-auto" src={logo} />
              </NavLink>

              <ul className="hidden lg:flex items-center gap-x-6">
                {navLinks.map((link) => (
                  <li key={link.key}>
                    {link.menu ? (
                      <DesktopNavItem
                        active={activeMenu === link.key}
                        color={link.accent}
                        onClick={() => toggleMenu(link.key)}
                      >
                        {link.text}
                      </DesktopNavItem>
                    ) : (
                      <DesktopNavItem
                        active={false}
                        color={link.accent}
                        to={link.href}
                      >
                        {link.text}
                      </DesktopNavItem>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-2">
              <a
                href="/request-info"
                className="px-3 py-2 text-sm font-semibold text-black"
                style={{ backgroundColor: ACCENTS.academics }}
              >
                REQUEST INFO
              </a>
                  <a
                    href="/apply"
                    className="px-3 py-2 border-2 border-white font-semibold text-white"
                    style={{ fontSize: "var(--size-cta)" }}
                  >
                    APPLY NOW
                  </a>
                </div>
                <button
                  aria-label="Search"
                  onClick={() => setIsSearchOpen((v) => !v)}
                  className="lg:hidden text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Toggle menu"
                  className="lg:hidden text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            </div>
          </div>

          {/* Active mega menu (full-bleed) */}
          {navLinks.map(
            (link) =>
              link.menu && (
                <MegaMenu
                  key={link.key}
                  open={activeMenu === link.key}
                  config={megaMenus[link.menu]}
                  accent={link.accent}
                />
              )
          )}

          <SearchDropdown open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </nav>
      </header>

      {/* Mobile off-canvas */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} isLangOpen={isLangOpen} setIsLangOpen={setIsLangOpen} />
    </>
  );
};

export default Header;