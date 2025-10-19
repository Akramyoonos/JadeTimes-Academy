import React from 'react';

// Main App component that renders all other components
const TwoHourProgramApplications = () => {
  return (
    <>
      <ProgramApplications />
      <AccessibilityButton />
    </>
  );
};

// Component for the main application content
const ProgramApplications = () => {
  // Function to handle the click event for the 1-Year Application link
  const handleOneYearApplicationClick = (event) => {
    event.preventDefault(); // Prevents the default anchor tag behavior

    // In a real-world application, you would use a routing library like React Router
    // to navigate to the appropriate page.
    // Example: history.push('/apply/1-year');
  };

  // Function to handle the click event for the 2-Year Application link
  const handleTwoYearApplicationClick = (event) => {
    event.preventDefault(); // Prevents the default anchor tag behavior
    // Example with React Router: history.push('/apply/2-year');
  };

  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-6 sm:px-6 md:px-6 lg:px-34 pb-12">
        <div className="max-w-9xl ">
          <div className="flex items-center mb-8">
            <span className="w-1 h-12 bg-purple-600 mr-4"></span>
            <h1 className="text-4xl font-light tracking-wider text-gray-800">
              1 & 2-YEAR PROGRAM APPLICATIONS
            </h1>
          </div>

          <p className="text-gray-600 text-lg mb-12">
            To apply for one of NYFA's programs, please visit the application links below.
          </p>

          <div className="space-y-4">
            <a
              href="#"
              onClick={handleOneYearApplicationClick}
              className="text-purple-600 text-lg font-semibold tracking-wider flex items-center group"
            >
              1-YEAR APPLICATION
              <span className="ml-2 transition-transform group-hover:translate-x-1">&gt;</span>
            </a>
            <a
              href="#"
              onClick={handleTwoYearApplicationClick}
              className="text-purple-600 text-lg font-semibold tracking-wider flex items-center group"
            >
              2-YEAR APPLICATION
              <span className="ml-2 transition-transform group-hover:translate-x-1">&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the floating accessibility button
const AccessibilityButton = () => {
  // Function to handle the click event for the accessibility button
  const handleAccessibilityClick = () => {
    alert('Accessibility options panel opened!');
    // This function would typically toggle an accessibility menu or apply accessibility settings.
  };
};

export default TwoHourProgramApplications;