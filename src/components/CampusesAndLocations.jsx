// src/components/CampusesAndLocations.jsx
import React from "react";
import worldMap from "../assets/Images/campuses-map.jpg"; // your map image

const BRAND_PINK = "#B52E8C";

const REGIONS = [
  {
    title: "NORTH AMERICA",
    items: [
      { city: "New York City", tag: "Campus" },
      { city: "Los Angeles", tag: "Campus" },
      { city: "Harvard University", tag: "Location" },
    ],
  },
  {
    title: "EUROPE",
    items: [
      { city: "Florence, Italy", tag: "Campus" },
      { city: "Paris, France", tag: "Location" },
    ],
  },
  {
    title: "ASIA-PACIFIC",
    items: [{ city: "Beijing, China", tag: "Location" }],
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
      <div className="max-w-7xl  px-8 sm:px-10 lg:px-12 py-12 sm:py-16 lg:py-24">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-start gap-4">
            <span
              className="block h-24  w-1.5 "
              style={{ backgroundColor: BRAND_PINK }}
            />
            {/* Removed bold here: font-normal */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl leading-tight pl-3 text-black font-normal">
              CAMPUSES &<br /> LOCATIONS
            </h2>
          </div>
        </div>

        {/* Regions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pl-12">
          {REGIONS.map((region) => (
            <div key={region.title}>
              <h3 className="text-xl tracking-widest text-black/90 font-semibold mb-6">
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
