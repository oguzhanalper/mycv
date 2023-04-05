import React from "react";
import { HashLink } from "react-router-hash-link";

function Header(props) {
  const { handleDarkMode } = props;
  return (
    <div className="flex justify-around mt-7 gap-y-1 font-semibold p-5">
      <div className="rotate-45 hover:animate-bounce hover:bg-indigo-800 hover:text-white hover:rounded-full text-default text-xl">
        OA
      </div>
      <div className="flex ">
        <img
          className="w-1 flex cursor-pointer hover:animate-pulse "
          onClick={handleDarkMode}
          src="https://cdn2.iconfinder.com/data/icons/images-and-photography-2/24/light-mode-dark-light-512.png"
        />
        &nbsp;<span className="italic">Dark</span>&nbsp;
        <span className="flex text-indigo-500 italic"> Mode</span>
      </div>
      <HashLink smooth to="/#skills">
        <a>Skills</a>
      </HashLink>
      <HashLink smooth to="/#projects">
        <a>Projects</a>
      </HashLink>
      <div>
        <HashLink smooth to="/#hire-me">
          <button className="border-2 rounded-md  border-indigo-800 px-4 cursor-pointer hover:bg-indigo-800 hover:text-white hover:border-indigo-800  ">
            Hire Me
          </button>
        </HashLink>
      </div>
    </div>
  );
}

export default Header;
