import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faSnapchatGhost, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Import images directly
import articleImage1 from '../../../assets/Images/CardsData6Article1.webp';
import articleImage2 from '../../../assets/Images/CardsData6Article2.webp';
import articleImage3 from '../../../assets/Images/CardsData6Article3.webp';


const CardsData1Article = () => {
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
                            <h1 className="text-3xl sm:text-4xl font-bold mb-4">From Classroom to Career: How Jadetimes University Launches Students Into Industry</h1>
                            <p className="mb-6">Jadetimes International University (JIU) was built to do one thing exceptionally well: take motivated learners and make them industry-ready. Our one-month, 8-session courses (offered in live lecture and pre-recorded modes) are tightly connected to real work—so that when you finish a course, you’re not guessing what comes next. You move straight into practice.</p>

                            {/* --- IMAGE 1 (RESPONSIVE) --- */}
                            <img
                                src={articleImage1}
                                alt="Jadetimes University students collaborating in a modern classroom setting."
                                className="w-full aspect-video object-cover my-8 rounded-lg shadow-md"
                            />

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">The Jadetimes Pathway™ (Course → Internship → Career)</h2>
                            <ol className="list-decimal pl-5 mb-6">
                                <li className="mb-2">
                                    <strong>Finish your JIU course</strong>
                                    <ul className="list-disc pl-5 mt-2">
                                        <li>Structured 8 sessions over 1 month</li>
                                        <li>Choice of Live or Pre-Recorded learning</li>
                                        <li>Practical briefs and portfolio-grade assignments</li>
                                    </ul>
                                </li>
                                <li className="mb-2">
                                    <strong>Direct Internship Gateway</strong>
                                    <ul className="list-disc pl-5 mt-2">
                                        <li>Upon course completion, students can apply immediately to the Jadetimes Media LLC Internship Program (USA)—no waiting cycles, no extra exams.</li>
                                        <li>Tracks include: Journalism & Media, Digital & Social Content, Design & Branding, Marketing & Growth, Research & Editorial, and Tech-for-Media.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Industry Launch & Global Validity</strong>
                                    <ul className="list-disc pl-5 mt-2">
                                        <li>After completing the internship, Jadetimes issues an Industry Readiness Certificate and a Skills & Outcomes Report that validates your employability for roles anywhere in the world.</li>
                                        <li>This documentation is designed for global HR teams and hiring managers, clearly mapping your deliverables, tools mastered, and real-world impact.</li>
                                    </ul>
                                </li>
                            </ol>

                            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">What “validity” means at Jadetimes</h3>
                            <p className="mb-6">Jadetimes Media LLC provides an official confirmation of training and internship performance—recognized by partners and employers worldwide—so you can confidently apply to any company globally with a verified, skill-based record of achievement.</p>

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">What You’ll Do During the Internship</h2>
                            <ul className="list-disc pl-5 mb-6">
                                <li>Work on live projects: newsroom packages, brand campaigns, multimedia stories, design sprints, research digests.</li>
                                <li>Collaborate in real teams: editors, producers, art directors, PMs, marketers, and data analysts.</li>
                                <li>Ship portfolio-ready work: published articles, on-air/online segments, brand mockups, motion assets, UX/UI artifacts, analytics reports.</li>
                                <li>Master pro tools: editorial CMS, AI-assisted content workflows, Adobe CC/Figma, marketing analytics, newsroom coordination stacks, and production pipelines.</li>
                                <li>Get mentored: weekly critique circles, office hours with senior staff, and a capstone review panel.</li>
                            </ul>

                            {/* --- IMAGE 2 (RESPONSIVE) --- */}
                            <img
                                src={articleImage2}
                                alt="An intern working on a live media project at Jadetimes Media LLC."
                                className="w-full aspect-video object-cover my-8 rounded-lg shadow-md"
                            />

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">What You Receive at the Finish Line</h2>
                            <ul className="list-disc pl-5 mb-6">
                                <li><strong>Jadetimes Internship Certificate (USA):</strong> Formal, verifiable proof of practical training with a U.S. media company.</li>
                                <li><strong>Skills & Outcomes Report:</strong> A detailed document listing tools, methods, KPIs, and links to shipped work—built to be recruiter-friendly.</li>
                                <li><strong>Portfolio & LinkedIn Pack:</strong> Curated clips/screens, approved work samples, achievement bullets, and role-ready summaries you can paste into applications.</li>
                                <li><strong>Global Employability Validation:</strong> A Jadetimes-issued statement confirming that your training meets industry standards and supports eligibility to work with any employer worldwide (subject to local hiring and visa rules).</li>
                                <li><strong>References on Request:</strong> Manager/supervisor references for strong performers.</li>
                            </ul>

                            <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">Placement Support You Can Actually Use</h2>
                            <ul className="list-disc pl-5 mb-6">
                                <li><strong>Career Clinics:</strong> resume, LinkedIn, and portfolio audits.</li>
                                <li><strong>Interview Rehearsals:</strong> role-play for newsroom, agency, and brand-side interviews.</li>
                                <li><strong>Job Signal Board:</strong> curated roles from Jadetimes’ network (media, agencies, startups, NGOs, and global brands).</li>
                                <li><strong>Alumni Network:</strong> tap into cross-border mentors and hiring referrals.</li>
                            </ul>

                            <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Who Can Apply</h3>
                            <ul className="list-disc pl-5 mb-6">
                                <li>All JIU graduates who complete their 1-month course and final project.</li>
                                <li>Stand-out applicants may receive priority placement based on portfolio strength, discipline fit, and project scores.</li>
                            </ul>

                             <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">How to Apply (Fast)</h3>
                             <ol className="list-decimal pl-5 mb-6">
                                 <li>Finish your JIU course and final project.</li>
                                 <li>Submit the CV to Jadetimes.com (you’ll receive the link on course completion).</li>
                                 <li>Upload your portfolio (course capstone + any prior work).</li>
                                 <li>Select your preferred track and availability window.</li>
                                 <li>Receive your placement confirmation and onboarding pack.</li>
                             </ol>

                             {/* --- IMAGE 3 (RESPONSIVE) --- */}
                            <img
                                src={articleImage3}
                                alt="A recent Jadetimes University graduate confidently entering the job market."
                                className="w-full aspect-video object-cover my-8 rounded-lg shadow-md"
                            />

                             <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Why Employers Like Jadetimes Interns</h3>
                             <ul className="list-disc pl-5 mb-6">
                                 <li>They’ve shipped real work to deadlines.</li>
                                 <li>They understand editorial standards, brand systems, and compliance.</li>
                                 <li>They can collaborate across functions and use modern tooling.</li>
                                 <li>They arrive with a clear proof-of-work record (not just a certificate).</li>
                             </ul>

                             <h2 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4">The Promise</h2>
                             <p className="mb-6">Jadetimes University doesn’t end at a certificate. We open the door to a U.S.-based internship at Jadetimes Media LLC, then back you with verifiable documentation that travels with you—so you can confidently pursue roles at any company worldwide. That’s the Jadetimes difference: education that becomes employment power.</p>

                             <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">Questions or ready to apply?</h3>
                             <ul className="list-none mb-6">
                                 <li><strong>JIU Admissions:</strong> info@jadetimesuniversity.com</li>
                                 <li><strong>Jadetimes Media Internship Desk:</strong> Hr@jadetimes.com</li>
                             </ul>

                             <p className="text-sm italic text-gray-600">Note: Employment outcomes depend on individual performance, role availability, and local hiring/visa requirements. Jadetimes provides global validity of training and internship completion through official documentation and employer-ready records.</p>
                        </main>
                    </div>
                </article>
            </div>

            {/* --- FULLY RESPONSIVE FOOTER --- */}
            <footer className="pb-16 mt-8 pt-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/*
                      Container for footer content.
                      - Mobile: Stacks items vertically (`flex-col`), centers them (`items-center`), and adds space between them (`gap-y-6`).
                      - Desktop (`sm` and up): Arranges items in a row (`sm:flex-row`), distributes space between them (`sm:justify-between`), and removes the vertical gap (`sm:gap-y-0`).
                    */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 sm:gap-y-0">

                        {/*
                          Social media sharing group.
                          - Mobile: Takes full width (`w-full`) to center its content (`justify-center`) with tighter icon spacing (`space-x-4`).
                          - Desktop (`sm` and up): Width is automatic (`sm:w-auto`), content is aligned left (`sm:justify-start`), and icon spacing increases (`sm:space-x-8`).
                        */}
                        <div className="flex items-center space-x-4 sm:space-x-8 w-full justify-center sm:w-auto sm:justify-start">
                                                    <span className="text-2xl font-semibold text-gray-600">SHARE</span>
                                                    <a href="#" aria-label="Facebook" className="text-pink-400 hover:text-black text-2xl transition-colors duration-300"><FontAwesomeIcon icon={faFacebookF} /></a>
                                                    <a href="#" aria-label="Twitter" className="text-pink-400 hover:text-black text-2xl transition-colors duration-300"><FontAwesomeIcon icon={faTwitter} /></a>
                                                    <a href="#" aria-label="Snapchat" className="text-pink-400 hover:text-black text-2xl transition-colors duration-300"><FontAwesomeIcon icon={faSnapchatGhost} /></a>
                                                    <a href="#" aria-label="Pinterest" className="text-pink-400 hover:text-black text-2xl transition-colors duration-300"><FontAwesomeIcon icon={faPinterest} /></a>
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

                        {/* Author section */}
                        <div>
                            <span className="text-xl font-bold text-gray-600">BY JIU</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CardsData1Article;