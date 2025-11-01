import React, { useState, useEffect } from 'react';
import { FaPlay, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

// --- SVG Icons ---
const PlayIcon = () => <FaPlay className="w-10 h-10 text-white" />;
const ChevronLeftIcon = () => <FaChevronLeft className="w-6 h-6" />;
const ChevronRightIcon = () => <FaChevronRight className="w-6 h-6" />;
const CloseIcon = () => <FaTimes className="w-6 h-6" />;

// --- Helper Function to get YouTube Thumbnail ---
const getYoutubeThumbnail = (videoUrl) => {
    if (typeof videoUrl !== 'string') {
        return 'https://placehold.co/1280x720/000000/FFFFFF/png?text=Video';
    }
    const videoIdMatch = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([^&?#]+)/);
    return videoIdMatch ? `https://img.youtube.com/vi/${videoIdMatch[1]}/maxresdefault.jpg` : 'https://placehold.co/1280x720/000000/FFFFFF/png?text=Video';
};

const getYouTubeEmbedUrl = (videoUrl) => {
    if (typeof videoUrl !== 'string') return null;
    // Universal regex for YouTube URLs
    const videoIdMatch = videoUrl.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|shorts\/|live\/)?([a-zA-Z0-9_-]{11})/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1&rel=0` : null;
};

// --- Static Data for Conferences ---
const conferenceData = [
    {
        id: 1,
        videoUrl: "https://www.youtube.com/embed/Omuv_gtIV3I?si=CG-hskvFCYCCinuP",
        altText: "Dr. Manvendra Singh",
        videoDuration: "03:42",
        title: "Jadetimes International Research Conference 2025 | Dr. Manvendra Singh",
        date: "Starts on July 1st, 2025",
        mode: "Online & Hybrid Mode",
        description: "Join global professionals, scholars, and academics from the USA, Africa, India, and Finland in one of the most inspiring research gatherings of the year! Hosted by Jadetimes Media LLC (USA), this event offers the perfect platform to present your research, connect with peers, and gain valuable insights.",
        speakerTitle: "PROF. (DR.) MANVENDRA SINGH",
        speakerSubtitle: "ASSISTANT PROFESSOR, INDIA"
    },
    {
        id: 2,
        videoUrl: "https://www.youtube.com/embed/eWMewIaxjWo?si=DxlIqe93As0gz3lN",
        altText: "Avneet Gulati",
        videoDuration: "02:32",
        title: "Why I applied Jadetimes Research Conference?",
        date: "Starts on June 1st onwards, 2025",
        mode: "Online & Hybrid Mode",
        description: "Join global professionals, scholars, and academics...",
        speakerTitle: "AVNEET GULATI",
        speakerSubtitle: "PHD SCHOLAR"
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/embed/SPM2mNJH-IU?si=jIlxbqTeTfFdTfaa",
        altText: "Dr. Sumit Kumar Pandey",
        videoDuration: "01:13",
        title: "Jadetimes International Research Conference 2025 | Dr. Sumit Kumar Pandey",
        date: "Starts on June 1st, 2025",
        mode: "Online & Hybrid Mode",
        description: "Join global professionals, scholars, and academics...",
        speakerTitle: "DR. SUMIT KUMAR PANDEY",
        speakerSubtitle: "SPEAKER"
    },
    {
        id: 4,
        videoUrl: "https://www.youtube.com/embed/ZMN_rJLlif0?si=4c2F5yNWOaHlzwt6",
        altText: "Prof. Ceasar Dubor",
        videoDuration: '04:50',
        title: "Jadetimes International Research Conference 2025 | Prof. Ceasar Dubor",
        date: "Starts on June 1st, 2025",
        mode: "Online & Hybrid Mode",
        description: "Join global professionals, scholars, and academics...",
        speakerTitle: "PROF. CEASAR DUBOR",
        showBlackboxLogo: true
    },
    {
        id: 5,
        videoUrl: "https://www.youtube.com/embed/FKz0Fnk_TRM?si=bU6KJprWmQEV8q9g",
        altText: "Extra Speaker 1",
        videoDuration: '03:15',
        title: "Jadetimes International Research Conference 2025 | Extra Speaker 1",
        date: "Starts on November 1st, 2025",
        mode: "Online Mode",
        description: "Further insights into global research trends...",
        showBlackboxLogo: false,
        speakerTitle: "SPEAKER",
        speakerSubtitle: "SPEAKER"
    },
    {
        id: 6,
        videoUrl: "https://www.youtube.com/embed/dgDbQ65d0CE?si=viaopV9HPDTZXNld",
        altText: "Extra Speaker 2",
        videoDuration: '05:22',
        title: "Jadetimes International Research Conference 2025 | Extra Speaker 2",
        date: "Starts on December 10th, 2025",
        mode: "Hybrid Mode",
        description: "Advanced topics in academic collaboration...",
        showBlackboxLogo: true,
        speakerTitle: "SPEAKER",
        speakerSubtitle: "SPEAKER"
    },
    {
        id: 7,
        videoUrl: "https://www.youtube.com/embed/sXjSgIS4iu4?si=3D4gUE8Lp8O4WGWv",
        altText: "Extra Speaker 3",
        videoDuration: '02:48',
        title: "Jadetimes International Research Conference 2025 | Extra Speaker 3",
        date: "Starts on January 20th, 2026",
        mode: "Online & Hybrid Mode",
        description: "Future directions in interdisciplinary studies...",
        showBlackboxLogo: false,
        speakerTitle: "SPEAKER",
        speakerSubtitle: "SPEAKER"
    },
    {
        id: 8,
        videoUrl: "https://www.youtube.com/embed/UJKvoP-pgWU?si=BdItvRCwlUg9ZjVa",
        altText: "Extra Speaker 4",
        videoDuration: '06:00',
        title: "Jadetimes International Research Conference 2025 | Extra Speaker 4",
        date: "Starts on February 15th, 2026",
        mode: "Online Mode",
        description: "Cutting-edge research and its practical applications...",
        showBlackboxLogo: true,
        speakerTitle: "SPEAKER",
        speakerSubtitle: "SPEAKER"
    }
].map(conference => ({
    ...conference,
    embedUrl: getYouTubeEmbedUrl(conference.videoUrl)
}));

// --- Modal Component ---
const ConferenceModal = ({ conference, allConferences, onClose, onSelectNext }) => {
    if (!conference) return null;

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setIsPlaying(false);
    }, [conference]);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    // Find the index of the current conference to create the "Up Next" list
    const currentIndex = allConferences.findIndex(c => c.id === conference.id);
    const upNextConferences = [...allConferences.slice(currentIndex + 1), ...allConferences.slice(0, currentIndex)];

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col text-white font-sans"
            role="dialog"
            aria-modal="true"
            aria-labelledby="conference-modal-title"
        >
            {/* Header */}
            <header className="flex justify-between items-center w-full px-6 py-3 shrink-0">
                <h2 className="text-xl font-semibold">Jadetimes Conference</h2>
                <div className="flex items-center space-x-6">
                    <button onClick={onClose} className="hover:text-gray-300" aria-label="Close modal">
                        <CloseIcon />
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col lg:flex-row max-w-screen-2xl w-full mx-auto overflow-hidden">

                {/* Left Side: Video Player */}
                <div className="w-full lg:w-2/3 flex flex-col justify-center px-4 lg:px-6">
                    <div className="relative aspect-video bg-black rounded-lg flex items-center justify-center">
                        {isPlaying && conference.embedUrl ? (
                            <iframe
                                src={conference.embedUrl}
                                title={conference.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-lg"
                            ></iframe>
                        ) : (
                            <>
                                <img
                                    src={getYoutubeThumbnail(conference.videoUrl)}
                                    alt={conference.altText}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                                    <button onClick={handlePlay} className="bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:bg-white/50" aria-label="Play video">
                                        <FaPlay className="w-8 h-8 text-white" />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Side: Details & Up Next Queue */}
                <div className="w-full lg:w-1/3 flex flex-col p-4 lg:p-6 overflow-y-auto">
                    <div className="shrink-0">
                        <h3 id="conference-modal-title" className="text-xl lg:text-2xl font-bold">{conference.title}</h3>
                        <p className="text-sm text-gray-400 mt-2">Jadetimes • {conference.videoDuration}</p>
                        <p className="text-base text-gray-300 mt-4 font-light">
                            {conference.date} | {conference.mode}
                        </p>
                        <p className="text-base text-gray-300 mt-4 font-light">
                            {conference.description}
                        </p>
                    </div>

                    <div className="border-t border-gray-700 my-6"></div>

                    {/* Vertically Scrolling "Up Next" List */}
                    <div className="flex-1 overflow-y-auto space-y-4">
                        <p className="text-lg font-bold mb-2">Up Next</p>
                        {upNextConferences.map(item => (
                            <div key={item.id} className="flex items-center cursor-pointer group" onClick={() => onSelectNext(item)} role="button" tabIndex={0}>
                                <div className="relative w-40 h-24 shrink-0 mr-4">
                                    <img src={getYoutubeThumbnail(item.videoUrl)} alt={item.altText} className="w-full h-full object-cover rounded-lg" />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FaPlay className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-md line-clamp-2">{item.title}</p>
                                    <p className="text-xs text-gray-400">Jadetimes</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Individual Card Component in the Carousel ---
const ConferenceCard = ({ conference, onClick }) => (
    <div
        className="flex flex-col cursor-pointer group h-full"
        onClick={() => onClick(conference)}
    >
        <div className="relative mb-2">
            <img src={getYoutubeThumbnail(conference.videoUrl)} alt={conference.altText} className="w-full h-48 object-cover rounded-lg shadow-lg" />
            <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/40 backdrop-blur-sm rounded-full p-3" aria-label={`Play video: ${conference.title}`}>
                    <PlayIcon />
                </button>
            </div>
            {conference.videoDuration && (
                <span className="absolute bottom-2 right-2  bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {conference.videoDuration}
                </span>
            )}
        </div>
        <h3 className="text-md font-bold text-gray-800 mt-1 line-clamp-2">{conference.title}</h3>
        <p className="text-gray-500 text-sm">{conference.date}</p>
    </div>
);

// --- Main Carousel Component ---
const ConferencesSlides = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(4);
    const [selectedConference, setSelectedConference] = useState(null);

    // Update the number of cards to show based on screen width
    const updateCardsPerPage = () => {
        if (window.innerWidth >= 1280) return 4;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    useEffect(() => {
        const handleResize = () => {
            setCardsPerPage(updateCardsPerPage());
            setCurrentSlideIndex(0); // Reset slide index on resize
        };

        setCardsPerPage(updateCardsPerPage());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        const maxIndex = conferenceData.length - cardsPerPage;
        setCurrentSlideIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleCardClick = (conference) => {
        setSelectedConference(conference);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const handleCloseModal = () => {
        setSelectedConference(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <div className="bg-gray-50 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Jadetimes Conference</h2>
                    <div className="flex items-center space-x-2">
                        <button onClick={prevSlide} disabled={currentSlideIndex === 0} className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow" aria-label="Previous slide">
                            <ChevronLeftIcon />
                        </button>
                        <button onClick={nextSlide} disabled={currentSlideIndex >= conferenceData.length - cardsPerPage} className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow" aria-label="Next slide">
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlideIndex * (100 / cardsPerPage)}%)` }}
                    >
                        {conferenceData.map((conference) => (
                            <div key={conference.id} className="px-2" style={{ flex: `0 0 ${100 / cardsPerPage}%` }}>
                                <ConferenceCard conference={conference} onClick={handleCardClick} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedConference && (
                <ConferenceModal
                    conference={selectedConference}
                    allConferences={conferenceData}
                    onClose={handleCloseModal}
                    onSelectNext={setSelectedConference}
                />
            )}
        </div>
    );
};

export default ConferencesSlides;
