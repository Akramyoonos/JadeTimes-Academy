import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter,  faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Thumbnail from '../../../../public/iconImg.webp';


const CardsData3Article = () => {

    const [isCopied, setIsCopied] = useState(false);

    // --- Social Media and SEO Data ---
    const pageUrl = window.location.href;
    const pageTitle = "Jadetimes Journal of Universal Studies (JJUS): Advancing Knowledge Across Borders";
    const pageDescription = "The Jadetimes Journal of Universal Studies (JJUS) is a peer-reviewed, multidisciplinary academic platform dedicated to advancing knowledge across a wide spectrum of disciplines.";
        const imageUrl = new URL(Thumbnail, window.location.origin).href;
    
        const handleCopyLink = () => {
             navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000); // Reset the copied state after 2 seconds
    };

    useEffect(() => {
        document.title = pageTitle;
        const metaDescriptionTag = document.querySelector('meta[name="description"]');
        if (metaDescriptionTag) {
            metaDescriptionTag.setAttribute('content', pageDescription);
        } else {
            const newMetaTag = document.createElement('meta');
            newMetaTag.name = 'description';
            newMetaTag.content = pageDescription;
            document.head.appendChild(newMetaTag);
        }

        // Open Graph / Facebook
        const ogTypeTag = document.querySelector('meta[property="og:type"]');
        if (ogTypeTag) ogTypeTag.setAttribute('content', 'article');
        else { const newMetaTag = document.createElement('meta'); newMetaTag.property = 'og:type'; newMetaTag.content = 'article'; document.head.appendChild(newMetaTag); }

        const ogUrlTag = document.querySelector('meta[property="og:url"]');
        if (ogUrlTag) ogUrlTag.setAttribute('content', pageUrl);
        else { const newMetaTag = document.createElement('meta'); newMetaTag.property = 'og:url'; newMetaTag.content = pageUrl; document.head.appendChild(newMetaTag); }

        const ogTitleTag = document.querySelector('meta[property="og:title"]');
        if (ogTitleTag) ogTitleTag.setAttribute('content', pageTitle);
        else { const newMetaTag = document.createElement('meta'); newMetaTag.property = 'og:title'; newMetaTag.content = pageTitle; document.head.appendChild(newMetaTag); }

        const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
        if (ogDescriptionTag) ogDescriptionTag.setAttribute('content', pageDescription);
        else { const newMetaTag = document.createElement('meta'); newMetaTag.property = 'og:description'; newMetaTag.content = pageDescription; document.head.appendChild(newMetaTag); }

        const ogImageTag = document.querySelector('meta[property="og:image"]');
        if (ogImageTag) ogImageTag.setAttribute('content', imageUrl);
        else { const newMetaTag = document.createElement('meta'); newMetaTag.property = 'og:image'; newMetaTag.content = imageUrl; document.head.appendChild(newMetaTag); }

        // Twitter
        const twitterCardTag = document.querySelector('meta[name="twitter:card"]');
        if (twitterCardTag) twitterCardTag.setAttribute('content', 'summary_large_image');
        else { const newMetaTag = document.createElement('meta'); newMetaTag.name = 'twitter:card'; newMetaTag.content = 'summary_large_image'; document.head.appendChild(newMetaTag); }

        const twitterUrlTag = document.querySelector('meta[name="twitter:url"]');
        if (twitterUrlTag) twitterUrlTag.setAttribute('content', pageUrl);
        else { const newMetaTag = document.createElement('meta'); newMetaTag.name = 'twitter:url'; newMetaTag.content = pageUrl; document.head.appendChild(newMetaTag); }

        const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitleTag) twitterTitleTag.setAttribute('content', pageTitle);
        else { const newMetaTag = document.createElement('meta'); newMetaTag.name = 'twitter:title'; newMetaTag.content = pageTitle; document.head.appendChild(newMetaTag); }

        const twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescriptionTag) twitterDescriptionTag.setAttribute('content', pageDescription);
        else { const newMetaTag = document.createElement('meta'); newMetaTag.name = 'twitter:description'; newMetaTag.content = pageDescription; document.head.appendChild(newMetaTag); }

        const twitterImageTag = document.querySelector('meta[name="twitter:image"]');
        if (twitterImageTag) twitterImageTag.setAttribute('content', imageUrl);
        else { const newMetaTag = document.createElement('meta'); newMetaTag.name = 'twitter:image'; newMetaTag.content = imageUrl; document.head.appendChild(newMetaTag); }

    }, [pageTitle, pageDescription, pageUrl, imageUrl]);

    return (
        <div className="font-sans">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <article className="">

                    <div className="p-2 sm:p-2">
                           {/* Articale */}
                        <main className="prose max-w-none text-gray-800 text-xl leading-relaxed">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Jadetimes Journal of Universal Studies (JJUS): Advancing Knowledge Across Borders</h1>
                            <p className="text-center text-lg text-gray-600">Volume 1, Issue 2 | E-ISSN 3066-9421</p>
                            <p className="text-center">
                                <a href="https://portal.issn.org/resource/ISSN/3066-9421" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Verify our ISSN on the ISSN Portal
                                </a>
                            </p>
                            
                            <p className="mt-8">The Jadetimes Journal of Universal Studies (JJUS) is a peer-reviewed, multidisciplinary academic platform dedicated to advancing knowledge across a wide spectrum of disciplines. Founded under the vision of Jadetimes Media LLC (USA), the journal is committed to creating an open, inclusive, and credible environment for researchers, educators, and professionals to share their work with global audiences.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Our Mission</h2>
                            <p>At JJUS, our mission is to foster the global dissemination of high-quality research by offering a platform that supports intellectual innovation and cross-disciplinary dialogue. We aim to:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Inspire groundbreaking discoveries and solutions.</li>
                                <li>Promote collaboration between diverse academic fields.</li>
                                <li>Contribute to the professional growth of scholars and practitioners worldwide.</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Scope of Research</h2>
                            <p>JJUS publishes original research, case studies, surveys, reviews, and academic discourse across a broad set of fields, including but not limited to:</p>
                             <ul className="list-disc list-inside space-y-2">
                                <li><strong>Business and Economics</strong> – Entrepreneurship, market trends, global business practices.</li>
                                <li><strong>Education</strong> – Pedagogical innovations, e-learning, curriculum design.</li>
                                <li><strong>Health and Medicine</strong> – Public health, preventive medicine, healthcare management.</li>
                                <li><strong>Journalism and Media Studies</strong> – Media ethics, communication strategies, digital journalism.</li>
                                <li><strong>Social Sciences</strong> – Sociology, anthropology, policy, and cultural studies.</li>
                                <li><strong>Technology and Engineering</strong> – Artificial intelligence, sustainable engineering, software development.</li>
                                <li><strong>Arts and Humanities</strong> – Literature, history, philosophy, performing arts, and cultural studies.</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Publication Process</h2>
                             <ul className="list-disc list-inside space-y-2">
                                <li><strong>Quarterly Issues</strong> – JJUS releases four issues annually (March, June, September, December).</li>
                                <li><strong>Rigorous Peer Review</strong> – Submissions are reviewed by distinguished academics and professionals from the global editorial board.</li>
                                <li><strong>Constructive Feedback</strong> – Authors receive guidance aimed at improving and enhancing the quality of their work.</li>
                                <li><strong>Global Reach</strong> – Online accessibility ensures that published works are widely available to international researchers and institutions.</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Editorial Board Excellence</h2>
                            <p>The strength of JJUS lies in its diverse and highly qualified editorial board, comprised of distinguished researchers, professors, and professionals from the USA, India, Nigeria, Kenya, and the Philippines. Notable members include:</p>
                             <ul className="list-disc list-inside space-y-2">
                                <li>Dr. Jaime Geronimo Vela, Senior Researcher, USA</li>
                                <li>Dr. Ehi Iden, Senior Researcher, Nigeria</li>
                                <li>Dr. Antony Mbithi, Senior Researcher, Kenya</li>
                                <li>Dr. Keith Nester A. Lavin, Senior Researcher, Philippines</li>
                                <li>Dr. Francois Phopho, Senior Researcher, USA</li>
                                <li>Dr. Rachel Wolford, Senior Researcher, USA</li>
                                <li>Dr. Roderick Mann, Assistant Professor, USA</li>
                                <li>Dr. Akash Deep Muni, Dean & Assistant Professor, India</li>
                                <li>Dr. Amresh Kumar Gauda, Assistant Professor, India</li>
                                <li>Dr. Anand Joshi, Professor, India</li>
                                <li>Dr. Rekha, HOD & Professor, India</li>
                                <li>Dr. Rajan Miglani, HOD & Professor, India</li>
                                <li>Dr. Sugandha Shekhar, Assistant Professor, India</li>
                            </ul>
                            <p className="mt-4">Together, this board ensures editorial excellence, intellectual diversity, and global credibility.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Opportunities for Authors</h2>
                            <p>JJUS invites scholars, practitioners, and emerging researchers to contribute their work and join a thriving academic community. The journal offers:</p>
                             <ul className="list-disc list-inside space-y-2">
                                <li>Recognition and credibility by publishing in a reputed international outlet.</li>
                                <li>Interdisciplinary collaboration by encouraging diverse perspectives.</li>
                                <li>Copyright protection ensuring contributors retain the integrity of their intellectual property.</li>
                                <li>Global visibility through online access and planned indexing in renowned academic databases.</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Announcements & Upcoming Initiatives</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Call for Papers</strong> – Submissions for the next issue are currently open. Deadline: March 25.</li>
                                <li><strong>Upcoming Issue Release</strong> – The next edition will be published in June.</li>
                                <li><strong>Workshops for Authors</strong> – Online sessions on research writing and manuscript preparation are regularly organized to support contributors.</li>
                                <li><strong>Indexing Progress</strong> – JJUS is actively pursuing indexing in leading academic databases for enhanced global reach.</li>
                            </ul>

                            <hr className="my-8 border-gray-300" />
                            
                            <h2 className="text-3xl font-bold mt-12 mb-4">Conclusion</h2>
                            <p>The Jadetimes Journal of Universal Studies (JJUS) is more than a publication, it is a global academic community that values innovation, credibility, and excellence. With a strong editorial foundation, multidisciplinary approach, and a commitment to fostering collaboration, JJUS is poised to become a hub of scholarly exchange for years to come.</p>
                            
                            <p className="mt-8 font-semibold">
                                🔗 To learn more or submit your manuscript, visit <a href="mailto:info@jadetimes.com" className="text-blue-600 hover:underline">info@jadetimes.com</a>.
                            </p>
                        </main>

                    </div>
                </article>
            </div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <article className="">

                    <div className="p-2 sm:p-2">
                           {/* Articale */}
                        <main className="prose max-w-none text-gray-800 text-xl leading-relaxed">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Jadetimes Journal of Universal Studies (JJUS): Advancing Knowledge Across Borders</h1>
                            <p className="text-center text-lg text-gray-600">Volume 1, Issue 2 | E-ISSN 3066-9421</p>
                            <p className="text-center">
                                <a href="https://portal.issn.org/resource/ISSN/3066-9421" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Verify our ISSN on the ISSN Portal
                                </a>
                            </p>
                            
                            <p className="mt-8">The Jadetimes Journal of Universal Studies (JJUS) is a peer-reviewed, multidisciplinary academic platform dedicated to advancing knowledge across a wide spectrum of disciplines. Founded under the vision of Jadetimes Media LLC (USA), the journal is committed to creating an open, inclusive, and credible environment for researchers, educators, and professionals to share their work with global audiences.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Our Mission</h2>
                            <p>At JJUS, our mission is to foster the global dissemination of high-quality research by offering a platform that supports intellectual innovation and cross-disciplinary dialogue. We aim to:</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Inspire groundbreaking discoveries and solutions.</li>
                                <li>Promote collaboration between diverse academic fields.</li>
                                <li>Contribute to the professional growth of scholars and practitioners worldwide.</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Scope of Research</h2>
                            <p>JJUS publishes original research, case studies, surveys, reviews, and academic discourse across a broad set of fields, including but not limited to:</p>
                             <ul className="list-disc list-inside space-y-2">
                                <li><strong>Business and Economics</strong> – Entrepreneurship, market trends, global business practices.</li>
                                <li><strong>Education</strong> – Pedagogical innovations, e-learning, curriculum design.</li>
                                <li><strong>Health and Medicine</strong> – Public health, preventive medicine, healthcare management.</li>
                                <li><strong>Journalism and Media Studies</strong> – Media ethics, communication strategies, digital journalism.</li>
                                <li><strong>Social Sciences</strong> – Sociology, anthropology, policy, and cultural studies.</li>
                                <li><strong>Technology and Engineering</strong> – Artificial intelligence, sustainable engineering, software development.</li>
                                <li><strong>Arts and Humanities</strong> – Literature, history, philosophy, performing arts, and cultural studies.</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Publication Process</h2>
                             <ul className="list-disc list-inside space-y-2">
                                <li><strong>Quarterly Issues</strong> – JJUS releases four issues annually (March, June, September, December).</li>
                                <li><strong>Rigorous Peer Review</strong> – Submissions are reviewed by distinguished academics and professionals from the global editorial board.</li>
                                <li><strong>Constructive Feedback</strong> – Authors receive guidance aimed at improving and enhancing the quality of their work.</li>
                                <li><strong>Global Reach</strong> – Online accessibility ensures that published works are widely available to international researchers and institutions.</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Editorial Board Excellence</h2>
                            <p>The strength of JJUS lies in its diverse and highly qualified editorial board, comprised of distinguished researchers, professors, and professionals from the USA, India, Nigeria, Kenya, and the Philippines. Notable members include:</p>
                             <ul className="list-disc list-inside space-y-2">
                                <li>Dr. Jaime Geronimo Vela, Senior Researcher, USA</li>
                                <li>Dr. Ehi Iden, Senior Researcher, Nigeria</li>
                                <li>Dr. Antony Mbithi, Senior Researcher, Kenya</li>
                                <li>Dr. Keith Nester A. Lavin, Senior Researcher, Philippines</li>
                                <li>Dr. Francois Phopho, Senior Researcher, USA</li>
                                <li>Dr. Rachel Wolford, Senior Researcher, USA</li>
                                <li>Dr. Roderick Mann, Assistant Professor, USA</li>
                                <li>Dr. Akash Deep Muni, Dean & Assistant Professor, India</li>
                                <li>Dr. Amresh Kumar Gauda, Assistant Professor, India</li>
                                <li>Dr. Anand Joshi, Professor, India</li>
                                <li>Dr. Rekha, HOD & Professor, India</li>
                                <li>Dr. Rajan Miglani, HOD & Professor, India</li>
                                <li>Dr. Sugandha Shekhar, Assistant Professor, India</li>
                            </ul>
                            <p className="mt-4">Together, this board ensures editorial excellence, intellectual diversity, and global credibility.</p>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Opportunities for Authors</h2>
                            <p>JJUS invites scholars, practitioners, and emerging researchers to contribute their work and join a thriving academic community. The journal offers:</p>
                             <ul className="list-disc list-inside space-y-2">
                                <li>Recognition and credibility by publishing in a reputed international outlet.</li>
                                <li>Interdisciplinary collaboration by encouraging diverse perspectives.</li>
                                <li>Copyright protection ensuring contributors retain the integrity of their intellectual property.</li>
                                <li>Global visibility through online access and planned indexing in renowned academic databases.</li>
                            </ul>

                            <h2 className="text-3xl font-bold mt-12 mb-4">Announcements & Upcoming Initiatives</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Call for Papers</strong> – Submissions for the next issue are currently open. Deadline: March 25.</li>
                                <li><strong>Upcoming Issue Release</strong> – The next edition will be published in June.</li>
                                <li><strong>Workshops for Authors</strong> – Online sessions on research writing and manuscript preparation are regularly organized to support contributors.</li>
                                <li><strong>Indexing Progress</strong> – JJUS is actively pursuing indexing in leading academic databases for enhanced global reach.</li>
                            </ul>

                            <hr className="my-8 border-gray-300" />
                            
                            <h2 className="text-3xl font-bold mt-12 mb-4">Conclusion</h2>
                            <p>The Jadetimes Journal of Universal Studies (JJUS) is more than a publication, it is a global academic community that values innovation, credibility, and excellence. With a strong editorial foundation, multidisciplinary approach, and a commitment to fostering collaboration, JJUS is poised to become a hub of scholarly exchange for years to come.</p>
                            
                            <p className="mt-8 font-semibold">
                                🔗 To learn more or submit your manuscript, visit <a href="mailto:info@jadetimes.com" className="text-blue-600 hover:underline">info@jadetimes.com</a>.
                            </p>
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
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 sm:-y-0">
                                
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

export default CardsData3Article;