import React, { useEffect, useRef, useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/Images/Logo.webp";
import Campus03Image from "../../assets/Images/Campus03.webp";
import AcadamicImage from "../../assets/Images/Resources and Information02.webp";

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
  campuses: "#F5C90A",   // yellow (FIXED: was invalid hex #F5C9A)
  discover: "#A44FBF",   // purple
  alumni:   "#28A8E0",   // blue
  youth:    "#F5C90A",   // yellow
};

// one-place font size control
const FONT_SIZES = {
  topbar: "12px",
  phone: "15px",
  nav: "14px",
  cta: "15px",
  megaHeading: "20px",
  megaItem: "16px",
};

const topBarLinks = [
  { href: "/current-student-resources/", text: "Current Students" },
  { href: "/events/list/", text: "Online Info Sessions", style: { color: ACCENTS.campuses } },
  { href: "/JIU-membership/", text: "Become a JadeTimes Member", style: { color: ACCENTS.academics } },
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
      { text: "FILM", href: "/film/" },
      { text: "MEDIA ARTS", href: "/Media-Arts/" },
      { text: "PERFORMING ARTS", href: "/Performing-Arts/" },
      { text: "CREATIVE EXPRESSION", href: "/Creatie-Expression/" },
      { text: "JOURNALISM", href: "/Journalism/" },
      { text: "COMMUNIVATION", href: "/Comunivation/" },
      { text: "DIGITAL MEDIA", href: "/Digital-Media/" },
      { text: "TECHNOLOGY", href: "/Technology/" },
      { text: "INTERACTIVE MEDIA", href: "/Intrractive-Media/" },
      { text: "ENTERTAINMENT MEDIA", href: "/Entertainment-Media/" },
      { text: "PSYCHOLOGY", href: "/Psychology/" },
      { text: "HUMAN BEHAVIOR", href: "/Human-Behavior/" },
      { text: "MARKETING", href: "/Marketing/" },
    ],
    "OUR PROGRAMS ": [
      { text: "ONLINE COURSES", href: "/online-programs/"},
      { text: "BACHELOR OF FINE ARTS", href: "", comingSoon: true },
      { text: "BACHELOR OF ARTS", href: "", comingSoon: true },
      { text: "MASTER OF FINE ARTS", href: "", comingSoon: true },
      { text: "MASTER OF ARTS", href: "", comingSoon: true },
      { text: "ASSOCIATE OF FINE ARTS", href: "", comingSoon: true },

    ],
    "CERTIFICATE PROGRAMS": [
      { text: "2 HOUR WORKSHOPS", href: "/academics/certificate-programs/short-term-workshops" },
      { text: "ONLINE COURSES", href: "/online-programs/" },
      { text: "CORPORATE INTERNSHIP/TRAINING", href: "/academics/certificate-programs/corporate-training" },
    ],
        "eventBox": {
      title: "OPEN HOUSE & LIVE ONLINE EVENTS",
      linkText: "EVENT DATES",
      href: "/events/list/",
      image: AcadamicImage
    }
  },
  admissionsFinancesMenu: {
    "ADMISSIONS": [
      { text: "PROGRAM DATES", href: "/dates-tuition/" },
      { text: "APPLICATION DEADLINES", href: "/important-dates/" },
      { text: "ADMISSIONS REQUIREMENTS", href: "/admissions-requirements/" },
      { text: "INTERNATIONAL STUDENTS", href: "/admissions/international-students/" },
      { text: "VETERANS & MILITARY DEPENDENT STUDENTS", href: "/admissions/veterans-military-dependent-students/" },
      { text: "MEET JIU NEAR YOU", href: "/events/list/" },
    ],
    "FINANCES": [
      { text: "TUITION", href: "/dates-tuition/" },
      { text: "SCHOLARSHIPS & GRANTS", href: "/student-finances/scholarships-and-grants/" },

    ],
    "eventBox": {
      title: "OPEN HOUSE & LIVE ONLINE EVENTS",
      linkText: "EVENT DATES",
      href: "/events/list/",
      image: Campus03Image
    },
  },
  campusesMenu: {
    "CAMPUSES": [
      { text: "ONLINE", href: "/campuses/campuses/online", AvailableNow: true },
      { text: "NEW MEXICO", href: "/campuses/campuses/new-york-city", noHover: true },
      { text: "AUSTRALIA", href: "/campuses/campuses/australia", noHover: true },
      { text: "INDIA", href: "/campuses/campuses/india", noHover: true },
      { text: "SPAIN", href: "/campuses/campuses/spain", noHover: true },
      { text: "SRI LANKA", href: "/campuses/campuses/sri-lanka", noHover: true },

    ],
    "eventBoxes": [
      {
        title: "OPEN HOUSE & LIVE ONLINE EVENTS",
        linkText: "EVENT DATES",
        href: "/events/list/",
        image: Campus03Image
      },
      {
        title: "VIRTUAL TOURS",
        linkText: "EXPLORE NOW",
        href: "/events/list/",
        image: AcadamicImage
      }
    ]
  },
  discoverMenu: {
    "WHO WE ARE": [
      { text: "ABOUT US", href: "/About-Us/" },
      { text: "HISTORY", href: "JIU-history/" },
      { text: "MISSION & PURPOSE", href: "/mission-and-purpose/" },
      { text: "ACCREDITATION, LICENSING, AND APPROVALS", href: "/Accreditation" },
      { text: "AFFILIATIONS", href: "/affiliations/" },
      { text: "FACULTY DIRECTORY", href: "/faculty-directory/" },
      { text: "LEADERSHIP & ADMINISTRATION", href: "/who-we-are/leadership/" },
      { text: "JIU REVIEWS", href: "/reviews/page/" },
      { text: "FAQ", href: "/faq/" },
      { text: "JIU CATALOGS", href: "/Course-Catalogs/" },
      { text: "CONTACT US", href: "/contact_us" },
    ],
    "ON CAMPUS": [
      { text: "VISIT US", href: "/on-campus/visit-us/" },
      { text: "OPEN HOUSE & LIVE ONLINE EVENTS", href: "/events/list/" },
      { text: "ACADEMIC CALENDAR", href: "/Academic-Calendar/" },
      { text: "CAMPUS SAFETY & CLERY ACT", href: "/on-campus/campus-safety/" },
      { text: "STUDENT LIFE", href: "/student-life/" },
      { text: "CAREER AND ALUMNI SERVICES", href: "/career-and-alumni-services/" },
      { text: "ACCESSIBILITY SERVICES", href: "/disability-and-accessibility/" },
    ],
    "NEWS AND CULTURE": [
      { text: "JIU IN THE NEWS", href: "/JIU-in-the-news/" },
      { text: "BLOG", href: "/blog/" },
      { text: "JIU YOUTUBE CHANNEL", href: "https://www.youtube.com/@Jadetimes-University" },
      { text: "PODCASTS", href: "/discover/news-and-culture/podcasts" },  
      { text: "STUDENT RESOURCES", href: "/student-resources/", noHover: true },
      { text: "JIU STORE", href: "/discover/news-and-culture/JIU-store", noHover: true },
    ],
  },
  youthMenu: {
    "WORKSHOPS": [
      { text: "FILM", href: "/film/" },
      { text: "MEDIA ARTS", href: "/academics/areas-of-study/acting-for-film" },
      { text: "PERFORMING ARTS", href: "/academics/areas-of-study/photography" },
      { text: "CREATIVE EXPRESSION", href: "/academics/areas-of-study/producing" },
      { text: "JOURNALISM", href: "/academics/areas-of-study/screenwriting" },
      { text: "COMMUNIVATION", href: "/academics/areas-of-study/cinematography" },
      { text: "DIGITAL MEDIA", href: "/academics/areas-of-study/documentary-filmmaking" },
      { text: "TECHNOLOGY", href: "/academics/areas-of-study/digital-editing" },
      { text: "INTERACTIVE MEDIA", href: "/Faq" },
    ],
    "YOUTH ADMISSIONS": [
      { text: "PROGRAM DATES", href: "/youth/youth-admissions/program-dates" },
      { text: "TUITION", href: "/youth/youth-admissions/tuition" },
      { text: "International Contests", href: "/youth/youth-admissions/youth-open-houses" },
      { text: "JOBS", href: "/Job-Positions/" },
    ],
    "LOCATIONS": [
      { text: "ONLINE", href: "/campuses/campuses/online",  },
      { text: "NEW MEXICO", href: "/campuses/campuses/new-york-city", noHover: true },
      { text: "AUSTRALIA", href: "/campuses/campuses/australia", noHover: true },
      { text: "INDIA", href: "/campuses/campuses/india", noHover: true },
      { text: "SPAIN", href: "/campuses/campuses/spain", noHover: true },
      { text: "SRI LANKA", href: "/campuses/campuses/sri-lanka", noHover: true },
    ],
    "eventBox": {
      title: "YOUTH OPEN HOUSE & EVENTS",
      linkText: "VIEW DATES",
      href: "/events/list/",
      image: AcadamicImage
    }
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

const getSectionHref = (section) => {
    const hrefMap = {
        "AREAS OF STUDY": "/dates-tuition/",
        "OUR PROGRAMS": "",
        "CERTIFICATE PROGRAMS": "/academics/certificate-programs",
        "ADMISSIONS": "/admissions",
        "FINANCES": "/admissions/finances",
        "CAMPUSES": "/campuses",
        "LOCATIONS": "/campuses/locations",
        "WHO WE ARE": "/about",
        "ON CAMPUS": "/discover/on-campus",
        "NEWS AND CULTURE": "/discover/news-and-culture",
        "TEEN CAMPS AND WORKSHOPS": "/youth/teen-camps-and-workshops",
        "KIDS CAMPS AND WORKSHOPS": "/youth/kids-camps-and-workshops",
        "YOUTH ADMISSIONS": "/youth/youth-admissions",
    };
    return hrefMap[section] || "#";
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
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();
  useClickOutside(boxRef, onClose);

  // Auto-focus input when search opens
  useEffect(() => {
    if (open && boxRef.current) {
      const input = boxRef.current.querySelector('input');
      if (input) input.focus();
    }
  }, [open]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      onClose();
    }
  };

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search"
          className="w-full bg-transparent text-white placeholder-gray-400 text-3xl outline-none pb-3 border-b-2 border-gray-600 focus:border-yellow-400 transition-colors"
        />
      </div>
    </div>
  );
};

