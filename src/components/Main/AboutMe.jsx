import React from "react";
import img from "../../assets/img1.webp"
const AboutMe = () => {
  return (
    <div id="about"className="flex gap-10 max-w-5xl mx-auto py-24 max-sm:flex-wrap">
      <img className="w-2/5 rounded-lg mr-7 max-sm:w-4/5 max-sm:mx-auto" src={img} alt="" />
      <ul className="flex flex-col gap-2 p-3">
        <li className="text-blue-600 font-bold text-lg text-center">ABOUT ME</li>
        <li className="text-2xl font-bold text-zinc-800 text-center">A dedicated Front-end Developer based in Meerut, India📍</li>
        <li className="text-lg text-neutral-500 text-center">
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
