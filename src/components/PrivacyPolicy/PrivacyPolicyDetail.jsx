import React from 'react';

const PrivacyPolicyDetail = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-18 lg:py-28">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-3/4 pr-8">
                    <div className="flex items-center mb-8">
                        <span className="w-1.5 h-16 bg-purple-600 mr-4"></span>
                        <h1 className="text-3xl font-light">NYFA AND FERPA</h1>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-light mb-4">Digital Privacy Statement of the New York Film Academy</h2>
                            <h3 className="text-xl font-semibold mb-2">Digital Web and Mobile Privacy Statement</h3>
                            <p className="text-gray-700">New York Film Academy (NYFA) is committed to the right to privacy, including the digital privacy through web and mobile services. This privacy statement concerns the collection and use of information collected through official NYFA websites and other digital channels.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Gathering and Use of Information</h3>
                            <h4 className="font-semibold text-gray-800 mb-1">Personally Identifiable Information</h4>
                            <p className="text-gray-700 mb-4">Personally identifiable information (PII) will not be collected while you visit websites or other digital channels of the New York Film Academy unless voluntarily provided by you. You may be requested to provide personally identifiable information when accessing academic records, password-protected websites, joining mailing lists, or engaging in payment transactions with the Academy. This information may be used for related purposes, including responding to requests for information or services, or communicating information that may be of value or interest to you. Your information will not be shared by NYFA with third parties.</p>

                            <h4 className="font-semibold text-gray-800 mb-1">Non-Personally Identifiable Information</h4>
                            <p className="text-gray-700">Depending on the type and use of your web browser, information may be given by your web browser and collected into server logs by the Academy while you visit NYFA websites and other digital properties, including IP addresses. Standard information about your computer, including the type of web browser and operating system in use, may also be collected. Your usage of NYFA websites and digital properties, such as pages visited, search queries, and length of visits, may also be collected. This information is non-personally identifiable information and can be used to help diagnose technical issues and suggest digital solutions for improving NYFA websites and other digital channels.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Cookies</h3>
                            <p className="text-gray-700 mb-4">Portions of NYFA websites and digital properties may use "cookies," or the text files sometimes transferred to your digital device through your web browser. Cookies are used to save your preferences as well as to track statistics on usage of certain parts of NYFA websites and other digital channels. The Academy's use of cookies does not involve the collection of personally identifiable information.</p>
                            <p className="text-gray-700 mb-4">By changing the selection settings of your particular web browser, you have the option not to accept cookies and can block or restrict the use of cookies. Cookies already saved can also be deleted through your browser preferences & settings.</p>
                            <p className="text-gray-700">You can choose not to accept cookies by selection settings on your web browser that block or restrict the use of cookies. You can also delete cookies that have been placed on your computer or device.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Sharing Your Information</h3>
                            <p className="text-gray-700 mb-4">Any personally identifiable information collected by NYFA will not be shared, sold, or rented out to third parties and will be treated in compliance with federal and state laws and regulations concerning PII and digital privacy. NYFA does not share any personal information, including SMS opt-in consent, with any third-party organizations.</p>
                            <p className="text-gray-700">In cases when NYFA has personally identifiable information (PII) about you, we will not sell, rent, or share that PII and will treat it in compliance with federal and state laws and regulations.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Advertising</h3>
                            <p className="text-gray-700">NYFA may work with third party vendors to show our advertisements on non-NYFA websites and digital properties. NYFA and third party vendors with whom we contract may use cookies and web beacons to serve our ads based on your prior visit(s) to NYFA websites and digital properties and to assess the effectiveness of our ads. This is also called Targeted Advertising or Interest-Based Advertising.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Security</h3>
                            <p className="text-gray-700">NYFA takes digital privacy very seriously and is committed to maintaining reasonable physical, technical and administrative procedures to secure and safeguard all information collected by the Academy, including from loss, misuse, or alteration of the information. This includes the use of encryption when collecting or transferring sensitive data such as credit card information. Please be aware that despite our best care and efforts, NYFA cannot provide an absolute guarantee as to the security of any information transmitted and collected through NYFA digital services, and any information shared will be done so at your own risk.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Changes to this Privacy Statement</h3>
                            <p className="text-gray-700">NYFA reserves the right to alter or modify this privacy statement in whole or in part at any time. A modified policy would be posted on this page with an accurate and updated effective date.</p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Questions</h3>
                            <p className="text-gray-700">Any questions regarding the digital web and mobile privacy practices of the New York Film Academy can be made to <a href="mailto:support@nyfa.edu" className="text-purple-600">support@nyfa.edu</a>.</p>
                        </div>

                        <div className="pt-4">
                            <p className="text-gray-700 font-semibold">Effective Date: May 21, 2018</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/4 mt-8 md:mt-0">
                    <div className="bg-gray-100 p-6">
                        <h3 className="font-semibold mb-4">RELATED LINKS</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-700 hover:text-black">ABOUT US</a></li>
                            <li><hr className="border-gray-300" /></li>
                            <li><a href="#" className="text-gray-700 hover:text-black">CONTACT US</a></li>
                            <li><hr className="border-gray-300" /></li>
                            <li><a href="#" className="text-gray-700 hover:text-black">EXPLORE OUR PROGRAMS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyDetail;