import React, { useState, useRef } from 'react';
import { country_list } from '../../data/countries.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUpload } from '@fortawesome/free-solid-svg-icons';
import awardImage from '../../assets/Images/ConferencesFormImg.webp';

const ConferencesForm = () => {
  const countries = country_list;

  const initialFormData = {
    yourName: '',
    country: '',
    phone: '',
    email: '',
    presentationMode: '',
    universityName: '',
    entryType: '',
    paperUpload: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create a ref for the file input
  const fileInputRef = useRef(null);

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.yourName) { newErrors.yourName = 'Your Name is required'; isValid = false; }
    if (!formData.country) { newErrors.country = 'Country is required'; isValid = false; }
    if (!formData.phone) { newErrors.phone = 'Phone is required'; isValid = false; }
    else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) { newErrors.phone = 'Invalid phone number format'; isValid = false; }
    if (!formData.email) { newErrors.email = 'Email is required'; isValid = false; }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) { newErrors.email = 'Invalid email address'; isValid = false; }
    if (!formData.presentationMode) { newErrors.presentationMode = 'Presentation Mode is required'; isValid = false; }
    if (!formData.entryType) { newErrors.entryType = 'Entry Type is required'; isValid = false; }
    // Optional: Add validation for file size or type
    if (formData.paperUpload && formData.paperUpload.size > 5000000) { // 5MB limit
        newErrors.paperUpload = 'File size cannot exceed 5MB';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : (type === 'radio' ? (checked ? value : prevData[name]) : value),
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    setSubmitMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage(null);

    if (!validateForm()) {
      setSubmitMessage({ type: 'error', message: 'Invalid input. Please fill all required fields.' });
      return;
    }

    setIsSubmitting(true);

    // Use FormData to handle file uploads
    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    try {
      // --- IMPORTANT: Replace with the actual URL to your PHP script ---
      const response = await fetch('http://localhost/JIUMailSender/JADETIMESConferences.php', {
        method: 'POST',
        body: dataToSend, // Send FormData object, do NOT set Content-Type header
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage({ type: 'success', message: 'Form submitted successfully!' });
        setFormData(initialFormData);
        // Reset the file input visually
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
      } else {
        setSubmitMessage({ type: 'error', message: result.message || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitMessage({ type: 'error', message: 'Could not connect to the server. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12 md:mb-16">
          {/* Header content... */}
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="flex justify-center items-start lg:mt-12">
            <img src={awardImage} alt="Best Research Paper Award" className="w-full max-w-md shadow-lg" />
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-600">Submit Your Paper Today for the upcoming International Research Conference 2025</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-8">
                {/* Your Name */}
                <div className="md:col-span-2">
                  <label htmlFor="your-name" className="block text-sm font-medium text-gray-700">Your Name *</label>
                  <input type="text" name="yourName" id="your-name" value={formData.yourName} onChange={handleChange} className={`mt-1 block w-full border-0 border-b-2 ${errors.yourName ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition`} />
                  {errors.yourName && <p className="text-red-500 text-xs mt-1">{errors.yourName}</p>}
                </div>
                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country *</label>
                  <select name="country" id="country" value={formData.country} onChange={handleChange} className={`mt-1 block w-full border-0 border-b-2 ${errors.country ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition`}>
                    <option value="">Select a country</option>
                    {countries.map((country) => (<option key={country} value={country}>{country}</option>))}
                  </select>
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                </div>
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                  <div className="relative mt-1">
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`block w-full border-0 border-b-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition pl-8`} />
                    <div className="absolute inset-y-0 left-0 flex items-center"><FontAwesomeIcon icon={faGlobe} className="text-gray-400" /></div>
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                {/* Email */}
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                {/* Presentation Modes */}
                <div className="md:col-span-2 space-y-4">
                  <label className="block text-sm font-medium text-gray-700">Presentation Modes *</label>
                  <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                    <div className="flex items-center"><input id="online-mode" name="presentationMode" type="radio" value="Online Mode" checked={formData.presentationMode === "Online Mode"} onChange={handleChange} className="focus:ring-black h-4 w-4 text-black border-gray-300" /><label htmlFor="online-mode" className="ml-3 block text-sm text-gray-800">Online Mode</label></div>
                    <div className="flex items-center"><input id="hybrid-mode" name="presentationMode" type="radio" value="Hybrid Mode" checked={formData.presentationMode === "Hybrid Mode"} onChange={handleChange} className="focus:ring-black h-4 w-4 text-black border-gray-300" /><label htmlFor="hybrid-mode" className="ml-3 block text-sm text-gray-800">Hybrid Mode</label></div>
                  </div>
                  {errors.presentationMode && <p className="text-red-500 text-xs mt-1">{errors.presentationMode}</p>}
                </div>
                {/* University Name */}
                <div className="md:col-span-2">
                  <label htmlFor="university-name" className="block text-sm font-medium text-gray-700">University Name</label>
                  <input type="text" name="universityName" id="university-name" value={formData.universityName} onChange={handleChange} className={`mt-1 block w-full border-0 border-b-2 ${errors.universityName ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition`} />
                </div>
                {/* Entry Type */}
                <div>
                  <label htmlFor="entry-type" className="block text-sm font-medium text-gray-700">Entry Type *</label>
                  <select id="entry-type" name="entryType" value={formData.entryType} onChange={handleChange} className={`mt-1 block w-full border-0 border-b-2 ${errors.entryType ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition`}>
                    <option value="">Select an option</option><option value="Student">Student</option><option value="Professional">Professional</option>
                  </select>
                  {errors.entryType && <p className="text-red-500 text-xs mt-1">{errors.entryType}</p>}
                </div>
                {/* Paper Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Submit Your Paper</label>
                  <label htmlFor="paper-upload" className="mt-2 flex justify-center items-center w-full px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                    <FontAwesomeIcon icon={faUpload} className="mr-2 text-gray-500" />
                    {formData.paperUpload ? formData.paperUpload.name : 'Upload'}
                  </label>
                  <input id="paper-upload" name="paperUpload" type="file" onChange={handleChange} ref={fileInputRef} className="sr-only" />
                  {errors.paperUpload && <p className="text-red-500 text-xs mt-1">{errors.paperUpload}</p>}
                </div>
              </div>
              
              {submitMessage && (
                <div className={`mt-8 p-4 rounded-md text-center ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage.message}
                </div>
              )}

              <div className="mt-12">
                <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition disabled:bg-gray-500">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </main>
        
        <section className="mt-20 md:mt-24">
            {/* Video content... */}
        </section>
      </div>
    </div>
  );
};

export default ConferencesForm;