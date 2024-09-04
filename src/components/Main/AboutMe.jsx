import React from "react";
import img from "../../assets/img1.webp"
import { useContext } from "react";
import { Themex } from "../App";



const AboutMe = () => {
  

  const {theme,setTheme} = useContext(Themex);
  let themeColor = (theme)?"bg-black  text-slate-200 ":"bg-stone-50 ";
  let themeColor1 = (theme)?"bg-black ":null;
  let textColor1 = (theme)?"text-slate-200 ":null;
  let textColor2 = (theme)?"text-slate-200 ":"text-zinc-800 ";
  let textColor3 = (theme)?"text-slate-400 ":"text-neutral-600 ";

  return (
    <div id="about"className={"flex gap-10 max-w-5xl mx-auto py-24 max-sm:flex-wrap "+themeColor1}>
      <img className="w-2/5 rounded-lg mr-7 max-sm:w-4/5 max-sm:mx-auto" src={img} alt="" />
      <ul className="flex flex-col gap-2 p-3">
        <li className="text-blue-600 font-bold text-lg text-center">ABOUT ME</li>
        <li className={"text-2xl font-bold text-center "+textColor2}>A dedicated Front-end Developer based in Meerut, India📍</li>
        <li className={"text-lg text-center "+textColor3}>
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
