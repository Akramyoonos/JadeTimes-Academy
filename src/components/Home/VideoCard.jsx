import React from 'react';
import PropTypes from 'prop-types';

const VideoCard = ({ src, title, description, href = '#' }) => {
  return (
    // FIX: Changed the outer element to an anchor `<a>` tag.
    // This makes the entire card a single, semantic, and accessible clickable link.
    // The `group` class is now essential for coordinating hover effects.
    // Added `rounded-lg` for a modern look and `focus-within` for accessibility.
    <a
      href={href}
      className="group relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus-within:shadow-xl focus-within:scale-105 w-full"
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          src={src}
          alt={title} // Alt text should ideally be more descriptive if the image is meaningful
        />
        {/* FIX: Added a subtle overlay that appears on hover/focus.
            This improves visual feedback, especially on video thumbnails where a play icon might appear. */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>

      {/* FIX: Added flex-grow to this container.
          In a flex or grid layout, this ensures that the text area will expand,
          making all cards in a row the same height regardless of text length. */}
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          {title}
        </h2>
        {/* FIX: Added line-clamp to prevent overly long descriptions from breaking the layout.
            This truncates the text to 3 lines, adding "..." at the end.
            Note: Requires the `@tailwindcss/line-clamp` plugin. If not installed, this class can be removed. */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </a>
  );
};

// It's good practice to add all props to propTypes
VideoCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string, // Added href for the link
};

export default VideoCard;