import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "../../utils/Constant";
import { useContext } from "react";
import { Themex } from "../App";

const Project = () => {

  const [projectData, setProjectData] = useState();

  useEffect(() => {
    setProjectData(PROJECT_DATA);
  }, []);

  const {theme,setTheme} = useContext(Themex);
  let themeColor = (theme)?"bg-black  text-slate-200 ":"bg-stone-50 ";
  let themeColor1 = (theme)?"bg-black ":null;
  let textColor1 = (theme)?"text-slate-200 ":null;
  let textColor2 = (theme)?"text-slate-200 ":"text-zinc-700 ";
  let textColor3 = (theme)?"text-slate-400 ":"text-neutral-600 ";

  return (
    <div
      id="project"
      className={"pt-20 flex flex-wrap flex-col pb-32 gap-10 "+themeColor}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-500">PROJECTS</h1>
        <p className="text-2xl font-bold mt-3">
          Each project is a unique piece of development 🧩
        </p>
      </div>

      {projectData?.map((item, index) => (
        <ProjectCard key={index} data={item}></ProjectCard>
      ))}
    </div>
  );
};

export default Project;
