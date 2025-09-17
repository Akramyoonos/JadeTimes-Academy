import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

const allResults = [
    { id: 1, title: "Filmmaking Program", description: "Learn the art of visual storytelling.", category: "Programs" },
    { id: 2, title: "Acting for Film Workshop", description: "Develop your acting skills for the camera.", category: "Programs" },
    { id: 3, title: "Summer Teen Filmmaking Camp", description: "An intensive camp for young filmmakers.", category: "Youth Programs" },
    { id: 4, title: "Student Housing Guide", description: "Information on accommodation options.", category: "Student Resources" },
    { id: 5, title: "Blog: Interview with Director Jane Doe", description: "Insights from a renowned director.", category: "NYFA Academy Blog" },
    { id: 6, title: "New York City Campus Tour", description: "Explore our campus in the heart of NYC.", category: "Locations" },
    { id: 7, title: "Guest Speaker: John Smith, Cinematographer", description: "A session with award-winning cinematographer.", category: "Guests" },
    { id: 8, title: "Alumni Success Story: Award-Winning Producer", description: "Read about our successful alumni.", category: "Alumni" },
    { id: 9, title: "Photography Program", description: "Master the techniques of digital photography.", category: "Programs" },
    { id: 10, title: "Kids Animation Workshop", description: "Fun and creative animation for kids.", category: "Youth Programs" },
    { id: 11, title: "Financial Aid Resources", description: "Guidance on scholarships and grants.", category: "Student Resources" },
    { id: 12, title: "Blog: Top 5 Film Festivals", description: "Discover the best festivals for aspiring filmmakers.", category: "NYFA Academy Blog" },
    { id: 13, title: "Los Angeles Campus Facilities", description: "A look at our state-of-the-art facilities in LA.", category: "Locations" },
    { id: 14, title: "Guest Speaker: Mary Johnson, Screenwriter", description: "Tips and tricks from a professional screenwriter.", category: "Guests" },
    { id: 15, title: "Alumni Network Events", description: "Connect with fellow alumni at our exclusive events.", category: "Alumni" },
];

const SearchResultsPage = () => {
    const { searchQuery, setSearchQuery } = useSearch();
    const location = useLocation();
    const [displayedResults, setDisplayedResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("View all");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('query');
        if (query) {
            setSearchQuery(decodeURIComponent(query));
        }
    }, [location.search, setSearchQuery]);

    useEffect(() => {
        setLoading(true);
        const lowerCaseQuery = searchQuery.toLowerCase();

        const filteredByQuery = allResults.filter(result => 
            result.title.toLowerCase().includes(lowerCaseQuery) ||
            result.description.toLowerCase().includes(lowerCaseQuery)
        );

        const filteredByCategory = selectedCategory === "View all"
            ? filteredByQuery
            : filteredByQuery.filter(result => result.category === selectedCategory);

        setTimeout(() => {
            setDisplayedResults(filteredByCategory);
            setLoading(false);
        }, 500);
    }, [searchQuery, selectedCategory]);

    const getCategoryCount = (category) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filteredByQuery = allResults.filter(result => 
            result.title.toLowerCase().includes(lowerCaseQuery) ||
            result.description.toLowerCase().includes(lowerCaseQuery)
        );

        if (category === "View all") {
            return filteredByQuery.length;
        } else {
            return filteredByQuery.filter(result => result.category === category).length;
        }
    };

    const categories = [
        "View all", "Programs", "Youth Programs", "Student Resources", 
        "NYFA Academy Blog", "Locations", "Guests", "Alumni"
    ];

    return (
        <div className="bg-gray-100 my-12 font-sans min-h-screen">
            <div className="container px-4 py-8 relative">
                <h1 className="text-3xl font-bold text-center mb-8">SEARCH RESULTS</h1>

                <div className="max-w-5xl ml-22 bg-white p-6 rounded-lg shadow-md">
                    {/* Search Bar Section */}
                    <div className="flex items-center mb-6">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow border border-gray-300 p-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button 
                            onClick={() => {
                                if (searchQuery.trim()) {
                                    window.location.href = `#/search?query=${encodeURIComponent(searchQuery)}`;
                                }
                            }}
                            className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            SEARCH
                        </button>
                    </div>

                    {/* Search Results Info */}
                    {loading ? (
                        <p className="text-gray-600 mb-4">Loading results for "{searchQuery}"...</p>
                    ) : (
                        <p className="text-gray-600 mb-4">{displayedResults.length} results found for "<span className="font-semibold">{searchQuery}</span>"</p>
                    )}

                    {/* Search Results List */}
                    <div className="space-y-4">
                        {displayedResults.length > 0 ? (
                            displayedResults.map(result => (
                                <div key={result.id} className="border-b border-gray-200 pb-4">
                                    <h3 className="text-xl font-semibold text-blue-700"><a href="#">{result.title}</a></h3>
                                    <p className="text-gray-700">{result.description}</p>
                                </div>
                            ))
                        ) : (
                            !loading && <p className="text-gray-800 text-lg">No results found for "<span className="font-semibold">{searchQuery}</span>"</p>
                        )}
                    </div>

                    {/* Manage Consent Button (Example) */}
                    <button className="mt-8 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                        Manage consent
                    </button>
                </div>

                {/* Right Sidebar Section */}
                <div className="max-w-xs mx-auto md:ml-8 mt-8 md:mt-0 bg-white p-6 rounded-lg shadow-md md:absolute md:right-8 md:top-24">
                    {/* Filters Section */}
                    <h2 className="text-xl font-semibold mb-4">FILTERS</h2>
                    <div className="space-y-3">
                        {categories.map(category => (
                            <label key={category} className="flex items-center text-gray-700">
                                <input 
                                    type="radio" 
                                    name="filter" 
                                    className="form-radio h-4 w-4 text-blue-600"
                                    checked={selectedCategory === category}
                                    onChange={() => setSelectedCategory(category)}
                                />
                                <span className="ml-2">{category} ({getCategoryCount(category)})</span>
                            </label>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <h2 className="text-xl font-semibold mb-4">PROGRAM FINDER</h2>
                        <p className="text-gray-700 mb-4">Identify the program that is right for you.</p>
                        <a href="#" className="text-pink-600 font-semibold flex items-center hover:underline">
                            USE OUR PROGRAM FINDER
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultsPage;