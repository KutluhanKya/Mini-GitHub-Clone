import { React } from "react";
import "./index.scss";
import { AiFillGithub } from "react-icons/ai";
import { BiBell } from "react-icons/bi";

import DropDown from "./dropdown";
import NewDropDown from "./newdropdown";

const Navbar = ({ setIsLoggedIn }) => {
  return (
    <div className="navbar ">
      <div className="ml-5">
        <AiFillGithub size={37} />
      </div>{" "}
      <div className="flex ml-3">
        <input
          className="bg-[#0D1117] text-white rounded-md border-x-gray-400 p-1 w-64 m-2"
          type="text"
          placeholder="Search jump to..."
        />
      </div>
      <div className=" flex flex-row ">
        <div className="ml-4 hover:text-gray-300">
          {" "}
          <a href="/home">Pull requests</a>
        </div>
        <div className="ml-4 hover:text-gray-300">
          <a href="/home">Issues</a>
        </div>
        <div className="ml-4 hover:text-gray-300">
          <a href="/home">Market Place</a>
        </div>
        <div className="ml-4 hover:text-gray-300">
          {" "}
          <a href="/home">Explore</a>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-center">
        {" "}
        <div className="ml-6">
          <a href="/home">
            <BiBell size={18} className="mb-2" />
          </a>
        </div>
        <div className="ml-6 flex items-center justify-center">
          <DropDown />
        </div>
        <div className="ml-6">
          <NewDropDown setIsLoggedIn={setIsLoggedIn} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
