import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter,  faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const CardsData5Article = () => {
  const [isCopied, setIsCopied] = useState(false);
          
              const handleCopyLink = () => {
                   navigator.clipboard.writeText(window.location.href);
              setIsCopied(true);
              setTimeout(() => {
                  setIsCopied(false);
              }, 2000); // Reset the copied state after 2 seconds
          }

  const videoUrl = 'https://www.youtube.com/embed/qGe2zDnTsDk';
  // Used the direct URL for the YouTube video's thumbnail image.
  const videoThumbnail = 'https://img.youtube.com/vi/qGe2zDnTsDk/maxresdefault.jpg';
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };


    return (
        <div className="font-sans">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8">
                <article>
                    <figure className="mb-12 md:mb-20 relative overflow-hidden shadow-2xl group">
              <img
                alt="JadeTimes Academy"
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                src={videoThumbnail}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
              <button
                aria-label="Play video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 border-4 border-white flex items-center justify-center text-white text-3xl md:text-4xl cursor-pointer bg-black/60 hover:bg-blue-600/80 transition-all duration-300 transform group-hover:scale-110 shadow-lg"
                onClick={handlePlayClick}
              >
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </figure>
                    <div className="p-2">
                        {/* Article */}
                        <main className="prose max-w-none text-gray-800 text-lg md:text-xl leading-relaxed">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Jadetimes International Research Conference 2025</h1>
                            <p className="text-center text-base md:text-lg font-semibold text-gray-600">Locations: India · New Mexico · London · Spain · Australia · Sri Lanka</p>
                            <p className="text-center text-base md:text-lg font-semibold text-gray-600 mb-8">Helpline: +1 (505) 385-9745</p>

                            <h2 className="text-2xl md:text-3xl font-bold mt-10 md:mt-12 mb-4">Overview</h2>
                            <p>The Jadetimes International Research Conference 2025 is a global forum for scholars, professionals, and students to present original research, build collaborations, and gain international visibility. Originally scheduled to begin June 1, 2025, the conference has been rescheduled to <strong>July 12, 2025 at 11:00 AM (Indian Time)</strong> due to an overwhelming volume of high-quality submissions. The event runs in Online and Hybrid modes to maximize access for participants worldwide.</p>

                            <h2 className="text-2xl md:text-3xl font-bold mt-10 md:mt-12 mb-4">Why Participate</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Global Advisory Panel & Keynote Faculty (featured across our promos and posters)</li>
                                <li>Best Research Paper Awards with cash prizes (see Awards below)</li>
                                <li>Free publication for winning papers in the Jadetimes Journal of Universal Studies</li>
                                <li>Official Conference Certificates for all presenters</li>
                                <li>Live expert feedback and Q&A after each talk</li>
                                <li>Budget-friendly registration for Students & PhD scholars</li>
                                <li>Group (20%) and Academic Partner (70%) discounts</li>
                                <li>Flexible attendance: Online or designated Hybrid venues</li>
                            </ul>

                            <h2 className="text-2xl md:text-3xl font-bold mt-10 md:mt-12 mb-4">Conference Tracks</h2>
                            <p>Illustrative, not exhaustive:</p>
                            <p>Business & Economics · Education & Social Sciences · Technology & Innovation · Health Sciences · Arts & Humanities · Media, Communication & Journalism · AI & Machine Learning · Climate & Environment · Law & International Relations · Agriculture & Food Sciences · IT & Cybersecurity · Architecture & Urban Planning · Data Science & Big Data · Disaster Management · Library & Information Science · Sports Science · Gender Studies & Social Justice · Entrepreneurship & Start-ups · Philosophy & Ethics …and more.</p>

                            <h2 className="text-2xl md:text-3xl font-bold mt-10 md:mt-12 mb-4">Submission & Participation</h2>
                            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Call for Papers — Submit Your Work Now</h3>
                            
                            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Key deadlines</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Abstract:</strong> 20 June 2025</li>
                                <li><strong>Full Paper:</strong> 25 June 2025</li>
                            </ul>

                            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Presentation format</h3>
                             <ul className="list-disc list-inside space-y-2">
                                <li>10 minutes presentation + 5 minutes Q&A</li>
                                <li><strong>Language:</strong> English</li>
                                <li><strong>Modes:</strong>
                                    <ul className="list-disc list-inside ml-6 mt-2">
                                        <li><strong>Online:</strong> Zoom/Google Meet (live or pre-recorded accepted)</li>
                                        <li><strong>Hybrid:</strong> In-person delivery at select partner venues in India, New Mexico, London, Spain, Australia, Sri Lanka</li>
                                    </ul>
                                </li>
                            </ul>

                            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Paper Quality & Structure</h3>
                            <p>All submissions undergo rigorous peer review for originality, relevance, and integrity. Mandatory sections: Title · Authors & Affiliations · Abstract (≤120 words) · Keywords (≤6) · Introduction · Literature Review · Methodology · Results & Discussion · Conclusion · References (APA – latest edition).</p>

                            <h2 className="text-2xl md:text-3xl font-bold mt-10 md:mt-12 mb-4">Registration Fees</h2>
                            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Online Mode</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Individual Presenter:</strong> $300</li>
                                <li><strong>PhD Scholar:</strong> $200</li>
                                <li><strong>Co-author (two presenters):</strong> $250</li>
                                <li><strong>Student (Valid ID):</strong> $150</li>
                                <li><strong>Additional paper:</strong> $40 each</li>
                            </ul>

                            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Hybrid Mode</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Individual Presenter:</strong> $500</li>
                                <li><strong>PhD Scholar:</strong> $300</li>
                                <li><strong>Co-author (two presenters):</strong> $350</li>
                                <li><strong>Student (Valid ID):</strong> $250</li>
                                <li><strong>Additional paper:</strong> $100 each</li>
                            </ul>
                            <p className="mt-4">All participants receive official certificates, session access, conference materials, and recordings. Group discounts (20%) for 5+ registrations; academic partner institutions receive up to 70% discounts.</p>
                            
                            <h2 className="text-2xl md:text-3xl font-bold mt-10 md:mt-12 mb-4">Awards & Recognition</h2>
                            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">1st Place – Best Research Paper</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>$2,000 USD</strong> cash prize</li>
                                <li>Official trophy & digital certificate</li>
                                <li>Feature articles in 50+ online global media</li>
                                <li>Free publication in the Jadetimes Journal of Universal Studies</li>
                                <li>Exclusive interview & global promotion</li>
                                <li>Invitation to future Jadetimes events</li>
                            </ul>
                            
                            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">2nd Place – Best Research Paper</h3>
                             <p><strong>$500 USD</strong> cash prize + all recognitions above</p>

                            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">3rd Place – Best Research Paper</h3>
                            <p><strong>$200 USD</strong> cash prize + all recognitions above</p>

                            <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Conference Presentation & Participation Award</h3>
                            <p>Trophy (where applicable), digital certificate, journal recognition opportunities, interview feature, and invitations to future events for all active presenters.</p>

                            <h2 className="text-2xl md:text-3xl font-bold mt-10 md:mt-12 mb-4">Featured Voices</h2>
                            <p>Promotional spotlights include Dr. Manvendra Singh, Avneet Gulati, Dr. Sumit Kumar Pandey, Prof. Ceasar Dubor, Dr. Jaime Geronimo Vela, and Dr. Tornike Shurgulaia, representing diverse expertise across social sciences, media, health, security studies, and the arts.</p>

                            <h2 className="text-2xl md:text-3xl font-bold mt-10 md:mt-12 mb-4">Who We Are</h2>
                            <p>Jadetimes Media LLC is a global media and publishing company operating across 30+ news and knowledge categories. Our academic arm includes the peer-reviewed Jadetimes Journal of Universal Studies, and our business verticals include flagship magazines that explore markets, innovation, and leadership. Our mission is to connect thinkers, creators, and change-makers through credible, accessible, and impactful content.</p>

                            <h2 className="text-2xl md:text-3xl font-bold mt-10 md:mt-12 mb-4">How to Join</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Submit your abstract/paper:</strong> via the JJUS/Jadetimes portals or QR submission on the conference page</li>
                                <li><strong>Conference page:</strong> jadetimes.com/international-research-conference-2025</li>
                                <li><strong>Journal info:</strong> jadetimes.com/jadetimes-journal-of-universal-studies</li>
                                <li><strong>General inquiries & partnerships:</strong> info@jadetimes.com</li>
                                <li><strong>Helpline:</strong> +1 (505) 385-9745</li>
                            </ul>
                        </main>

                    </div>
                </article>
            </div>
            {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={handleCloseVideo}
              className="absolute -top-1 -right-1 m-4 text-white text-4xl z-10"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-150"
              ></iframe>
            </div>
          </div>
        </div>
      )}
            {/* UPDATED FOOTER SECTION */}
                                <footer className="mb-22 pb-10 mt-8 pt-8">
                                    {/* Added max-w-5xl and mx-auto to align with article, fixed lg padding */}
                                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                        
                                        {/* 
                                          Mobile: flex-col (stack), items-center (center stack), gap-y-6 (space between stack)
                                          Desktop (sm+): sm:flex-row (side by side), sm:justify-between, sm:gap-y-0
                                        */}
                                        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 sm:gap-y-0">
                                            
                                            {/* SHARE and Icons Group */}
                                            {/* Mobile: space-x-4 (tighter spacing), w-full justify-center (ensure centering) */}
                                            {/* Desktop: sm:space-x-8 (original spacing), sm:w-auto sm:justify-start */}
                                            <div className="flex items-center space-x-4 sm:space-x-8 w-full justify-center sm:w-auto sm:justify-start">
                                                <span className="text-2xl font-semibold text-gray-600">SHARE</span>
                                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-pink-400 hover:text-black text-2xl transition-colors duration-300"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-pink-400 hover:text-black text-2xl transition-colors duration-300"><FontAwesomeIcon icon={faTwitter} /></a>
                                                <a href={`https://api.whatsapp.com/send?text=${window.location.href}`} data-action="share/whatsapp/share" aria-label="WhatsApp" className="text-pink-400 text-2xl hover:text-black transition-colors duration-300"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                                <button onClick={handleCopyLink} aria-label="Copy Link" className="text-pink-400 text-2xl hover:text-black transition-colors duration-300 relative">
                                                    <FontAwesomeIcon icon={faLink} />
                                                    {isCopied && (
                                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-2xl  px-2 py-1 rounded">
                                                            Copied!
                                                        </span>
                                                    )}
                                                </button>
                                            </div>
                        
                                            {/* BY JIU Section */}
                                            <div>
                                                <span className="text-2xl font-bold text-gray-600">BY JIU</span>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
        </div>
    );
};

export default CardsData5Article;