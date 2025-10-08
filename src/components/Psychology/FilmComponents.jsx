import React from 'react';

export const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export const ChevronUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);

export const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.002v3.996a1 1 0 001.555.832l3.197-2.002a1 1 0 000-1.664l-3.197-1.996z" clipRule="evenodd" />
  </svg>
);

export const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

export const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const VideoModal = ({ videoId, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors">
                <CloseIcon />
            </button>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-120 object-contain"
                    title="YouTube video player"
                ></iframe>
            </div>
        </div>
    </div>
);