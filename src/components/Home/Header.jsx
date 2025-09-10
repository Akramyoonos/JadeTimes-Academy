import React, { useEffect, useRef, useState } from "react";
// Removed NavLink import as it requires a Router context which is not available.

import logo from "../../assets/Images/Logo.png";

// ---------------- ICONS ----------------
// Inlined SVG icons to replace the FontAwesome package which was causing errors.
const ChevronDownIcon = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const GlobeIcon = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
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

const MenuIcon = ({ className, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);


// ---------------- CONFIG ----------------
const gutters = "px-4 sm:px-6 lg:px-10";

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
  nav: "18px",
  cta: "15px",
  megaHeading: "16px",
  megaItem: "14px",
};

const topBarLinks = [
  { href: "/StudentResource_page", text: "Current Students" },
  { href: "#", text: "Parents" },
  { href: "#", text: "Online Info Sessions", style: { color: ACCENTS.campuses } },
  { href: "/Membership_Page", text: "Become a JadeTimes Member", style: { color: ACCENTS.academics } },
];

const navLinks = [
  { key: "academics", text: "ACADEMICS", href: "/academics", menu: "academicsMenu", accent: ACCENTS.academics },
  { key: "admissions", text: "ADMISSIONS & FINANCES", href: "/admissions", menu: "admissionsFinancesMenu", accent: ACCENTS.admissions },
  { key: "campuses", text: "CAMPUSES", href: "/campuses", menu: "campusesMenu", accent: ACCENTS.campuses },
  { key: "discover", text: "DISCOVER JIU", href: "/discover", menu: "discoverMenu", accent: ACCENTS.discover },
  { key: "alumni", text: "ALUMNI", href: "/alumni", accent: ACCENTS.alumni },
  { key: "youth", text: "YOUTH PROGRAMS", href: "/youth", menu: "youthMenu", accent: ACCENTS.youth },
];

