import React from 'react';
import aboutHeading from '../../../assets/Images/AboutHeading.Webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faSnapchatGhost, faPinterest } from '@fortawesome/free-brands-svg-icons';


const CardsData8Article = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=FKz0Fnk_TRM';
  const videoThumbnail = 'https://img.youtube.com/vi/FKz0Fnk_TRM/maxresdefault.jpg';

  const handlePlayClick = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };


    return (
        <div className=" font-sans ">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 ">
                <article className= "">
                    <figure className="mb-20 relative  overflow-hidden shadow-2xl group">
              <img
                alt="JadeTimes Academy"
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                src={videoThumbnail}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
              <button
                aria-label="Play video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24  border-4 border-white flex items-center justify-center text-white text-4xl cursor-pointer bg-black/60 hover:bg-blue-600/80 transition-all duration-300 transform group-hover:scale-110 shadow-lg"
                onClick={handlePlayClick}
              >
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </figure>
                    <div className="p-2 sm:p-2">

                        <main className="prose max-w-none text-gray-800 text-xl leading-relaxed">
                            <p>
                                In an inspiring and thought-provoking guest speaker event, renowned actor Andre Royo visited the New York Film Academy (NYFA) at the New York City campus to offer students and faculty insight into the world of acting, storytelling, and the entertainment industry. Best known for his compelling portrayal of Bubbles in the critically acclaimed HBO series <i>The Wire</i>, Royo's career spans a wide array of television and film roles including shows like <i>Empire</i>, <i>The Path</i>, and <i>How to Make It in America</i>. He is currently venturing into directing and producing.
                            </p>
                             <br />
                            <p>
                                During his visit, Royo discussed his journey in Hollywood and the experiences that have shaped his career with moderator Darren Dean, NYFA instructor and award-winning Producer, Writer, and Director. Royo talked candidly about his iconic role as Bubbles in <i>The Wire</i>, a character that has left an indelible mark on television history. Royo spoke passionately about the importance of portraying characters with depth, authenticity, and empathy, especially those who are often marginalized or overlooked in mainstream media.
                            </p>
                             <br />
                            <p>
                                <i>The Wire</i> became a show that helped break through stereotypes and reach a broader audience due to the empathetic and humanizing portrayals of the characters. Royo said that "It became a social message – if you care about your community, you care about politics, you care about the disenfranchised, then you had to watch <i>The Wire</i>… It became a social political show that was a must see for everybody.”
                            </p>
                             <br />
                            <figure className="my-8">
                                <img src={aboutHeading} alt="Andre Royo speaking at NYFA" className="w-full h-auto  shadow-md" />
                                <figcaption className="text-center text-sm text-gray-500 mt-2">Andre Royo Q&A with faculty member Darren Dean</figcaption>
                            </figure>
                             <br />
                            <p>
                                NYFA students were able to ask questions and Royo took the time to offer invaluable advice to the next generation of aspiring filmmakers, actors, and storytellers. Royo encouraged students to take risks and step outside of their comfort zone. “The only way you learn is to not be afraid to fall. Go out there and leap and take chances,” he urged. He advised students that trusting your team, trusting the collaborative process, and being humble will lead you to become a great filmmaker. “You have to allow magic to happen and to trust your fellow artists.”
                            </p>
                             <br />
                            <p>
                                Andre Royo's guest speaker event at the New York Film Academy was a powerful reminder of the importance of authenticity, persistence, and passion in the world of entertainment. For NYFA students, it was an important opportunity to learn from one of the most respected actors of his generation.
                            </p>
                        </main>

                    </div>
                </article>
            </div>
            <footer className="mb-22 ">
                <div className="px-4 sm:px-6 lg:px-34">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-8">
                            <span className="text-xl font-semibold text-gray-600">SHARE</span>
                            <a href="#" className="text-pink-400 hover:text-black transition-colors duration-300"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#" className="text-pink-400 hover:text-black transition-colors duration-300"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#" className="text-pink-400 hover:text-black transition-colors duration-300"><FontAwesomeIcon icon={faSnapchatGhost} /></a>
                            <a href="#" className="text-pink-400 hover:text-black transition-colors duration-300"><FontAwesomeIcon icon={faPinterest} /></a>
                            <a href="#" className="text-pink-400 hover:text-black transition-colors duration-300"><FontAwesomeIcon icon={faLink} /></a>
                        </div>
                        <div>
                            <span className="text-sm font-bold text-gray-600">BY NYFA</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CardsData8Article;