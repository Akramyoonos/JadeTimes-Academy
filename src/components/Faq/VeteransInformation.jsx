import React, { useState, useEffect } from 'react';

// Data for the FAQ section
const faqData = [
    { question: "If I have used my GI Bill at another institution, what do I need to do?", answer: "If you are a veteran transfer student, you will need to fill out the online change of program/training form VA 22-1995. The online 22-1995 form is available at the GI Bill website: https://www.va.gov/education/change-gi-bill-benefits/" },
    { question: "I want to change my degree and/or major. What do I need to do?", answer: "To change your degree or major, you should first meet with your academic advisor to discuss the new program requirements. Afterwards, you will need to submit a 'Change of Major' form to the registrar's office." },
    { question: "When will I receive my basic housing allowance and book stipend?", answer: "Your housing allowance and book stipend are typically processed by the VA after your school certifies your enrollment. This can take several weeks at the beginning of a semester, so it's important to be prepared for potential delays." },
    { question: "Can I apply for financial aid in addition to the GI Bill?", answer: "Yes, you are encouraged to apply for federal financial aid by filling out the FAFSA (Free Application for Federal Student Aid). Your GI Bill benefits are generally not counted as income, so you may be eligible for grants, scholarships, or loans." },
    { question: "What is 'break pay'?", answer: "Break pay is the housing allowance you may receive during breaks between school sessions (e.g., winter or summer break). The VA has specific rules regarding break pay, and eligibility can depend on the length of the break and your enrollment status." },
    { question: "How do I apply for VA education benefits?", answer: "You can apply for VA education benefits online through the VA's official website at https://www.va.gov/education/how-to-apply/." },
    { question: "What is the Yellow Ribbon Program?", answer: "The Yellow Ribbon Program can help you pay for higher out-of-state, private school, or graduate school tuition and fees that the Post-9/11 GI Bill doesn’t cover. Keep in mind that not all schools participate in this program, so you must check with your institution." },
    { question: "How long do I have to use my GI Bill benefits?", answer: "Generally, you have 10 to 15 years to use your GI Bill benefits, depending on which benefit you are using and when you separated from the military. Recent changes under the 'Forever GI Bill' have removed the time limit for some veterans." },
    { question: "Can I use my GI Bill for a study abroad program?", answer: "Yes, you can use your GI Bill for a study abroad program, as long as the program is approved for VA benefits. You should check with your school’s study abroad office and the VA to ensure the program is eligible." },
    { question: "What happens if I fail a class while using my GI Bill?", answer: "If you fail a class, the VA may require you to repay the money you received for that class. However, if the failure was due to mitigating circumstances, you may be able to request a waiver to avoid repayment." },
    { question: "Can I use my GI Bill for flight training?", answer: "Yes, you can use the Post-9/11 GI Bill for flight training. However, there are specific requirements and limitations, so you should check with the VA for more information on approved programs and reimbursement rates." },
    { question: "What is the difference between the Post-9/11 GI Bill and the Montgomery GI Bill?", answer: "The Post-9/11 GI Bill provides up to 36 months of education benefits, including tuition and fees paid directly to the school, a monthly housing allowance, and a stipend for books. The Montgomery GI Bill provides a fixed monthly benefit amount paid directly to the student for a set number of months." },
    { question: "Can I transfer my GI Bill benefits to my spouse or children?", answer: "If you are eligible for the Post-9/11 GI Bill and meet specific service requirements, you may be able to transfer your benefits to your spouse or dependent children through the Transfer of Entitlement program." },
    { question: "How do I find out how much of my GI Bill I have left?", answer: "You can check your remaining GI Bill entitlement by logging into the VA's eBenefits website or by requesting a Certificate of Eligibility (COE) from the VA." }
];

