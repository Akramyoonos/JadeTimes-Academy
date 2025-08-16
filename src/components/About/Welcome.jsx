import React, { useState } from 'react';
import AboutWelcome from '../../assets/Images/AboutWelcome.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faQuoteLeft, faChevronDown, faBullseye, faGraduationCap, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const [missionVisible, setMissionVisible] = useState(false);
  const [degreeVisible, setDegreeVisible] = useState(false);
  const [exploreVisible, setExploreVisible] = useState(false);
  const videoUrl = 'https://www.youtube.com/watch?v=FKz0Fnk_TRM';
  const videoThumbnail = 'https://img.youtube.com/vi/FKz0Fnk_TRM/maxresdefault.jpg';

  const handlePlayClick = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-50 text-gray-800 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          <main className="flex-1">
            <div className="flex items-center gap-4 mb-12">
              <span className="inline-block w-3 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 font-extrabold leading-tight tracking-tighter">
                WELCOME TO <span className="text-blue-600">Jadetimes</span> Professional Academy
              </h1>
            </div>

            <article className="mb-20 flex flex-col sm:flex-row items-start gap-10">
              <figure className="flex-shrink-0 relative w-48 sm:w-56 md:w-64 mx-auto sm:mx-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
                <img
                  alt="Jerry Sherlock Founder"
                  className="w-full h-full object-cover"
                  src={AboutWelcome}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white text-center text-sm py-3 font-semibold">
                  Jerry Sherlock Founder
                </figcaption>
              </figure>
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Jadetimes Professional Academy was created to empower the next generation of storytellers, journalists, and digital creators with practical, hands-on training. Unlike traditional academic programs, our approach focuses on industry-relevant skills and real-world experience to prepare students for successful careers in media, journalism, and digital marketing.
                </p>
                <p>
                  We believe in making quality education accessible to learners worldwide, providing an interactive and project-based learning experience that builds confidence and creativity. At Jadetimes Academy, students don’t just learn theory—they apply their knowledge through real projects, case studies, and live sessions led by industry professionals.
                </p>
                <p>
                  From the first day, our learners gain practical insights into media production, news writing, content strategy, and digital marketing essentials. With guidance from expert mentors, you’ll develop communication, critical thinking, and creative problem-solving skills that set you apart in today’s competitive media landscape.
                </p>
              </div>
            </article>

            <figure className="mb-20 relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                alt="New York Film Academy"
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                src={videoThumbnail}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
              <button
                aria-label="Play video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-white flex items-center justify-center text-white text-4xl cursor-pointer bg-black/60 hover:bg-blue-600/80 transition-all duration-300 transform group-hover:scale-110 shadow-lg"
                onClick={handlePlayClick}
              >
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </figure>

            <blockquote className="border-l-8 border-purple-600 p-8 sm:p-12 bg-white text-lg leading-relaxed relative rounded-r-lg shadow-xl">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-purple-300 absolute top-6 left-6 text-5xl sm:text-6xl md:text-7xl opacity-40" aria-hidden="true" />
              <p className="pl-10 sm:pl-16 text-gray-800">
                “Jerry was inspired by the idea that to learn how to make movies, one must actually make movies. He brought together a group of filmmakers and educators from the around the world, and we designed a truly unique film school with a new hands-on, immersive approach. Through this experiential learning method, students write, direct, shoot, and edit their own original films, while also serving as crewmembers on their fellow classmates’ films, gaining extensive on-set experience. This learn-by-doing philosophy is applied to all of our areas of study.”
              </p>
              <footer className="mt-8 text-base text-gray-900 pl-10 sm:pl-16">
                <strong className="font-bold text-gray-900">Michael J. Young</strong>
                <span className="block sm:inline sm:ml-2 text-gray-600 font-normal">President of NYFA</span>
              </footer>
            </blockquote>
          </main>

          <aside className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg">
              <nav className="flex flex-col text-lg font-medium text-gray-800">
                <button
                  className="flex items-center justify-between px-6 py-5 border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:bg-blue-100 text-left"
                  onClick={() => setMissionVisible(!missionVisible)}
                >
                  <span className="flex items-center gap-3"><FontAwesomeIcon icon={faBullseye} className="text-blue-500" /> Mission</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transform transition-transform duration-300 ${missionVisible ? 'rotate-180 text-blue-600' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${missionVisible ? 'max-h-screen' : 'max-h-0'}`}
                >
                  <div className="p-6 bg-blue-50/50 border-b border-gray-200 text-gray-700 leading-relaxed">
                    <p>
                      To become a global hub for practical media and digital skills education, empowering individuals to shape the future of storytelling, journalism, and marketing through innovation and creativity.
                    </p>
                  </div>
                </div>
                <Link
                  to="/programfinder"
                  className="flex items-center justify-between px-6 py-5 border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:bg-blue-100 text-left"
                  onClick={() => setDegreeVisible(!degreeVisible)}
                >
                  <span className="flex items-center gap-3"><FontAwesomeIcon icon={faGraduationCap} className="text-blue-500" /> Explore our Courses</span>
                </Link>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${degreeVisible ? 'max-h-screen' : 'max-h-0'}`}
                >
                  <div className="p-6 bg-blue-50/50 border-b border-gray-200 text-gray-700 leading-relaxed">
                    <p>
                      Our degree programs are designed to provide students with a comprehensive, hands-on education in their chosen field. We offer a range of accredited degrees that combine rigorous academic study with practical, project-based learning, preparing students for successful careers in the creative industries.
                    </p>
                  </div>
                </div>
                <Link
                  to="/admissions"
                  className="flex items-center justify-between px-6 py-5 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:bg-blue-100 text-left rounded-b-xl"
                  onClick={() => setExploreVisible(!exploreVisible)}
                >
                  <span className="flex items-center gap-3"><FontAwesomeIcon icon={faClipboardList} className="text-blue-500" /> How to Enroll</span>
                </Link>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${exploreVisible ? 'max-h-screen' : 'max-h-0'}`}
                >
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Welcome;