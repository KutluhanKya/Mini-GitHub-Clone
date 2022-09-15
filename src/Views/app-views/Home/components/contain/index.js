import React from "react";
import "./index.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Contain = ({ second, user }) => {
  const getIcon = (text) => {
    switch (text) {
      case "JavaScript":
        return <div className="lang">JavaScript</div>;
      case "C#":
        return (
          <div>
            <div className="lang">C#</div>
          </div>
        );

      case "C++":
        return (
          <div>
            <div className="lang">C++</div>
          </div>
        );

      case "Java":
        return (
          <div>
            <div className="lang">Java</div>
          </div>
        );

      case "Php":
        return (
          <div>
            <div className="lang">Php</div>
          </div>
        );

      case "Python":
        return (
          <div>
            <div className="lang">Python</div>
          </div>
        );

      default:
        return <div></div>;
    }
  };

  return (
    <div className="avatar-card">
      {second.length > 0 ? (
        <div className="contain">
          <div className="    ">
            <div key={user.id} className=" upside">
              <div className="  flex flex-row justify-center">
                <div>
                  {" "}
                  <img
                    className="rounded-full w-56  "
                    src={user.avatar_url}
                    alt=""
                  />
                </div>{" "}
                <div className=" ml-3 mt-10  ">
                  {" "}
                  <div className="flex flex-row ml-2 ">
                    <AiOutlineGithub size={30} />
                    <span className="ml-2"> {user.login}</span>
                  </div>
                  <div className="p-1 m-1 flex flex-row ">
                    <BsFillFilePersonFill size={28} />
                    <span className="ml-2">{user.name}</span>
                  </div>
                  <div className="p-1 m-1 flex flex-row ">
                    <FaBuilding size={25} />
                    <span className="ml-3">{user.company}</span>
                  </div>
                  <div className="p-1 m-1 flex flex-row ">
                    <GoLocation size={27} />{" "}
                    <span className="ml-2">{user.location}</span>
                  </div>
                </div>
              </div>
              <div className="p-1 m-1  ">
                <span className="italic text-gray-400">{user.bio}</span>
              </div>
            </div>
          </div>
          <div className=" downside">
            {" "}
            <div className="grid grid-cols-2 gap-4 m-7  ">
              {" "}
              {second.map((x) => {
                console.log("x=>0", x);
                return (
                  <div className=" border-2 rounded-md border-neutral-600 p-5">
                    <h1 className="mb-3 text-2xl text-blue-500">{x.name}</h1>
                    <a
                      className="hover:underline underline-offset-4"
                      target={"_blank"}
                      href={x.html_url}
                    >
                      {x.html_url}
                    </a>
                    <div className="float float-right  ">
                      {getIcon(x.language)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-lg  text-white  m-48 border-t border-y  p-8 border-white">
          {" "}
          <p className="">
            {" "}
            There is no solutions in here... Change your want to find nickname
            or there are no repositories on user...{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Contain;
