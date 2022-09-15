import { React, useState } from "react";
import Navbar from "./components/navbar";
import Contain from "./components/contain";
import Adds from "./components/adds/index";
import Sidebar from "./components/sidebar";

const Home = ({ setIsLoggedIn }) => {
  const [search, setSearch] = useState("");
  const [second, setSecond] = useState([]);
  const [user, setUser] = useState([]);

  return (
    <div className="home">
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <div className=" flex">
        <div className="sidebar  " style={{ flex: 1 }}>
          <Sidebar
            search={search}
            setSearch={setSearch}
            second={second}
            setSecond={setSecond}
            user={user}
            setUser={setUser}
          />
        </div>
        <div className="bg-[#010409]" style={{ flex: 3 }}>
          <Contain
            search={search}
            setSearch={setSearch}
            second={second}
            setSecond={setSecond}
            user={user}
            setUser={setUser}
          />
        </div>
        <div className="adds  " style={{ flex: 1 }}>
          <Adds />
        </div>
      </div>
    </div>
  );
};

export default Home;
