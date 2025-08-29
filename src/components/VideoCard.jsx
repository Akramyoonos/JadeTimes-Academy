import React from 'react';

const VideoCard = ({ src, title, description }) => {
  return (
    <div className="relative bg-white shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 w-full sm:w-64 md:w-72 h-auto group">
      <div className="relative">
        <img
          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-500"
          src={src}
          alt={title}
        />
      </div>
      <div className="p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
