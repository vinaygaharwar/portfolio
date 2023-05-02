import React from "react";
import amazonClone from "../assets/portfolio/amazonClone.png";
import spotifyClone from "../assets/portfolio/spotifyClone.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: amazonClone,
      text:"Simplistic Design of Amazon Ecommerce website, Build Includes: Firebase Authentication, Responsive Design, Material UI(icons), React Context API, React Hooks",
      demo:"https://clone-1969a.web.app/",
      code:"https://github.com/vinaygaharwar/amazon-clone"
    },
    {
      id: 2,
      src: spotifyClone,
      text:"User Authentication, Spotify API, Responsive Design, Material UI(Icons), React Context API, React Hooks",
      demo:"https://spotify-clone-888f7.web.app/",
      code:"https://github.com/vinaygaharwar/spotify-clone"
    },
    // {
    //   id: 3,
    //   src: reactParallax,
    // },
    
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white h-full pb-32"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid  gap-8 px-12 sm:px-0 h-auto w-auto">
          {portfolios.map(({ id, src,text,demo,code }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
              <img
                src={src}
                alt=""
                className="w-auto sm:w-2/5  mx-auto rounded-md duration-200 hover:scale-105"
              />
              <div>
              <p className="text-gray-500 text-center  ">
              {text}
          </p>
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank">
                <button className="w-1/2  px-6 py-3  duration-200 hover:scale-105" >
                  Demo
                </button>
                </a>
                <a href={code} target="_blank">
                <button className="px-6 py-3 w-1/2  duration-200 hover:scale-105" >
                  Code
                </button>
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
