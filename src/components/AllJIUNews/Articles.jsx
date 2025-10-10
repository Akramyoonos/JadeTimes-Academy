import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../../assets/Images/AllJiuNewsImg01.webp';
import Image2 from '../../assets/Images/AllJiuNewsImg02.webp';
import Image3 from '../../assets/Images/AllJiuNewsImg03.webp';
import Image4 from '../../assets/Images/AllJiuNewsImg04.webp';
import Image5 from '../../assets/Images/AllJiuNewsImg05.webp';
import Image6 from '../../assets/Images/AllJiuNewsImg06.webp';
import Image7 from '../../assets/Images/AllJiuNewsImg07.webp';
import Image8 from '../../assets/Images/AllJiuNewsImg08.webp';
import Image9 from '../../assets/Images/AllJiuNewsImg09.webp';
import Image10 from '../../assets/Images/AllJiuNewsImg10.webp';
import Image11 from '../../assets/Images/AllJiuNewsImg11.webp';
import Image12 from '../../assets/Images/AllJiuNewsImg12.webp';
import Image13 from '../../assets/Images/AllJiuNewsImg13.webp';
import Image14 from '../../assets/Images/AllJiuNewsImg14.webp';
import Image15 from '../../assets/Images/AllJiuNewsImg15.webp';
import Image16 from '../../assets/Images/AllJiuNewsImg16.webp';
import Image17 from '../../assets/Images/AllJiuNewsImg17.webp';
import Image18 from '../../assets/Images/AllJiuNewsImg18.webp';
import Image19 from '../../assets/Images/AllJiuNewsImg19.webp';
import Image20 from '../../assets/Images/AllJiuNewsImg20.webp';
import Image21 from '../../assets/Images/AllJiuNewsImg21.webp';
import Image22 from '../../assets/Images/AllJiuNewsImg22.webp';
import Image23 from '../../assets/Images/AllJiuNewsImg23.webp';
import Image24 from '../../assets/Images/AllJiuNewsImg24.webp';
import Image25 from '../../assets/Images/AllJiuNewsImg25.webp';

const ArticleCard = ({ date, title, excerpt, image, imageAlt }) => {
    return (
        <div className="flex flex-col items-start py-6 border-b border-gray-200 md:flex-row last:border-b-0">
            <div className="flex-shrink-0 w-full h-40 mb-4 overflow-hidden bg-gray-100 md:w-72 md:mb-0 md:mr-6">
                <img
                    src={image}
                    alt={imageAlt}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex-grow w-full">
                <p className="mb-1 text-xs font-medium text-gray-500">{date}</p>
                <h2 className="mb-2 text-lg font-semibold text-gray-600 transition duration-150 cursor-pointer">
                    {title}
                </h2>
                <p className="text-base text-gray-600">
                    {excerpt}
                </p>
            </div>
        </div>
    );
};

