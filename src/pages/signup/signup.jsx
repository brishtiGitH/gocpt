import React from "react";
import "./signup.css";
import Ellipses from "../../components/ellipses";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="signup-page-container relative z-10 min-h-screen w-full flex flex-col gap-8 lg:flex-row ">
      <Ellipses />

      <div className="isSignUp relative z-10 order-2 lg:order-none w-full h-full lg:w-1/4 lg:h-screen flex gap-10 flex-col rounded-3xl p-3 justify-center items-center bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg">
        <h3 className="text-5xl text-center leading-tight">
          Already have an account?
        </h3>
        <button onClick={() => navigate("/login")} className="btn text-2xl ">
          Log In
        </button>
      </div>
      <div className="signup w-full lg:w-3/4 h-full flex flex-col items-center justify-between">
        <h1 className="text-6xl  font-semibold">
          <span className="logo1">Go</span>
          <span className="logo2">CPT</span>
        </h1>
        <div className="signup-container bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg flex flex-col gap-10 justify-center items-center px-10 py-20 h-auto w-full  lg:h-[900px] lg:p-10 lg:w-[780px] rounded-[50px] border border-white border-opacity-60">
          <h2 className="uppercase text-6xl text-center">Sign Up</h2>
          <div className="signup-fields flex flex-col gap-8 w-full">
            <div>
              <label className="block text-xl ml-3" htmlFor="name">
                Name
              </label>
              <input
                className="border outline-none border-white bg-transparent rounded-2xl w-full p-4 text-2xl placeholder:text-2xl "
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-xl ml-3" htmlFor="signup-email">
                E-Mail Address
              </label>
              <input
                className="border border-white outline-none bg-transparent rounded-2xl w-full p-4 text-2xl placeholder:text-2xl "
                type="email"
                id="signup-email"
                placeholder="E-Mail Address"
              />
            </div>
            <div>
              <label className="block text-xl ml-3" htmlFor="signup-password">
                Password
              </label>
              <input
                className="border border-white bg-transparent rounded-2xl w-full p-4 text-2xl placeholder:text-2xl "
                type="password"
                id="signup-password"
                placeholder="Password"
              />
            </div>
            <div>
              <label className="block text-xl ml-3" htmlFor="cpassword">
                Confirm Password
              </label>
              <input
                className="border border-white bg-transparent rounded-2xl w-full p-4 text-2xl placeholder:text-2xl "
                type="password"
                id="cpassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <button className="btn text-2xl bg-opacity-10">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
