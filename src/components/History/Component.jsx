import React, { useState } from "react";

const Timeline = () => {
  const items = [
    {
      year: "1990-1995",
      color: "border-sky-500",
      details: [
        {
          year: "1992",
          text: `A SCHOOL FOR FILMMAKERS, BY FILMMAKERS
Jerry Sherlock (1935-2015), executive producer of The Hunt for Red October, and his son, Jean Sherlock, (owner and principal) found New York Film Academy at Robert DeNiro’s Tribeca Film Center. Jerry Sherlock assembles a team of filmmakers and educators, including Harvard graduate Michael Young (now President of the Academy) and Mitko Panov, winner of Cannes Palme D’Or, and create an alternative to traditional film schools. Together, they design and launch hands-on total immersion filmmaking workshops where each student writes, shoots, directs, and edits their short films. The first class includes 50 students from all over the world.`,
        },
        {
          year: "1994",
          text: `NYFA AT UNION SQUARE
New York Film Academy moves to its facility in Union Square at the historic Tammany Hall building.`,
        },
        {
          year: "1995",
          text: `LEADERSHIP AT NYFA
Filmmaker and NYU MFA Filmmaking graduate David Klein, later Senior Executive Vice President, joins the leadership at NYFA. To learn more about NYFA’s leadership, click here.`,
        },
        {
          year: "1995",
          text: `NYFA PROGRAMS AT CAMBRIDGE, PRINCETON, YALE, AND HARVARD
NYFA’s summer programs start at Princeton University in 1995, Yale University in 1996, UCLA in 1997, and Disney MGM Studios in Orlando in 1998. NYFA’s summer programs expand to other locations, including Cambridge University in England and Harvard University.`,
        },
      ],
    },
    {
      year: "1996-2001",
      color: "border-purple-600",
      details: [
        {
          year: "1998",
          text: `NYFA OFFERS SUMMER CAMPS AND WORKSHOPS FOR KIDS AND TEENS
NYFA launches summer camps and workshops for youth.`,
        },
        {
          year: "1998",
          text: `NYFA STARTS PROGRAMS IN EUROPE
First overseas program in Paris at the Sorbonne. Later relocated to La Fémis and expanded across Europe.`,
        },
        {
          year: "1999",
          text: `NYFA GOES TO HOLLYWOOD
New York Film Academy Los Angeles campus launches on the backlot of Universal Studios.`,
        },
        {
          year: "2000",
          text: `NYFA LAUNCHES LONG-TERM FILMMAKING PROGRAMS
First 1-Year Filmmaking Certificate launched.`,
        },
        {
          year: "2001",
          text: `NYFA OFFERS PROGRAMS IN ASIA
NYFA launches programs in Beijing, Shanghai, South Korea, India, Japan, Saudi Arabia, and Yemen.`,
        },
      ],
    },
    {
      year: "2002-2007",
      color: "border-yellow-600",
      details: [
        {
          year: "2006",
          text: `ACCREDITATION FROM NASAD
The National Association of Schools of Art and Design (NASAD) accredits the New York Film Academy and its programs, including the Master of Fine Arts in Filmmaking.`,
        },
      ],
    },
    {
      year: "2008-2013",
      color: "border-blue-600",
      details: [
        {
          year: "2008",
          text: `NYFA PARTNERS WITH THE ABU DHABI AUTHORITY FOR CULTURAL HERITAGE
NYFA collaborates on a seven-year project to educate filmmakers and actors in the UAE, offering one-year and short-term programs in Abu Dhabi.`,
        },
        {
          year: "2009",
          text: `NYFA WELCOMES VETERANS AND MILITARY DEPENDENTS
NYFA welcomes veterans and military dependents using the GI Bill and Yellow Ribbon Program.`,
        },
        {
          year: "2010",
          text: `NYFA OFFERS PROGRAMS IN SOUTH AMERICA
Programs launch in Cartagena, Colombia. Later workshops run in Rio de Janeiro, Brazil in 2013.`,
        },
        {
          year: "2010",
          text: `NYFA LAUNCHES PROGRAMS IN AFRICA
Workshops in Abuja and Lagos, Nigeria in partnership with Del-York International.`,
        },
        {
          year: "2012",
          text: `NYFA AUSTRALIA OPENS
NYFA Australia opens in Queensland, later expanding to Sydney and moving into a Gold Coast facility. Recognized by China's Ministry of Education.`,
        },
      ],
    },
    {
      year: "2014-2019",
      color: "border-purple-600",
      details: [
        {
          year: "2014",
          text: `LIGHTS, CAMERA, ACTION
NYFA expands its Los Angeles campus into the Warner Bros. Music Building.`,
        },
        {
          year: "2014",
          text: `NYFA GOES TO THE SUNSHINE STATE
NYFA South Beach, Florida; College of Visual and Performing Arts opens in Miami.`,
        },
        {
          year: "2014",
          text: `TO INFINITY AND BEYOND
Partnership with NASA to create content promoting the James Webb Space Telescope (JWST).`,
        },
        {
          year: "2017",
          text: `NYFA OFFERS STUDY ABROAD PROGRAMS
Formal study abroad program with credits begins. Summer camps launch in Florence, Italy in 2018.`,
        },
        {
          year: "2019",
          text: `WASC ACCREDITATION
NYFA receives WASC Accreditation.`,
        },
      ],
    },
    {
      year: "2020-",
      color: "border-yellow-600",
      details: [
        {
          year: "2021",
          text: `CINEMA ITALIANO!
NYFA Florence becomes an official NYFA campus.`,
        },
        {
          year: "2022",
          text: `NYFA LAUNCHES BFA IN ENTERTAINMENT MEDIA
A new Bachelor of Fine Arts in Entertainment Media is introduced, offering exposure to multiple storytelling mediums.`,
        },
        {
          year: "2023",
          text: `NYFA OFFERS FIRST ONLINE DEGREE PROGRAM
Launch of the Online MA in Entrepreneurial Producing and Innovation.`,
        },
      ],
    },
  ];

   const [expanded, setExpanded] = useState([]);

  const showDetails = (index) => {
    if (!expanded.includes(index)) {
      setExpanded([...expanded, index]);
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-10 space-y-16">
      {items.map((item, index) => (
        <div key={index} className="space-y-4 flex flex-col">
          {/* Year heading with left border */}
          <h2
            className={`text-3xl sm:text-4xl font-sans font-bold border-l-4 pl-4 ${item.color}`}
          >
            {item.year}
          </h2>

          {/* Read More button */}
          {!expanded.includes(index) && (
            <button
              onClick={() => showDetails(index)}
              className="text-pink-600 text-sm font-extrabold uppercase tracking-wide flex items-center gap-1 hover:underline ml-4"
            >
              READ MORE <span className="translate-y-[1px]">▼</span>
            </button>
          )}

          {/* Details */}
          {expanded.includes(index) && (
            <div className="ml-4 space-y-4 text-gray-700">
              {item.details.map((detail, i) => (
                <div key={i}>
                  <h3 className="font-bold text-lg text-gray-900">{detail.year}</h3>
                  <p className="whitespace-pre-line">{detail.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Timeline;