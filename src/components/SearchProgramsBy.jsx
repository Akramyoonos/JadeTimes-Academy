import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const dropdowns = [
  {
    id: 'discipline',
    title: 'ALL DISCIPLINES',
    items: [
      { name: 'Digital Journalism', href: '/programfinder' },
      { name: 'Broadcast Journalism', href: '/programfinder' },
      { name: 'News Reporting & Anchoring', href: '/programfinder' },
      { name: 'Media Ethics & Law', href: '/programfinder' },
      { name: 'Digital Media Production', href: '/programfinder' },
      { name: 'Investigative Journalism', href: '/programfinder' },
      { name: 'Multimedia Storytelling', href: '/programfinder' },
      { name: 'Social Media Management', href: '/programfinder' },
      { name: 'Photojournalism', href: '/programfinder' },
      { name: 'Public Relations & Media Strategy', href: '/programfinder' },
    ],
  },
  {
    id: 'program',
    title: 'ALL PROGRAMS',
    items: [
      { name: 'Master of Journalism', href: '/programfinder' },
      { name: 'Master of Media & Communication', href: '/programfinder' },
      { name: 'Master of Digital Media (Online)', href: '/programfinder' },
      { name: 'Bachelor of Journalism', href: '/programfinder' },
      { name: 'Bachelor of Media Studies', href: '/programfinder' },
      { name: 'Associate Degree in Journalism', href: '/programfinder' },
      { name: '2-Year Diploma in Media & Journalism', href: '/programfinder' },
      { name: '1-Year Professional Certificate in Journalism', href: '/programfinder' },
      { name: 'Short-Term Media Workshop', href: '/programfinder' },
      { name: 'Online Short-Term Workshop in Journalism', href: '/programfinder' },
    ],
  },
  {
    id: 'location',
    title: 'ALL LOCATIONS',
    items: [
      { name: 'All Locations', href: '/programfinder' },
      { name: 'New York City', href: '/programfinder' },
      { name: 'Los Angeles', href: '/programfinder' },
      { name: 'Florence, Italy', href: '/programfinder' },
      { name: 'Online', href: '/programfinder' },
      { name: 'Harvard University', href: '/programfinder' },
      { name: 'Paris, France', href: '/programfinder' },
      { name: 'Beijing, China', href: '/programfinder' },
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
    onSelect(id, item.name);
    onToggle();
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        id={`dd-${id}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="w-full flex items-center justify-between px-12 py-4 font-medium text-[12px] tracking-wide uppercase text-gray-800 hover:bg-gray-50 focus:outline-none"
      >
        <span className="truncate">{selectedItem || title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`ml-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-labelledby={`dd-${id}`}
          className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-none overflow-y-auto max-h-60"
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
        </div>
      )}
    </div>
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
    <section className="bg-white">
      {/* thick black bar on top */}
      <div className="h-3 w-full bg-black" />

      {/* full-width strip; label on far left, controls on far right */}
      <div className="border-b border-gray-200">
        <div className="w-full flex flex-col items-center lg:flex-row lg:items-stretch">
          {/* Left label (flush to edge) */}
          <div className="block text-black content-center px-8 md:px-10 py-4 text-[18px] whitespace-nowrap font-semibold text-center">
            Search Programs by
          </div>

          {/* Flexible spacer to create big gap */}
          <div className="flex-1 hidden lg:block" />

          {/* Right group (pinned to right edge) */}
          <div className="flex flex-col items-center lg:flex-row w-full lg:w-auto">
            {/* Each control has its own left divider and a min width so it feels like the reference */}
            <div className="content-center border-t lg:border-t-0 lg:border-l border-gray-200">
              <Dropdown
                id={dropdowns[0].id}
                title={dropdowns[0].title}
                items={dropdowns[0].items}
                isOpen={open === dropdowns[0].id}
                onToggle={() => toggle(dropdowns[0].id)}
                onSelect={choose}
                selectedItem={selected[dropdowns[0].id]}
                className="w-full lg:w-auto lg:min-w-[280px]"
              />
            </div>

            <div className="content-center border-t lg:border-t-0 lg:border-l border-gray-200">
              <Dropdown
                id={dropdowns[1].id}
                title={dropdowns[1].title}
                items={dropdowns[1].items}
                isOpen={open === dropdowns[1].id}
                onToggle={() => toggle(dropdowns[1].id)}
                onSelect={choose}
                selectedItem={selected[dropdowns[1].id]}
                className="w-full lg:w-auto lg:min-w-[280px]"
              />
            </div>

            <div className="content-center border-t lg:border-t-0 lg:border-l border-gray-200">
              <Dropdown
                id={dropdowns[2].id}
                title={dropdowns[2].title}
                items={dropdowns[2].items}
                isOpen={open === dropdowns[2].id}
                onToggle={() => toggle(dropdowns[2].id)}
                onSelect={choose}
                selectedItem={selected[dropdowns[2].id]}
                className="w-full lg:w-auto lg:min-w-[280px]"
              />
            </div>

            {/* Clear (optional) + Search button on the far right */}
            {Object.keys(selected).length > 0 && (
              <button
                onClick={clear}
                title="Clear filters"
                className="inline-flex items-center px-5 text-gray-500 hover:text-red-500 border-t lg:border-t-0 lg:border-l border-gray-200"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}

            <Link
              to="/programfinder"
              className="w-full lg:w-50 lg:h-16 px-12 py-5 text-black uppercase tracking-wider text-sm font-bold bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 border-t lg:border-t-0 lg:border-l border-gray-200 text-center"
              aria-label="Search Programs"
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchProgramsBy;
