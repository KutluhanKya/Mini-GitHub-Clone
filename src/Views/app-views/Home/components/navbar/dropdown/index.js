import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import "./index.scss";

const DropDown = () => {
  const [drop, setDrop] = useState(false);

  return (
    <div>
      <div className="dropdown">
        <div className="set" onMouseLeave={() => setDrop(false)}>
          <button onClick={() => setDrop(true)}>
            <HiPlus className="mb-2" size={18} />
          </button>
          {console.log("drop", drop)}
          {drop ? (
            <div className="relative  ">
              {" "}
              <ul className=" absolute -left-56 bg-[#161B22] p-2 flex flex-col w-60  border-2 rounded-md border-gray-600 text-start text-sm text-white ">
                <li className="first">
                  <a href="/login ">New repository</a>
                </li>
                <li className="first">
                  <a href="/login ">Import repository</a>
                </li>
                <li className="first">
                  <a href="/login ">New gist</a>
                </li>
                <li className="first">
                  <a href="/login ">New organization</a>
                </li>
                <li className="first">
                  <a href="/login ">New project</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
