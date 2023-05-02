import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import myImage from "../assets/myImage.jpg";
import wave from "../assets/wave.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <div className="text-6xl  font-bold text-white  ">
          <h1 >
            I'm a Front End Developer
          </h1>
            <img
            src={wave}
            alt="my profile"
            className="w-10 h-10"
          />
          </div>
          <p className="text-gray-500 py-4 max-w-md">
            Hi, I,m Vinay Gaharwar. A passionate React Developer.
            I have 2 years of experience building and desgining software.
          </p>
          
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={myImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
