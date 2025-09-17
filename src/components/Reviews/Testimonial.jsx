// src/components/Testimonial.jsx
import React, { useState } from "react";
import testimonialImage1 from "../../assets/Images/Testimonial01.png";
import testimonialImage2 from "../../assets/Images/Testimonial02.png";
import testimonialImage3 from "../../assets/Images/Testimonial03.png";

const Testimonial = () => {
  const testimonials = [
    {
      quote: `New York Film Academy really gave
            me the chance to work in front of 
            the camera – a lot! Having that
            experience makes you comfortable
            to be in front of the camera. Once
            you get out of here [NYFA] you
            know everything.`,
      author: "Manuel Garcia-Rulfo",
      title: "Filmmaking",
      image: testimonialImage1,
    },
    {
      quote: `This is the second testimonial. It talks about the great experience at the academy.`,
      author: "Jane Doe",
      title: "Acting",
      image: testimonialImage2,
    },
    {
      quote: `The third testimonial highlights the amazing faculty and resources available.`,
      author: "John Smith",
      title: "Screenwriting",
      image: testimonialImage3,
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div
      className="relative flex items-center justify-center md:justify-end min-h-screen bg-cover bg-center bg-no-repeat text-white px-6 md:px-16"
      style={{ backgroundImage: `url(${currentTestimonial.image})` }}
    >
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 md:w-1/2 mt-16 text-center md:text-left">
        <div className="relative">
          {/* Opening Quote */}
          <span className="text-9xl text-white absolute -top-20 left-0">“</span>

                    <p className="text-lg md:text-xl leading-relaxed pl-6 pr-6 md:pl-0 md:pr-0" dangerouslySetInnerHTML={{ __html: currentTestimonial.quote }} />

          {/* Closing Quote */}
          <span className="text-9xl text-white block text-right mt-4">”</span>
        </div>

        {/* Author Info */}
        <div className="-mt-9">
          <p className="font-bold uppercase">{currentTestimonial.author}</p>
          <p className="text-gray-300">{currentTestimonial.title}</p>
        </div>

        {/* Dots (Slider indicators) */}
        <div className="flex justify-center md:justify-start space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${index === currentTestimonialIndex ? 'bg-white' : 'bg-gray-500'}`}
              onClick={() => setCurrentTestimonialIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
