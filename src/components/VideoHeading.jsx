import React from 'react';
import PropTypes from 'prop-types';
import HeadingBackground from '../assets/Videos/VideoHeadingBgVideo.mp4';

const VideoHeading = ({ title, subtitle }) => {
  return (
    <div className="font-sans relative">
      {/* Full-bleed video, perfectly pinned to all sides */}
      <div className="relative w-full h-72 sm:h-96 md:h-[500px] lg:h-[290px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={HeadingBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* optional overlay; add bg-black if you want a dark tint */}
        <div className="absolute inset-0 bg-opacity-50 sm:bg-opacity-60"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            {title}
          </h1>
          <div className="mt-6 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-gray-200">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* accent bar: now BLACK (was purple) */}
      <div className="h-2 bg-black w-full"></div>
    </div>
  );
};

VideoHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default VideoHeading;
