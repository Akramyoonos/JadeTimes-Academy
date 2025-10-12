import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/Images/AboutHeading.Webp";
import image2 from "../../assets/Images/AboutHeading.Webp";  
import image3 from "../../assets/Images/AboutHeading.Webp"; 
import image4 from "../../assets/Images/AboutHeading.Webp"; 

const articles = [
  {
    img: image1,
    source: "Unboxing Careers",
    title: "ANIMATION & VISUAL EFFECTS. IS IT THE RIGHT CAREER FOR YOU?",
  },

  {
    img: image2,
    source: "AP News",
    title:
      "HISTORIC WIN FOR NYFA ALUM AT TRIBECA FILM FESTIVAL: MOHAMED DIAB AND SARAH GOHER’S HAPPY BIRTHDAY SWEEPS THREE AWARDS",
  },

  {
    img: image3,
    source: "Indie Wire",
    title:
      "THE CINEMATOGRAPHY OF ‘THE GILDED AGE’ BRINGS THE OLD WORLD CRASHING INTO THE NEW – MANUEL BILLETER",
  },

  {
    img: image4,
    source: "21 Ninety",
    title:
      "FROM ‘AWKWARD BLACK GIRL’ TO MOGUL: INSIDE ISSA RAE’S $20M NET WORTH AND BUSINESS EMPIRE",
  },
];

const NewsSection = () => {
  return (
    <div className="bg-white py-12">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          NYFA IN THE NEWS
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-center pr-12 mb-10">
          <div className="flex items-center space-x-2">
            <div className="w-1 h-10 bg-sky-500"></div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900">
              NYFA IN THE PRESS – ARTICLES AND NEWS CLIPS
            </h3>
          </div>
          <Link to="/All-JIU-News/">
            <button className="mt-4 sm:mt-0 bg-sky-500 hover:bg-sky-600 text-black px-5 py-2 ">
              VIEW ALL ARTICLES
            </button>
          </Link>
        </div>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {articles.map((article, idx) => (
          <div key={idx} className="text-center">
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-48 object-cover "
            />
            <p className="mt-3 text-sm text-gray-500">{article.source}</p>
            <h4 className="text-md font-semibold text-gray-900 mt-1 uppercase">
              {article.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
