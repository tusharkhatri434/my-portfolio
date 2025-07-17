import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Themex } from "../App.js";
import { useContext } from "react";

const Navbar = () => {

  const [toggleNav, setToogleNav] = useState(false);
  const {theme,setTheme} = useContext(Themex);
  let themeColor = (theme)?"bg-zinc-900  text-slate-200":"bg-white";

  return (
    <div className={"py-5 z-50 text-lg font-medium flex items-center justify-between shadow-lg sticky top-0 "+themeColor}>
      <a className="hover:text-blue-600" href="/">
        <h1 className="ml-10 text-2xl font-bold">Tushar khatri</h1>
      </a>

      {toggleNav ? (
        <div className="pr-10 z-50 min-[640px]:hidden">
          <RxCross2
            onClick={() => {
              setToogleNav(!toggleNav);
            }}
            size="2rem"
          ></RxCross2>
        </div>
      ) : (
        <div className="pr-10 z-50 flex items-center min-[640px]:hidden">
          <span className="mr-5 cursor-pointer" onClick={()=>setTheme(!theme)}>
          {theme?"🌞":"🌙"}
          </span>
          <IoMenu
            onClick={() => {
              setToogleNav(!toggleNav);
            }}
            size="2rem"
          ></IoMenu>
        </div>
      )}


      <ul className="flex font-semibold gap-5 mr-12 max-sm:hidden">
        <a className="hover:text-blue-600" href="/">
          Home
        </a>
        <a className="hover:text-blue-600" href="#about">
          About
        </a>
        <a className="hover:text-blue-600" href="#project">
          Project
        </a>
        <a className="hover:text-blue-600" href="#contact">
          Contact
        </a>
        <a className="hover:text-blue-600 cursor-pointer" onClick={()=>setTheme(!theme)}>
        {theme?"🌞":"🌙"}
        </a>
      </ul>

      {toggleNav ? (
        <div className={"absolute top-0 w-[100vw] h-[100vh] "+themeColor}>
          <div className="w-fit mt-40 mx-auto text-3xl flex flex-col gap-8 transition-all ease-linear">
            <a
              onClick={() => setToogleNav(false)}
              className="hover:text-blue-600"
              href="/"
            >
              Home
            </a>
            <a
              onClick={() => setToogleNav(false)}
              className="hover:text-blue-600"
              href="#about"
            >
              About
            </a>
            <a
              onClick={() => setToogleNav(false)}
              className="hover:text-blue-600"
              href="#project"
            >
              Project
            </a>
            <a
              onClick={() => setToogleNav(false)}
              className="hover:text-blue-600"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
