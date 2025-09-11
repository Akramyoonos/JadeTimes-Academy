import React, { useState } from "react";

const PromoVideo = ({ videoUrl, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => setIsPlaying(true);
  const handleClose = () => setIsPlaying(false);

  // Default thumbnail if none provided
  const finalThumbnailUrl = thumbnailUrl || "https://img.youtube.com/vi/FKz0Fnk_TRM/maxresdefault.jpg";

  return (
    <div className="bg-white font-sans flex flex-col items-center justify-center p-4 lg:p-12">
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full rounded-lg shadow-2xl"
                  src={`${videoUrl}?autoplay=1`}
                  title="Promo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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