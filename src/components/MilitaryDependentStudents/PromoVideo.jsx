import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';

const PromoVideo = ({ videoUrl, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => setIsPlaying(true);
  const handleClose = () => setIsPlaying(false);

  // Default thumbnail if none provided
  const finalThumbnailUrl = thumbnailUrl || "https://img.youtube.com/vi/FKz0Fnk_TRM/maxresdefault.jpg";
  const finalVideoUrl = videoUrl || "https://www.youtube.com/embed/FKz0Fnk_TRM?si=bU6KJprWmQEV8q9g";
  const autoplaySrc = finalVideoUrl.includes('?') ? `${finalVideoUrl}&autoplay=1` : `${finalVideoUrl}?autoplay=1`;

  return (
    <div className="bg-white font-sans flex flex-col items-center justify-center p-4 lg:p-26">
      {/* Main Video Section */}
      <main className="w-full flex flex-col pl-6">
        {/* Thumbnail */}
        {!isPlaying && (
          <div 
            className="relative overflow-hidden shadow-lg  group w-full max-w-4xl cursor-pointer"
            onClick={handlePlayClick}
          >
            <img
              alt="Video Thumbnail"
              src={finalThumbnailUrl}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                aria-label="Play video"
                className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center text-white text-4xl bg-transparent hover:bg-white/20 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPlay} className="h-12 w-12" />
              </button>
            </div>
          </div>
        )}

        {/* Caption (conditionally rendered) */}
        {!isPlaying && (
          <p className="mt-4 text-lg italic text-gray-600 max-w-4xl text-center">
            NYFA does not represent that these are typical or guaranteed career outcomes. 
            The success of our graduates depends on multiple factors, including hard work, 
            perseverance, and talent.
          </p>
        )}

        {/* Video Modal */}
        {isPlaying && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-5xl">
              <button
                onClick={handleClose}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-red-500 transition-colors"
                aria-label="Close video"
              >
                <FontAwesomeIcon icon={faTimes} className="h-8 w-8" />
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-126 rounded-lg shadow-2xl"
                  src="https://www.youtube.com/embed/FKz0Fnk_TRM?si=bU6KJprWmQEV8q9g"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PromoVideo;