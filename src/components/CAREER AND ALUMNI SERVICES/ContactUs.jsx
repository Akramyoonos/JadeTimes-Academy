import React from 'react';
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div className="bg-white font-sans">
      <main className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="pl-10 sm:pl-16 lg:pl-0">
              <div className="flex items-start">
                <div className="w-1.5 h-12 bg-purple-600 mt-1 flex-shrink-0 -ml-10 sm:-ml-16 lg:-ml-0 rounded-full" />
                <div className="ml-8">
                  <h1 className="text-4xl sm:text-5xl text-gray-800 tracking-wider font-light uppercase">
                    Contact Us
                  </h1>
                </div>
              </div>
              <div className="mt-12 text-lg text-gray-700 leading-relaxed">
                <p>
                  Have questions about our programs, admissions, or anything else? We're here to help. Reach out to us, and we'll get back to you as soon as possible.
                </p>
                <div className="mt-10 space-y-6">
                  <div className="flex items-center">
                    <FiMail className="h-6 w-6 text-purple-600" />
                    <span className="ml-4 text-gray-800">info@nyfa.edu</span>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="h-6 w-6 text-purple-600" />
                    <span className="ml-4 text-gray-800">+1 (212) 674-4300</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="h-6 w-6 text-purple-600" />
                    <span className="ml-4 text-gray-800">17 Battery Pl, New York, NY 10004</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="full-name" className="sr-only">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      autoComplete="name"
                      placeholder="Full name"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Email address"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Your message"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                      defaultValue={''}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <FiSend className="-ml-1 mr-2 h-5 w-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;