import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

import { allPagesContent } from '../utils/pageContent';

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

        const filteredByQuery = allPagesContent.filter(result => 
            result.title.toLowerCase().includes(lowerCaseQuery) ||
            result.description.toLowerCase().includes(lowerCaseQuery)
        );

        const filteredByCategory = selectedCategory === "View all"
            ? filteredByQuery
            : filteredByQuery.filter(result => result.category === selectedCategory);

        setDisplayedResults(filteredByCategory);
        setLoading(false);
    }, [searchQuery, selectedCategory]);

    const getCategoryCount = (category) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filteredByQuery = allPagesContent.filter(result => 
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
        "View all", "Page"
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
                                    <h3 className="text-xl font-semibold text-blue-700"><Link to={result.url}>{result.title}</Link></h3>
                                    <p className="text-gray-700">{result.description}</p>
                                </div>
                            ))
                        ) : (
                            !loading && <p className="text-gray-800 text-lg">No results found for "<span className="font-semibold">{searchQuery}</span>"</p>
                        )}
                    </div>
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