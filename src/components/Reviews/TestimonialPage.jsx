import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ALL_SCREENSHOT_TESTIMONIALS = [
  {
    name: "Pedro Peira",
    program:
      "1-Year Certificate Program Documentary Filmmaking, Los Angeles",
    text: "At JIU, I learned that everything is possible in the film world with a certain amount of effort. Believing to be capable is the key to success."
  },
  {
    name: "Furaha Bayibsa",
    program: "Filmmaking, Los Angeles",
    text: "I got to know myself in depth thanks to the intensity and discipline of the program. I learned about endurance, patience and my own breaking point during my studies. Discovering what my mind and body was capable of at the toughest of moments has been my greatest asset in life."
  },
  {
    name: "Nathan Williams",
    program: "Short-Term Workshop Cinematography, Online",
    text: "Extremely professional. I decided to take JIU’s Intro to Cinematography workshop and it completely changed how I approach lighting and composition."
  },
  {
    name: "Rebecca Rajadnya",
    program: "1-Year Certificate Program Cinematography, New York City",
    text: "I learned an array of skills and concepts from block/light/shoot, the 180 degree line, and set etiquette, lessons I still carry with me to this day as an operator in the film and television industry. Best of all, I was surrounded by other like-minded students and teachers who would prove to be my greatest collaborators once the program was over."
  },
  // Adding 16 more dummy testimonials to create 4 extra pages (4 testimonials per page * 4 pages = 16)
  { name: "Dummy 1", program: "Program 1, Location A", text: "Dummy testimonial text 1." },
  { name: "Dummy 2", program: "Program 2, Location B", text: "Dummy testimonial text 2." },
  { name: "Dummy 3", program: "Program 3, Location C", text: "Dummy testimonial text 3." },
  { name: "Dummy 4", program: "Program 4, Location D", text: "Dummy testimonial text 4." },
  { name: "Dummy 5", program: "Program 1, Location A", text: "Dummy testimonial text 5." },
  { name: "Dummy 6", program: "Program 2, Location B", text: "Dummy testimonial text 6." },
  { name: "Dummy 7", program: "Program 3, Location C", text: "Dummy testimonial text 7." },
  { name: "Dummy 8", program: "Program 4, Location D", text: "Dummy testimonial text 8." },
  { name: "Dummy 9", program: "Program 1, Location A", text: "Dummy testimonial text 9." },
  { name: "Dummy 10", program: "Program 2, Location B", text: "Dummy testimonial text 10." },
  { name: "Dummy 11", program: "Program 3, Location C", text: "Dummy testimonial text 11." },
  { name: "Dummy 12", program: "Program 4, Location D", text: "Dummy testimonial text 12." },
  { name: "Dummy 13", program: "Program 1, Location A", text: "Dummy testimonial text 13." },
  { name: "Dummy 14", program: "Program 2, Location B", text: "Dummy testimonial text 14." },
  { name: "Dummy 15", program: "Program 3, Location C", text: "Dummy testimonial text 15." },
  { name: "Dummy 16", program: "Program 4, Location D", text: "Dummy testimonial text 16." },
];

