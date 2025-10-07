import React from 'react';

const PrivacyPolicyDetail = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-18 lg:py-28">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-3/4 pr-8">
                    <div className="flex items-center mb-8">
                        <span className="w-1.5 h-16 bg-purple-600 mr-4"></span>
                        <h1 className="text-3xl font-light">Privacy Policy</h1>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-light mb-4">Privacy Policy – Jadetimes International University (JIU)</h2>
                            <h3 className="text-xl font-semibold mb-2">Introduction</h3>
                            <p className="text-gray-700">Jadetimes International University (JIU) values the privacy of all students, applicants, instructors, and website visitors. This Privacy Policy explains how we collect, use, and protect your personal information when you engage with our online learning platform, register for courses, or communicate with JIU. By using our website and enrolling in our programs, you consent to the terms of this Privacy Policy.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
                            <p className="text-gray-700">When you register for a course or interact with JIU, we may collect the following types of information:</p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Personal details such as your name, email address, phone number, and country of residence.</li>
                                <li>Academic or professional background details voluntarily provided during registration.</li>
                                <li>Payment and billing details required for processing course fees.</li>
                                <li>Technical information such as your IP address, browser type, and usage data when visiting our website.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">How We Use Your Information</h3>
                            <p className="text-gray-700">The information we collect is used for the following purposes:</p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>To process your enrollment and provide access to course materials.</li>
                                <li>To issue certificates upon successful course completion.</li>
                                <li>To manage payments, billing, and financial records.</li>
                                <li>To communicate important course updates, schedules, and announcements.</li>
                                <li>To improve our website, online platforms, and overall learning experience.</li>
                                <li>To comply with applicable business, legal, and regulatory requirements.</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Sharing of Information</h3>
                            <p className="text-gray-700 mb-4">JIU does not sell, rent, or trade your personal information to third parties. We may share your information only under the following circumstances:</p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>With authorized JIU agents who assist with student guidance and enrollment support.</li>
                                <li>With payment service providers for secure fee processing.</li>
                                <li>When required by law or to comply with a legal process.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Data Security</h3>
                            <p className="text-gray-700">JIU takes reasonable measures to safeguard your personal data from unauthorized access, disclosure, or misuse. All sensitive payment information is handled through secure, third-party payment gateways such as PayPal or equivalent providers. While we make every effort to ensure the security of your data, no system is completely foolproof, and JIU cannot guarantee absolute protection against cyber risks.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Cookies and Website Usage</h3>
                            <p className="text-gray-700">Our website may use cookies to enhance user experience, track engagement, and improve services. Cookies are small files stored on your device that help us understand how visitors use our site. You may disable cookies in your browser settings, but this may affect site functionality.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Student Rights</h3>
                            <p className="text-gray-700">Students have the right to:</p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Request access to the personal information we hold about them.</li>
                                <li>Request corrections or updates to their information.</li>
                                <li>Request deletion of their information, subject to legal and operational requirements.</li>
                                <li>Opt out of marketing or promotional communications at any time.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Third-Party Links</h3>
                            <p className="text-gray-700">Our website may contain links to external websites or services. JIU is not responsible for the privacy practices or content of third-party sites. We encourage students to review the privacy policies of those websites before providing any personal information.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Retention of Data</h3>
                            <p className="text-gray-700">JIU will retain student and enrollment data for as long as necessary to fulfill academic, financial, and legal obligations. Data may be securely archived after course completion but will not be used for purposes beyond those described in this Privacy Policy.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Updates to Privacy Policy</h3>
                            <p className="text-gray-700">JIU reserves the right to update or modify this Privacy Policy at any time. Changes will be posted on our official website, and continued use of JIU services will constitute acceptance of the revised policy.</p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Contact Information</h3>
                            <p className="text-gray-700">If you have any questions or concerns regarding this Privacy Policy or the handling of your personal data, you may contact us directly at:</p>
                            <p className="text-gray-700"><a href="mailto:info@jadetimesuniversity.com" className="text-purple-600">📧 info@jadetimesuniversity.com</a></p>
                        </div>
                    </div>
                </div>
                {/* Right Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0  mt-6 lg:mt-0">
          <div className="border border-gray-200">
            <div className="bg-gray-200 p-4 ">
              <h2 id="related-links-heading" className="text-2xl font-semibold uppercase text-black">
                RELATED LINKS
              </h2>
            </div>
            <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500  transition-colors">
                ABOUT US
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500  transition-colors">
                CONTACT US
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold uppercase text-gray-700 hover:text-pink-500  transition-colors">
                EXPLORE OUR PROGRAMS
              </a>
            </nav>
          </div>
        </aside>

            </div>
        </div>
    );
};

export default PrivacyPolicyDetail;