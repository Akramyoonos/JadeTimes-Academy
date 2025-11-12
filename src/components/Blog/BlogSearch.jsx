import React, { useState } from 'react';
import { blogPosts } from '../../data/blogPosts';

const PostCard = ({ post }) => {
    const { imageUrl, date, category, title, excerpt, articleUrl } = post;
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-6 flex flex-col grow">
                <p className="text-sm font-semibold text-purple-600 tracking-wider uppercase">{category}</p>
                <p className="text-xs text-gray-500 font-medium mt-1">{date}</p>
                <h3 className="text-xl font-bold text-gray-900 mt-3">{title}</h3>
                <p className="text-gray-600 text-sm mt-2 grow">{excerpt}</p>
                <a href={articleUrl} className="text-purple-700 font-bold text-sm mt-4 inline-block group self-start">
                    READ MORE
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"> &rarr;</span>
                </a>
            </div>
        </div>
    );
};

const BlogSearch = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleButtonClick = (index) => {
        if (index !== currentIndex) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(index);
                setIsAnimating(false);
            }, 300);
        }
    };

    const currentPost = blogPosts[currentIndex];
    const { imageUrl, date, category, title, excerpt, articleUrl } = currentPost;

    return (
        <div className="bg-gray-50 font-sans">
            <div className="max-w-full mx-auto px-12">
                {/* Added `relative` to make this the positioning context for the absolute-positioned mobile menu */}
                <header className="relative py-6 mb-8 flex justify-between items-center">
                    <nav className="hidden md:flex space-x-8 text-lg font-semibold text-gray-600 tracking-wider">
                        <a href="#" className="pb-1 border-b-4 border-transparent hover:border-purple-600 transition-colors duration-300">FILMMAKING</a>
                        <a href="#" className="pb-1 border-b-4 border-transparent hover:border-purple-600 transition-colors duration-300">MEDIA ARTS</a>
                        <a href="#" className="pb-1 border-b-4 border-transparent hover:border-purple-600 transition-colors duration-300">PERFORMING ARTS</a>
                        <a href="#" className="pb-1 border-b-4 border-transparent hover:border-purple-600 transition-colors duration-300">RECENT</a>
                        <a href="#" className="pb-1 border-b-4 border-transparent hover:border-purple-600 transition-colors duration-300">ALUM HIGHLIGHTS</a>
                        <a href="#" className="pb-1 border-b-4 border-transparent hover:border-purple-600 transition-colors duration-300">GUEST SPEAKERS</a>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="border border-gray-300 p-2 text-lg font-medium text-gray-700 flex items-center hover:bg-gray-100 transition-colors duration-300 rounded-md"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMenuOpen ? (
                                // Close Icon (X)
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile menu panel with smooth transition */}
                    <div
                        id="mobile-menu"
                        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
                    >
                        <nav className="flex flex-col space-y-2 text-lg font-semibold text-gray-600 tracking-wider p-4">
                            <a href="#" className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-300">FILMMAKING</a>
                            <a href="#" className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-300">MEDIA ARTS</a>
                            <a href="#" className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-300">PERFORMING ARTS</a>
                            <a href="#" className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-300">RECENT</a>
                            <a href="#" className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-300">ALUM HIGHLIGHTS</a>
                            <a href="#" className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-300">GUEST SPEAKERS</a>
                        </nav>
                    </div>
                </header>

                <main className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-3 relative overflow-hidden rounded-lg shadow-2xl group">
                            <img
                                src={imageUrl}
                                alt={title}
                                className="w-full h-[400px] md:h-[550px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/75 to-transparent"></div>
                        </div>

                        <div className="lg:col-span-2">
                            <p className="text-sm font-semibold text-purple-600 tracking-wider uppercase">{category}</p>
                            <p className="text-xs text-gray-500 font-medium mt-2">{date}</p>
                            <h1 className="text-3xl font-bold text-gray-900 leading-tight mt-4">
                                {title}
                            </h1>
                            <p className="text-gray-700 text-base leading-relaxed mt-4">
                                {excerpt}
                            </p>
                            <a href={articleUrl} className="text-purple-700 font-bold text-sm mt-6 inline-block group">
                                READ MORE
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"> &rarr;</span>
                            </a>
                            <div className="flex items-center space-x-3 mt-8">
                                {blogPosts.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleButtonClick(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-purple-400'}`}
                                        aria-label={`Go to post ${index + 1}`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BlogSearch;