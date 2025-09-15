// src/components/FeaturedVideo.jsx
import React from "react";

const FeaturedVideo = () => {
  return (
    <div className="w-full bg-white py-10 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold flex items-center">
          <span className="w-1 h-6 bg-purple-500 mr-3"></span>
          FEATURED NYFA YOUTUBE VIDEO
        </h2>
        <p className="text-gray-600 mt-2">
          Here are 3 tips for short filmmakers with NYFA’s Senior Director of
          Film Festivals, Crickett Rumley!
        </p>
      </div>

    
      <div className="w-full flex justify-center">
        <div className="w-full md:w-4/5 lg:w-3/4 aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/FKz0Fnk_TRM"
            title="Featured NYFA YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
