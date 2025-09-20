import React from 'react';
import aboutHeading from '../../assets/Images/AboutHeading.png';

const JIUSpeakerEventArticle = () => {
    return (
        <div className=" font-sans ">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <article className= "">
                    <div className="aspect-video">
                        <iframe 
                            src="https://www.youtube.com/embed/FKz0Fnk_TRM" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen 
                            className="w-full h-full"
                            title="YouTube video player">
                        </iframe>
                    </div>
                    <div className="p-6 sm:p-8">

                        <main className="prose max-w-none text-gray-800 text-lg leading-relaxed">
                            <p>
                                In an inspiring and thought-provoking guest speaker event, renowned actor Andre Royo visited the New York Film Academy (NYFA) at the New York City campus to offer students and faculty insight into the world of acting, storytelling, and the entertainment industry. Best known for his compelling portrayal of Bubbles in the critically acclaimed HBO series <i>The Wire</i>, Royo's career spans a wide array of television and film roles including shows like <i>Empire</i>, <i>The Path</i>, and <i>How to Make It in America</i>. He is currently venturing into directing and producing.
                            </p>

                            <p>
                                During his visit, Royo discussed his journey in Hollywood and the experiences that have shaped his career with moderator Darren Dean, NYFA instructor and award-winning Producer, Writer, and Director. Royo talked candidly about his iconic role as Bubbles in <i>The Wire</i>, a character that has left an indelible mark on television history. Royo spoke passionately about the importance of portraying characters with depth, authenticity, and empathy, especially those who are often marginalized or overlooked in mainstream media.
                            </p>

                            <p>
                                <i>The Wire</i> became a show that helped break through stereotypes and reach a broader audience due to the empathetic and humanizing portrayals of the characters. Royo said that "It became a social message – if you care about your community, you care about politics, you care about the disenfranchised, then you had to watch <i>The Wire</i>… It became a social political show that was a must see for everybody.”
                            </p>

                            <figure className="my-8">
                                <img src={aboutHeading} alt="Andre Royo speaking at NYFA" className="w-full h-auto rounded-lg shadow-md" />
                                <figcaption className="text-center text-sm text-gray-500 mt-2">Andre Royo Q&A with faculty member Darren Dean</figcaption>
                            </figure>

                            <p>
                                NYFA students were able to ask questions and Royo took the time to offer invaluable advice to the next generation of aspiring filmmakers, actors, and storytellers. Royo encouraged students to take risks and step outside of their comfort zone. “The only way you learn is to not be afraid to fall. Go out there and leap and take chances,” he urged. He advised students that trusting your team, trusting the collaborative process, and being humble will lead you to become a great filmmaker. “You have to allow magic to happen and to trust your fellow artists.”
                            </p>

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
                            <a href="#" className="text-pink-400 hover:text-black transition-colors duration-300"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-pink-400 hover:text-black transition-colors duration-300"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-pink-400 hover:text-black transition-colors duration-300"><i className="fab fa-snapchat-ghost"></i></a>
                            <a href="#" className="text-pink-400 hover:text-black transition-colors duration-300"><i className="fab fa-pinterest"></i></a>
                            <a href="#" className="text-pink-400 hover:text-black transition-colors duration-300"><i className="fas fa-link"></i></a>
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

export default JIUSpeakerEventArticle;