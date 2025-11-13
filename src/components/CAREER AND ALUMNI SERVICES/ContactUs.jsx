import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
  const initialFormData = {
    'full-name': '',
    email: '',
    campus: '', // This field is labeled 'Profession' in the UI
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear the error for the field being edited
    setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    setSubmitMessage(null); // Clear submission message on new input
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData['full-name'].trim()) newErrors['full-name'] = 'Full name is required';
    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
        newErrors.email = 'Invalid email address format';
    }
    if (!formData.campus) newErrors.campus = 'Profession is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage(null);

    if (!validateForm()) {
        setSubmitMessage({ type: 'error', message: 'Please correct the errors in the form.' });
        return;
    }

    setIsSubmitting(true);

    try {
      // --- IMPORTANT: Replace with the actual URL to your PHP script ---
      const response = await fetch('https://process.jadetimesuniversity.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage({ type: 'success', message: 'Message sent successfully! We will get back to you shortly.' });
        setFormData(initialFormData); // Reset form
      } else {
        setSubmitMessage({ type: 'error', message: result.message || 'An unexpected error occurred.' });
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitMessage({ type: 'error', message: 'Could not connect to the server. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white font-sans">
      <main className="py-24 px-6 sm:px-6 md:px-6 lg:px-35">
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="pl-10 sm:pl-16 lg:pl-0">
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
              {/* Left side content */}
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold mb-8 text-center">Send us a Message</h2>
                <form onSubmit={handleSubmit} noValidate>
                    {submitMessage && (
                        <div className={`p-3 rounded-md text-center mb-6 ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {submitMessage.message}
                        </div>
                    )}
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input type="text" name="full-name" id="full-name" value={formData['full-name']} onChange={handleChange} className={`mt-1 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm h-10 px-3 ${errors['full-name'] ? 'border-red-500' : 'border-gray-300'}`} />
                        {errors['full-name'] && <p className="text-red-500 text-xs mt-1">{errors['full-name']}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm h-10 px-3 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="campus" className="block text-sm font-medium text-gray-700 mb-1">Profession *</label>
                      <select id="campus" name="campus" value={formData.campus} onChange={handleChange} className={`mt-1 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm h-10 px-3 ${errors.campus ? 'border-red-500' : 'border-gray-300'}`}>
                        <option value="" disabled>Select a Profession</option>
                        <option>Student</option>
                        <option>Faculty</option>
                        <option>Other</option>
                      </select>
                      {errors.campus && <p className="text-red-500 text-xs mt-1">{errors.campus}</p>}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`mt-1 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm px-3 py-2 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <div className="pt-4">
                      <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
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