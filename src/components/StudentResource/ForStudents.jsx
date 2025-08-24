import React from 'react';

/**
 * A React component that displays a page of resources for students.
 * NOTE: For this component to work correctly in a React project, you must include
 * the Tailwind CSS and Font Awesome stylesheets in your project's main HTML file (e.g., public/index.html).
 *
 * Example for public/index.html <head>:
 * <script src="https://cdn.tailwindcss.com"></script>
 * <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
 */
const ForStudents = () => {
    // Custom styles that were in the <style> tag. It's better to move this to a global CSS file like index.css.
    const bodyStyle = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    };

    // In a real app, you would apply the font style to the body in your main CSS file.
    // Here we simulate it on the root div for demonstration.
    return (
        <div style={bodyStyle} className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto">

                    <div className="flex items-center mb-24">
                        <div className="w-1 bg-purple-600 h-12 mr-4"></div>
                        <h1 className="text-4xl font-semibold text-black">FOR STUDENTS</h1>
                    </div>

                    <p className="text-black font-semibold text-2xl mb-16">
                        Below are quick links to a range of resources that are commonly used on campus.
                    </p>

                    <p className="text-black font-semibold text-xl mb-12">
                        For any technical support please email: <a href="mailto:support@nyfa.edu" className="text-purple-600">support@nyfa.edu</a>
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center ">
                        <div className="flex flex-col items-center">
                            <a href="#" className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                                <i className="fas fa-envelope text-white text-3xl"></i>
                            </a>
                            <span className="text-purple-800 font-semibold">NYFA Email</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="#" className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                                <i className="fas fa-th-large text-white text-3xl"></i>
                            </a>
                            <span className="text-purple-800 font-semibold">NYFA Student Hub</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="#" className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                                <i className="fas fa-video text-white text-3xl"></i>
                            </a>
                            <span className="text-purple-800 font-semibold">Zoom</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 flex items-center justify-center mb-2">
                                <div className="w-full h-full relative">
                                    <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
                                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500 to-blue-400"></div>
                                    <span className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">N</span>
                                </div>
                            </div>
                            <span className="text-purple-800 font-semibold mb-1">NYFA Mobile App</span>
                            <div className="text-sm">
                                <a href="#" className="text-purple-800 font-semibold">App Store</a><br />
                                <a href="#" className="text-purple-800 font-semibold">Google Play Store</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="#" className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                                 <i className="far fa-window-maximize text-white text-3xl transform -rotate-90"></i>
                            </a>
                            <span className="text-purple-800 font-semibold">MS Office</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForStudents;