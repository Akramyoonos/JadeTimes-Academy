import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const dropdowns = [
    {
      id: 'discipline', // Unique ID for state management
      title: 'ALL DISCIPLINE',
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
      id: 'program', // Unique ID for state management
      title: 'ALL PROGRAMS',
      items: [
        { name: 'Master of Journalism', href: '/programfinder/' },
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
  ];

// --- Dropdown Component ---
const Dropdown = ({ id, title, items, isOpen, onToggle, onSelect, selectedItem }) => {
  const dropdownRef = useRef(null);

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the dropdown is open and the click is outside the dropdown ref
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(); // Call onToggle without arguments to just close
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]); // Dependency array includes isOpen and onToggle

  const handleSelect = (item) => {
    onSelect(id, item.name); // Pass dropdown id and selected item name
    onToggle(); // Close the dropdown after selection
  };

  return (
    <div className="relative w-full lg:w-auto" ref={dropdownRef}>
      <button
        type="button" // Explicitly set button type
        id={`dropdown-button-${id}`} // Unique ID for accessibility
        aria-haspopup="true" // Accessibility attribute
        aria-expanded={isOpen} // Accessibility attribute
        className="flex items-center justify-between w-full py-3 px-4 text-xs sm:text-sm md:py-4 md:px-6 lg:text-base font-semibold text-gray-700 tracking-wider uppercase whitespace-nowrap hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onClick={onToggle} // Simplified onClick handler
      >
        {selectedItem || title}
        <FontAwesomeIcon icon={faChevronDown} className={`ml-3 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute z-20 bg-white shadow-xl mt-1 w-full rounded-md overflow-hidden border border-gray-200 animate-fadeIn"
          role="menu" // Accessibility role
          aria-orientation="vertical"
          aria-labelledby={`dropdown-button-${id}`}
        >
          {items.map((item, index) => (
            <Link
              to={item.href}
              key={index}
              onClick={() => handleSelect(item)}
              role="menuitem" // Accessibility role
              className="block px-6 py-3 text-sm text-gray-800 hover:bg-purple-50 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Main SearchProgramsBy Component ---
const SearchProgramsBy = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State holds the ID of the open dropdown
  const [selectedFilters, setSelectedFilters] = useState({});

  // Toggles the dropdown based on its unique ID
  const handleToggle = (id) => {
    setOpenDropdown(prevOpenDropdown => (prevOpenDropdown === id ? null : id));
  };

  // Sets the selected filter for a specific dropdown
  const handleSelect = (id, itemName) => {
    setSelectedFilters(prevFilters => ({ ...prevFilters, [id]: itemName }));
    // Dropdown is closed automatically by the Dropdown component's handleSelect
  };

  // Clears all selected filters
  const clearFilters = () => {
    setSelectedFilters({});
    setOpenDropdown(null); // Also ensure all dropdowns are closed
  };

  return (
    <div className="font-sans bg-gray-50">
      <div className="bg-white shadow-lg">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="flex-shrink-0 px-4 sm:px-6 py-4 text-gray-800 text-base sm:text-lg font-bold whitespace-nowrap w-full lg:w-auto text-center lg:text-left">
            Find Your Program
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:border-l border-gray-200 flex-grow">
            {dropdowns.map((dropdown) => ( // Removed index from map where possible
              <Dropdown
                key={dropdown.id}
                id={dropdown.id}
                title={dropdown.title}
                items={dropdown.items}
                isOpen={openDropdown === dropdown.id}
                onToggle={() => handleToggle(dropdown.id)} // Pass ID to toggle function
                onSelect={handleSelect}
                selectedItem={selectedFilters[dropdown.id]} // Pass the selected item text
              />
            ))}
          </div>
          {Object.keys(selectedFilters).length > 0 && (
            <div className="flex items-center">
                <button
                    onClick={clearFilters}
                    className="w-full sm:w-auto px-4 py-3 sm:py-4 text-gray-600 hover:text-red-500 transition-colors duration-300"
                    aria-label="Clear Filters"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
          )}
          <Link
            to="/programfinder"
            className="w-full sm:w-auto px-4 py-3 sm:px-8 sm:py-5 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center transition-all duration-300"
            aria-label="Search Programs" // More descriptive aria-label
          >
            Search
          </Link>
        </div>
      </div>

       <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          The Global Media & Journalism Academy
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
          Jadetimes Academy’s approach of learning by doing equips students with real-world media experience, preparing them for successful careers in journalism, broadcasting, and digital content creation
        </p>
      </div>
    </div>
  );
};

export default SearchProgramsBy;