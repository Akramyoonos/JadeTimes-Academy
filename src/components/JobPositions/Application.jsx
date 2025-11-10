import React, { useState, useRef } from 'react';

const Application = () => {
    // Define the initial state for the form
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        whatsappNumber: '',
        jobTitle: '',
        fileUpload: null,
    };

    // State hooks for form data, errors, and submission status
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null);

    // A ref to the file input element to allow for programmatic clearing
    const fileInputRef = useRef(null);

    // Handles changes for all input types
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === 'file') {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        // Clear errors for the field being edited
        setErrors(prev => ({ ...prev, [name]: null }));
        setSubmitMessage(null);
    };

    // Form validation logic
    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.jobTitle) newErrors.jobTitle = 'Please select a position';
        // Optional: validation for the file
        if (formData.fileUpload && formData.fileUpload.size > 10 * 1024 * 1024) { // 10MB limit
            newErrors.fileUpload = 'File size cannot exceed 10MB';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    // Handles the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitMessage(null);

        if (!validateForm()) {
            setSubmitMessage({ type: 'error', message: 'Please correct the errors in the form.' });
            return;
        }

        setIsSubmitting(true);

        // We must use FormData to send files
        const dataToSend = new FormData();
        // Append all form data fields to the FormData object
        Object.keys(formData).forEach(key => {
            dataToSend.append(key, formData[key]);
        });

        try {
            // --- IMPORTANT: Replace with the actual URL to your PHP script ---
            const response = await fetch('http://localhost/JIUMailSender/CAREERWITHJIU.php', {
                method: 'POST',
                body: dataToSend,
                // DO NOT set 'Content-Type' header. The browser does it automatically for FormData.
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitMessage({ type: 'success', message: 'Application submitted successfully! We will be in touch.' });
                setFormData(initialFormData);
                setErrors({});
                // Manually reset the file input's value
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            } else {
                setSubmitMessage({ type: 'error', message: result.message || 'An server error occurred.' });
            }
        } catch (error) {
            console.error('Submission Error:', error);
            setSubmitMessage({ type: 'error', message: 'Could not connect to the server. Please check your network.' });
        } finally {
            setIsSubmitting(false);
        }
    };

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

                    <div className="p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Submit Your Application</h2>
                        <form onSubmit={handleSubmit} noValidate>
                            {submitMessage && (
                                <div className={`p-4 rounded-md text-center mb-6 ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {submitMessage.message}
                                </div>
                            )}
                            <div className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                        <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required className={`mt-1 block w-full border rounded-md shadow-sm sm:text-sm h-10 px-3 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} />
                                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                        <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required className={`mt-1 block w-full border rounded-md shadow-sm sm:text-sm h-10 px-3 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`} />
                                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className={`mt-1 block w-full border rounded-md shadow-sm sm:text-sm h-10 px-3 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (with country code) *</label>
                                        <input type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className={`mt-1 block w-full border rounded-md shadow-sm sm:text-sm h-10 px-3 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`} />
                                        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                                        <input type="tel" name="whatsappNumber" id="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm h-10 px-3" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Position You're Applying For *</label>
                                    <select id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required className={`mt-1 block w-full border rounded-md shadow-sm sm:text-sm h-10 px-3 ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'}`}>
                                        <option value="">- Select Position -</option>
                                        <option>Marketing Internship</option>
                                        {/* ... other options ... */}
                                        <option>Jadetimes Contributor</option>
                                    </select>
                                    {errors.jobTitle && <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>}
                                </div>
                                <div>
                                    <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-1">CV / Cover Letter</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md ${errors.fileUpload ? 'border-red-500' : 'border-gray-300'}">
                                        <div className="space-y-1 text-center">
                                            {/* SVG Icon */}
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="file-upload-input" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload-input" name="fileUpload" type="file" ref={fileInputRef} onChange={handleChange} className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            {formData.fileUpload ? (
                                                <p className="text-sm text-gray-900 font-semibold">{formData.fileUpload.name}</p>
                                            ) : (
                                                <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                                            )}
                                        </div>
                                    </div>
                                    {errors.fileUpload && <p className="text-red-500 text-xs mt-1">{errors.fileUpload}</p>}
                                </div>
                                <div className="pt-4">
                                    <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400">
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
                <footer className="mt-16 text-center text-gray-500">
                    {/* Footer content... */}
                </footer>
            </div>
        </div>
    );
};

export default Application;