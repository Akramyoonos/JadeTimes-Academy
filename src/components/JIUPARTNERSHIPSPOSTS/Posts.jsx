import React, { useState } from 'react';
import { articles } from '../../data/partnershipPosts.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import local images
import AboutHeading from '../../assets/Images/AboutHeading.png';
import AboutWelcome from '../../assets/Images/AboutWelcome.jpeg';
import AlumniExplore01 from '../../assets/Images/AlumniExplore01.jpeg';
import AlumniExplore02 from '../../assets/Images/AlumniExplore02.jpeg';
import AlumniExplore03 from '../../assets/Images/AlumniExplore03.jpeg';
import BlogHeadingImg from '../../assets/Images/BlogHeadingImg.jpeg';
import BlogSearchImg from '../../assets/Images/BlogSearchImg.jpeg';
import Campus01 from '../../assets/Images/Campus01.jpeg';
import Campus02 from '../../assets/Images/Campus02.jpeg';

// Create a map from image names to imported images
const imageMap = {
    'AboutHeading.png': AboutHeading,
    'AboutWelcome.jpeg': AboutWelcome,
    'AlumniExplore01.jpeg': AlumniExplore01,
    'AlumniExplore02.jpeg': AlumniExplore02,
    'AlumniExplore03.jpeg': AlumniExplore03,
    'BlogHeadingImg.jpeg': BlogHeadingImg,
    'BlogSearchImg.jpeg': BlogSearchImg,
    'Campus01.jpeg': Campus01,
    'Campus02.jpeg': Campus02,
};

// Reusable Components


const ArticleCard = ({ date, title, description, imageUrl, imageAlt }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ease-in-out group">
    <div className="overflow-hidden">
        <img src={imageMap[imageUrl]} alt={imageAlt} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <span className="text-xs text-purple-600 uppercase font-bold tracking-wider">{date}</span>
      <h3 className="mt-2 text-xl font-bold text-gray-900 leading-tight h-20">{title}</h3>
      <p className="mt-3 text-gray-600 text-sm line-clamp-3 h-16">{description}</p>
      <a href="#learn-more" className="mt-4 inline-block text-purple-600 hover:text-purple-800 text-sm font-bold group">
        LEARN MORE <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </a>
    </div>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container mx-auto px-4 py-12 flex justify-center items-center space-x-2">
            <button 
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-transparent transition-colors duration-200"
                aria-label="Previous page"
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {pageNumbers.map(number => (
                <button 
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`w-10 h-10 rounded-full font-semibold flex items-center justify-center transition-colors duration-200 ${
                        currentPage === number 
                        ? 'bg-purple-600 text-white' 
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                    aria-current={currentPage === number ? 'page' : undefined}
                >
                    {number}
                </button>
            ))}
            <button 
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-transparent transition-colors duration-200"
                aria-label="Next page"
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

const Footer = () => (
  <footer className="bg-blue-50 text-black py-24">
    <div className="container mx-auto px-24 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-6 md:mb-0">
        <h2 className="text-4xl font-semibold tracking-wider">FOLLOW US</h2>
      </div>
      <div className="flex space-x-6">
        <a href="#facebook" className="hover:text-purple-400 transition-colors duration-200" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
        <a href="#twitter" className="hover:text-purple-400 transition-colors duration-200" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
        <a href="#youtube" className="hover:text-purple-400 transition-colors duration-200" aria-label="Youtube"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
        <a href="#instagram" className="hover:text-purple-400 transition-colors duration-200" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
        <a href="#pinterest" className="hover:text-purple-400 transition-colors duration-200" aria-label="Pinterest"><FontAwesomeIcon icon={faPinterestP} size="lg" /></a>
        <a href="#linkedin" className="hover:text-purple-400 transition-colors duration-200" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
      </div>
    </div>
  </footer>
);

function Posts() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(articles.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    }

    return (
        <div className="font-sans bg-gray-100">
         
            
            <main className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {currentPosts.map((article, index) => (
                        <ArticleCard
                            key={index}
                            date={article.date}
                            title={article.title}
                            description={article.description}
                            imageUrl={article.imageUrl}
                            imageAlt={article.imageAlt}
                        />
                    ))}
                </div>
            </main>

            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            
            <Footer />
        </div>
    );
}

export default Posts;