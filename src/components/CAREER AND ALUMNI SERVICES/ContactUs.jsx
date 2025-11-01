import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    'full-name': '',
    email: '',
    campus: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData['full-name']) newErrors['full-name'] = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.campus) newErrors.campus = 'Profession is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form data submitted:', formData);
      // Reset form
      setFormData({
        'full-name': '',
        email: '',
        campus: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="bg-white font-sans">
      <main className="py-24 px-6 sm:px-6 md:px-6 lg:px-35">
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="pl-10 sm:pl-16 lg:pl-0">
              <div className="flex items-start">
                <div className="w-1.5 h-12 bg-purple-600 mt-1 shrink-0 -ml-10 sm:-ml-16 lg:ml-0 rounded-full" />
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
                    <span className="ml-4 text-gray-800">info@jadetimesuniversity.com</span>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="h-6 w-6 text-purple-600" />
                    <span className="ml-4 text-gray-800">+1 (505) 440-6468</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="h-6 w-6 text-purple-600" />
                    <span className="ml-4 text-gray-800">8206 Louisiana Blvd NE, Ste B #10483 Albuquerque, NM 87113 United States</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className=" p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold mb-8 text-center">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input type="text" name="full-name" id="full-name" value={formData['full-name']} onChange={handleChange} className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm h-10 px-3 ${errors['full-name'] ? 'border-red-500' : ''}`} />
                      {errors['full-name'] && <p className="text-red-500 text-xs mt-1">{errors['full-name']}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm h-10 px-3 ${errors.email ? 'border-red-500' : ''}`} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="campus" className="text-xs font-bold tracking-widest">Profession *</label>
                    <select id="campus" name="campus" value={formData.campus} onChange={handleChange} className={`custom-select w-full mt-2 p-3 bg-white border-0 text-black ${errors.campus ? 'border-b-2 border-red-500' : ''}`}>
                      <option value="" disabled>Select a Profession</option>
                      <option>Student</option>
                      <option>Faculty</option>
                    </select>
                    {errors.campus && <p className="text-red-500 text-xs mt-1">{errors.campus}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-3 py-2 ${errors.message ? 'border-red-500' : ''}`}></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
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