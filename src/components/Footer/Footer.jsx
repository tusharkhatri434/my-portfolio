import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="w-full bg-zinc-800 h-40">
      <div className="flex flex-wrap h-40 max-w-5xl mx-auto justify-between items-center max-sm:justify-center">
        <h1 className="text-white text-xl font-bold max-sm:text-center">
          Copyright © 2023. All rights are reserved
        </h1>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/tushar-khatri-2b4454244/"
            target="blank"
          >
            <AiOutlineLinkedin style={{ color: "white" }} size="1.8rem" />
          </a>
          <a href="https://github.com/tusharkhatri434" target="blank">
            <FiGithub style={{ color: "white" }} size="1.8rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
