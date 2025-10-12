
import React from "react";
import video1 from "../../assets/Images/AboutHeading.Webp";
import video2 from "../../assets/Images/AboutHeading.Webp";
import video3 from "../../assets/Images/AboutHeading.Webp";
import video4 from "../../assets/Images/AboutHeading.Webp";

const videos = [
  {
    img: video1,
    source: "Film Courage",
    title: "WHAT DO MANAGERS LOOK FOR IN AN ACTOR? – LYNDA GOODFRIEND",
  },
  {
    img: video2,
    source: "Film Courage",
    title: "PRO CINEMATOGRAPHER ON THE BEST WAY TO LEARN LIGHTING – SUKI MEDENCEVIC",
  },
  {
    img: video3,
    source: "Kare Reviews",
    title: "KRISTY CATES ON WICKED, THE TONY AWARDS, & MORE",
  },
  {
    img: video4,
    source: "Film Courage",
    title: "BEST MOVIES TO WATCH TO LEARN THE CRAFT OF FILMMAKING – CRAIG CATON-LARGENT",
  },
];

const VideoSection = () => {
  return (
    <div className="bg-white py-12">
      {/* Heading */}
      <div className="px-6 sm:px-6 md:px-6 lg:px-35 text-center">
        <div className="flex items-center  mb-10">
          <div className="w-1 h-10 bg-pink-500 mr-3"></div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            VIDEO – TIPS, TRICKS, INTERVIEWS, AND INSIDER STORIES
          </h3>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {videos.map((video, idx) => (
          <div key={idx} className="text-center">
            <img
              src={video.img}
              alt={video.title}
              className="w-full h-48 object-cover "
            />
            <p className="mt-3 text-sm text-gray-500">{video.source}</p>
            <h4 className="text-md font-semibold text-gray-900 mt-1 uppercase">
              {video.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
