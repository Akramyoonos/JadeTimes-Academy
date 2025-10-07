import React from 'react';

const Application = () => {
    return (
        <div className="bg-gray-50 font-sans">
            <div className="container mx-auto px-4 py-16 max-w-5xl">
                <header className="text-center mb-16">
                    <h1 className="text-6xl font-bold tracking-tight text-gray-900">Join the Jadetimes Media Team</h1>
                    <p className="text-xl text-gray-600 mt-4">Explore our open positions and start your journey with us.</p>
                </header>

                <main>
                    <div className=" p-8 rounded-lg shadow-md mb-16">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Available Positions</h2>
                        <div className="grid md:grid-cols-2  gap-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Internships</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Marketing</li>
                                    <li>Human Resources</li>
                                    <li>Video Editing</li>
                                    <li>Music Production</li>
                                    <li>2D/3D Animation</li>
                                    <li>Article Writing</li>
                                    <li>Research &amp; Analysis</li>
                                    <li>News Reporting</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">News Reporters</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>New York</li>
                                    <li>United Kingdom</li>
                                    <li>Russia</li>
                                    <li>Ukraine</li>
                                    <li>UAE</li>
                                    <li>Australia</li>
                                    <li>Professional Reporter (Global)</li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contributors</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Part-Time Content Creators</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-8 italic">
                            * Please note: Internships at Jadetimes Media are unpaid and remote, focusing on providing comprehensive training and valuable industry experience.
                        </p>
                    </div>

                    <div className=" p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Submit Your Application</h2>
                        <form action="#" method="POST" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                    <input type="text" name="first-name" id="first-name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 px-3" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                    <input type="text" name="last-name" id="last-name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 px-3" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                <input type="email" name="email" id="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 px-3" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (with country code) *</label>
                                    <input type="tel" name="phone-number" id="phone-number" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 px-3" />
                                </div>
                                <div>
                                    <label htmlFor="whatsapp-number" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                                    <input type="tel" name="whatsapp-number" id="whatsapp-number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 px-3" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="job-title" className="block text-sm font-medium text-gray-700 mb-1">Position You're Applying For *</label>
                                <select id="job-title" name="job-title" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-10 px-3">
                                    <option>- Select Position -</option>
                                    <option>Marketing Internship</option>
                                    <option>HR Internship</option>
                                    <option>Video Editing Internship</option>
                                    <option>Music Production Internship</option>
                                    <option>2D/3D Animation Internship</option>
                                    <option>Article Writing Internship</option>
                                    <option>Research Internship</option>
                                    <option>News Reporting Internship</option>
                                    <option>New York News Reporter</option>
                                    <option>United Kingdom News Reporter</option>
                                    <option>Russia News Reporter</option>
                                    <option>Ukraine News Reporter</option>
                                    <option>UAE News Reporter</option>
                                    <option>Australia News Reporter</option>
                                    <option>Professional Reporter (Global)</option>
                                    <option>Jadetimes Contributor</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700 mb-1">CV / Cover Letter</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </main>

                <footer className="mt-16 text-center text-gray-500">
                    <div className="mb-8">
                        <h3 className="font-semibold text-gray-900 text-lg">Contact Us</h3>
                        <p className="mt-2">Email: <a href="mailto:info@jadetimes.com" className="text-indigo-600 hover:underline">info@jadetimes.com</a> | Phone: <a href="tel:+19293213710" className="text-indigo-600 hover:underline">+1 929-321-3710</a></p>
                        <p>Jadetimes Media LLC | 8206 Louisiana Blvd NE, Ste B, #10483 Albuquerque, NM 87113 United States</p>
                    </div>
                    <p className="text-xs">
                        Thank you for your interest in Jadetimes Media. We are dedicated to bringing you the stories that matter, with insightful analysis, breaking news, and a diverse range of perspectives. Your engagement and support are what drive us to deliver high-quality content every day.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Application;