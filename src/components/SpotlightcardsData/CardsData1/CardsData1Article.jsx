import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faSnapchatGhost, faPinterest } from '@fortawesome/free-brands-svg-icons';


const CardsData1Article = () => {

    return (
        <div className="font-sans">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <article className="">

                    <div className="p-2 sm:p-2">
                            {/* Articale */}
                        <main className="prose max-w-none text-gray-800 text-xl leading-relaxed">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Jadetimes International University (JIU): Shaping the Future of Online Education</h1>
                            
                            <p className="mt-8">Jadetimes International University (JIU) is built on a clear mission: to provide world-class education to students across the globe through accessible, flexible, and innovative online learning. At JIU, we understand that students deserve courses that are structured, professional, and practical, without the barriers often associated with online education. That’s why we have designed our programs to ensure that every learner receives a perfect online learning experience, free of unnecessary complications.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Two Modes of Learning</h2>
                            <p>To match the diverse needs of our students, JIU offers two distinct learning pathways:</p>
                            <ol className="list-decimal list-inside space-y-2">
                                <li><strong>Live Lecture Option</strong> – Students can join interactive live sessions with instructors, allowing for real-time engagement, discussions, and personalized feedback.</li>
                                <li><strong>Pre-Recorded Videos Option</strong> – For students who prefer flexibility, pre-recorded sessions are available, so they can learn at their own pace while still enjoying the same high-quality content.</li>
                            </ol>
                            <p className="mt-4">Each course is carefully structured into 8 sessions spread across 1 month, providing a balance of intensity and depth while fitting into the schedules of busy learners.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Areas of Study</h2>
                            <p>JIU offers an extensive range of areas of study, enabling students to follow their passions and align their education with career goals. Our curriculum spans both creative and technical disciplines, including:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Film</li>
                                <li>Media Arts</li>
                                <li>Performing Arts</li>
                                <li>Creative Expression</li>
                                <li>Journalism</li>
                                <li>Communication</li>
                                <li>Digital Media</li>
                                <li>Technology</li>
                                <li>Interactive Media</li>
                                <li>Entertainment Media</li>
                                <li>Psychology</li>
                                <li>Human Behavior</li>
                                <li>Marketing</li>
                            </ul>
                            <p className="mt-4">These areas reflect the dynamic nature of the modern professional world, combining creativity, critical thinking, and technical expertise.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Career-Driven Learning with Internship Opportunities</h2>
                            <p>What sets JIU apart is its strong connection to the professional industry. Upon completing their courses, students gain exclusive opportunities for internships with Jadetimes Media LLC, a leading USA-based media company. This ensures that learning doesn’t stop at theory; students can directly apply their knowledge in real-world projects, strengthening their portfolios and careers.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Commitment to Student Success</h2>
                            <p>At JIU, student success is the center of everything we do. From streamlined course access to comprehensive support systems, our programs are designed to eliminate obstacles and focus on effective, enjoyable learning. With global accessibility, flexible pathways, and career-linked opportunities, JIU is redefining what it means to study online.</p>
                        </main>

                    </div>
                </article>
            </div>

            {/* UPDATED FOOTER SECTION */}
            <footer className="mb-22 pb-8 mt-8 pt-8">
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
                            <span className="text-xl font-semibold text-gray-600">SHARE</span>
                            <a href="#" aria-label="Facebook" className="text-pink-400 hover:text-black transition-colors duration-300"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" aria-label="Twitter" className="text-pink-400 hover:text-black transition-colors duration-300"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#" aria-label="Snapchat" className="text-pink-400 hover:text-black transition-colors duration-300"><FontAwesomeIcon icon={faSnapchatGhost} /></a>
                            <a href="#" aria-label="Pinterest" className="text-pink-400 hover:text-black transition-colors duration-300"><FontAwesomeIcon icon={faPinterest} /></a>
                            <a href="#" aria-label="Copy Link" className="text-pink-400 hover:text-black transition-colors duration-300"><FontAwesomeIcon icon={faLink} /></a>
                        </div>

                        {/* BY NYFA Section */}
                        <div>
                            <span className="text-sm font-bold text-gray-600">BY NYFA</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CardsData1Article;