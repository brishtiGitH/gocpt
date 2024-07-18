import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-page-container min-h-screen w-full flex flex-col gap-8 lg:flex-row ">
      <div className="login w-full lg:w-3/4 h-full flex flex-col items-center justify-around">
        <h1 className="text-6xl drop-shadow-2xl font-bold">
          <span className="logo1">Go</span>
          <span className="logo2">CPT</span>
        </h1>
        <div className="login-container bg-black bg-opacity-5 backdrop-filter backdrop-blur-lg  border border-white border-opacity-60 flex flex-col gap-10 justify-center items-center px-10 py-20 h-auto w-full  lg:h-[900px] lg:p-10 lg:w-[780px] rounded-[50px]">
          <h2 className="uppercase text-6xl text-center">Log In</h2>
          <div className="login-fields flex flex-col gap-8 w-full">
            <div>
              <label className="block text-xl ml-3" htmlFor="login-email">
                E-Mail Address
              </label>
              <input
                className="border border-white outline-none bg-transparent rounded-2xl w-full p-4 text-2xl placeholder:text-2xl "
                type="email"
                id="login-email"
                placeholder="E-Mail Address"
              />
            </div>
            <div>
              <label className="block text-xl ml-3" htmlFor="login-password">
                Password
              </label>
              <input
                className="border border-white bg-transparent outline-none rounded-2xl w-full p-4 text-2xl placeholder:text-2xl "
                type="password"
                id="login-password"
                placeholder="Password"
              />
            </div>
            <p className="text-xl">Forgot Password?</p>
          </div>

          <button className="btn text-2xl">Log In</button>
        </div>
      </div>
      <div className="isLogIn w-full h-full lg:w-1/4 lg:h-screen flex gap-10 flex-col rounded-3xl py-10 justify-center items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <h3 className="text-5xl text-center leading-tight">
          Don't have an account?
        </h3>
        <button onClick={() => navigate("/signup")} className="btn text-2xl ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
