import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Thumbnail from '../../../../public/iconImg.webp';

const CardsData2Article = () => {
    const [isCopied, setIsCopied] = useState(false);

    // --- Social Media and SEO Data ---
    
    // NOTE: Accessing 'window' directly assumes this component only runs on the client.
    // This is fine for Create React App, but would need a check (e.g., typeof window !== 'undefined') in an SSR setup.
    const pageUrl = window.location.href;
    const pageTitle = "Jadetimes International University (JIU): Empowering Research and Innovation";
    const pageDescription = "Jadetimes started as a vision to unite creativity and knowledge. Explore how it evolved into a global ecosystem for research, education, and collaboration.";

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
                           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">The Story of Jadetimes: Empowering Research and Innovation</h1>
    
                            <p className="mt-8">Jadetimes began as a bold vision—to create a global platform where creativity, knowledge, and innovation could come together to shape the future. From its roots as a media and publishing initiative, Jadetimes has grown into a dynamic ecosystem that supports research, education, and international collaboration. Today, it stands not only as a media company but also as a trusted partner for scholars and professionals worldwide.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Building Academic Foundations: Jadetimes Universal Journal</h2>
                            <p>A major milestone in Jadetimes’ journey was the establishment of the Jadetimes Journal of Universal Studies (JJUS). Designed as an inclusive academic outlet, JJUS provides a transparent, peer-reviewed space for researchers across disciplines to share their findings with the world. The journal is committed to high ethical standards, diverse perspectives, and open access, ensuring that knowledge is not limited by borders.</p>
                            <p>Through JJUS, researchers gain:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>A global platform to publish their work and reach international audiences.</li>
                                <li>Credibility and recognition, backed by rigorous review processes.</li>
                                <li>Support for interdisciplinary work, bridging fields such as media, communication, technology, social sciences, and the arts.</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Jadetimes International Conference 2025</h2>
                            <p>Another landmark in Jadetimes’ history is the Jadetimes International Research Conference 2025, which became a hub for knowledge exchange and collaboration. The conference welcomed 65+ researchers from around the globe, each presenting original papers and engaging in dialogue with peers and industry leaders.</p>
                            <p>The conference provided:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Opportunities for networking among scholars, academics, and professionals.</li>
                                <li>Exposure for emerging voices, especially young researchers aiming to make their mark.</li>
                                <li>A stage for innovation, where new ideas and solutions were shared across disciplines.</li>
                            </ul>
                            <p>This event was not only about presentations—it was about building an international community that thrives on shared learning and collaborative growth.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">A Continuing Journey</h2>
                            <p>From publishing journals to organizing global conferences, Jadetimes has become a catalyst for academic and professional progress. By investing in platforms that nurture research, Jadetimes continues to strengthen its role as a bridge between academia, media, and industry.</p>
                            <p>Looking ahead, Jadetimes remains committed to empowering researchers, educators, and learners through its expanding initiatives—be it journals, conferences, or the educational programs offered under Jadetimes International University (JIU).</p>
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

export default CardsData2Article;