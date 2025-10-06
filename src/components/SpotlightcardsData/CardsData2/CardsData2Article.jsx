import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const CardsData2Article = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyLink = () => {
         navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
        setIsCopied(false);
    }, 2000); // Reset the copied state after 2 seconds
};

    return (
        <div className="font-sans">
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
                        <a href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-pink-400 hover:text-black text-2xl transition-colors duration-300"><FontAwesomeIcon icon={faPinterest} /></a>
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

export default CardsData2Article;