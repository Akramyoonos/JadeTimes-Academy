import React from 'react';
import PropTypes from 'prop-types';
import HeadingBackground from '../../assets/Videos/VideoHeadingBgVideo.mp4';

const VideoHeading = ({ title, subtitle }) => {
  return (
    <div className="font-sans relative">
      {/*
        FIX: Using min-height instead of fixed height.
        This allows the container to grow if the text content wraps on small screens, preventing overflow.
        The heights have also been adjusted for a better mobile-first experience.
      */}
      <div className="relative w-full min-h-[220px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[400px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          // Adding a poster image is good practice for performance and initial load.
          // poster="/path/to/poster-image.jpg"
        >
          <source src={HeadingBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/*
          FIX: Added a base background color (bg-black).
          The bg-opacity utility requires a base color to work. This ensures a dark tint is applied,
          making the white text readable against potentially bright spots in the video.
        */}
        <div className="absolute inset-0  bg-opacity-50 sm:bg-opacity-60"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4 z-10">
          {/*
            FIX: Added max-w- to the heading to control line length and wrapping on mobile.
            Adjusted responsive text sizes for better hierarchy on smaller screens.
            The 'text-balance' class is a modern utility to prevent single "orphan" words on the last line of a heading.
          */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl text-balance">
            {title}
          </h1>
          <div className="mt-4 sm:mt-6 max-w-3xl mx-auto">
            {/* FIX: Adjusted responsive text sizes for better readability. */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-gray-200 text-balance">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Accent bar remains unchanged, as it's already responsive. */}
      <div className="h-2 bg-black w-full"></div>
    </div>
  );
};

VideoHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default VideoHeading;