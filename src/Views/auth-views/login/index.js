import React from "react";
import "../login/index.scss";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })

      .then((result) => {
        console.log(result.data);
        console.log(email, password);

        localStorage.setItem("auth_token", result.data.token);
        setIsLoggedIn(true);
      })

      .catch((error) => {
        console.log(error);

        alert("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login ">
      <div className="gitLogo ">
        {" "}
        <a href="/login">
          {" "}
          <AiFillGithub size={54} />
        </a>
      </div>
      <h1>Sign in to GitHub</h1>

      <div className="card">
        {" "}
        <span className="text-sm p-2 ">Username or email address</span>
        <input
          value={email}
          onChange={handleEmail}
          type="text"
          className="email"
        />
        <div className="forgot-password">
          {" "}
          <span className="text-sm mx-2">Password</span>
          <a href="/login " className="forgot  ">
            Forgot password?
          </a>
        </div>
        <input
          value={password}
          onChange={handlePassword}
          type="password"
          className="password"
        />
        <button onClick={handleApi} className="button ">
          {loading ? <span>Signing in..</span> : <span>Sign in</span>}
        </button>
      </div>

      <div className=" footer">
        New to GitHub?{" "}
        <a href="/login" className="text-blue-400 hover:underline">
          Create an account
        </a>
        .
      </div>
      <div className="footer-links">
        <a href="/login">Terms </a>
        <a href="/login">Privacy</a>
        <a href="/login"> Security </a>
        <a
          href="/login"
          className="text-gray-400 hover:underline hover:text-blue-400"
        >
          {" "}
          Contact Github
        </a>
      </div>
    </div>
  );
};

export default Login;
