import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        Hello! My name is Vinay Gaharwar and I enjoy creating things that live on the internet.
        My interest in web development started back in college when I decided to make a webiste 
        as a part of project in my final semester using html, css and javaScript.
        </p>

        <br />

        <p className="text-xl">
        Fast-forward to today, I have been working with Accenture for about 2 years now as a
        React Developer.
        </p>
      </div>
    </div>
  );
};

export default About;
