import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter,  faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const CardsData4Article = () => {
    const [isCopied, setIsCopied] = useState(false);
        
            const handleCopyLink = () => {
                 navigator.clipboard.writeText(window.location.href);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000); // Reset the copied state after 2 seconds
        }

    return (
        <div className="font-sans">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <article className="">

                    <div className="p-2 sm:p-2">
                          {/* Articale */}
                        <main className="prose max-w-none text-gray-800 text-xl leading-relaxed">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Jadetimes International University Partners with Special Graphics LLC for Advanced Graphic Design Education</h1>
                            <p className="text-center text-lg text-gray-600 mb-8">New Mexico, USA – September 30, 2025</p>

                            <p>In a groundbreaking development, Jadetimes International University (JIU) has officially entered into an academic affiliation with Special Graphics LLC, United States, a move that will revolutionize the way students learn professional graphic design. The partnership comes shortly after Geeth Roman, President of JIU, increased his shareholding in Special Graphics to 74%, becoming the new Chairman of the company.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Geeth Roman: From Educator to Industry Leader</h2>
                            <p>Geeth Roman, already recognized as a creative force and academic visionary, recently raised his stake in Special Graphics from 35% to 74% by acquiring an additional 39% for USD 54,500. This bold move cemented his authority as Chairman, enabling him to align Special Graphics’ global design leadership with his academic vision at JIU.</p>
                            <p>“By leading both JIU and Special Graphics, I want to bridge the gap between academia and industry,” said Roman. “This affiliation ensures students learn from the very best in the design world.”</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">The Affiliation Agreement</h2>
                            <p>Under this new agreement, Special Graphics LLC has become the main design partner of JIU and will provide Advanced Level Graphic Design Courses through the university’s online learning platform. These programs are designed to reflect industry realities, ensuring students not only acquire technical knowledge but also gain first-hand exposure to how global design agencies operate.</p>
                            <p>Students will benefit from:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Access to Special Graphics’ expertise in logo design, branding, packaging, advertising, and digital design.</li>
                                <li>Hands-on learning experiences curated by the same team that has completed more than 15,000 global projects.</li>
                                <li>Direct mentorship opportunities with Special Graphics’ creative professionals.</li>
                                <li>Industry-linked internships, connecting academic learning to real-world design practice.</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Why This Matters for JIU Students</h2>
                            <p>This affiliation marks a significant milestone for JIU. By integrating Special Graphics’ cutting-edge design expertise into the curriculum, JIU students will gain a competitive advantage in the professional marketplace. Courses will be structured as 8-session programs over one month, offered in both live lecture and pre-recorded formats, allowing flexibility for global learners.</p>
                            <p>Through this partnership, students will also be exposed to the operational and creative culture of Special Graphics, widely recognized as one of the world’s leading professional graphic design platforms, rivaling global giants like Pentagram and Wolff Olins.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Special Graphics: A Global Design Powerhouse</h2>
                            <p>Founded in Sri Lanka in 2014 and now headquartered in the United States, Special Graphics has established itself as a top-tier design company, offering services in logo & brand identity, web & app design, packaging, marketing, merchandise, publishing, and advanced illustration. With over 15,000 successful projects delivered worldwide, its affiliation with JIU signals a new era where education and industry collaborate seamlessly.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Looking Ahead</h2>
                            <p>This partnership reflects the shared vision of Geeth Roman as President of JIU and Chairman of Special Graphics LLC—to provide students with world-class education backed by global industry practice. With Special Graphics as the official design partner, JIU strengthens its mission to deliver practical, career-ready programs that shape tomorrow’s creative leaders.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Contact Information</h2>
                            <ul className="list-none space-y-2">
                                <li><strong>JIU University:</strong> info@jadetimesuniversity.com | www.jadetimesuniversity.com</li>
                                <li><strong>Special Graphics LLC:</strong> info@specialgraphics.us | www.specialgraphics.us</li>
                            </ul>
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

export default CardsData4Article;