import React from 'react';
import BlogSearchImg from '../../assets/Images/BlogSearchImg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';


  const BlogPostCard = ({ image, category, date, title, author }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p className="font-semibold text-purple-600">{category.toUpperCase()}</p>
          <p>{date}</p>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4 h-20">{title}</h3>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">By <span className="font-medium">{author}</span></p>
          <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors duration-300 group-hover:translate-x-1">
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );

const BlogSearch = () => {
 


  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
 
        
              {/* Main Content */}
              <main className="mt-12">
                  {/* Featured Blog Post */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-3">
                      <img src={BlogSearchImg} alt="Andre Royo speaking at a New York Film Academy event" className="rounded-lg shadow-2xl w-full h-auto object-cover"/>
                    </div>
                    <div className="lg:col-span-2">
                    <p className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">GUEST SPEAKER</p>
                      <p className="text-sm text-gray-500 font-semibold tracking-wider mt-4">FEBRUARY 27, 2025</p>
                      <h1 className="text-4xl lg:text-5xl font-bold mt-2 leading-tight text-gray-900">Andre Royo Inspires NYFA Students</h1>
                      <p className="text-gray-600 leading-relaxed mt-6">
                        In an inspiring and thought-provoking guest speaker event, renowned actor Andre Royo visited the New York Film Academy (NYFA) at the New York City campus to offer students and faculty...
                      </p>
                      <a href="#" className="text-white bg-purple-600 hover:bg-purple-700 font-semibold tracking-wider mt-8 inline-flex items-center py-3 px-6 rounded-md transition-transform transform hover:scale-105 text-sm shadow-lg">
                        LEARN MORE <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                      </a>
                    </div>
                  </div>
        
                {/* Explore Blog Section */}
                <div className="mt-24 mb-16">
                  <div className="flex items-center space-x-4 mb-12">
                    <div className="w-2 h-12 bg-purple-600 rounded-full"></div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Explore Our Blog</h2>
                  </div>
        
                </div>
              </main>
            </div>
          </div>
          );
}

export default BlogSearch;