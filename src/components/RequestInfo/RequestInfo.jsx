import React, { useState } from 'react';
import { country_list } from '../../data/countries';
import studentImage from '../../assets/Images/request-info-1920x857-1.webp';

const RequestInfo = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    educationLevel: '',
    program: '',
    major: '',
    campus: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle loading state

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: null }));
    setSubmitMessage(null);
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'country', 'educationLevel', 'program', 'major', 'campus'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
        isValid = false;
      }
    });

    if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must contain only digits';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
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
        setSubmitMessage({ type: 'success', message: 'Request submitted successfully! We will contact you shortly.' });
        setFormData(initialFormData); // Reset form on success
      } else {
        // Use the error message from the server if available
        setSubmitMessage({ type: 'error', message: result.message || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitMessage({ type: 'error', message: 'Could not connect to the server. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const customStyles = `
    .custom-select {
        -webkit-appearance: none; -moz-appearance: none; appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat; background-position: right 1rem center; background-size: 1em; padding-right: 2.5rem;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="flex flex-col min-h-screen">
        <main className="grow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side */}
            <div className="flex flex-col">
              <div className="h-1/2">
                <img src={studentImage} alt="JIU student" className="w-full h-full object-cover object-center" />
              </div>
              <div className="bg-white p-8 md:p-16 grow flex items-center">
                <div>
                  <div className="flex items-start">
                    <span className="w-1 h-20 bg-fuchsia-600 mr-6"></span>
                    <h1 className="text-4xl md:text-5xl font-light text-black tracking-wider">
                      TAKE THE FIRST STEP<br />WITH JIU
                    </h1>
                  </div>
                  <p className="mt-6 text-gray-600">
                    At JIU, students get hands-on, immersive training in film, media, and performing arts. Fill out the form to find out more about our programs, financial aid options, and admissions process.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-black text-white p-8 md:p-16 md:mr-16 my-22">
              <div className="flex items-center">
                <span className="w-1 h-12 bg-fuchsia-500 mr-6"></span>
                <h2 className="text-4xl font-semibold tracking-widest">REQUEST INFO</h2>
              </div>
            
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                {submitMessage && (
                  <div className={`p-3 rounded-md text-center ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitMessage.message}
                  </div>
                )}
                <div>
                  <label htmlFor="firstName" className="text-xs font-bold tracking-widest">FIRST NAME *</label>
                  <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} className={`w-full mt-2 p-3 bg-white border-0 text-black ${errors.firstName ? 'border-b-2 border-red-500' : ''}`} />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="text-xs font-bold tracking-widest">LAST NAME *</label>
                  <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className={`w-full mt-2 p-3 bg-white border-0 text-black ${errors.lastName ? 'border-b-2 border-red-500' : ''}`} />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
                {/* ... other form fields ... */}
                 <div>
                  <label htmlFor="email" className="text-xs font-bold tracking-widest">EMAIL *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full mt-2 p-3 bg-white border-0 text-black ${errors.email ? 'border-b-2 border-red-500' : ''}`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs font-bold tracking-widest">PHONE (NUMBER ONLY) *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full mt-2 p-3 bg-white border-0 text-black ${errors.phone ? 'border-b-2 border-red-500' : ''}`} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="country" className="text-xs font-bold tracking-widest">COUNTRY *</label>
                  <select id="country" name="country" value={formData.country} onChange={handleChange} className={`custom-select w-full mt-2 p-3 bg-white border-0 text-black ${errors.country ? 'border-b-2 border-red-500' : ''}`}>
                    <option value="" disabled>Select your country</option>
                    {country_list.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                </div>
                <div>
                  <label htmlFor="educationLevel" className="text-xs font-bold tracking-widest">HIGHEST EDUCATION LEVEL COMPLETED *</label>
                  <select id="educationLevel" name="educationLevel" value={formData.educationLevel} onChange={handleChange} className={`custom-select w-full mt-2 p-3 bg-white border-0 text-black ${errors.educationLevel ? 'border-b-2 border-red-500' : ''}`}>
                    <option value="" disabled>Select education level</option>
                    <option>High School</option>
                    <option>Associate's Degree</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                  </select>
                  {errors.educationLevel && <p className="text-red-500 text-xs mt-1">{errors.educationLevel}</p>}
                </div>
                <div>
                  <label htmlFor="program" className="text-xs font-bold tracking-widest">DEGREE/PROGRAM INQUIRING ABOUT *</label>
                  <select id="program" name="program" value={formData.program} onChange={handleChange} className={`custom-select w-full mt-2 p-3 bg-white border-0 text-black ${errors.program ? 'border-b-2 border-red-500' : ''}`}>
                    <option value="" disabled>Select a program</option>
                    <option>Filmmaking</option>
                    <option>Acting for Film</option>
                    <option>Photography</option>
                  </select>
                  {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
                </div>
                <div>
                  <label htmlFor="major" className="text-xs font-bold tracking-widest">MAJOR/DISCIPLINE *</label>
                  <select id="major" name="major" value={formData.major} onChange={handleChange} className={`custom-select w-full mt-2 p-3 bg-white border-0 text-black ${errors.major ? 'border-b-2 border-red-500' : ''}`}>
                    <option value="" disabled>Select a major</option>
                    <option>Directing</option>
                    <option>Cinematography</option>
                    <option>Screenwriting</option>
                  </select>
                  {errors.major && <p className="text-red-500 text-xs mt-1">{errors.major}</p>}
                </div>
                <div>
                  <label htmlFor="campus" className="text-xs font-bold tracking-widest">CAMPUS/LOCATION *</label>
                  <select id="campus" name="campus" value={formData.campus} onChange={handleChange} className={`custom-select w-full mt-2 p-3 bg-white border-0 text-black ${errors.campus ? 'border-b-2 border-red-500' : ''}`}>
                    <option value="" disabled>Select a campus</option>
                    <option>Online</option>
                  </select>
                  {errors.campus && <p className="text-red-500 text-xs mt-1">{errors.campus}</p>}
                </div>
                
                <button type="submit" disabled={isSubmitting} className="w-full bg-cyan-400 text-black font-bold py-4 tracking-widest hover:bg-cyan-500 transition-colors disabled:bg-gray-400">
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                By submitting this form, you give Jadetimes International University your consent to contact you...
              </p>
            </div>
          </div>
        </main>
        
        <footer className="bg-fuchsia-600 text-white p-12 text-center">
          <p className="font-semibold tracking-wider">NEXT START DATE APPROACHING - REQUEST INFORMATION TO FIND OUT MORE</p>
        </footer>
      </div>
    </>
  );
};

export default RequestInfo;