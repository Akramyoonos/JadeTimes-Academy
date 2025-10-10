
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";

const PromoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "FKz0Fnk_TRM";
  const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlayClick = () => setIsPlaying(true);
  const handleClose = () => setIsPlaying(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isPlaying) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]);

  return (
    <div className="w-full flex  my-12 px-4 sm:px-0 md:px-38">
      {/* Thumbnail */}
      {!isPlaying && (
        <figure className="relative overflow-hidden shadow-2xl group w-full max-w-4xl">
          <img
            alt="New York Film Academy"
            src={videoThumbnail}
            className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-300" />

          <button
            aria-label="Play video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-20 h-20 rounded-full border-4 border-white flex items-center 
                       justify-center text-white text-3xl cursor-pointer 
                       bg-black/60 hover:bg-blue-600/80 transition-all duration-300 
                       transform group-hover:scale-110 shadow-lg"
            onClick={handlePlayClick}
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </figure>
      )}

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={handleClose}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-red-400"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <iframe
              className="w-full aspect-video rounded-lg shadow-2xl"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Promo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PromoVideo;