const megaMenus = {
  academicsMenu: {
    "AREAS OF STUDY": [
      { text: "FILMMAKING", href: "/AdmissionRequirements_Page" },
      { text: "ACTING FOR FILM", href: "/Membership_Page" },
      { text: "PHOTOGRAPHY", href: "/academics/areas-of-study/photography" },
      { text: "PRODUCING", href: "/programfinder" },
      { text: "SCREENWRITING", href: "/academics/areas-of-study/screenwriting" },
      { text: "CINEMATOGRAPHY", href: "/academics/areas-of-study/cinematography" },
      { text: "DOCUMENTARY FILMMAKING", href: "/academics/areas-of-study/documentary-filmmaking" },
      { text: "DIGITAL EDITING", href: "/RequestInfo_Page" },
      { text: "3D ANIMATION & VISUAL EFFECTS", href: "/academics/areas-of-study/3d-animation-visual-effects" },
      { text: "BROADCAST JOURNALISM", href: "/academics/areas-of-study/broadcast-journalism" },
      { text: "MUSICAL THEATRE", href: "/academics/areas-of-study/musical-theatre" },
      { text: "GAME DESIGN", href: "/academics/areas-of-study/game-design" },
      { text: "ENTERTAINMENT MEDIA", href: "/academics/areas-of-study/entertainment-media" },
      { text: "VIRTUAL REALITY", href: "/academics/areas-of-study/virtual-reality" },
      { text: "JIU'S PATHWAY TRACK", href: "/academics/areas-of-study/JIUs-pathway-track" },
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
    "STUDY ABROAD WITH JIU": [
      { text: "FILMMAKING", href: "/academics/study-abroad-with-JIU/filmmaking" },
      { text: "ACTING FOR FILM", href: "/academics/study-abroad-with-JIU/acting-for-film" },
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
      { text: "JIU Kazakhstan", href: "/campuses/locations/JIU-kazakhstan" },
      { text: "JIU at Harvard University", href: "/campuses/locations/JIU-at-harvard-university" },
      { text: "Paris, France", href: "/campuses/locations/paris-france" },
      { text: "Beijing and Greater China", href: "/campuses/locations/beijing-and-greater-china" },
    ],
  },
  discoverMenu: {
    "WHO WE ARE": [
      { text: "ABOUT US", href: "/about" },
      { text: "HISTORY", href: "/History_Page" },
      { text: "MISSION & PURPOSE", href: "/MissionAndPurpose_Page" },
      { text: "ACCREDITATION", href: "/Accreditation_Page" },
      { text: "LEADERSHIP & ADMINISTRATION", href: "/discover/who-we-are/leadership-administration" },
    ],
    "ON CAMPUS": [
      { text: "VISIT US", href: "/VisitUs_Page" },
      { text: "OPEN HOUSE & LIVE ONLINE EVENTS", href: "/discover/on-campus/open-house-live-online-events" },
      { text: "ACADEMIC CALENDAR", href: "/discover/on-campus/academic-calendar" },
      { text: "STUDENT LIFE", href: "/discover/on-campus/student-life" },
      { text: "HEALTH AND WELLNESS", href: "/discover/on-campus/health-and-wellness" },
    ],
    "NEWS AND CULTURE": [
      { text: "GUEST SPEAKERS", href: "/discover/news-and-culture/guest-speakers" },
      { text: "JIU IN THE NEWS", href: "/discover/news-and-culture/JIU-in-the-news" },
      { text: "BLOG", href: "/discover/news-and-culture/blog" },
      { text: "JIU YOUTUBE CHANNEL", href: "/discover/news-and-culture/JIU-youtube-channel" },
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
  "English", "Spanish", "French", "German", "Chinese",
  "Japanese", "Korean", "Arabic", "Russian",
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
  useClickOutside(dropdownRef, () => {
    if (isOpen) onToggle(false);
  });

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => onToggle(!isOpen)}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="language-dropdown"
      >
        <GlobeIcon className="w-5 h-5" />
        <span className="font-normal text-[length:var(--size-topbar)]">ENGLISH</span>
        <ChevronDownIcon
          className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: isOpen ? ACCENTS.youth : "" }}
        />
      </button>

      <div
        id="language-dropdown"
        className={`absolute right-0 mt-2 w-40 bg-black border-white border shadow-lg py-1 z-40 origin-top-right transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
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

  // Auto-focus input when search opens
  useEffect(() => {
    if (open && boxRef.current) {
      const input = boxRef.current.querySelector('input');
      if (input) input.focus();
    }
  }, [open]);

  return (
    <div
      ref={boxRef}
      id="search-dropdown"
      className={`absolute top-full left-0 w-full bg-[#101010] shadow-xl transition-all duration-300 ease-in-out z-51 ${gutters} ${
        open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="py-10 relative">
        <button
          onClick={onClose}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          aria-label="Close search"
        >
          <TimesIcon className="w-6 h-6" />
        </button>
        <label htmlFor="mega-search" className="sr-only">Search</label>
        <input
          id="mega-search"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onClose()}
          placeholder="Search"
          className="w-full bg-transparent text-white placeholder-gray-400 text-3xl outline-none pb-3 border-b-2 border-gray-600 focus:border-yellow-400 transition-colors"
        />
      </div>
    </div>
  );
};

