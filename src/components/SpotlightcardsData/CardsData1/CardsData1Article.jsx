import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ArticleContent from './ArticleContent';

const CardsData1Article = () => {
    const [isCopied, setIsCopied] = useState(false);

    // --- Social Media and SEO Data ---
    const pageUrl = window.location.href;
    const pageTitle = "Jadetimes International University (JIU): Shaping the Future of Online Education";
    const pageDescription = "JIU provides world-class education through accessible, flexible, and innovative online learning, with internship opportunities at Jadetimes Media LLC.";

    const handleCopyLink = () => {
        navigator.clipboard.writeText(pageUrl);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000); // Reset the copied state after 2 seconds
    };

    useEffect(() => {
        document.title = pageTitle;

        const setMetaTag = (name, content) => {
            let tag = document.querySelector(`meta[name='${name}']`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('name', name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        const setOgTag = (property, content) => {
            let tag = document.querySelector(`meta[property='${property}']`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        setMetaTag('description', pageDescription);
        
        setOgTag('og:type', 'article');
        setOgTag('og:url', pageUrl);
        setOgTag('og:title', pageTitle);
        setOgTag('og:description', pageDescription);
        setOgTag('og:image', 'https://www.jadetimesuniversity.com/iconImg.webp');

        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:url', pageUrl);
        setMetaTag('twitter:title', pageTitle);
        setMetaTag('twitter:description', pageDescription);
        setMetaTag('twitter:image', 'https://www.jadetimesuniversity.com/iconImg.webp');

    }, [pageTitle, pageDescription, pageUrl]);

    return (
        <div className="font-sans">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <ArticleContent />
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