import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Project from "./Project";
import ContactMe from "./ContactMe";
import { useContext } from "react";
import { Themex } from "../App";

const Main = () => {
  
  const {theme,setTheme} = useContext(Themex);
  let themeColor1 = (theme)?"bg-black ":null;


  return (
    <div className={themeColor1}>
      <HeroSection />
      <AboutMe />
      <Project />
      <ContactMe />
    </div>
  );
};

export default Main;
