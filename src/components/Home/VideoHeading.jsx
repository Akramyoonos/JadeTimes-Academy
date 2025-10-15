import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import SlideImg01 from '../../assets/Images/SlideImg01.webp';
import SlideImg02 from '../../assets/Images/SlideImg02.webp';
import SlideImg03 from '../../assets/Images/SlideImg03.webp';
import SlideImg04 from '../../assets/Images/SlideImg04.webp';

const images = [SlideImg01, SlideImg02, SlideImg03, SlideImg04];

const VideoHeading = ({ title, subtitle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 60000); // 1 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans relative">
      <div className="relative w-full min-h-[220px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[400px] overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}

        <div className="absolute inset-0 bg-opacity-50 sm:bg-opacity-60"></div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-4 z-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl text-balance"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <motion.div 
            className="mt-4 sm:mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-gray-200 text-balance">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default VideoHeading;
