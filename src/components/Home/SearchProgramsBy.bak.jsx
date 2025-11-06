import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const dropdowns = [
  {
    id: 'discipline',
    title: 'ALL DISCIPLINES',
    items: [
      { name: 'FILM', href: '/program-Finder/' },
      { name: 'MEDIA ARTS', href: '/program-Finder/' },
      { name: 'PERFORMING ARTS', href: '/program-Finder/' },
      { name: 'CREATIVE EXPRESSION', href: '/program-Finder/' },
      { name: 'JOURNALISM', href: '/program-Finder/' },
      { name: 'COMMUNIVATION', href: '/program-Finder/' },
      { name: 'DIGITAL MEDIA', href: '/program-Finder/' },
      { name: 'TECHNOLOGY', href: '/program-Finder/' },
      { name: 'INTERACTIVE MEDIA', href: '/program-Finder/' },
      { name: 'ENTERTAINMENT MEDIA', href: '/program-Finder/' },
      { name: 'PSYCHOLOGY', href: '/program-Finder/' },
      { name: 'HUMAN BEHAVIOR', href: '/program-Finder/' },
      { name: 'MARKETING', href: '/program-Finder/' },
    ],
  },
  {
    id: 'program',
    title: 'ALL PROGRAMS',
    items: [
      { name: 'Master of Journalism', href: '/program-Finder/' },
      { name: 'Master of Media & Communication', href: '/program-Finder/' },
      { name: 'Master of Digital Media (Online)', href: '/program-Finder/' },
      { name: 'Bachelor of Journalism', href: '/program-Finder/' },
      { name: 'Bachelor of Media Studies', href: '/program-Finder/' },
      { name: 'Associate Degree in Journalism', href: '/program-Finder/' },
      { name: '2-Year Diploma in Media & Journalism', href: '/program-Finder/' },
      { name: '1-Year Professional Certificate in Journalism', href: '/program-Finder/' },
      { name: 'Short-Term Media Workshop', href: '/program-Finder/' },
      { name: 'Online Short-Term Workshop in Journalism', href: '/program-Finder/' },
    ],
  },
  {
    id: 'location',
    title: 'ALL LOCATIONS',
    items: [
      { name: 'ONLINE', href: '/program-Finder/' },
    ],
  },
];

/* --- Dropdown --- */
const Dropdown = ({ id, title, items, isOpen, onToggle, onSelect, selectedItem, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) onToggle();
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [isOpen, onToggle]);

  const select = (item) => {
    if (id === 'location' && item.name === 'All Locations') {
      onSelect(id, null);
    } else {
      onSelect(id, item.name);
    }
    onToggle();
  };

  return (
    <motion.div ref={ref} className={`relative ${className}`} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <button
        type="button"
        id={`dd-${id}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-3 font-medium text-[12px] tracking-wide uppercase text-gray-500 hover:bg-gray-50 focus:outline-none md:px-8 md:py-4"
      >
        <span className="truncate">{selectedItem || title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`ml-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <motion.div
          role="menu"
          aria-labelledby={`dd-${id}`}
          className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-none overflow-y-auto max-h-60"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {items.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              role="menuitem"
              onClick={() => select(item)}
              className="block px-6 py-3 text-sm text-gray-800 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

/* --- Main --- */
const SearchProgramsBy = () => {
  const [open, setOpen] = useState(null);
  const [selected, setSelected] = useState({});

  const toggle = (id) => setOpen((p) => (p === id ? null : id));
  const choose = (id, val) => setSelected((p) => ({ ...p, [id]: val }));
  const clear = () => {
    setSelected({});
    setOpen(null);
  };

  return (
    <motion.section 
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      {/* full-width strip; label on far left, controls on far right */}
      <div className="border-b border-gray-200">
        <div className="w-full flex flex-col items-start lg:flex-row lg:items-stretch">
          {/* Left label (flush to edge) */}
          <motion.div 
            className="hidden xl:block w-full md:w-auto lg:w-auto lg:text-left text-black px-8 lg:px-10 py-4 text-[18px] whitespace-nowrap font-semibold text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Search Programs by
          </motion.div>

          {/* Flexible spacer to create big gap */}
          <div className="flex-1 hidden xl:block" />

          {/* Right group (pinned to right edge) */}
          <motion.div 
            className="flex flex-col items-center lg:flex-row w-full lg:w-auto md:flex-row md:flex-wrap md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
          >
            {/* Each control has its own left divider and a min width so it feels like the reference */}
            <motion.div className="hidden xl:block w-full lg:w-60 md:w-1/2 md:min-w-[200px] lg:min-w-[240px]">
              <Dropdown
                id={dropdowns[0].id}
                title={dropdowns[0].title}
                items={dropdowns[0].items}
                isOpen={open === dropdowns[0].id}
                onToggle={() => toggle(dropdowns[0].id)}
                onSelect={choose}
                selectedItem={selected[dropdowns[0].id]}
                className="w-full lg:w-auto lg:min-w-[240px]"
              />
            </motion.div>

            <motion.div className="hidden xl:block w-full lg:w-60 md:w-1/2 md:min-w-[200px] lg:min-w-[240px]">
              <Dropdown
                id={dropdowns[1].id}
                title={dropdowns[1].title}
                items={dropdowns[1].items}
                isOpen={open === dropdowns[1].id}
                onToggle={() => toggle(dropdowns[1].id)}
                onSelect={choose}
                selectedItem={selected[dropdowns[1].id]}
                className="w-full lg:w-auto lg:min-w-[240px]"
              />
            </motion.div>

            <motion.div className="hidden xl:block w-full lg:w-60 md:w-1/2 md:min-w-[200px] lg:min-w-[240px]">
              <Dropdown
                id={dropdowns[2].id}
                title={dropdowns[2].title}
                items={dropdowns[2].items}
                isOpen={open === dropdowns[2].id}
                onToggle={() => toggle(dropdowns[2].id)}
                onSelect={choose}
                selectedItem={selected[dropdowns[2].id]}
                className="w-full lg:w-auto lg:min-w-[240px]"
              />
            </motion.div>

            {/* Clear (optional) + Search button on the far right */}
            {Object.keys(selected).length > 0 && (
              <motion.button
                onClick={clear}
                title="Clear filters"
                className="hidden xl:inline-flex items-center px-5 text-gray-500 hover:text-red-500 md:order-last"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </motion.button>
            )}

            <Link
              to="/program-Finder/"
              className="w-full px-6 py-6 text-black uppercase tracking-wider text-sm font-bold bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600  text-center lg:w-full md:w-full md:px-14 md:py-6 xl:w-auto"
              aria-label="Search Programs"
            >
              <span>Search</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SearchProgramsBy;