// --- 1. Reusable Pagination Component ---
// In a real project, this would typically be in its own file (e.g., Pagination.js)
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pageNumbers = [];
        const pageRangeDisplayed = 1;
        
        if (totalPages > 0) pageNumbers.push(1);
        if (currentPage > pageRangeDisplayed + 2) pageNumbers.push('...');
        for (let i = Math.max(2, currentPage - pageRangeDisplayed); i <= Math.min(totalPages - 1, currentPage + pageRangeDisplayed); i++) {
            pageNumbers.push(i);
        }
        if (currentPage < totalPages - (pageRangeDisplayed + 1)) pageNumbers.push('...');
        if (totalPages > 1) pageNumbers.push(totalPages);
        return pageNumbers;
    };

    if (totalPages <= 1) return null;

    const pages = getPageNumbers();

    return (
        <nav className="flex justify-center items-center space-x-4 mt-12" aria-label="Pagination">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="text-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <ul className="flex items-center space-x-2">
                {pages.map((page, index) => (
                    <li key={index}>
                        {page === '...' ? (
                            <span className="px-4 py-2 text-gray-700">...</span>
                        ) : (
                            <button
                                onClick={() => onPageChange(page)}
                                className={`flex items-center justify-center h-9 w-9 rounded-full text-sm font-medium transition-colors duration-200 ${
                                    currentPage === page ? 'ring-2 ring-purple-500 text-purple-600' : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {page}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="text-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </nav>
    );
};


// --- 2. FAQ Item Component ---
const FaqItem = ({ faq, searchQuery }) => {
    const [isOpen, setIsOpen] = useState(false);

    const getHighlightedText = (text, highlight) => {
        if (!highlight.trim()) { return <span>{text}</span>; }
        const regex = new RegExp(`(${highlight})`, 'gi');
        const parts = text.split(regex);
        return (
            <span>
                {parts.map((part, i) =>
                    regex.test(part) ? (
                        <span key={i} className="bg-sky-100 text-sky-800 font-semibold rounded-md px-1">{part}</span>
                    ) : (part)
                )}
            </span>
        );
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <details className="p-4" onToggle={(e) => setIsOpen(e.currentTarget.open)}>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h2 className="text-lg font-medium text-gray-800">{getHighlightedText(faq.question, searchQuery)}</h2>
                    <span className={`text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed">
                    <p>{getHighlightedText(faq.answer, searchQuery)}</p>
                </div>
            </details>
        </div>
    );
};


// --- 3. Main Page Component ---
const VeteransInformation = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredFaq, setFilteredFaq] = useState(faqData);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Set how many FAQ items you want per page

    useEffect(() => {
        const filtered = faqData.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredFaq(filtered);
        setCurrentPage(1); // Reset to the first page whenever the search query changes
    }, [searchQuery]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Pagination logic: calculate the items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFaqs = filteredFaq.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredFaq.length / itemsPerPage);

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container pl-12 px-4 py-12">


                {/* Search Bar */}
                <div className="mb-12">
                    <div className="relative flex w-full max-w-2xl mx-auto">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search for questions..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:flex lg:space-x-12">
                    {/* FAQ List and Pagination */}
                    <div className="lg:w-3/4">
                        <div className="space-y-4">
                            {currentFaqs.length > 0 ? (
                                currentFaqs.map((faq, index) => (
                                    <FaqItem key={index} faq={faq} searchQuery={searchQuery} />
                                ))
                            ) : (
                                <p className="text-center text-gray-500 py-10">No results found for your search.</p>
                            )}
                        </div>
                        
                        <Pagination 
                           currentPage={currentPage}
                           totalPages={totalPages}
                           onPageChange={(page) => setCurrentPage(page)}
                        />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/4 mt-12 lg:mt-0">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-4 text-gray-800">In This Section</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">International Students</a></li>
                                <li><a href="#" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">Facilities</a></li>
                                <li><a href="#" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">Accommodation</a></li>
                                <li><a href="#" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">Admissions</a></li>
                                <li><a href="#" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">Finances</a></li>
                                <li><a href="#" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">Programs</a></li>
                                <li><a href="#" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">Veterans</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 4. Main App Component to Render the Page ---
// This is the root component for your application.
function App() {
  return (
    <VeteransInformation />
  );
}

export default App;