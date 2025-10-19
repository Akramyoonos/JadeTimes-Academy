import React, { useEffect, useState, useMemo } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import { allPagesContent } from '../utils/pageContent';
import withFadeIn from '../components/HOC/withFadeIn'

const SearchResultsPage = () => {
    const { searchQuery, setSearchQuery } = useSearch();
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("View all");
    const [inputValue, setInputValue] = useState(searchQuery);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('query');
        if (query) {
            const decodedQuery = decodeURIComponent(query);
            setSearchQuery(decodedQuery);
            setInputValue(decodedQuery);
        }
    }, [location.search, setSearchQuery]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchQuery(inputValue);
            if (inputValue.trim()) {
                navigate(`/search?query=${encodeURIComponent(inputValue)}`);
            }
        }, 300); // 300ms debounce

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue, setSearchQuery, navigate]);

    const filteredByQuery = useMemo(() => {
        setLoading(true);
        const lowerCaseQuery = searchQuery.toLowerCase();
        const results = allPagesContent.filter(result =>
            result.title.toLowerCase().includes(lowerCaseQuery) ||
            result.description.toLowerCase().includes(lowerCaseQuery)
        );
        setLoading(false);
        return results;
    }, [searchQuery]);

    const displayedResults = useMemo(() => {
        if (selectedCategory === "View all") {
            return filteredByQuery;
        }
        return filteredByQuery.filter(result => result.category === selectedCategory);
    }, [filteredByQuery, selectedCategory]);

    const categories = useMemo(() => {
        const allCategories = new Set(filteredByQuery.map(result => result.category));
        return ["View all", ...allCategories];
    }, [filteredByQuery]);

    const getCategoryCount = (category) => {
        if (category === "View all") {
            return filteredByQuery.length;
        }
        return filteredByQuery.filter(result => result.category === category).length;
    };

    const handleClearSearch = () => {
        setInputValue('');
        setSearchQuery('');
        navigate('/search');
    };

    return (
        <div className="bg-gray-100 my-12 font-sans min-h-screen">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <h1 className="text-3xl font-bold text-center mb-8">SEARCH RESULTS</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            {/* Search Bar Section */}
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {inputValue && (
                                    <button
                                        onClick={handleClearSearch}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                                    >
                                        &#x2715;
                                    </button>
                                )}
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
                                            <h3 className="text-xl font-semibold text-blue-700 hover:underline">
                                                <Link to={result.url}>{result.title}</Link>
                                            </h3>
                                            <p className="text-gray-700">{result.description}</p>
                                        </div>
                                    ))
                                ) : (
                                    !loading && <p className="text-gray-800 text-lg">No results found. Try a different search term.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar Section */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            {/* Filters Section */}
                            <h2 className="text-xl font-semibold mb-4">FILTERS</h2>
                            <div className="space-y-3">
                                {categories.map(category => (
                                    <label key={category} className="flex items-center text-gray-700 cursor-pointer">
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
                                <Link to="/programfinder/" className="text-pink-600 font-semibold flex items-center hover:underline">
                                    USE OUR PROGRAM FINDER
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FadedSearchResultsPage = withFadeIn(SearchResultsPage);
export default FadedSearchResultsPage;