const TestimonialPage = () => {

  const [expanded, setExpanded] = useState(false);
  const [selectedArea, setSelectedArea] = useState("Area of Study");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const [openIndex, setOpenIndex] = useState(null);

  const [page, setPage] = useState(1);
  const perPage = 4;

  const baseText = (
    <>
      Since enrolling in JIU’s BFA Acting for Film degree, my classes, peers and professors have<br />
      opened up a whole new world for me that I have come to appreciate and am proud to be<br />
      part of. I cannot wait to use all the techniques and tools I’ve learned to continue my<br />
      journey into the film industry.
    </>
  );

  const fullTextContent = (
    <>
      <br /><br />
      When I first became interested in films and acting, I had no real idea what either of them<br />
      entailed beyond what I saw on the big screen at the theatre, and since my curiosity never<br />
      left me, I decided to enroll in the JIU BFA Acting for Film program. Since then, my classes,<br />
      peers and professors have opened up a whole new world for me that I have come to<br />
      appreciate and am proud to be part of. I cannot wait to use all the techniques and tools<br />
      that I have learned here to continue my journey into the film industry.
    </>
  );

  

  const filteredTestimonials = ALL_SCREENSHOT_TESTIMONIALS.filter((testimonial) => {
    const areaMatch =
      selectedArea === "Area of Study" || testimonial.program.includes(selectedArea);
    const locationMatch =
      selectedLocation === "All Locations" || testimonial.program.includes(selectedLocation);
    return areaMatch && locationMatch;
  });

  const totalPages = Math.ceil(filteredTestimonials.length / perPage);
  const start = (page - 1) * perPage;
  const visibleTestimonials = filteredTestimonials.slice(start, start + perPage);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (

    <div className="min-h-screen  py-10 text-gray-900 bg-white px-6 sm:px-6 md:px-6 lg:px-32">
      {/* Top Filter Section */}
      <div className="flex flex-col items-center gap-4 p-4 mb-10  md:flex-row bg-gray-50">
        <select
          className="w-full p-3 transition duration-200 ease-in-out border border-gray-300 rounded-md md:w-1/3 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
        >
          <option>Area of Study</option>
          <option>3D Animation</option>
          <option>Acting for Film</option>
          <option>Cinematography</option>
           <option>Digital Editing</option>
            <option>Documentary Filmmaking</option>
             <option>Entertainment Media</option>
              <option>ESL</option>
               <option>Filmmaking</option>
                <option>Game Design</option>
                 <option>Liberal Arts & Sciences</option>
                  <option>Musical Theatre</option>
                   <option>Photography</option>
                    <option>Producing</option>
                     <option>Screenwriting</option>
                      <option>Virtual Reality</option>
                       <option>Youth and Teen Program</option>
         
        </select>

        <select
          className="w-full p-3 transition duration-200 ease-in-out border border-gray-300 rounded-md md:w-1/3 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option>All Locations</option>
          <option>New York City</option>
          <option>Los Angeles</option>
          <option>Florence, Itly</option>
          <option>Online</option>
          <option>Harvard University</option>
          <option>Paris, France</option>
          <option>bejing, China</option>
          <option>international</option>
          <option>National</option>

        </select>

        <button type="button" className="w-full py-3 font-semibold text-white transition duration-200 ease-in-out rounded-md shadow-md md:w-1/3 bg-sky-600 hover:bg-sky-700 hover:shadow-lg">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Left - Testimonials */}
        <div className="space-y-8 md:col-span-2">
          {/* Mayté expandable testimonial */}
          <div className="p-6 transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-gray-800">Mayté Losada</h2>
              <button
                onClick={() => setExpanded(!expanded)}
                className="p-2 transition-colors duration-200 rounded-full text-sky-600 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-expanded={expanded}
                aria-controls="mayte-testimonial-content"
              >
                {expanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
              </button>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              Bachelor of Fine Arts Acting for Film
            </p>

            <div
              id="mayte-testimonial-content"
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: expanded ? "1000px" : "100px" }}
            >
              <p className="leading-relaxed text-gray-700 whitespace-pre-line">
                {expanded ? <>{baseText}{fullTextContent}</> : baseText}
              </p>
            </div>
          </div>

          
          {visibleTestimonials.map((item, idx) => (
            <div key={start + idx} className="p-6 transition-shadow duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <button
                  onClick={() => toggleIndex(start + idx)}
                  className="p-2 transition-colors duration-200 rounded-full text-sky-600 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  aria-expanded={openIndex === start + idx}
                  aria-controls={`testimonial-content-${start + idx}`}
                >
                  {openIndex === start + idx ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                </button>
              </div>
              <p className="mb-4 text-sm text-gray-600">{item.program}</p>
              {openIndex === start + idx && (
                <p id={`testimonial-content-${start + idx}`} className="mt-4 leading-relaxed text-gray-700">{item.text}</p>
              )}
            </div>
          ))}

          {/* Page numbers */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => {
                  setPage(num);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-full border transition-all duration-200 ease-in-out
                  ${
                    page === num
                      ? "bg-sky-600 text-white border-sky-600 shadow-md"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-sky-400"
                  }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>


        {/* Right Sidebar */}
          <aside className="flex-shrink-0 w-full mt-6 lg:w-80 lg:mt-0">
          <div className="border border-gray-200">
            <div className="p-4 bg-gray-200 ">
              <h2 id="related-links-heading" className="text-2xl font-semibold text-black uppercase">
                RELATED LINKS
              </h2>
            </div>
            <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Open House
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Degree Programs
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Program Dates & Tuition
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TestimonialPage;
