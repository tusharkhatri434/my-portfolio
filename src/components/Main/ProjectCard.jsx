import React, { useState, useContext } from "react";
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";
import { Themex } from "../App";

const ProjectCard = ({ data }) => {
  const { theme } = useContext(Themex);
  const themeColor = theme ? "bg-black text-slate-200" : "bg-white";
  const flex1 = data.position === "right" ? "flex-wrap" : "flex-wrap-reverse";

  return (
    <div className="relative max-w-[75vw] mx-auto my-8 rounded-2xl">
      {/* Glowing animated border */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
                      animate-borderRun bg-[length:200%_200%] blur-md z-0"></div>

      {/* Main card content */}
      <div
        className={`relative z-10 flex ${flex1} py-5 rounded-2xl shadow-xl justify-evenly 
                    max-sm:max-w-[90vw] ${themeColor} border border-gray-500`}
      >
        {/* Image on Right */}
        {data.position === "right" && (
          <a href={data.live} className="max-w-[55%] max-md:max-w-[95%]">
            <img
              className="shadow-md object-cover rounded-xl"
              src={data.link}
              alt="project visual"
            />
          </a>
        )}

        {/* Text Content */}
        <ul className="flex flex-col flex-wrap gap-2 items-center mt-2 w-96">
          <li className="text-lg font-bold text-center px-2">
            {data.title}
            <span className="mx-1">{data.date}</span>
          </li>
          <li className="text-lg font-medium mt-2 text-zinc-500 text-center px-12">
            {data.desc}
          </li>
          <li className="mt-3 flex flex-wrap justify-center">
            {data.tags.map((item, i) => (
              <span
                key={i}
                className="px-3 py-2 shadow-lg text-xl font-semibold m-2 bg-gray-600 text-white rounded-md max-sm:text-lg"
              >
                {item}
              </span>
            ))}
          </li>
          <li className="mt-10 text-xl font-bold flex gap-5 max-sm:text-lg max-sm:font-semibold">
            <a
              href={data.github}
              target="_blank"
              className="flex hover:text-blue-500"
              rel="noopener noreferrer"
            >
              <span className="mr-1">Code</span>
              <FiGithub size="1.5rem" />
            </a>
            <a
              href={data.live}
              target="_blank"
              className="flex hover:text-blue-500"
              rel="noopener noreferrer"
            >
              <span>Live Demo</span>
              <TbExternalLink size="1.5rem" />
            </a>
          </li>
        </ul>

        {/* Image on Left */}
        {data.position === "left" && (
          <a href={data.live} className="max-w-[55%] max-md:max-w-[95%]">
            <img
              className="shadow-md object-cover rounded-xl"
              src={data.link}
              alt="project visual"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