const MegaMenu = ({ open, config, accent, id }) => {
  if (!config) return null;

  return (
    <div
      id={id}
      className={`absolute left-0 right-0 top-full z-40 origin-top transform transition-all duration-300 ease-in-out ${
        open ? "scale-100 translate-y-0 opacity-100" : "scale-95 -translate-y-2 opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="w-full bg-[#141414]">
        <div className="py-10 px-8">
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
                  {items.map((item) => {
                    const wrapClass =
                      section === "AREAS OF STUDY"
                        ? "max-w-[300px] whitespace-normal leading-tight"
                        : "whitespace-normal leading-tight";
                    return (
                      <li key={item.href}>
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

const MobileMegaMenu = ({ config, accent, open }) => {
  if (!config) return null;

  return (
    <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-[1500px]' : 'max-h-0'}`}>
      <div className="py-2 pl-4 border-l-2" style={{ borderColor: accent }}>
        {Object.entries(config).map(([section, items]) => (
          <div key={section} className="mb-4">
            <h3
              className="uppercase mb-2 pb-1 font-semibold tracking-tight text-gray-300"
              style={{ fontSize: "var(--size-mega-heading)" }}
            >
              {section}
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-gray-300 hover:text-white transition-colors"
                    style={{ fontSize: "var(--size-mega-item)" }}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const DesktopNavItem = ({ children, active, color, onClick, to, controlsId }) => {
  const base = "relative group block py-8 uppercase tracking-tight text-white hover:text-white transition-colors";
  const styleText = { fontSize: "var(--size-nav)", fontWeight: 400 };
  const underlineStyle = { backgroundColor: color || "transparent" };
  
  const ariaProps = onClick ? {
    "aria-haspopup": "true",
    "aria-expanded": active,
    "aria-controls": controlsId
  } : {};

  const content = (
    <>
      <span>{children}</span>
      <span
        className={`pointer-events-none absolute left-0 -bottom-[2px] h-[2px] w-0 group-hover:w-full transition-[width] duration-300 ${active ? "w-full" : ""}`}
        style={underlineStyle}
      />
    </>
  );

  return to ? (
    <a href={to} className={base} style={styleText}>
      {content}
    </a>
  ) : (
    <button onClick={onClick} className={base} style={styleText} {...ariaProps}>
      {content}
    </button>
  );
};

// ---------------- MAIN HEADER ----------------
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showTopBar, setShowTopBar] = useState(true);
  
  // Consolidated state for mobile menu
  const [mobileMenuState, setMobileMenuState] = useState({
    isOpen: false,
    activeSubMenu: null,
  });
  
  const scrollThreshold = 50;
  const topBarRef = useRef(null);
  const lastScrollY = useRef(0);
  const [topBarHeight, setTopBarHeight] = useState(0);
  const navRef = useRef(null);
  
  useClickOutside(navRef, () => {
    if (activeMenu) setActiveMenu(null);
  });

  const toggleDesktopMenu = (key) => setActiveMenu((prev) => (prev === key ? null : key));
  
  const toggleMobileMenu = () => {
    setMobileMenuState(prev => ({ ...prev, isOpen: !prev.isOpen, activeSubMenu: null }));
  };

  const toggleMobileSubMenu = (key) => {
    setMobileMenuState(prev => ({
      ...prev,
      activeSubMenu: prev.activeSubMenu === key ? null : key
    }));
  };

  useEffect(() => {
    if (topBarRef.current) {
      setTopBarHeight(topBarRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowTopBar(currentScrollY <= scrollThreshold || currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuState.isOpen ? 'hidden' : 'auto';
  }, [mobileMenuState.isOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-[#111111] text-white shadow-lg transition-transform duration-300 ease-in-out w-full"
        style={{
          transform: showTopBar ? 'translateY(0)' : `translateY(-${topBarHeight}px)`,
          "--size-topbar": FONT_SIZES.topbar, "--size-phone": FONT_SIZES.phone,
          "--size-nav": FONT_SIZES.nav, "--size-cta": FONT_SIZES.cta,
          "--size-mega-heading": FONT_SIZES.megaHeading, "--size-mega-item": FONT_SIZES.megaItem,
        }}
      >
        <div ref={topBarRef} className="bg-black border-b border-gray-800 hidden xl:block">
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
              <div className="flex items-center gap-5 ml-auto">
                <span className="text-white font-light" style={{ fontSize: "var(--size-phone)" }}>
                  1-800-JADETIMES
                </span>
                <button
                  aria-label="Search"
                  onClick={() => setIsSearchOpen(prev => !prev)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-haspopup="true"
                  aria-expanded={isSearchOpen}
                  aria-controls="search-dropdown"
                >
                  <SearchIcon className="w-5 h-5" />
                </button>
                <LanguageSelector isOpen={isLangOpen} onToggle={setIsLangOpen} />
              </div>
            </div>
          </div>
        </div>

        <nav className="z-30 bg-black w-full" ref={navRef}>
          <div className={`w-full ${gutters}`}>
            <div className="flex items-center justify-between py-2">
              <a href="/" className="flex-shrink-0">
                <img alt="JadeTimes Academy Logo" className="h-12 sm:h-16 w-auto" src={logo} />
              </a>

              {/* --- FIX: Changed lg breakpoint to md for earlier visibility --- */}
              <div className="hidden md:flex items-center gap-x-6">
                <ul className="flex items-center gap-x-6">
                    {navLinks.map((link) => (
                      <li key={link.key}>
                          <DesktopNavItem
                            active={activeMenu === link.key}
                            color={link.accent}
                            to={link.menu ? undefined : link.href}
                            onClick={link.menu ? () => toggleDesktopMenu(link.key) : undefined}
                            controlsId={`megamenu-${link.key}`}
                          >
                            {link.text}
                          </DesktopNavItem>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="hidden xl:flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href="/RequestInfo_Page"
                      className="px-3 py-2 font-semibold text-black border-2 border-transparent transition-transform hover:scale-105"
                      style={{ backgroundColor: ACCENTS.academics, fontSize: "var(--size-cta)" }}
                    >
                      REQUEST INFO
                    </a>
                    <a
                      href="/ApplyNyfa_Page"
                      className="px-3 py-2 border-2 border-white font-semibold text-white transition-transform hover:scale-105"
                      style={{ fontSize: "var(--size-cta)" }}
                    >
                      APPLY NOW
                    </a>
                  </div>
              </div>

              {/* --- FIX: Changed lg breakpoint to md to hide on smaller screens --- */}
              <div className="md:hidden flex items-center">
                  <button onClick={toggleMobileMenu} aria-label="Open main menu" aria-expanded={mobileMenuState.isOpen}>
                      {mobileMenuState.isOpen ? <TimesIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                  </button>
              </div>
            </div>
          </div>

          {/* --- Mobile Menu (Now hidden on md screens and up) --- */}
          <div 
            className={`md:hidden ${mobileMenuState.isOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-black z-50 max-h-[calc(100vh-80px)] overflow-y-auto`}
          >
              <div className="p-4 border-b border-gray-800">
                  <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <SearchIcon className="w-5 h-5 text-gray-400" />
                      </span>
                      <input
                          type="search"
                          placeholder="Search"
                          className="w-full bg-gray-900 text-white placeholder-gray-400 pl-10 pr-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                  toggleMobileMenu();
                                  setIsSearchOpen(true);
                              }
                          }}
                      />
                  </div>
              </div>

              <ul className="flex flex-col items-start gap-y-2 p-4">
                  {navLinks.map((link) => (
                      <li key={link.key} className="w-full">
                          {link.menu ? (
                            <>
                              <button
                                onClick={() => toggleMobileSubMenu(link.key)}
                                className="w-full flex justify-between items-center text-white text-lg py-2"
                                aria-expanded={mobileMenuState.activeSubMenu === link.key}
                              >
                                <span>{link.text}</span>
                                <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileMenuState.activeSubMenu === link.key ? 'rotate-180' : ''}`} />
                              </button>
                              <MobileMegaMenu
                                open={mobileMenuState.activeSubMenu === link.key}
                                config={megaMenus[link.menu]}
                                accent={link.accent}
                              />
                            </>
                          ) : (
                            <a href={link.href} className="text-white text-lg w-full block py-2">
                                {link.text}
                            </a>
                          )}
                      </li>
                  ))}
              </ul>
              
              <div className="border-t border-gray-800 px-4 py-4 flex flex-col items-center">
                <ul className="flex flex-col items-center gap-y-3 mb-4">
                    {topBarLinks.map((link) => (
                        <li key={link.text}>
                            <a 
                                href={link.href} 
                                className="font-normal hover:text-white transition-colors duration-300"
                                style={{ ...link.style, fontSize: '15px', color: link.style?.color || '#A0AEC0' }}
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
              
                <div className="flex flex-col items-center gap-y-4">
                    <a href="tel:1-800-JADETIMES" className="text-white font-light" style={{ fontSize: "var(--size-phone)" }}>
                      1-800-JADETIMES
                    </a>
                    <LanguageSelector isOpen={isLangOpen} onToggle={setIsLangOpen} />
                </div>
              </div>

              <div className="flex justify-center items-center gap-3 py-4 border-t border-gray-800">
                  <a
                      href="/RequestInfo_Page"
                      className="px-3 py-2 font-semibold text-black border-2 border-transparent"
                      style={{ backgroundColor: ACCENTS.academics, fontSize: "var(--size-cta)" }}
                  >
                      REQUEST INFO
                  </a>
                  <a
                      href="/ApplyNyfa_Page"
                      className="px-3 py-2 border-2 border-white font-semibold text-white"
                      style={{ fontSize: "var(--size-cta)" }}
                  >
                      APPLY NOW
                  </a>
              </div>
          </div>

          {/* This logic remains the same for desktop mega menus */}
          <div className="hidden md:block">
            {navLinks.map((link) =>
                link.menu && (
                  <MegaMenu
                    key={link.key}
                    id={`megamenu-${link.key}`}
                    open={activeMenu === link.key}
                    config={megaMenus[link.menu]}
                    accent={link.accent}
                  />
                )
            )}
           </div>
          <SearchDropdown open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </nav>
      </header>
    </>
  );
};

export default Header;