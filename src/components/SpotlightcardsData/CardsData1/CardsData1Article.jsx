import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Thumbnail from '../../../assets/Images/Thumbnail.webp';

const CardsData1Article = () => {
    const [isCopied, setIsCopied] = useState(false);

    // --- Social Media and SEO Data ---
    
    // NOTE: Accessing 'window' directly assumes this component only runs on the client.
    // This is fine for Create React App, but would need a check (e.g., typeof window !== 'undefined') in an SSR setup.
    const pageUrl = window.location.href;
    const pageTitle = "Jadetimes International University (JIU): Shaping the Future of Online Education";
    const pageDescription = "JIU provides world-class education through accessible, flexible, and innovative online learning, with internship opportunities at Jadetimes Media LLC.";

    // --- IMPROVEMENT 1: Absolute Image URL for SEO ---
        const imageUrl = new URL(Thumbnail, window.location.origin).href;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(pageUrl);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000); // Reset the copied state after 2 seconds
    };

    return (
        <div className="font-sans">
            {/* --- Add Helmet for SEO and Social Media Previews --- */}
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={imageUrl} /> {/* Uses the new absolute URL */}

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={pageUrl} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={imageUrl} /> {/* Uses the new absolute URL */}
            </Helmet>
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <article>
                    <div className="p-2 sm:p-2">
                        {/* Article */}
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
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 sm:gap-y-0">
                        
                        {/* SHARE and Icons Group */}
                        <div className="flex items-center space-x-4 sm:space-x-8 w-full justify-center sm:w-auto sm:justify-start">
                            <span className="text-2xl font-semibold text-gray-600">SHARE</span>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-pink-400 hover:text-black text-2xl transition-colors duration-300"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-pink-400 hover:text-black text-2xl transition-colors duration-300"><FontAwesomeIcon icon={faTwitter} /></a>
                            
                            {/* --- IMPROVEMENT 2: Enhanced WhatsApp Link --- */}
                            <a 
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle)} - ${encodeURIComponent(pageUrl)}`} 
                                data-action="share/whatsapp/share" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="WhatsApp" 
                                className="text-pink-400 text-2xl hover:text-black transition-colors duration-300"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                            
                            <button onClick={handleCopyLink} aria-label="Copy Link" className="text-pink-400 text-2xl hover:text-black transition-colors duration-300 relative">
                                <FontAwesomeIcon icon={faLink} />
                                {isCopied && (
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded">
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

export default CardsData1Article;