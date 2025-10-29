import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUpload } from '@fortawesome/free-solid-svg-icons';

// IMPORTANT: Replace this path with the actual path to your award image in your project's `public` or `src` folder.
import awardImage from '../../assets/Images/ConferencesFormImg.webp'; // Example path

const ConferencesForm = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    country: '',
    phone: '',
    email: '',
    presentationMode: '',
    universityName: '',
    entryType: '',
    paperUpload: null,
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState(null);

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.yourName) {
      newErrors.yourName = 'Your Name is required';
      isValid = false;
    }
    if (!formData.country) {
      newErrors.country = 'Country is required';
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
      isValid = false;
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    if (!formData.presentationMode) {
      newErrors.presentationMode = 'Presentation Mode is required';
      isValid = false;
    }
    if (!formData.entryType) {
      newErrors.entryType = 'Entry Type is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'radio' ? (checked ? value : prevData[name]) : (type === 'file' ? files[0] : value),
    }));
    // Clear error for the field being changed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
    setSubmitMessage(null); // Clear submit message on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage(null); // Clear previous messages

    if (validateForm()) {
      console.log('Form Data Submitted:', formData);
      // Simulate API call
      setTimeout(() => {
        setSubmitMessage({ type: 'success', message: 'Form submitted successfully!' });
        // Optionally reset form:
        setFormData({
          yourName: '',
          country: '',
          phone: '',
          email: '',
          presentationMode: '',
          universityName: '',
          entryType: '',
          paperUpload: null,
        });
      }, 1000);
    } else {
      setSubmitMessage({ type: 'error', message: 'Please correct the errors in the form.' });
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="container mx-auto max-w-6xl px-4 py-12">

        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-center tracking-wider">INTERNATIONAL RESEARCH</h1>
          <h2 className="text-4xl md:text-5xl font-semibold text-center tracking-wider mt-2">CONFERENCE 2025</h2>
          <p className="mt-6 text-xl font-semibold text-center text-gray-700">Hosted By Jadetimes Media LLC, United States</p>
          <p className="mt-2 text-sm font-semibold text-center text-gray-500">
            held across India, New Mexico, London, Spain, Australia, and Sri Lanka | Call Us : +1 (505) 385-9745
          </p>
        </header>

        {/* Main Content: Award Info & Submission Form */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Award Information */}
          <div className="flex justify-center items-start mt-12">
            <img src={awardImage} alt="1st Place Best Research Paper Award details" className="max-w-sm w-full shadow-lg " />
          </div>

          {/* Right Column: Submission Form */}
          <div>
            <h3 className="text-lg font-medium text-gray-600">Submit Your Paper Today for upcoming International Research Conference 2025</h3>
            
            <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                
                {/* Form Fields */}
                <div>
                  <label htmlFor="your-name" className="block text-sm font-medium text-gray-700">Your Name *</label>
                  <input type="text" name="yourName" id="your-name" value={formData.yourName} onChange={handleChange} className={`mt-1 block w-full border-0 border-b-2 ${errors.yourName ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition`} />
                  {errors.yourName && <p className="text-red-500 text-xs mt-1">{errors.yourName}</p>}
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country *</label>
                  <input type="text" name="country" id="country" value={formData.country} onChange={handleChange} className={`mt-1 block w-full border-0 border-b-2 ${errors.country ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition`} />
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                  <div className="relative mt-1">
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`block w-full border-0 border-b-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition pl-8`} />
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <FontAwesomeIcon icon={faGlobe} className="text-gray-400" />
                    </div>
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">Presentation Modes *</label>
                  <div className="flex items-center">
                    <input id="online-mode" name="presentationMode" type="radio" value="Online Mode" checked={formData.presentationMode === "Online Mode"} onChange={handleChange} className="focus:ring-black h-4 w-4 text-black border-gray-300" />
                    <label htmlFor="online-mode" className="ml-3 block text-sm text-gray-800">Online Mode</label>
                  </div>
                  <div className="flex items-center">
                    <input id="hybrid-mode" name="presentationMode" type="radio" value="Hybrid Mode" checked={formData.presentationMode === "Hybrid Mode"} onChange={handleChange} className="focus:ring-black h-4 w-4 text-black border-gray-300" />
                    <label htmlFor="hybrid-mode" className="ml-3 block text-sm text-gray-800">Hybrid Mode</label>
                  </div>
                  {errors.presentationMode && <p className="text-red-500 text-xs mt-1">{errors.presentationMode}</p>}
                </div>

                <div>
                  <label htmlFor="university-name" className="block text-sm font-medium text-gray-700">University Name</label>
                  <input type="text" name="universityName" id="university-name" value={formData.universityName} onChange={handleChange} className={`mt-1 block w-full border-0 border-b-2 ${errors.universityName ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition`} />
                  {errors.universityName && <p className="text-red-500 text-xs mt-1">{errors.universityName}</p>}
                </div>

                <div>
                  <label htmlFor="entry-type" className="block text-sm font-medium text-gray-700">Entry Type *</label>
                  <select id="entry-type" name="entryType" value={formData.entryType} onChange={handleChange} className={`mt-1 block w-full border-0 border-b-2 ${errors.entryType ? 'border-red-500' : 'border-gray-300'} focus:ring-0 focus:border-black transition`}>
                    <option value="">Select an option</option>
                    <option value="Student">Student</option>
                    <option value="Professional">Professional</option>
                    <option value="Academia">Academia</option>
                  </select>
                  {errors.entryType && <p className="text-red-500 text-xs mt-1">{errors.entryType}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Submit Your Paper</label>
                  <label htmlFor="paper-upload" className="mt-2 flex justify-center items-center w-full px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                    <FontAwesomeIcon icon={faUpload} className="mr-2 text-gray-500" />
                    {formData.paperUpload ? formData.paperUpload.name : 'Upload'}
                  </label>
                  <input id="paper-upload" name="paperUpload" type="file" onChange={handleChange} className="sr-only" />
                </div>
              </div>
              
              {submitMessage && (
                <div className={`mt-8 p-4 rounded-md text-center ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitMessage.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-12">
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
        
        {/* Video Section */}
        <section className="mt-24">
          <div className="aspect-w-16 ">
            {/* IMPORTANT: Replace the src with your YouTube video embed URL */}
            <iframe 
              src="https://www.youtube.com/embed/FKz0Fnk_TRM" 
              title="Jadetimes International Research Conference 2025"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
              className="w-full h-144 shadow-xl ">
            </iframe>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ConferencesForm;