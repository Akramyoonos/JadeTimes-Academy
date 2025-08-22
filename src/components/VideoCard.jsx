import React from 'react';

const VideoCard = ({ src, title, description }) => {
  return (
    <div className="relative bg-white shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 h-190 w-130 group">
      <div className="relative">
        <img
          className="w-full h-120 object-cover transition-all duration-500"
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
