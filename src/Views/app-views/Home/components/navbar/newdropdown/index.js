import React, { useState } from "react";

import { BiUserCircle } from "react-icons/bi";
import "./index.scss";

const NewDropDown = ({ setIsLoggedIn }) => {
  const [drop, setDrop] = useState(false);

  const hideDropDown = (e) => {
    setDrop(true);
  };

  const showDropDown = (e) => {
    setDrop(false);
  };

  return (
    <div className="dropdown">
      <div className="set" onMouseLeave={showDropDown}>
        <button onClick={hideDropDown}>
          <BiUserCircle className="mb-2" size={24} />
        </button>

        {drop ? (
          <div className="list ">
            {" "}
            <ul className="absolute  -left-52 bg-[#161B22]  flex flex-col w-60  border-2 rounded-md border-gray-600 text-start text-sm text-white ">
              <li className=" p-2 border-b border-slate-700">
                Signed as in KutluhanKya
              </li>
              <li className=" p-2 hover:bg-blue-600 w-full">
                <a href="/login ">Your profile</a>
              </li>
              <li className=" p-2 hover:bg-blue-600 w-full">
                <a href="/login ">Your repositories</a>
              </li>
              <li className="p-2  hover:bg-blue-600 w-full">
                <a href="/login ">Your codespaces</a>
              </li>
              <li className="p-2  hover:bg-blue-600 w-full">
                <a href="/login ">Your projects</a>
              </li>
              <li className="p-2  hover:bg-blue-600 w-full">
                <a href="/login ">Your stars</a>
              </li>
              <li className="p-2  border-b border-slate-700 hover:bg-blue-600 w-full">
                <a href="/login ">Your gists</a>
              </li>
              <li className="p-2  hover:bg-blue-600 w-full">
                <a href="/login ">Upgrade</a>
              </li>
              <li className="p-2  hover:bg-blue-600 w-full">
                <a href="/login ">Feature preview</a>
              </li>
              <li className="p-2  hover:bg-blue-600 w-full">
                <a href="/login ">Help</a>
              </li>
              <li className="p-2 border-b border-slate-700 hover:bg-blue-600 w-full">
                <a href="/login ">Settings</a>
              </li>
              <li className="p-2  hover:bg-blue-600 w-full">
                <button
                  onClick={() => {
                    localStorage.removeItem("auth_token");
                    setIsLoggedIn(false);
                  }}
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NewDropDown;
