import { React } from "react";
import "./index.scss";
import { BiBook } from "react-icons/bi";
import axios from "axios";

const Sidebar = ({ search, setSearch, setSecond, setUser }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const userHandle = (e) => {
    axios
      .get(`https://api.github.com/users/${search}`)
      .then((response) => {
        setUser(response.data);
        repoHandle();
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const repoHandle = (e) => {
    axios
      .get(`https://api.github.com/users/${search}/repos`)
      .then((response) => {
        setSecond(response.data);

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sidebar">
      <div className="mt-12 flex flex-col ">
        <div className="justify-between flex">
          <span className="ml-6 ">Recent Repositories</span>

          <button
            onClick={(e) => userHandle(e)}
            className="bg-green-700 text-white w-16 rounded-md mr-6 flex flex-row hover:bg-green-500"
          >
            <BiBook size={25} className="text-white flex m-1 " />{" "}
            <span className="flex m-1">Find</span>
          </button>
        </div>

        <input
          onChange={(e) => handleSearch(e)}
          value={search}
          className="bg-black text-white mt-3 w-72 ml-6 mr-6 p-1 rounded-md border border-gray-500 "
          type="text"
          placeholder="Find a repistory..."
        />
      </div>
      <div className=" border-gray-700 border-t  mt-11 ml-6 mr-6 ">
        <div className="mt-6 text-start">
          {" "}
          <h2 className=" ml-2">Recent Activity</h2>
          <p className="text-gray-400 ml-2 text-sm mt-2">
            When you take actions across GitHub, we’ll provide links to that
            activity here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