const MegaMenu = ({ open, config, accent, id, closeMenu }) => {
    if (!config) return null;

    const { eventBox, eventBoxes, ...linkSections } = config;
    const sections = Object.entries(linkSections);
    const boxes = eventBoxes || (eventBox ? [eventBox] : []);
    
    // START: Custom layout for the Campuses Menu
    if (id === 'megamenu-campuses') {
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
                    <div className="grid grid-cols-8 gap-x-12">
                        {sections.map(([section, items]) => (
                            <div key={section} className="col-span-2">
                                <a href={getSectionHref(section)} className="no-underline hover:underline">
                                <h3
                                    className="uppercase mb-2 font-normal tracking-tight text-white flex items-center group"
                                    style={{ fontSize: "var(--size-mega-heading)" }}
                                >
                                    <span>{section}</span>
                                </h3>
                                </a>
                                <div
                                    className="h-px w-full mb-4"
                                    style={{ backgroundColor: accent }}
                                ></div>
                                <ul className="space-y-3">
                                    {items.map((item) => (
                                        <li key={item.text} className="flex items-center justify-between">
                                            <a
                                                href={item.href}
                                                className={`block ${item.noHover ? 'cursor-default  text-gray-400' : 'hover:underline text-white'} transition-colors`}
                                                style={{ fontSize: "var(--size-mega-item)" }}
                                                title={item.text}
                                                onClick={item.noHover ? (e) => e.preventDefault() : closeMenu}
                                            >
                                                {item.text}
                                            </a>
                                            {item.comingSoon && (
                                                <span className="ml-2 px-[6px] py-[2px] text-[11px] font-medium text-black uppercase bg-white  ">
                                                    Coming Soon
                                                </span>
                                            )}
                                            {item.AvailableNow && (
                                                <span className="ml-2 px-[6px] py-[2px] text-[11px] font-medium text-black uppercase bg-white hover:bg-blue-500 ">
                                                    Available Now
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {boxes.map((box, index) => (
                          <div key={index} className="col-span-3  flex justify-center h-full">
                            <div className="border-2 flex flex-col" style={{ borderColor: accent, width: '100%' }}>
                              <div className="flex-grow h-48">
                                <img src={box.image} alt={box.title} className="w-full h-full object-cover" />
                              </div>
                              <div className="bg-white text-black p-6 flex flex-col justify-center items-center text-center">
                                <h4 className="font-semibold uppercase text-base leading-tight">{box.title}</h4>
                                <a href={box.href} className="text-sm font-bold mt-4 inline-block tracking-wider" style={{ color: accent }} onClick={closeMenu}>
                                  {box.linkText} &gt;
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      );
    }
    // END: Custom layout for the Campuses Menu

    const gridCols = sections.map(() => 'minmax(0, 1fr)').join(' ') + boxes.map(() => ' minmax(350px, 400px)').join(' ');
  
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
              className="grid gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8 items-start"
              style={{ gridTemplateColumns: gridCols }}
            >
              {sections.map(([section, items]) => (
                <div key={section} className="pl-5">
                  <a href={getSectionHref(section)} className="no-underline hover:underline">
                    <h3
                      className="uppercase mb-4 pb-2 font-normal tracking-tight flex items-center group"
                      style={{
                        color: "white",
                        borderBottom: `2px solid ${accent}`,
                        fontSize: "var(--size-mega-heading)",
                        lineHeight: 1.25,
                      }}
                    >
                      <span>{section}</span>
                    </h3>
                  </a>
                  <ul className={`space-y-5 ${section === "AREAS OF STUDY" ? "columns-2" : ""}`}>
                    {items.map((item) => {
                      const wrapClass =
                        section === "AREAS OF STUDY"
                          ? "max-w-[300px] whitespace-normal leading-tight"
                          : "whitespace-normal leading-tight";
                      const isInteractive = !item.comingSoon && !item.noHover;
                      return (
                        <li key={item.text} className="flex items-center justify-between">
                          <a
                            href={item.href}
                            className={`block ${isInteractive ? 'hover:underline' : 'cursor-default'} transition-colors ${wrapClass} ${section.startsWith("OUR PROGRAMS") ? (item.comingSoon ? "text-gray-400" : "text-white") : (isInteractive ? "text-white" : "text-gray-400")}`}
                            style={{ fontSize: "var(--size-mega-item)" }}
                            title={item.text}
                            onClick={isInteractive ? closeMenu : (e) => e.preventDefault()}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {item.text}
                          </a>
                          {item.comingSoon && (
                                <span className="ml-2 px-[2px] py-[1px] text-[9px] font-medium text-black uppercase bg-white hover:bg-blue-500 ">
                                    Coming Soon
                                </span>
                            )}
                          {item.AvailableNow && (
                                <span className="ml-2 px-[2px] py-[1px] text-[9px] font-medium text-black uppercase bg-white hover:bg-blue-500 ">
                                    Available Now
                                </span>
                            )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
  
              {boxes.map((box, index) => (
                <div key={index} className="flex justify-center h-full">
                  <div className="border-2 flex flex-col" style={{ borderColor: accent, width: '100%' }}>
                    <div className="flex-grow h-48">
                      <img src={box.image} alt={box.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-white text-black p-6 flex flex-col justify-center items-center text-center">
                      <h4 className="font-semibold uppercase text-base leading-tight">{box.title}</h4>
                      <a href={box.href} className="text-sm font-bold mt-4 inline-block tracking-wider" style={{ color: accent }} onClick={closeMenu}> {/* Added onClick */}                        {box.linkText} &gt;
                      </a>
                    </div>
                  </div>
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

    const { eventBox, eventBoxes, ...linkSections } = config;
    const boxes = eventBoxes || (eventBox ? [eventBox] : []);

    return (
        <div
            className={`transform origin-top transition-all duration-300 ease-in-out ${
                open
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 pointer-events-none h-0"
            }`}
        >
            <div className="py-2 pl-4 border-l-2" style={{ borderColor: accent }}>
                {Object.entries(linkSections).map(([section, items]) => (
                    <div key={section} className="mb-4">
                        <h3
                            className="uppercase mb-2 pb-1 font-semibold tracking-tight flex items-center"
                            style={{
                                fontSize: "var(--size-mega-heading)",
                                borderBottom: `2px solid ${accent}`,
                                color: "white",
                            }}
                        >
                            <span>{section}</span>
                        </h3>
                        <ul
                            className={`space-y-3 ${
                                section === "AREAS OF STUDY" ? "columns-2" : ""
                            }`}
                        >
                            {items.map((item) => {
                                const isInteractive = !item.comingSoon && !item.noHover;
                                return (
                                <li key={item.text} className="flex items-center justify-between">
                                    <a
                                        href={item.href}
                                        className={`block transition-colors ${isInteractive ? 'text-white hover:text-white' : 'cursor-default text-gray-400'}`}
                                        style={{ fontSize: "var(--size-mega-item)" }}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={
                                            item.href.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        onClick={isInteractive ? undefined : (e) => e.preventDefault()}
                                    >
                                        {item.text}
                                    </a>
                                    {item.comingSoon && (
                                        <span className="ml-2 px-[6px] py-[2px] text-[11px] font-medium text-black uppercase bg-white hover:bg-blue-500 ">
                                            Coming Soon
                                        </span>
                                    )}
                                    {item.AvailableNow && (
                                        <span className="ml-2 px-[6px] py-[2px] text-[11px] font-medium text-black uppercase bg-white hover:bg-blue-500">
                                            Available Now
                                        </span>
                                    )}
                                </li>
                            )})}
                        </ul>
                    </div>
                ))}

                {boxes.map((box, index) => (
                    <div key={index} className="mt-6 pr-4 flex justify-center h-full">
                        <div
                            className="border-2 flex flex-col"
                            style={{ borderColor: accent, width: '100%' }}
                        >
                            <div className="h-40">
                                <img
                                    src={box.image}
                                    alt={box.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="bg-white text-black p-4 flex flex-col justify-center items-center text-center">
                                <h4 className="font-semibold uppercase text-base leading-tight">
                                    {box.title}
                                </h4>
                                <a
                                    href={box.href}
                                    className="text-sm font-bold mt-3 inline-block tracking-wider"
                                    style={{ color: accent }}
                                >
                                    {box.linkText} &gt;
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DesktopNavItem = ({ children, active, color, onClick, to, controlsId }) => {
  const base = "relative group block py-8 uppercase tracking-tight text-white hover:text-white transition-colors";
  const styleText = { fontSize: "var(--size-nav)", fontWeight: 400, letterSpacing: '2px' };
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
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();
  
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

  const closeAllMegaMenus = () => {
    setActiveMenu(null);
    setMobileMenuState(prev => ({ ...prev, isOpen: false, activeSubMenu: null }));
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

      // New logic to close mega menus on scroll
      if (activeMenu !== null) {
        setActiveMenu(null);
      }
      if (mobileMenuState.isOpen) {
        setMobileMenuState(prev => ({ ...prev, isOpen: false, activeSubMenu: null }));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeMenu, mobileMenuState.isOpen]);

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
              <div className="flex items-center gap-x-6 uppercase text-gray-400">
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
                <a href="tel:+15054406468" className="text-white font-light hover:text-gray-300 transition-colors" style={{ fontSize: "var(--size-phone)" }}>
                  +1 (505) 440-6468
                </a>
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

              <div className="hidden xl:flex items-center gap-x-6 lg:gap-x-8">
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
                      href="/request-info/"
                      className="px-3 py-2 font-semibold text-black border-2 border-transparent transition-transform hover:scale-105"
                      style={{ backgroundColor: ACCENTS.academics, fontSize: "var(--size-cta)" }}
                    >
                      REQUEST INFO
                    </a>
                    <a
                      href="/apply-now/" //request-info//
                      className="px-3 py-2 border-2 border-white font-semibold text-white transition-transform  hover:scale-105"
                      style={{ fontSize: "var(--size-cta)" }}
                    >
                      APPLY NOW
                    </a>
                  </div>
              </div>

              <div className="xl:hidden flex items-center">
                  <button onClick={toggleMobileMenu} aria-label="Open main menu" aria-expanded={mobileMenuState.isOpen}>
                      {mobileMenuState.isOpen ? <TimesIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                  </button>
              </div>
            </div>
          </div>

          <div 
            className={`xl:hidden ${mobileMenuState.isOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-black z-50 max-h-[calc(100vh-80px)] overflow-y-auto`}
          >
              <div className="p-4 border-b border-gray-800">
                  <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <SearchIcon className="w-5 h-5 text-gray-400" />
                      </span>
                      <input
                          type="search"
                          placeholder="Search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full bg-gray-900 text-white placeholder-gray-400 pl-10 pr-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                  if (searchQuery.trim()) {
                                      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
                                      toggleMobileMenu();
                                  }
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
                                closeMenu={closeAllMegaMenus} // Added prop
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
                    <a href="tel:+15054406468" className="text-white font-light" style={{ fontSize: "var(--size-phone)" }}>
                      +1 (505) 440-6468
                    </a>
                    <LanguageSelector isOpen={isLangOpen} onToggle={setIsLangOpen} />
                </div>
              </div>

              <div className="flex justify-center items-center gap-3 py-4 border-t border-gray-800">
                  <a
                      href="/request-info/"
                      className="px-3 py-2 font-semibold text-black border-2 border-transparent"
                      style={{ backgroundColor: ACCENTS.academics, fontSize: "var(--size-cta)" }}
                  >
                      REQUEST INFO
                  </a>
                  <a
                      href="/apply-now/"
                      className="px-3 py-2 border-2 border-white font-semibold text-white"
                      style={{ fontSize: "var(--size-cta)" }}
                  >
                      APPLY NOW
                  </a>
              </div>
          </div>

          <div className="hidden xl:block">
            {navLinks.map((link) =>
                link.menu && (
                  <MegaMenu
                    key={link.key}
                    id={`megamenu-${link.key}`}
                    open={activeMenu === link.key}
                    config={megaMenus[link.menu]}
                    accent={link.accent}
                    closeMenu={closeAllMegaMenus} // Added prop
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