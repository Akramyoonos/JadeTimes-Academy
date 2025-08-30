import React, { useEffect, useRef, useState } from "react";
// Removed NavLink import as it requires a Router context which is not available.
// import { NavLink } from "react-router-dom";

import logo  from "../assets/Images/Logo.png";

// ---------------- ICONS ----------------
// Inlined SVG icons to replace the FontAwesome package which was causing errors.
const BarsIcon = ({ className, ...props }) => (
  <svg xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const ChevronDownIcon = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const GlobeIcon = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const SearchIcon = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const TimesIcon = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

// ---------------- CONFIG ----------------
const gutters = "px-6 sm:px-8 xl:px-10";

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

// FIX: Removed duplicate menu items that were causing key warnings.
const megaMenus = {
  academicsMenu: {
    "AREAS OF STUDY": [
      { text: "FILMMAKING", href: "/academics/areas-of-study/filmmaking" },
      { text: "ACTING FOR FILM", href: "/academics/areas-of-study/acting-for-film" },
      { text: "PHOTOGRAPHY", href: "/academics/areas-of-study/photography" },
      { text: "PRODUCING", href: "/programfinder" },
      { text: "SCREENWRITING", href: "/academics/areas-of-study/screenwriting" },
      { text: "CINEMATOGRAPHY", href: "/academics/areas-of-study/cinematography" },
      { text: "DOCUMENTARY FILMMAKING", href: "/academics/areas-of-study/documentary-filmmaking" },
      { text: "DIGITAL EDITING", href: "/academics/areas-of-study/digital-editing" },
      { text: "3D ANIMATION & VISUAL EFFECTS", href: "/academics/areas-of-study/3d-animation-visual-effects" },
      { text: "BROADCAST JOURNALISM", href: "/academics/areas-of-study/broadcast-journalism" },
      { text: "MUSICAL THEATRE", href: "/academics/areas-of-study/musical-theatre" },
      { text: "GAME DESIGN", href: "/academics/areas-of-study/game-design" },
      { text: "ENTERTAINMENT MEDIA", href: "/academics/areas-of-study/entertainment-media" },
      { text: "VIRTUAL REALITY", href: "/academics/areas-of-study/virtual-reality" },
      { text: "NYFA'S PATHWAY TRACK", href: "/academics/areas-of-study/nyfas-pathway-track" },
    ],
    "DEGREE PROGRAMS": [
      { text: "BACHELOR OF FINE ARTS", href: "/academics/degree-programs/bachelor-of-fine-arts" },
      { text: "BACHELOR OF ARTS", href: "/academics/degree-programs/bachelor-of-arts" },
      { text: "MASTER OF FINE ARTS", href: "/academics/degree-programs/master-of-fine-arts" },
      { text: "MASTER OF ARTS", href: "/academics/degree-programs/master-of-arts" },
      { text: "ASSOCIATE OF FINE ARTS", href: "/academics/degree-programs/associate-of-fine-arts" },
      { text: "ONLINE DEGREES", href: "/academics/degree-programs/online-degrees" },
    ],
    "CERTIFICATE PROGRAMS": [
      { text: "1 & 2-YEAR PROGRAMS", href: "/academics/certificate-programs/1-2-year-programs" },
      { text: "SHORT-TERM WORKSHOPS", href: "/academics/certificate-programs/short-term-workshops" },
      { text: "ONLINE PROGRAMS", href: "/academics/certificate-programs/online-programs" },
      { text: "CORPORATE TRAINING", href: "/academics/certificate-programs/corporate-training" },
    ],
    "STUDY ABROAD WITH NYFA": [
      { text: "FILMMAKING", href: "/academics/study-abroad-with-nyfa/filmmaking" },
      { text: "ACTING FOR FILM", href: "/academics/study-abroad-with-nyfa/acting-for-film" },
    ],
  },
  admissionsFinancesMenu: {
    "ADMISSIONS": [
      { text: "PROGRAM DATES", href: "/admissions/admissions/program-dates" },
      { text: "APPLICATION DEADLINES", href: "/admissions/admissions/application-deadlines" },
      { text: "ADMISSIONS REQUIREMENTS", href: "/admissions/admissions/admissions-requirements" },
      { text: "INTERNATIONAL STUDENTS", href: "/admissions/admissions/international-students" },
      { text: "VETERANS & MILITARY", href: "/admissions/admissions/veterans-military" },
    ],
    "FINANCES": [
      { text: "TUITION", href: "/admissions/finances/tuition" },
      { text: "FEDERAL FINANCIAL AID", href: "/admissions/finances/federal-financial-aid" },
      { text: "SCHOLARSHIPS & GRANTS", href: "/admissions/finances/scholarships-grants" },
      { text: "PRIVATE STUDENT LOANS", href: "/admissions/finances/private-student-loans" },
      { text: "HOUSING INFORMATION", href: "/admissions/finances/housing-information" },
    ],
  },
  campusesMenu: {
    "CAMPUSES": [
      { text: "New York City", href: "/campuses/campuses/new-york-city" },
      { text: "Los Angeles", href: "/campuses/campuses/los-angeles" },
      { text: "Florence, Italy", href: "/campuses/campuses/florence-italy" },
      { text: "Online", href: "/campuses/campuses/online" },
    ],
    "LOCATIONS": [
      { text: "NYFA Kazakhstan", href: "/campuses/locations/nyfa-kazakhstan" },
      { text: "NYFA at Harvard University", href: "/campuses/locations/nyfa-at-harvard-university" },
      { text: "Paris, France", href: "/campuses/locations/paris-france" },
      { text: "Beijing and Greater China", href: "/campuses/locations/beijing-and-greater-china" },
    ],
  },
  discoverMenu: {
    "WHO WE ARE": [
      { text: "ABOUT US", href: "/discover/who-we-are/about-us" },
      { text: "HISTORY", href: "/discover/who-we-are/history" },
      { text: "MISSION & PURPOSE", href: "/discover/who-we-are/mission-purpose" },
      { text: "ACCREDITATION", href: "/discover/who-we-are/accreditation" },
      { text: "LEADERSHIP & ADMINISTRATION", href: "/discover/who-we-are/leadership-administration" },
    ],
    "ON CAMPUS": [
      { text: "VISIT US", href: "/discover/on-campus/visit-us" },
      { text: "OPEN HOUSE & LIVE ONLINE EVENTS", href: "/discover/on-campus/open-house-live-online-events" },
      { text: "ACADEMIC CALENDAR", href: "/discover/on-campus/academic-calendar" },
      { text: "STUDENT LIFE", href: "/discover/on-campus/student-life" },
      { text: "HEALTH AND WELLNESS", href: "/discover/on-campus/health-and-wellness" },
    ],
    "NEWS AND CULTURE": [
      { text: "GUEST SPEAKERS", href: "/discover/news-and-culture/guest-speakers" },
      { text: "NYFA IN THE NEWS", href: "/discover/news-and-culture/nyfa-in-the-news" },
      { text: "BLOG", href: "/discover/news-and-culture/blog" },
      { text: "NYFA YOUTUBE CHANNEL", href: "/discover/news-and-culture/nyfa-youtube-channel" },
      { text: "PODCASTS", href: "/discover/news-and-culture/podcasts" },
    ],
  },
  youthMenu: {
    "TEEN CAMPS AND WORKSHOPS": [
      { text: "FILMMAKING", href: "/youth/teen-camps-and-workshops/filmmaking" },
      { text: "ACTING FOR FILM", href: "/youth/teen-camps-and-workshops/acting-for-film" },
      { text: "PHOTOGRAPHY", href: "/youth/teen-camps-and-workshops/photography" },
      { text: "SCREENWRITING", href: "/youth/teen-camps-and-workshops/screenwriting" },
      { text: "3D ANIMATION", href: "/youth/teen-camps-and-workshops/3d-animation" },
      { text: "GAME DESIGN", href: "/youth/teen-camps-and-workshops/game-design" },
    ],
    "KIDS CAMPS AND WORKSHOPS": [
      { text: "FILMMAKING", href: "/youth/kids-camps-and-workshops/filmmaking" },
      { text: "ACTING FOR FILM", href: "/youth/kids-camps-and-workshops/acting-for-film" },
      { text: "PHOTOGRAPHY", href: "/youth/kids-camps-and-workshops/photography" },
      { text: "3D ANIMATION", href: "/youth/kids-camps-and-workshops/3d-animation" },
      { text: "MUSICAL THEATRE", href: "/youth/kids-camps-and-workshops/musical-theatre" },
    ],
    "YOUTH ADMISSIONS": [
      { text: "PROGRAM DATES", href: "/youth/youth-admissions/program-dates" },
      { text: "TUITION", href: "/youth/youth-admissions/tuition" },
      { text: "HOUSING", href: "/youth/youth-admissions/housing" },
      { text: "INTERNATIONAL STUDENTS", href: "/youth/youth-admissions/international-students" },
      { text: "YOUTH OPEN HOUSES", href: "/youth/youth-admissions/youth-open-houses" },
    ],
    "LOCATIONS": [
      { text: "NEW YORK CITY", href: "/youth/locations/new-york-city" },
      { text: "LOS ANGELES", href: "/youth/locations/los-angeles" },
      { text: "MIAMI", href: "/youth/locations/miami" },
      { text: "FLORENCE, ITALY", href: "/youth/locations/florence-italy" },
      { text: "HARVARD UNIVERSITY", href: "/youth/locations/harvard-university" },
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
        <GlobeIcon className="w-5 h-5" />
        <span className="font-normal text-[length:var(--size-topbar)]">ENGLISH</span>
        <ChevronDownIcon
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
      className={`absolute top-full left-0 w-full bg-[#101010] shadow-xl transition-all duration-300 ease-in-out z-51 ${gutters} ${
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
          <TimesIcon className="w-6 h-6" />
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
      className={`absolute left-0 right-0 top-full z-40 origin-top transform transition-all duration-300 ease-in-out ${
        open
          ? "scale-100 translate-y-0 opacity-100" : "scale-95 -translate-y-2 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-screen bg-[#141414]">
        <div className="py-10 px-4 sm:px-6 xl:px-8">
          <div
            className="grid gap-x-8 gap-y-6"
            style={{ gridTemplateColumns: `repeat(${Object.keys(config).length}, minmax(0, 1fr))` }}
          >
            {Object.entries(config).map(([section, items]) => (
              <div key={section} className="pl-5">
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

                <ul className={`space-y-2 ${section === "AREAS OF STUDY" ? "columns-2" : ""}`}>
                  {items.map((item, index) => { // Added index for unique key
                    const wrapClass =
                      section === "AREAS OF STUDY"
                        ? "max-w-[300px] whitespace-normal leading-tight"
                        : "whitespace-normal leading-tight";

                    return (
                      <li key={`${item.text}-${index}`}>
                        <a
                          href={item.href}
                          className={`block text-white hover:underline transition-colors ${wrapClass}`}
                          style={{ fontSize: "var(--size-mega-item)" }}
                          title={item.text}
                        >
                          {item.text}
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
        className="flex justify-between items-center w-full py-3 px-4 text-left text-2xl font-semibold text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-300"
        onClick={onToggle}
      >
        {title}
        <ChevronDownIcon
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
      className={`fixed inset-0 z-51 transition-opacity duration-300 xl:hidden ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-80 bg-[#0A0A0A] shadow-2xl rounded-l-lg pl-6 pr-4 py-4 transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <a href="/" className="flex-shrink-0">
            <img alt="JadeTimes Academy Logo" className="h-10 w-auto" src={logo} />
          </a>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="Close menu"
          >
            <TimesIcon className="w-7 h-7" />
          </button>
        </div>

        <ul className="flex flex-col gap-2">
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
                        {items.map((item, index) => ( // Added index for unique key
                          <li key={`${item.text}-${index}`}>
                            <a
                              href={item.href}
                              className="block py-1 text-base text-left text-white hover:text-white transition-colors duration-300"
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </AccordionItem>
              ) : (
                // FIX: Replaced NavLink with a standard anchor tag
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-2xl font-semibold text-left text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-300"
                >
                  {link.text}
                </a>
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
              className="block py-2 text-lg font-normal text-left text-gray-300 hover:text-yellow-400 transition-colors duration-300"
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
            className="text-center w-full px-4 py-3 font-semibold text-white border-2 border-transparent"
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

  const underlineStyle = {
    backgroundColor: color || "transparent",
  };

  if (to) {
    // FIX: Replaced NavLink with a standard anchor tag
    return (
      <a href={to} className={base} style={styleText}>
        <span>{children}</span>
        <span
          className={`pointer-events-none absolute left-0 -bottom-[2px] h-[2px] w-0 group-hover:w-full transition-[width] duration-300 ${active ? "w-full" : ""}`}
          style={underlineStyle}
        />
      </a>
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

  // State for controlling top bar visibility
  const [showTopBar, setShowTopBar] = useState(true);
  const scrollThreshold = 50; // Pixels to scroll before hiding the top bar

  const topBarRef = useRef(null);
  const [topBarHeight, setTopBarHeight] = useState(0);

  const navRef = useRef(null);
  useClickOutside(navRef, () => setActiveMenu(null));

  const toggleMenu = (key) => setActiveMenu((prev) => (prev === key ? null : key));
  
  // Effect to measure top bar height once on mount
  useEffect(() => {
    if (topBarRef.current) {
      setTopBarHeight(topBarRef.current.offsetHeight);
    }
  }, []);

  // Scroll handler to track scroll direction for the top bar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= scrollThreshold) {
        setShowTopBar(true);
      } 
      else if (currentScrollY < lastScrollY) {
        setShowTopBar(true);
      } 
      else {
        setShowTopBar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-[#111111] text-white shadow-lg transition-transform duration-300 ease-in-out"
        style={{
          transform: showTopBar ? 'translateY(0)' : `translateY(-${topBarHeight}px)`,
          "--size-topbar": FONT_SIZES.topbar,
          "--size-phone": FONT_SIZES.phone,
          "--size-nav": FONT_SIZES.nav,
          "--size-cta": FONT_SIZES.cta,
          "--size-mega-heading": FONT_SIZES.megaHeading,
          "--size-mega-item": FONT_SIZES.megaItem,
        }}
      >
        <div
          ref={topBarRef}
          className="hidden xl:block bg-black border-b border-gray-800"
        >
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
                  className="hidden xl:inline text-white font-light"
                  style={{ fontSize: "var(--size-phone)" }}
                >
                  1-800-JADETIMES
                </span>
                <button
                  aria-label="Search"
                  onClick={() => setIsSearchOpen((v) => !v)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <SearchIcon className="w-5 h-5" />
                </button>
                <LanguageSelector isOpen={isLangOpen} onToggle={setIsLangOpen} />
              </div>
            </div>
          </div>
        </div>

        <nav
          className="z-30 bg-black w-full"
          ref={navRef}
        >
          <div className={`w-full ${gutters}`}>
            <div className="flex items-center justify-between py-2">
               {/* FIX: Replaced NavLink with a standard anchor tag */}
              <a href="/" className="flex-shrink-0">
                <img alt="JadeTimes Academy Logo" className="h-16 w-auto" src={logo} />
              </a>

              <ul className="hidden xl:flex items-center gap-x-6">
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
                <div className="hidden xl:flex items-center gap-2">
                  <a
                    href="/request-info"
                    className="px-3 py-2 font-semibold text-black border-2 border-transparent"
                    style={{ backgroundColor: ACCENTS.academics, fontSize: "var(--size-cta)" }}
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
                  className="xl:hidden text-gray-300 hover:text-white transition-colors duration-300 p-2"
                >
                  <SearchIcon className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Toggle menu"
                  className="xl:hidden text-gray-300 hover:text-white transition-colors duration-300 p-2"
                >
                  <BarsIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

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

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} isLangOpen={isLangOpen} setIsLangOpen={setIsLangOpen} />
    </>
  );
};

export default Header;

