import React, { useContext, useEffect, useState } from "react";
import profile from "../../assets/profile.jpeg";
import { LiaLinkedin } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import { useContext } from "react";
import { Themex } from "../App";

const HeroSection = () => {
  const [one, setOne] = useState();
  const [two, setTwo] = useState();
  const [three, setThree] = useState();
  const [four, setFour] = useState();

  const {theme,setTheme} = useContext(Themex);
  let themeColor = (theme)?"bg-black  text-slate-200":"bg-stone-50";
  let textColor1 = (theme)?"text-slate-200":null;
  let textColor2 = (theme)?"text-slate-200":"text-zinc-700";
  let textColor3 = (theme)?"text-slate-400":"text-neutral-600";

  useEffect(() => {
    setInterval(() => {}, 200);
  });

  return (
    <div className={"pt-16 "+themeColor}>
      <div className={"max-w-5xl mx-auto px-8 "+themeColor}>
        <div className="flex max-[500px]:flex-col-reverse items-center">
          <div className="max-w-lg">
            <h1 className={"text-5xl px-3 font-bold max-sm:text-4xl max-sm:text-center max-sm:pt-2 "+textColor2}>
              Full-stack React Developer👋
            </h1>
            <p className={"text-lg mt-4 px-3 max-sm:px-0 max-sm:text-center "+textColor3}>
              Hi, I'm Tushar Khatri. A passionate Full-stack React Developer,
              India. 📍
            </p>
            <span className="flex flex-row px-3 py-2 gap-2 max-sm:justify-center">
              <a
                className="cursor-pointer hover:text-blue-500"
                href="https://www.linkedin.com/in/tushar-khatri-2b4454244/"
                target="blank"
              >
                <LiaLinkedin size="2.2rem" />
              </a>
              <a
                className="hover:text-blue-600"
                href="https://github.com/tusharkhatri434"
                target="blank"
              >
                <FiGithub size="2rem" />
              </a>
              <a
                className="hover:text-blue-600 flex items-center gap-2 bg-black text-white rounded-lg px-2 hover:text-lime-300 border"
                href="https://drive.google.com/file/d/1tLBxwU-tewlnh41hscWNi-KO-L7w8shZ/view"
                target="blank"
              >
                <p className="text-xl font-bold">Resume</p>
                <FaLink size="1rem" />
              </a>
            </span>
          </div>
          <div className="max-w-[20rem]">
            <img
              className="rounded-full border-4 border-cyan-800 max-sm:w-64 max-sm:mx-auto"
              src={profile}
              alt="profile-image"
            ></img>
          </div>
        </div>
        {/* tech stack ------ */}
        <div className={"flex gap-7 flex-wrap mt-14 items-center py-5 max-sm:justify-center max-sm:mt-5 "+textColor1}>
          <div className="text-2xl font-bold max-sm:underline">
            Tech Stack{" "}
            <span className="pl-5 text-neutral-600 max-sm:hidden">|</span>
          </div>
          <div className="flex gap-5 w-max flex-wrap max-sm:justify-center">
            <img
              src="https://skillicons.dev/icons?i=html,css"
              alt="HTML & CSS"
            />
            <img
              src="https://skillicons.dev/icons?i=js,typescript,cpp,java"
              alt="Js,Typescript"
            />
            <img
              src="https://skillicons.dev/icons?i=react,redux,nodejs"
              alt="react redux nodejs"
            />
            <img
              src="https://skillicons.dev/icons?i=tailwind,bootstrap"
              alt=""
              tailwind
              sass
            />
            <img
              src="https://skillicons.dev/icons?i=git,github"
              alt="git github"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
