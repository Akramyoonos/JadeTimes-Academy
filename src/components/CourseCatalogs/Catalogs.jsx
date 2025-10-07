import React, { useState, useMemo } from 'react';

const locations = [
  { id: 'los-angeles', name: 'LOS ANGELES', color: 'bg-yellow-400' },
  { id: 'new-york', name: 'NEW YORK', color: 'bg-blue-400' },
  { id: 'miami', name: 'MIAMI', color: 'bg-green-400' },
];

const Catalogs = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0].id);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLocationClick = (id) => {
    setActiveLocation(id);
    scrollToSection(id);
  };

  const activeIndex = useMemo(() => locations.findIndex(loc => loc.id === activeLocation), [activeLocation]);
  const activeLocationObj = useMemo(() => locations.find(loc => loc.id === activeLocation), [activeLocation]);

  const indicatorStyle = {
    width: `${100 / locations.length}%`,
    left: `${(activeIndex * 100) / locations.length}%`,
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 sm:p-8 relative scroll-smooth">
      {/* --- Breadcrumb Navigation --- */}
      <div className="text-sm font-light uppercase tracking-wider mb-20 md:mb-32 lg:mb-40">
        <span className="font-medium text-gray-800 cursor-pointer hover:underline">JIU</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-gray-800 cursor-pointer hover:underline">WHO WE ARE</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-500 cursor-default">JIU CATALOGS</span>
      </div>

      {/* --- Main Title --- */}
      <div className="text-center mb-24 md:mb-32">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide">
          JIU COURSE CATALOGS
        </h1>
      </div>
      
      {/* --- LOCATION LABELS SECTION --- */}
      <div className="w-full max-w-8xl mx-auto px-4 my-20 md:my-40">
        <div className="relative">
          {/* Location Labels */}
          <div className="flex justify-between text-sm md:text-base font-light uppercase tracking-wider border-b border-gray-300">
            {locations.map(location => (
              <button
                key={location.id}
                onClick={() => handleLocationClick(location.id)}
                className={`w-1/3 py-4 text-center transition-colors duration-300 ${activeLocation === location.id ? `${activeLocationObj.color.replace('bg-', 'text-')} font-semibold` : 'text-gray-500 hover:text-gray-800'}`}
              >
                {location.name}
              </button>
            ))}
          </div>
          {/* Underline Indicator */}
          <div
            className={`absolute bottom-0 h-0.5 ${activeLocationObj.color} transition-all duration-300`}
            style={indicatorStyle}
          ></div>
        </div>
      </div>

      {/* --- Course Catalog Content --- */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-2 lg:px-4 ">

        {/* LOS ANGELES */}
        <section id="los-angeles" className="mb-24">
          <div className="flex items-center mb-12">
            <div className={`w-1.5 ${locations.find(loc => loc.id === 'los-angeles').color} h-16 mr-4`}></div>
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-800 tracking-wide">LOS ANGELES COURSE CATALOGS</h2>
          </div>
          {/* Content for LA */}
          <div className="space-y-8 pl-6">
            <div>
              <h3 className="text-2xl font-normal text-gray-800 mb-4">2025-2026 Academic Year</h3>
              <a href="#" className="text-pink-600 hover:underline text-lg font-semibold flex items-center"><span className="text-pink-600 text-xl mr-2">•</span>2025-2026 JIU Policy & Program Catalog</a>
              <p className="italic text-lg mt-2 ml-6 text-gray-600">Quick link to : <a href="#" className="text-pink-600 hover:underline">LA Program Catalog</a></p>
            </div>
            <div>
              <h3 className="text-2xl font-normal text-gray-800 mb-4">2024-2025 Academic Year</h3>
              <ul className="list-none space-y-2">
                <li><a href="#" className="text-pink-600 hover:underline text-lg font-semibold flex items-center"><span className="text-pink-600 text-xl mr-2">•</span>2024-25 JIU LA Catalog</a></li>
                <li><a href="#" className="text-pink-600 hover:underline text-lg font-semibold flex items-center"><span className="text-pink-600 text-xl mr-2">•</span>2024-25 JIU LA Catalog Addendum I</a></li>
                <li><a href="#" className="text-pink-600 hover:underline text-lg font-semibold flex items-center"><span className="text-pink-600 text-xl mr-2">•</span>2024-25 JIU LA Catalog Addendum II</a></li>
              </ul>
            </div>
            {/* Add other LA years here */}
          </div>
        </section>

        {/* NEW YORK */}
        <section id="new-york" className="mb-24">
          <div className="flex items-center mb-12">
            <div className={`w-1.5 ${locations.find(loc => loc.id === 'new-york').color} h-16 mr-4`}></div>
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-800 tracking-wide">NEW YORK COURSE CATALOGS</h2>
          </div>
          {/* Content for NY */}
          <div className="space-y-8 pl-6">
             <div>
              <h3 className="text-2xl font-normal text-gray-800 mb-4">2025-2026 Academic Year</h3>
              <a href="#" className="text-pink-600 hover:underline text-lg font-semibold flex items-center"><span className="text-pink-600 text-xl mr-2">•</span>2025-2026 JIU Policy & Program Catalog</a>
              <p className="italic text-lg mt-2 ml-6 text-gray-600">Quick link to : <a href="#" className="text-pink-600 hover:underline">NY Program Catalog</a></p>
            </div>
            <div>
              <h3 className="text-2xl font-normal text-gray-800 mb-4">2024-2025 Academic Year</h3>
              <ul className="list-none space-y-2">
                <li><a href="#" className="text-pink-600 hover:underline text-lg font-semibold flex items-center"><span className="text-pink-600 text-xl mr-2">•</span>2024-25 JIU NY Catalog</a></li>
                <li><a href="#" className="text-pink-600 hover:underline text-lg font-semibold flex items-center"><span className="text-pink-600 text-xl mr-2">•</span>2024-25 JIU NY Catalog Addendum I</a></li>
                <li><a href="#" className="text-pink-600 hover:underline text-lg font-semibold flex items-center"><span className="text-pink-600 text-xl mr-2">•</span>2024-25 JIU NY Catalog Addendum II</a></li>
                <li><a href="#" className="text-pink-600 hover:underline text-lg font-semibold flex items-center"><span className="text-pink-600 text-xl mr-2">•</span>2024-25 JIU NY Catalog Addendum III</a></li>
              </ul>
            </div>
            {/* Add other NY years here */}
          </div>
        </section>

        {/* MIAMI */}
        <section id="miami" className="mb-12">
          <div className="flex items-center mb-10">
            <div className={`w-1.5 ${locations.find(loc => loc.id === 'miami').color} h-16 mr-4`}></div>
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-800 tracking-wide">MIAMI COURSE CATALOGS</h2>
          </div>
          <div className="text-lg text-gray-700 pl-6">
            <p>
              New York Film Academy's Miami Campus closed operations on Aug 31, 2025. For information on the Miami Campus accreditation, licensing, program curriculum and student records, please click <a href="#" className="text-pink-600 hover:underline font-semibold">here</a>.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Catalogs;
