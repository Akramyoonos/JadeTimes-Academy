// src/components/OurStudents.jsx
import React, { useState } from "react";

// Local images (ensure #4 filename matches your disk)
import studentImage1 from "../assets/Images/our-students-01-948x815-1-768x660.jpeg";
import studentImage2 from "../assets/Images/our-students-02-948x815-1-768x660.jpeg";
import studentImage3 from "../assets/Images/our-students-03-948x815-1-768x660.jpeg";
import studentImage4 from "../assets/Images/our-students-04-948x815--768x660.jpeg"; // note the double "--"

const studentsData = [
  {
    name: "Nathan Williams",
    program: "Cinematography",
    quote:
      "As an Entertainment Professional, I decided to take NYFA's Intro to Cinematography class to learn the craft and allow me to have more knowledgeable conversations with DPs. It expanded my knowledge, inspired me creatively and gave me more confidence on set – an invaluable resource.",
    imageUrl: studentImage1,
    altText: "Portrait of Nathan Williams, a cinematography student.",
  },
  {
    name: "Mayté Losada",
    program: "Acting for Film",
    quote:
      "My classes, peers and professors have opened up a new world for me that I have come to appreciate. I cannot wait to use all the techniques and tools I’ve learned to continue my journey into the film industry.",
    imageUrl: studentImage2,
    altText: "Portrait of Mayté Losada, a student at the film academy.",
  },
  {
    name: "Jane Smith",
    program: "Photography",
    quote:
      "I discovered my unique visual style here. The creative freedom and supportive community allowed me to push my boundaries and create work I'm truly proud of.",
    imageUrl: studentImage3,
    altText: "Portrait of Jane Smith, a student at the film academy.",
  },
  {
    name: "Alex Johnson",
    program: "3D Animation & VFX",
    quote:
      "From character design to final render, the curriculum covered everything. I left with a professional-level portfolio that got me hired before I even graduated.",
    imageUrl: studentImage4,
    altText: "Portrait of Alex Johnson, a student at the film academy.",
  },
];

export default function OurStudents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const s = studentsData[currentIndex];

  return (
    <div className="font-sans w-full text-white" style={{ backgroundColor: "#090909" }}>
      {/* simple fade/slide animations */}
      <style>{`
        @keyframes fadeInSlideUp {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInSlideLeft {
          0% { opacity: 0; transform: translateX(12px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .anim-text { animation: fadeInSlideUp 400ms ease forwards; }
        .anim-image { animation: fadeInSlideLeft 400ms ease forwards; }
      `}</style>

      <div className="w-full mx-auto flex flex-col">
        {/* ===== CONTENT ===== */}
        <section className="relative flex flex-col md:flex-row items-start justify-start px-5 sm:px-6 md:px-8 lg:px-12 pt-12 md:pt-16  gap-6 md:gap-10">
          {/* LEFT: IMAGE (natural ratio, lowered a bit) */}
          <div className="w-full md:w-5/12 lg:w-[44%] xl:w-[42%] mt-4 md:mt-6">
            <div className="w-full overflow-hidden rounded-lg aspect-[948/815]">
              <img
                key={s.imageUrl}
                src={s.imageUrl}
                alt={s.altText}
                className="block w-full h-full object-cover object-top md:object-center anim-image"
              />
            </div>
          </div>

          {/* RIGHT: TEXT (aligned; capped width + extra right padding) */}
          <div className="w-full md:flex-1">
            <div className="pl-8 md:pl-10 lg:pl-12 pr-8 md:pr-12 lg:pr-16 max-w-3xl">
              {/* Heading + SHORT purple line (only heading height) */}
              <div className="flex items-stretch mb-14 md:mb-12">
                <span className="w-[3px] bg-fuchsia-500 mr-3 self-stretch" aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.05] tracking-wide">
                  <span className="block">OUR</span>
                  <span className="block">STUDENTS</span>
                </h2>
              </div>

              {/* Changing content */}
              <div key={currentIndex} className="anim-text">
                <span className="block text-5xl md:text-6xl lg:text-7xl text-fuchsia-500 mb-2" aria-hidden="true">
                  “
                </span>

                <blockquote className="text-lg md:text-xl lg:text-2xl leading-7 md:leading-8 font-semibold">
                  {s.quote}
                </blockquote>

                <div className="mt-4">
                  <p className="text-lg md:text-xl font-semibold tracking-wide">{s.name}</p>
                  <p className="text-gray-300 uppercase tracking-[0.22em] text-xs md:text-sm mt-1">
                    {s.program}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER (white; kisses content) ===== */}
        <footer className="relative border-t-1 mt-0 z-0" style={{ backgroundColor: "#090909", borderColor: "gray-100" }}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
              {/* First three items */}
              {["Testimonials", "Diversity", "Showcase"].map((label) => (
                <div
                  key={label}
                  className="relative border-r"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <a
                    href="#"
                    className="group relative block py-4 text-sm md:text-base font-medium tracking-wider text-white transition-colors duration-300"
                  >
                    {/* Hover blue line: TOP, left -> right, above white border */}
                    <span
                      className="pointer-events-none absolute top-0 left-0 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full z-10"
                      aria-hidden="true"
                    />
                    {label}
                  </a>
                </div>
              ))}

              {/* Success Stories cell + DOTS above it */}
              <div className="relative">
                {/* Dots ABOVE (not too close) */}
                <nav
                  aria-label="Pagination dots"
                  className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-2 rounded"
                  style={{ top: "-2.6rem", backgroundColor: "#090909" }}
                >
                  {studentsData.map((_, i) => {
                    const active = i === currentIndex;
                    const size = active ? 15 : 10; // ACTIVE 15px, INACTIVE 10px
                    return (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        aria-current={active}
                        title={`Go to slide ${i + 1}`}
                        className={
                          "rounded-full transition-all duration-300 focus:outline-none cursor-pointer " +
                          (active ? "ring-2" : "")
                        }
                        style={{
                          width: size,
                          height: size,
                          backgroundColor: "rgb(56 189 248)", // sky-400
                          boxShadow: active ? "0 0 0 2px rgba(125,211,252,1)" : "none", // ring-sky-300
                        }}
                      />
                    );
                  })}
                </nav>

                <a
                  href="#"
                  className="group relative block py-4 text-sm md:text-base font-medium tracking-wider text-white transition-colors duration-300"
                >
                  {/* Hover blue line: TOP, left -> right, above white border */}
                  <span
                    className="pointer-events-none absolute top-0 left-0 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full z-10"
                    aria-hidden="true"
                  />
                  Success Stories
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}