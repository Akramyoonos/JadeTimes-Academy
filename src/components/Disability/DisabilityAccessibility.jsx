import React, { useState } from "react";

const DisabilityAccessibility = () => {
  const [showServiceAnimalText, setShowServiceAnimalText] = useState(false);
  const [showDefinitions, setShowDefinitions] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between px-6 sm:px-6 md:px-6 lg:px-35 py-12 font-sans">
      {/* Left content */}
      <div className="md:w-2/3">
        {/* Top heading */}
        <div className="flex items-start mb-8">
          <div className="w-1 bg-sky-400 h-20 mr-4 " />
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-black">
            DISABILITY AND ACCESSIBILITY AT NYFA
          </h1>
        </div>

        {/* Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed mb-16">
          The Student Accessibility Services Office provides academic services and accommodations for
          students with disabilities. Our mission is to ensure equal opportunity and access to all members of
          the New York Film Academy community and mitigate barriers to learning, participating,
          contributing, and benefitting from our academic programs, activities, and services. Our services
          and operation are in compliance with Section 504 of the 1973 Rehabilitation Act and the American
          Disabilities Act (ADA) of 1990, amended as of 2008, and in alliance with our policies on inclusivity
          and non-discrimination.
        </p>

        {/* Second heading */}
        <div className="flex items-start mb-8">
          <div className="w-1 bg-yellow-400 h-20 mr-4 " />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-black">
            HOW NYFA ACCOMMODATES STUDENTS WITH DISABILITIES
          </h2>
        </div>

        {/* Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed mb-16">
          The ADA defines a disability as a physical or mental impairment that substantially limits one or
          more major life activities. Students with disabilities are responsible for initiating the
          accommodations request process by self-disclosing their disabilities directly to the Student
          Accessibility Services Coordinator. Please know that all requests and materials submitted are
          handled in the strictest confidence.
          <br />
          <br />
          The process of requesting and receiving accommodations is interactive and individualized,
          involving a review of required/submitted documentation and collaborative discussions regarding
          the student’s needs and the specific academic expectations and activities of our programs. The
          non-traditional nature of our programs requires unique accommodations tailored to address our
          students’ varying needs while maintaining the integrity of our curricula and learning objectives.
        </p>

        <div className="flex items-start mb-8">
          <div className="w-1 bg-purple-600 h-20 mr-4 " />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-black">
            REGISTERING FOR ACCESSIBILITY <br /> SERVICES
          </h2>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          To initiate the accommodation request process, please send an email to the Coordinator of Student
          Accessibility Services (NYFA NY and LA) soon after you receive your acceptance letter, during
          Orientation week, or during the first week of your program, announcing your need to register for
          accessibility services. Students may register with the Accessibilities Office at any time during their
          program. Early registration is advised to best promote academic success and wellness.
        </p>

        <div className="mb-4">
          <h3 className="text-lg font-bold mb-1">NYFA New York</h3>
          <p className="text-gray-700">
            Contact: <a href="mailto:sas.ny@nyfa.edu" className="text-purple-600 hover:underline">sas.ny@nyfa.edu</a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-1">NYFA Los Angeles</h3>
          <p className="text-gray-700">
            Contact: <a href="mailto:SAS@nyfa.edu" className="text-purple-600 hover:underline">SAS@nyfa.edu</a>
          </p>
        </div>

        <div className="mt-10 flex items-start mb-20 ">
          <div className="w-1 bg-sky-400 h-10 mr-4 " />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-black">
            SERVICE ANIMALS
          </h2>
        </div>
        
        <div
          className="flex items-center text-purple-600 font-semibold cursor-pointer mb-8"
          onClick={() => setShowServiceAnimalText(!showServiceAnimalText)}
        >
          <span className="mr-2">READ MORE</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transform transition-transform duration-300 ${showServiceAnimalText ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {showServiceAnimalText && (
          <p className="text-gray-700 text-lg leading-relaxed mb-16">
            It is the policy of the New York Film Academy to afford individuals with disabilities, who require the
            assistance of a service animal, with equal opportunity to access Academy property, courses,
            programs, and activities.
          </p>
        )}

        <div className="flex items-start mb-20">
          <div className="w-1 bg-yellow-400 h-10 mr-4 " />
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-black">
            DEFINITIONS
          </h2>
        </div>

        <div
          className="flex items-center text-purple-600 font-semibold cursor-pointer mb-8"
          onClick={() => setShowDefinitions(!showDefinitions)}
        >
          <span className="mr-2">READ MORE</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transform transition-transform duration-300 ${showDefinitions ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {showDefinitions && (
          <div className="text-gray-700 text-lg leading-relaxed">
            <div className="mb-4">
              <strong className="font-bold">Service Animal:</strong> Any dog or miniature horse individually trained to do work or perform tasks
              directly related to the disability that the person has. A service animal is sometimes called an
              assistance animal.
            </div>
            <div className="mb-4">
              <strong className="font-bold">Pet:</strong> A domestic animal kept for pleasure or companionship. Pets are not permitted on campus.
              Permission may be granted by Administration for a pet to be in a campus facility for a specific
              reason at a specific time.
            </div>
            <div className="mb-4">
              <strong className="font-bold">Therapy Animal:</strong> An animal that provides emotional support or passive comfort that alleviates one
              or more of the identified symptoms or effects of a disability. A therapy animal (also known as an
              emotional support animal or comfort animal) is not a service animal under this policy.
            </div>
            <div>
              <strong className="font-bold">Owner:</strong> Means any person having an interest in or right of possession to a service animal, or any
              person having control, custody, or possession of a service animal.
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
        <aside className="w-70 lg:w-80 flex-shrink-0 lg:-ml-22 mt-6 lg:mt-0">
          <div className="border border-gray-200">
            <div className="bg-gray-100 p-4 ">
              <h2 id="related-links-heading" className="text-2xl font-medium uppercase text-black">
                RELATED LINKS
              </h2>
            </div>
            <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-medium uppercase text-gray-700 hover:text-pink-500">
                CABINET
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-medium uppercase text-gray-700 hover:text-pink-500">
                ADMINISTRATION
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-medium uppercase text-gray-700 hover:text-pink-500">
                BOARD OF DIRECTORS
              </a>
            </nav>
          </div>
        </aside>
    </div>
  );
};

export default DisabilityAccessibility;