const Articles = () => {
    const [activeTab, setActiveTab] = useState('articles');
    // Define the blog link URL as a constant for easy reuse and updates
    const blogUrl = "/blog";
    const JIUINTHENEWS = "/JIU-in-the-news/";

    

    // --- DATA ARRAYS ---
    const articlesData = [
        {
            date: '06/10/2025',
            title: 'Animation & Visual Effects. Is It the Right Career For You?',
            excerpt: "Matt Galuppo is currently the Chair of Media Arts at New York Film Academy's LA Campus. He has been working in entertainment for over 10 years, beginning his career as an intern on Inception.",
            image: Image1,
            imageAlt: 'Matt Galuppo - Animation & Visual Effects Career Secrets',
        },
        {
            date: '07/17/2025',
            title: 'Historic Win for NYFA Alum at Tribeca Film Festival: Mohamed Diab and Sarah Goher’s Happy Birthday Sweeps Three Awards',
            excerpt: 'Happy Birthday, co-written and produced by NYFA alum and board member Mohamed Diab and his wife, director and co-writer, Sarah Goher, became the first Egyptian film to win three major awards at the prestigious Tribeca Film Festival.',
            image: Image2,
            imageAlt: 'NYFA Alum Group Photo',
        },
        {
            date: '08/12/2025',
            title: 'The Cinematography of ‘The Gilded Age’ Brings the Old World Crashing Into the New',
            excerpt: 'Cinematographer Manuel Billeter tells IndieWire about expanding the scale and scope of the HBO series. The trick to making “The Gilded Age” even more transporting, according to cinematographer Manuel Billeter, has been to enhance our perspective both outwards and inwards.',
            image: Image3,
            imageAlt: 'NYFA Alum Group Photo',
        },
        {
            date: '07/16/2025',
            title: 'From ‘Awkward Black Girl’ to Mogul: Inside Issa Rae’s $20M Net Worth and Business Empire',
            excerpt: 'Issa Rae is one of the most influential creators of this generation. She made her mark on different platforms, from YouTube to HBO, by telling stories that reflect the real and often hilarious lives of Black women.',
            image: Image4,
            imageAlt: 'NYFA Alum Group Photo',
        },
        {
            date: '09/11/2024',
            title: 'Billeter Welcomed as New ASC Member',
            excerpt: 'The immersive communal experience of watching films in the cinema inspired Swiss-born Manuel Billeter, ASC to pursue a career in cinematography, driven by his admiration for filmmakers such as Michelangelo Antonioni, Federico Fellini and Bernardo Bertolucci.',
            image: Image5,
            imageAlt: 'NYFA Alum Group Photo',
        },
        {
            date: '05/11/2025',
            title: 'Emmy Winner Blanche Baker On The 5 Things You Need To Create A Highly Successful Career in TV and Film',
            excerpt: 'Blanche Baker’s feature films include Sixteen Candles, The Handmaid’s Tale with Robert Duvall, Raw Deal with Arnold Schwarzenegger and the Kevin Bacon HBO film Taking Chance.',
            image: Image6,
            imageAlt: 'NYFA Alum Group Photo',
        },
        {
            date: '04/30/2025',
            title: 'They shot their movie in 7 days for $7,000. They’re bringing it to theaters themselves',
            excerpt: 'When filmmaker Joe Burke talks about his microbudget indie film “Burt,” he can’t stop saying the word “magic.”',
            image: Image7,
            imageAlt: 'NYFA Alum Group Photo',
        },
        {
            date: '05/17/2025',
            title: 'Navigating the Future of Media Arts',
            excerpt: 'How are AI, diversity, and liberal arts reshaping the future of animation, visual effects, and game design careers?',
            image: Image8,
            imageAlt: 'NYFA Alum Group Photo',
        },
        {
            date: '04/28/2025',
            title: 'Screenwriter Career. Is It Right For You?',
            excerpt: 'On this episode of the Unboxing Careers Podcast, Greg Zakowicz unboxes a career as a screenwriter with Randall Dottin.',
            image: Image9,
            imageAlt: 'NYFA Alum Group Photo',
        },
        {
            date: '04/22/2025',
            title: 'New York Film Academy in Los Angeles Offers Summer Camps, Programs',
            excerpt: 'New York Film Academy in Los Angeles is hosting several summer camps for teenagers and kids, providing practical training in disciplines within the film, media and performing arts industries.',
            image: Image10,
            imageAlt: 'NYFA Alum Group Photo',
        },
    ];

    const videosData = [
        {
            date: '08/06/2025',
            title: 'What Do Managers Look For In An Actor? – Lynda Goodfriend',
            excerpt: "In this interview, Film Courage speaks with Creative Director for Acting for Film at New York Film Academy Los Angeles Lynda Goodfriend about what talent managers want.",
            image: Image11,
            imageAlt: 'Video Thumbnail 1',
        },
        {
            date: '06/22/2025',
            title: 'Pro Cinematographer On The Best Way To Learn Lighting – Suki Medencevic',
            excerpt: "Suki was born in Derventa, Bosnia and Herzegovina. While in high school he became interested in still photography but his real involvement in film started when he was accepted at The National Film School for Dramatic Arts, FDU, Belgrade, Yugoslavia.",
            image: Image12,
            imageAlt: 'Video Thumbnail 2',
        },
        {
            date: '07/01/2024',
            title: 'Kristy Cates on WICKED, the Tony Awards, & more',
            excerpt: "Kristy Cates is a professional actress who’s based in New York City. She made her Broadway debut in the original cast of the smash hit, WICKED, as the understudy to Idina Menzel, and can be heard on the iconic cast recording.",
            image: Image13,
            imageAlt: 'Video Thumbnail 3',
        },
        {
            date: '08/05/2025',
            title: 'Best Movies To Watch To Learn The Craft Of Filmmaking – Craig Caton-Largent',
            excerpt: "In this interview, Film Courage speaks with New York Film Academy visual effects artist and current Chair of 3D Animation & VFX Craig Caton-Largent on movies filmmakers should watch.",
            image: Image14,
            imageAlt: 'Video Thumbnail 4',
        },
        {
            date: '11/13/2024',
            title: 'How The Dinosaurs In Jurassic Park Were Created – Craig Caton-Largent',
            excerpt: "With over 40 years in the film industry, Craig Caton-Largent is a legendary visual effects artist and the current Chair of 3D Animation & VFX at New York Film Academy (NYFA) Los Angeles.",
            image: Image15,
            imageAlt: 'Video Thumbnail 5',
        },
        {
            date: '03/12/2025',
            title: 'What Beginning Cinematographers Should Know As They Get Started – Suki Medencevic, ASC',
            excerpt: "Suki was born in Derventa, Bosnia and Herzegovina. While in high school he became interested in still photography but his real involvement in film started when he was accepted at The National Film School for Dramatic Arts, FDU, Belgrade, Yugoslavia.",
            image: Image16,
            imageAlt: 'Video Thumbnail 6',
        },
        {
            date: '01/29/2025',
            title: 'What Does Conflict In Every Scene REALLY Mean? – Eric Conner',
            excerpt: "Eric has taught hundreds of aspiring storytellers at the New York Film Academy (LA), the Writer’s Store, the Animation Guild and Starcoach – China.",
            image: Image17,
            imageAlt: 'Video Thumbnail 7',
        },
        {
            date: '02/19/2025',
            title: 'Proven Strategies To Help Writers Generate Story Ideas – Eric Conner',
            excerpt: "Eric Conner has taught hundreds of aspiring storytellers at the New York Film Academy (LA), the Writer’s Store, the Animation Guild and Starcoach – China.",
            image: Image18,
            imageAlt: 'Video Thumbnail 8',
        },
    ];

    const audioData = [
        {
            date: '03/10/2025',
            title: 'Craig Caton: How 1 Film Changed The VFX Industry Forever',
            excerpt: "In this episode, Jamie sits down with Craig Caton-Largent, VFX artist and Chair of 3D Animation & VFX at the New York Film Academy (NYFA) Los Angeles, to discuss his incredible 45-year career in the VFX industry.",
            image: Image19,
            imageAlt: 'Audio Thumbnail 1',
        },
        {
            date: '10/25/2025',
            title: 'Communication and the Power of Improv with Lynda Goodfriend',
            excerpt: "Ever wonder how improv can change your life? In this HRchat episode Lynda Goodfriend joins Bill Banham to unpack the magic of acting and improv classes and how lessons can be taken into the office.",
            image: Image20,
            imageAlt: 'Audio Thumbnail 2',
        },
        {
            date: '08/18/2025',
            title: 'New York Film Academy Veteran On the Move',
            excerpt: "This episode of Veteran On the Move features Chris Moore, Director of Veteran Services at the New York Film Academy (NYFA) and a retired Command Sergeant Major.",
            image: Image21,
            imageAlt: 'Audio Thumbnail 3',
        },
        {
            date: '02/24/2025',
            title: 'Scene to Song Episode 119: Elphaba’s Journey in Wicked',
            excerpt: "In this episode, actress, Chair of Performing Arts at New York Film Academy, and original Wicked cast member Kristy Cates discusses Elphaba’s journey in Stephen Schwartz and Winnie Holzman’s 2003 musical Wicked.",
            image: Image22,
            imageAlt: 'Audio Thumbnail 4',
        },
        {
            date: '01/10/2025',
            title: 'What Hollywood Isn’t Telling YOU About Film School – with Michael Young⁠, President, & ⁠Sonny Calderon⁠, VP of Academic Affairs, ⁠New York Film Academy⁠',
            excerpt: "YOUR guests are Michael Young, President, & Sonny Calderon, VP of Academic Affairs, New York Film Academy",
            image: Image23,
            imageAlt: 'Audio Thumbnail 5',
        },
        {
            date: '02/11/2025',
            title: 'Lizzie Gottlieb School of Doc',
            excerpt: "In this episode, Lizzie Gottlieb shares her journey from theater directing to documentary filmmaking, discussing the challenges she encountered along the way.",
            image: Image24,
            imageAlt: 'Audio Thumbnail 6',
        },
        {
            date: '03/27/2025',
            title: 'New York Film Academy’s Lynda Goodfriend On “Happy Days” & More — “Paltrocast” Exclusive',
            excerpt: "New York Film Academy — commonly known as NYFA — was founded in 1992 by Jerry Sherlock, executive producer of 1990’s The Hunt For Red October, as an alternative to traditional university-based film schools.",
            image: Image25,
            imageAlt: 'Audio Thumbnail 7',
        },
    ];

    // FIX: Added the missing youtubeData array to resolve the 'not defined' error.
    const youtubeData = [
        {
            date: '09/01/2025',
            title: 'Campus Tour: New York Film Academy Los Angeles',
            excerpt: "Take a virtual tour of our state-of-the-art campus in the heart of the entertainment industry. See where our students learn the craft of filmmaking.",
            image: Image1, // Placeholder image
            imageAlt: 'NYFA Los Angeles campus tour video thumbnail',
        },
        {
            date: '09/15/2025',
            title: 'Guest Speaker Series: A Conversation with a Hollywood Director',
            excerpt: "Watch an exclusive Q&A session with a renowned Hollywood director, sharing insights and advice for aspiring filmmakers.",
            image: Image2, // Placeholder image
            imageAlt: 'Hollywood director guest speaker event',
        },
    ];

    // CONDITIONAL RENDERING: Select the data array based on the active tab
    let displayedArticles;
    if (activeTab === 'videos') {
        displayedArticles = videosData;
    } else if (activeTab === 'audio') {
        displayedArticles = audioData;
    } else if (activeTab === 'youtube') {
        displayedArticles = youtubeData;
    } else {
        displayedArticles = articlesData;
    }

    // Helper function to set tab styles
    const getTabClasses = (tabName) => {
        const isActive = activeTab === tabName;
        return `py-3 cursor-pointer transition duration-150 ${
            isActive
                ? 'text-black font-bold'
                : 'text-gray-500 hover:text-black'
        }`;
    };

    return (
        <div className="container px-4 mx-auto max-w-7xl">
            {/* Breadcrumbs and Blog Link with href */}
            <header className="flex flex-col items-start justify-between py-4 mt-5 text-sm font-semibold text-gray-500 uppercase sm:flex-row sm:items-center sm:text-md">
                <p className="mb-2 sm:mb-0">
                    <a href="/" className="text-black transition duration-150 cursor-pointer hover:underline">
                        JIU /
                    </a>
                    <a href={JIUINTHENEWS} className="text-black transition duration-150 cursor-pointer hover:underline">
                        JIU IN THE NEWS /
                    </a>
                    <span className="text-gray-400 cursor-default">
                        ALL JIU NEWS
                    </span>
                </p>
            </header>

            {/* Navigation Tabs and JIU Blogs Link */}
            <div className="relative flex flex-col items-start justify-between mt-10 border-b border-gray-300 md:flex-row md:items-end md:mt-20">
                {/* Navigation Tabs List */}
                <ul className="flex flex-wrap mt-6 mb-2 space-x-8 text-base font-semibold sm:space-x-10 md:space-x-20 lg:space-x-40 sm:text-lg">
                    {/* ARTICLES TAB */}
                    <li className="relative pb-4" onClick={() => setActiveTab('articles')}>
                        <a href="#" onClick={(e) => e.preventDefault()} className={getTabClasses('articles')}>
                            ARTICLES
                        </a>
                        {activeTab === 'articles' && (
                            <div className="absolute inset-x-0 bottom-0 h-1 mb-3 bg-blue-400"></div>
                        )}
                    </li>

                    {/* VIDEO CONTENT TAB */}
                    <li className="relative pb-4" onClick={() => setActiveTab('videos')}>
                        <a href="#" onClick={(e) => e.preventDefault()} className={getTabClasses('videos')}>
                            VIDEO CONTENT
                        </a>
                        {activeTab === 'videos' && (
                            <div className="absolute inset-x-0 bottom-0 h-1 mb-3 bg-blue-400"></div>
                        )}
                    </li>

                    {/* AUDIO CONTENT TAB */}
                    <li className="relative pb-4" onClick={() => setActiveTab('audio')}>
                        <a href="#" onClick={(e) => e.preventDefault()} className={getTabClasses('audio')}>
                            AUDIO CONTENT
                        </a>
                        {activeTab === 'audio' && (
                            <div className="absolute inset-x-0 bottom-0 h-1 mb-3 bg-blue-400"></div>
                        )}
                    </li>

                    {/* JIU YOUTUBE TAB */}
                    <li className="relative">
                        <a href="https://www.youtube.com/@Jadetimes-University" target="_blank" rel="noopener noreferrer" className={getTabClasses('youtube')}>
                            JIU YOUTUBE
                        </a>
                    </li>
                </ul>

                {/* JIU Blogs Link with href */}
                <a href={blogUrl} className="flex items-center mt-4 mb-2 text-lg font-semibold cursor-pointer text-black-600 md:mt-0">
                    <FontAwesomeIcon icon={faCalendarDays} className="mr-1" />
                    <span className="hover:underline">JIU Blogs</span>
                </a>
            </div>

            {/* Articles List */}
            <main className="mx-auto mt-8 max-w-7xl">
                {displayedArticles.map((article, index) => (
                    <ArticleCard
                        key={index}
                        date={article.date}
                        title={article.title}
                        excerpt={article.excerpt}
                        image={article.image}
                        imageAlt={article.imageAlt}
                    />
                ))}
            </main>
        </div>
    );
};

export default Articles;