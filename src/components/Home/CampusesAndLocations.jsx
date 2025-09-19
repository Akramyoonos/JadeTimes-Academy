// src/components/CampusesAndLocations.jsx
import React from "react";
import worldMap from "../../assets/Images/campuses-map.jpg"; // your map image

const BRAND_PINK = "#B52E8C";

const REGIONS = [
  {
    title: "NORTH AMERICA",
    items: [
      { city: "New York City", tag: "JIU Agent Office" },
      { city: "New Mexico", tag: "JIU Agent Office" },
    ],
  },
  {
    title: "EUROPE",
    items: [
      { city: "Florence, Italy", tag: "JIU Agent Office" },
      { city: "Paris, France", tag: "JIU Agent Office" },
      { city: "Madrid, Spain", tag: "JIU Agent Office" },
    ],
  },
  {
    title: "Asia-Pacific",
    items: [
      { city: "Beijing, China", tag: "JIU Agent Office" },
      { city: "Colombo, Sri Lanka", tag: "JIU Agent Office" },
      { city: "Delhi, India", tag: "JIU Agent Office" },
    ],
  },
  {
    title: "Middle East & Africa",
    items: [
      { city: "Dubai, UAE", tag: "JIU Agent Office" },
      { city: "Nairobi, Kenya", tag: "JIU Agent Office" },
    ],
  },
];

export default function CampusesAndLocations() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${worldMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pl-4 sm:pl-10 lg:pl-10 py-8 sm:py-12 lg:py-16">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-start gap-4">
            <span
              className="block h-24 w-1.5"
              style={{ backgroundColor: BRAND_PINK }}
            />
            {/* Responsive font size for the heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight uppercase text-black font-normal">
              JIU Agent Offices<br /> (Student Support Worldwide)
            </h2>
          </div>
        </div>

        {/* Regions */}
        {/* On mobile, regions stack vertically. On medium screens and up, they scroll horizontally. */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-12 pb-4  lg:flex-nowrap lg:justify-start lg:overflow-x-auto">
          {REGIONS.map((region, index) => (
            <div
              key={region.title}
              className={`flex-shrink-0 w-full md:w-1/2 lg:w-80 lg:pr-4 ${
                                index === 0 ? 'md:order-1' : // NORTH AMERICA (first in tablet)
                index === 1 ? 'md:order-2' : // EUROPE (second in tablet)
                index === 2 ? 'md:order-3' : // Asia-Pacific (third in tablet)
                index === 3 ? 'md:order-4' : '' // Middle East & Africa (fourth in tablet)
              }`}
            >
              <h3 className="text-lg sm:text-xl tracking-widest uppercase text-black/90 font-semibold mb-6">
                {region.title}
              </h3>

              <ul className="divide-y divide-black/10">
                {region.items.map((item) => (
                  <li
                    key={item.city}
                    className="group flex items-center justify-between py-4"
                  >
                    {/* City name changes to pink on hover (no underline) */}
                    <a
                      href="#"
                      className="text-base sm:text-lg text-black transition-colors duration-200 group-hover:text-[#B52E8C] hover:text-[#B52E8C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B52E8C]"
                    >
                      {item.city}
                    </a>

                    {/* Tag stays the same color */}
                    <span className="text-sm uppercase tracking-wide text-black/50">
                      {item.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* faint white overlay for readability on bright map */}
      <div className="pointer-events-none absolute inset-0 bg-white/60 -z-10" />
    </section>
  );
}